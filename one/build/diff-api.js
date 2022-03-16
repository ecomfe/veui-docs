import { readFileSync, readdirSync, writeFileSync, statSync, existsSync } from 'fs'
import { join, isAbsolute, dirname } from 'path'
import cheerio from 'cheerio'
import { render } from './page'
import { camelCase, union } from 'lodash'
import {
  ScriptSnapshot,
  ModuleKind,
  getDefaultLibFilePath,
  resolveModuleName,
  sys,
  createDocumentRegistry,
  createLanguageService,
  SyntaxKind,
  forEachChild
} from 'typescript'

const docPath = join(__dirname, '../docs/components')
const typesDir = join(resolveLib('veui'), 'types')
const Ls = createLs()

function getApiFromDocs () {
  return readdirSync(docPath)
    .reduce((acc, name) => {
      const match = name.match(/(.+)\.md$/)
      if (match) {
        const absPath = join(docPath, name)
        acc[match[1]] = getComponentApiFromDoc(absPath)
      }
      return acc
    }, {})
}

function getComponentApiFromDoc (docFile) {
  const raw = readFileSync(docFile, 'utf8')
  const { contents } = render(raw, docFile)
  const $ = cheerio.load(contents)
  const props = $('h3:contains(属性)+table > tbody > tr')
    .map((i, el) => {
      const tds = $(el).children()
      return {
        name: camelCase(tds.eq(0).text().trim()),
        type: tds.eq(1).text().trim()
        // defaultValue: tds.eq(2).text().trim()
      }
    })
    .toArray()
    .reduce((acc, { name, type }) => {
      acc[name] = type
      return acc
    }, {})

  const slots = $('h3:contains(插槽)+table > tbody > tr')
    .map((i, el) => {
      const tds = $(el).children()
      return tds.eq(0).text().trim()
    })
    .toArray()
    .reduce((acc, name) => {
      acc[name] = null
      return acc
    }, {})

  const emits = $('h3:contains(事件)+table > tbody > tr')
    .map((i, el) => {
      const tds = $(el).children()
      return tds.eq(0).text().trim()
    })
    .toArray()
    .reduce((acc, name) => {
      acc[name] = null
      return acc
    }, {})

  return {
    props,
    slots,
    emits
  }
}

function getApiFromVeuiTypes () {
  const program = Ls.getProgram()
  const inputs = readdirpSync(join(typesDir, 'components')).map(i => join(typesDir, 'components', i))
  const re = /([^/]+)\.d\.ts$/
  const result = {}
  inputs.forEach(input => {
    const name = re.exec(input)[1]
    const save = api => {
      result[name] = api
    }
    forEachChild(program.getSourceFile(input), (...args) => visit(save, ...args))
  })
  return result
}

function visit (saveApi, node) {
  if (node.kind === SyntaxKind.ExportAssignment) {
    const ck = Ls.getProgram().getTypeChecker()
    const sym = ck.getSymbolAtLocation(node.expression) // node.expression: id to Autocomplete
    const type = ck.getTypeAtLocation(sym.declarations[0].name)
    const rt = type.getConstructSignatures()[0].getReturnType()
    const all = rt.getProperties()
    const props = all.find(sy => sy.escapedName === '$props')
    let result = {}

    result.props = ck
      .getTypeOfSymbolAtLocation(props, node)
      .getProperties()
      .reduce((acc, sy) => {
        acc[sy.escapedName] = ck.typeToString(ck.getTypeOfSymbolAtLocation(sy, node))
        return acc
      }, {})

    const emits = all.find(sy => sy.escapedName === '$emit')
    const emitsType = ck.getTypeOfSymbolAtLocation(emits, node)
    const emitsCollection = emitsType.isIntersection()
      ? emitsType.types
      : [emitsType]

    result.emits = emitsCollection
      .map(ty => {
        return ty.getCallSignatures()[0]
          .getParameters()
          .reduce((acc, argSy) => {
            const argType = ck.getTypeOfSymbolAtLocation(argSy, node)

            const tstr = ck.typeToString(argType)
            const matched = /^"([^"]+)"$/.exec(tstr)
            acc[argSy.escapedName] = matched ? matched[1] : tstr
            return acc
          }, {})
      })
      .reduce((acc, { event, args }) => {
        acc[event] = args
        return acc
      }, {})

    const slots = all.find(sy => sy.escapedName === '$scopedSlots')
    const slotsType = ck
      .getTypeOfSymbolAtLocation(slots, node)
      .getProperties()
      .reduce((acc, symbol) => {
        acc[symbol.escapedName] = getScope(symbol, node, ck)
        return acc
      }, {})

    result.slots = slotsType

    saveApi(result)
  }
}

function getScope (symbol, node, checker) {
  const scopeSy = checker.getTypeOfSymbolAtLocation(symbol, node)
    .getCallSignatures()[0].getParameters()[0]
  if (!scopeSy) {
    return {}
  }
  const type = checker.getTypeOfSymbolAtLocation(scopeSy, node)
    .getProperties().reduce((acc, argSy) => {
      const argType = checker.getTypeOfSymbolAtLocation(argSy, node)

      acc[argSy.escapedName] = checker.typeToString(argType)
      return acc
    }, {})
  return type
}

const typeDeps = [
  '@vue/runtime-dom',
  'vue-router',
  '@vue/reactivity',
  '@vue/shared',
  '@vue/runtime-core'
]

function createLs () {
  const options = {
    module: ModuleKind.ESNext
  }
  const host = {
    getScriptSnapshot: fileName => {
      fileName = isAbsolute(fileName) ? fileName : join(typesDir, fileName)
      if (!existsSync(fileName)) {
        return undefined
      }
      const content = readFileSync(fileName).toString()
      return ScriptSnapshot.fromString(content)
    },
    getScriptFileNames: () => readdirpSync(typesDir),
    getScriptVersion: () => '1',
    getCurrentDirectory: () => typesDir,
    getCompilationSettings: () => options,
    getDefaultLibFileName: options => getDefaultLibFilePath(options),
    resolveModuleNames: (moduleNames, containingFile) => {
      return moduleNames.map(moduleName => {
        let { resolvedModule } = resolveModuleName(moduleName, containingFile, options, {
          fileExists: sys.fileExists,
          readFile: sys.readFile
        })

        if (resolvedModule) {
          return resolvedModule
        }

        if (typeDeps.indexOf(moduleName) >= 0) {
          const p = resolveLib(moduleName, containingFile, true)
          if (p) {
            return { resolvedFileName: p }
          }
        }

        if (moduleName.startsWith('.')) {
          const resolved = resolveRel(moduleName, containingFile)
          if (resolved) {
            return { resolvedFileName: resolved }
          }
        }
      })
    }
  }
  return createLanguageService(host, createDocumentRegistry())
}

function readdirpSync (toRead, prefix = '') {
  return readdirSync(toRead)
    .reduce((acc, file) => {
      const realFile = join(toRead, file)
      if (statSync(realFile).isDirectory()) {
        acc = acc.concat(readdirpSync(realFile, `${file}/`))
      } else {
        acc.push(`${prefix}${file}`)
      }
      return acc
    }, [])
}

function resolveLib (libName, containingFile, types) {
  const options = containingFile
    ? { paths: [containingFile] }
    : undefined
  let libDir = dirname(require.resolve(libName, options))
  let pkgPath = join(libDir, 'package.json')
  while (!existsSync(pkgPath)) {
    libDir = dirname(libDir)
    pkgPath = join(libDir, 'package.json')
  }

  if (types) {
    const pkg = require(pkgPath)
    if (pkg.types || pkg.typings) {
      return join(dirname(pkgPath), pkg.types || pkg.typings)
    }
  }
  return libDir
}

function resolveRel (moduleName, containingFile) {
  let target = join(dirname(containingFile), moduleName)

  if (statSync(target).isDirectory() && existsSync(join(target, 'index.d.ts'))) {
    return join(target, 'index.d.ts')
  }
}

function diffApi (tsApi, docApi) {
  const fallback = {
    props: {},
    slots: {},
    emits: {}
  }
  return union(
    Object.keys(tsApi),
    Object.keys(docApi)
  ).map(compName => {
    const { props, slots, emits } = tsApi[compName] || fallback
    const { props: dProps, slots: dSlots, emits: dEmits } = docApi[compName] || fallback
    return {
      component: compName,
      props: diffPart(props, dProps, true), // 这里是false可以检查props类型
      slots: diffPart(slots, dSlots, true),
      emits: diffPart(emits, dEmits, true)
    }
  })
}

function diffPart (ts = {}, doc = {}, loose = false) {
  return union(
    Object.keys(ts),
    Object.keys(doc)
  ).map(key => {
    return {
      key,
      ts: typeof ts[key] === 'undefined' ? 'undefined' : ts[key], // undefined 表示缺失
      doc: typeof doc[key] === 'undefined' ? 'undefined' : doc[key],
      match: loose
        ? ts.hasOwnProperty(key) && doc.hasOwnProperty(key)
        : ts[key] === doc[key]
    }
  }).filter(({ match }) => !match)
}

function writeDiffFile () {
  const tsApi = getApiFromVeuiTypes()
  const docApi = getApiFromDocs()
  const diff = diffApi(tsApi, docApi)
  writeFileSync(join(__dirname, 'diff.json'), JSON.stringify(diff, null, '  '), 'utf8')
}

if (require.main === module) {
  writeDiffFile()
}

import { resolve, relative, dirname } from 'path'
import { existsSync } from 'fs'
import visit from 'unist-util-visit'
import { readFileSync, hash } from './util'
import { render } from './page'
import { parseComponent } from 'vue-template-compiler'
import { escape } from 'lodash'
import { RE_LOCALE } from './i18n'

const DOCS_DIR = resolve(__dirname, '../docs')

export default function attacher () {
  return (tree, file) => {
    let { path, data: fileData } = file
    visit(tree, 'shortcode', node => {
      let {
        identifier,
        data: nodeData,
        attributes: { src, browser } = {}
      } = node
      if (identifier !== 'demo' || !src) {
        return
      }

      if (!nodeData) {
        node.data = nodeData = {}
      }
      if (!fileData) {
        file.data = fileData = {}
      }
      if (!fileData.demos) {
        fileData.demos = {}
      }
      if (!fileData.deps) {
        fileData.deps = {}
      }

      let demoPath =
        src.indexOf('/') === 0
          ? resolve(DOCS_DIR, src.slice(1))
          : resolve(dirname(path), src)

      let demoRelativePath = relative(DOCS_DIR, demoPath)

      if (!existsSync(demoPath)) {
        console.warn(`Demo not found at '${demoPath}'`)
        return
      }

      fileData.deps[demoPath] = true

      let name = getComponentName(demoPath)
      nodeData.hName = name

      let localPath = `/${relative(DOCS_DIR, path)}`
      let [, locale] = localPath.match(RE_LOCALE) || []

      let { content, doc } = extractDoc(demoPath, { locale })
      fileData.demos[name] = {
        filePath: demoPath,
        path: demoRelativePath,
        browser,
        code: render('```vue\n' + content + '\n```', demoPath).contents,
        desc: render(doc, demoPath).contents
      }
    })
  }
}

function getComponentName (path) {
  return `one-demo-${hash(path)}`
}

function extractDoc (file, { locale }) {
  let content = readFileSync(file)
  let vueComponent = parseComponent(content)
  let { customBlocks } = vueComponent
  let i = customBlocks.findIndex(({ type, attrs }) => {
    return ((locale && locale === attrs.locale) || !locale) && type === 'docs'
  })

  let doc = null
  if (i !== -1) {
    doc = customBlocks[i].content
  }

  return {
    content: stringifyVueComponent(vueComponent),
    doc
  }
}

function stringifyVueComponent (component) {
  let content = []
  let { template, script, styles } = component
  if (template) {
    content.push(
      `<template${stringifyAttrs(template.attrs)}>${
        template.content
      }</template>`
    )
  }
  if (script) {
    content.push(
      `<script${stringifyAttrs(script.attrs)}>${script.content}</script>`
    )
  }
  styles.filter(({ attrs }) => !attrs.docs).forEach(style => {
    content.push(
      `<style${stringifyAttrs(style.attrs)}>${style.content}</style>`
    )
  })
  return content.join('\n\n')
}

function stringifyAttrs (attrs) {
  let result = Object.keys(attrs)
    .map(key => {
      let val = attrs[key]
      if (typeof val !== 'boolean') {
        return `${escape(key)}="${escape(val)}"`
      }
      return val ? `${escape(key)}` : ''
    })
    .join(' ')

  return result ? ` ${result}` : ''
}

import { statSync, writeFileSync } from 'fs'
import { resolve, relative, extname, basename, sep } from 'path'
import readdirpSync from 'recursive-readdir-sync'
import rimraf from 'rimraf'
import { copyFileSync, replaceExtSync } from './util'
import { renderDocToPage } from './page'
import { get, removeFile } from './deps'
import { getChangelogData } from './changelog'

const DOCS_DIR = resolve(__dirname, '../docs')
const PAGES_DIR = resolve(__dirname, '../../pages')
const DEMOS_DIR = resolve(__dirname, '../../components/demos')
const ASSETS_DIR = resolve(__dirname, '../../assets')

export function generatePages (file, stats) {
  if (!file) {
    rimraf.sync(PAGES_DIR)
    rimraf.sync(DEMOS_DIR)
    rimraf.sync(resolve(__dirname, './deps.json'))
    console.log('Regenerating all files...')
    handleFile(DOCS_DIR)
    handleChangelog()
    console.log('...done.')
  } else {
    handleFile(file, stats)
  }
}

function handleChangelog () {
  const changelogData = getChangelogData()
  writeFileSync(
    resolve(ASSETS_DIR, 'data', 'changelog.json'),
    JSON.stringify(changelogData, null, 2)
  )
}

function handleFile (file, stats) {
  let segments = relative(DOCS_DIR, file).split(sep)
  if (
    segments.some(segment => {
      return segment.startsWith('_') || segment.startsWith('.')
    })
  ) {
    return
  }

  let remove = stats ? stats.remove : false
  let dir = stats ? stats.dir : statSync(file).isDirectory()
  if (dir) {
    if (remove) {
      rimraf.sync(file)
      return
    }

    let children = readdirpSync(file)
    children.forEach(child => {
      handleFile(child, remove)
    })
    return
  }

  let ext = extname(file).toLowerCase()

  /* eslint-disable indent */
  /* There seems to be something wrong with FECS here */
  switch (ext) {
    case '.md': {
      if (remove) {
        let relDest = replaceExtSync(relative(DOCS_DIR, file), 'vue')
        rimraf.sync(resolve(PAGES_DIR, relDest))
        console.log(`[${relDest}] removed.`)
      } else {
        let dest = relative(DOCS_DIR, file)
        renderDocToPage(dest)
        console.log(`[${dest}] synced.`)
      }
      break
    }
    case '.json': {
      if (basename(file) === 'nav.json') {
        copyFileSync(file, resolve(ASSETS_DIR, 'data', 'nav.json'))
        console.log('[nav.json] synced.')
      }
      break
    }
    default: {
      let relDest = relative(DOCS_DIR, file)

      let dest =
        relDest.split(sep).indexOf('demo') === -1
          ? resolve(PAGES_DIR, relDest)
          : resolve(DEMOS_DIR, relDest)
      if (remove) {
        rimraf.sync(dest)
        console.log(`[${relDest}] removed.`)
      } else {
        copyFileSync(file, dest)
        console.log(`[${relDest}] synced.`)
      }
      break
    }
  }
  /* eslint-enable indent */

  if (remove) {
    removeFile(file)
    return
  }

  let deps = get(file)
  if (deps) {
    Object.keys(deps).forEach(dep => {
      handleFile(dep)
    })
  }
}

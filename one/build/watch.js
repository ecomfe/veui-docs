import { resolve } from 'path'
import { debounce } from 'lodash'
import chokidar from 'chokidar'
import { generatePages } from './generator'

let watcher = chokidar.watch(resolve(__dirname, '../docs'), {
  ignoreInitial: true
})

watcher
  .on('all', debounce(generate, 1000))

function generate (type, path) {
  switch (type) {
    case 'add':
      generatePages(path, { dir: false, remove: false })
      break
    case 'addDir':
      generatePages(path, { dir: true, remove: false })
      break
    case 'change':
      generatePages(path)
      break
    case 'unlink':
      generatePages(path, { dir: false, remove: true })
      break
    case 'unlinkDir':
      generatePages(path, { dir: true, remove: true })
      break
    default:
      break
  }
}

import path from 'path'
import { readFileSync, writeFileSync } from './util'
import { merge } from 'lodash'

function load () {
  try {
    return JSON.parse(readFileSync(resolve('./deps.json')))
  } catch (e) {
    return {}
  }
}

function save (deps) {
  writeFileSync(resolve('./deps.json'), JSON.stringify(deps, null, '  '))
}

function resolve (file) {
  return path.resolve(__dirname, file)
}

export function get (file) {
  let deps = load()
  return deps[file]
}

export function add (data) {
  let deps = load()
  save(merge(deps, data))
}

export function remove (data) {
  let deps = load()
  Object.keys(data).forEach(key => {
    if (deps[key]) {
      delete deps[key][data[key]]
    }
  })
  save(deps)
}

export function removeFile (file) {
  let deps = load()
  delete deps[file]

  Object.keys(deps).forEach(key => {
    delete deps[key][file]
  })
}

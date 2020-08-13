import { readFileSync as fsReadFileSync, writeFileSync as fsWriteFileSync } from 'fs'
import { dirname } from 'path'
import mkdirp from 'mkdirp'
import crypto from 'crypto'

export function readFileSync (file) {
  return fsReadFileSync(file, 'utf8')
}

export function writeFileSync (file, content) {
  mkdirp.sync(dirname(file))
  fsWriteFileSync(file, content, 'utf8')
}

export function copyFileSync (src, dest) {
  mkdirp.sync(dirname(dest))
  writeFileSync(dest, readFileSync(src))
}

const RE_EXT = /\.([^.]+)$/
export function replaceExtSync (file, ext) {
  return file.replace(RE_EXT, `.${ext}`)
}

export function hash (path) {
  let hash = crypto.createHash('sha1')
  hash.update(path)
  return hash.digest('hex').substring(0, 7)
}

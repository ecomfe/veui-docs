import { remove, get, set } from 'lodash'

const CLASSNAME_PATH = 'properties.className'

export function toggleClass (node, name, add) {
  let className = get(node, CLASSNAME_PATH)
  if (!className) {
    set(node, CLASSNAME_PATH, [])
    className = node.properties.className
  }

  if (typeof add === 'boolean') {
    if (add && !className.includes(name)) {
      className.push(name)
    } else if (!add) {
      remove(className, c => c === name)
    }
  } else if (className.includes(name)) {
    remove(className, c => c === name)
  } else {
    className.push(name)
  }
}

export function addClass (node, name) {
  toggleClass(node, name, true)
}

export function removeClass (node, name) {
  toggleClass(node, name, false)
}

export function hasClass (node, name) {
  let className = get(node, CLASSNAME_PATH, [])
  return className.includes(name)
}

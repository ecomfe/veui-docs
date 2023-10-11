import { strToU8, zlibSync, strFromU8, unzlibSync } from 'fflate'

export function walk (list, base, callback) {
  if (!Array.isArray(list)) {
    return
  }

  let stopped = list.some(item => {
    let newBase = `${base}/${item.slug}`
    if (typeof callback === 'function') {
      if (callback(item, newBase) === false) {
        return true
      }
    }
    if (item.children) {
      if (walk(item.children, newBase, callback) === false) {
        return true
      }
    }
    return false
  })
  return !stopped
}

export function getLink ({ slug, link, children }) {
  if (link === false) {
    let actual = null
    walk(children, slug, (item, base) => {
      // leaf
      if (!item.children || !item.children.length) {
        actual = base
        return false
      }
    })
    if (actual !== null) {
      return `/${actual}`
    }
  }
  return `/${slug}`
}

const PREF_KEY = 'veui.preferences'

export function loadPref (key) {
  try {
    const pref = JSON.parse(localStorage.getItem(PREF_KEY))
    return pref[key]
  } catch (e) {
    return null
  }
}

export function savePref (key, value) {
  const pref = JSON.parse(localStorage.getItem(PREF_KEY)) || {}
  pref[key] = value
  localStorage.setItem(PREF_KEY, JSON.stringify(pref))
}

function urlBtoA (binary) {
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_')
}

function urlAtoB (base64) {
  return atob(base64.replace(/-/g, '+').replace(/_/g, '/'))
}

export function utoa (data) {
  const buffer = strToU8(data)
  const zipped = zlibSync(buffer, { level: 9 })
  const binary = strFromU8(zipped, true)
  return urlBtoA(binary)
}

export function atou (base64) {
  const binary = urlAtoB(base64)

  // zlib header (x78), level 9 (xDA)
  if (binary.startsWith('\x78\xDA')) {
    const buffer = strToU8(binary, true)
    const unzipped = unzlibSync(buffer)
    return strFromU8(unzipped)
  }

  // old unicode hacks for backward compatibility
  // https://base64.guru/developers/javascript/examples/unicode-strings
  return decodeURIComponent(escape(binary))
}

export function track (...args) {
  if (typeof window !== 'object' || !window.__vaTrack) {
    return
  }

  window.__vaTrack(...args)
}

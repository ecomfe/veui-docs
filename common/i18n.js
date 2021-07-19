import { compact, find } from 'lodash'
import nav from './nav'

export const LOCALES = [
  {
    code: 'zh-Hans',
    label: '简体中文'
  },
  {
    code: 'en-US',
    label: 'English (US)'
  }
]
export const DEFAULT_LOCALE = LOCALES[0].code
export const LOCALE_CODES = LOCALES.map(l => l.code)
export const RE_LOCALE = new RegExp(`^\\/(${LOCALE_CODES.join('|')})(?=\\/|$)`)

export function getLocale (path) {
  if (path != null) {
    let [, locale] = path.match(RE_LOCALE) || []
    if (locale) {
      return locale
    }
  }
  return DEFAULT_LOCALE
}

export function getCanonicalPath (path) {
  if (path === '') {
    return '/'
  }
  let locale = getLocale(path)
  path = path.replace(new RegExp(`^\\/${locale}(?=\\/|$)`), '')
  return path.charAt(0) === '/' ? path : `/${path}`
}

export function getLocalePath (path, locale) {
  if (locale === DEFAULT_LOCALE) {
    return path
  }
  return `/${locale}${path}`.replace(/\/$/, '')
}

export const htmlAttrs = {
  head () {
    return {
      htmlAttrs: {
        lang: getLocale(this.$route.path)
      }
    }
  }
}

export default {
  computed: {
    canonicalPath () {
      if (this.$route.path === '') {
        return '/'
      }
      let path = this.$route.path.replace(new RegExp(`^\\/${this.locale}(?=\\/|$)`), '')
      return path.charAt(0) === '/' ? path : `/${path}`
    },
    locale () {
      if (this.$route) {
        let [, locale] = this.$route.path.match(RE_LOCALE) || []
        if (locale) {
          return locale
        }
      }
      return DEFAULT_LOCALE
    },
    locales () {
      return LOCALES
    }
  },
  methods: {
    getLocalePath (path, locale = this.locale) {
      if (locale === DEFAULT_LOCALE) {
        return path
      }
      return `/${locale}${path}`.replace(/\/$/, '')
    },
    isPathDisabled (path, locale = this.locale) {
      let segments = compact(path.split('/'))
      let navItem = segments.reduce((node, seg) => {
        if (!node) {
          return null
        }
        return find(node.children, ({ slug }) => slug === seg)
      }, { children: nav[locale] || [] })

      if (!navItem) {
        return null
      }
      return navItem.disabled
    }
  }
}

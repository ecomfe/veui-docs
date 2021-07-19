import { resolve, relative } from 'path'
import visit from 'unist-util-visit'
import { RE_LOCALE } from './i18n'

const DOCS_DIR = resolve(__dirname, '../docs')

export default function attacher () {
  return (tree, { path }) => {
    let localPath = `/${relative(DOCS_DIR, path)}`
    let [, locale] = localPath.match(RE_LOCALE) || []

    visit(tree, 'element', node => {
      let { tagName, properties: { href, ...props } } = node
      if (tagName !== 'a' || href.match(/^\w+:\/\//)) {
        return
      }

      let routePath = locale && href.indexOf('/') === 0 ? `/${locale}${href}` : href

      node.tagName = 'nuxt-link'
      node.properties = { ...props, to: routePath }
    })
  }
}

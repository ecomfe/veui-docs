import { getLocale } from '../common/i18n'

function check (name, timeout, callback) {
  if (name in window) {
    setTimeout(() => callback(window[name]))
    return
  }
  setTimeout(() => {
    check(name, timeout, callback)
  }, timeout)
}

export default ({ app, route }) => {
  // if (process.env.NODE_ENV !== 'production') return

  check('docsearch', 300, docsearch => {
    window.docsearchInstance = docsearch({
      apiKey: '21cdc123c620ec4bb81259c32e90c08f',
      indexName: 'veui',
      inputSelector: '.search',
      algoliaOptions: {
        facetFilters: [`lang:${getLocale(route.path)}`]
      },
      handleSelected (input, e, { url }) {
        input.setVal('')
        e.preventDefault()
        let { pathname, search, hash } = new URL(url)
        app.router.push(`${pathname}${search}${hash}`)
      }
    })
  })
}

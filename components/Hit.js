/**
 * Prefetching logic is modified based on https://github.com/nuxt/nuxt.js/blob/86570cf6ab82cd7f58fb7973bd4c43a55307175b/packages/vue-app/template/components/nuxt-link.client.js
 */
import { Component, createRef, createElement } from 'preact'

function isSpecialClick (event) {
  return (
    event.button === 1 ||
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey
  )
}

function normalizeURL (url) {
  if (url.endsWith('/')) {
    return url.slice(0, -1)
  }

  return url.replace(/\/([#?])/, '$1')
}

const requestIdleCallback =
  typeof window !== 'undefined'
    ? window.requestIdleCallback ||
      function (cb) {
        const start = Date.now()
        return setTimeout(() => {
          // eslint-disable-next-line standard/no-callback-literal
          cb({
            didTimeout: false,
            timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
          })
        }, 1)
      }
    : () => {}

const cancelIdleCallback =
  typeof window !== 'undefined'
    ? window.cancelIdleCallback ||
      function (id) {
        clearTimeout(id)
      }
    : () => {}

const observer =
  typeof window !== 'undefined'
    ? window.IntersectionObserver &&
      new window.IntersectionObserver(entries => {
        entries.forEach(({ intersectionRatio, target }) => {
          if (intersectionRatio <= 0 || !target.__prefetch) {
            return
          }
          target.__prefetch()
        })
      })
    : null

export function createComponent ({ isOffline, router, route, fetchPayload }) {
  return class Hit extends Component {
    handleId = null;
    observed = false;
    link = createRef();

    constructor ({ hit }) {
      super()
      this.url = normalizeURL(hit.url)
    }

    canPrefetch () {
      const conn = navigator.connection
      const hasBadConnection =
        isOffline ||
        (conn && ((conn.effectiveType || '').includes('2g') || conn.saveData))

      return !hasBadConnection
    }

    getPrefetchComponents () {
      const ref = router.resolve(this.url, route)
      const Components = ref.resolved.matched.map(r => r.components.default)

      return Components.filter(
        Component =>
          typeof Component === 'function' &&
          !Component.options &&
          !Component.__prefetched
      )
    }

    prefetchLink (el) {
      if (!this.canPrefetch()) {
        return
      }
      // Stop observing this link (in case of internet connection changes)
      observer.unobserve(el)
      const Components = this.getPrefetchComponents()

      for (const Component of Components) {
        const componentOrPromise = Component()
        if (componentOrPromise instanceof Promise) {
          componentOrPromise.catch(() => {})
        }
        Component.__prefetched = true
      }

      if (fetchPayload) {
        const { href } = router.resolve(this.url, route)
        fetchPayload(href, true).catch(() => {})
      }
    }

    observe (el) {
      // If no IntersectionObserver, avoid prefetching
      if (!observer) {
        return
      }
      // Add to observer
      if (this.getPrefetchComponents().length > 0) {
        el.__prefetch = () => this.prefetchLink(el)
        observer.observe(el)
        this.observed = true
      }
    }

    componentDidMount () {
      this.handleId = requestIdleCallback(
        () => this.observe(this.link.current),
        {
          timeout: 2e3
        }
      )
    }

    componentWillUnmount () {
      cancelIdleCallback(this.handleId)

      if (this.observed) {
        observer.unobserve(this.link.current)
        delete this.link.current.__prefetch
      }
    }

    render ({ hit, children }) {
      return createElement('a', {
        href: this.url,
        ref: this.link,
        onClick: event => {
          if (isSpecialClick(event)) {
            return
          }
          // We rely on the native link scrolling when user is
          // already on the right anchor because Vue Router doesn't
          // support duplicated history entries.
          if (router.history.current.fullPath === hit.url) {
            return
          }
          const { pathname: hitPathname } = new URL(
            window.location.origin + hit.url
          )
          // If the hits goes to another page, we prevent the native link behavior
          // to leverage the Vue Router loading feature.
          if (router.history.current.path !== hitPathname) {
            event.preventDefault()
          }
          router.push(this.url)
        },
        children
      })
    }
  }
}

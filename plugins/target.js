let target

function clearTarget () {
  if (!target) {
    return
  }

  delete target.dataset.target
}

export default ({ app }) => {
  document.documentElement.addEventListener('click', clearTarget)

  app.router.afterEach(to => {
    if (document.querySelector('.repl.standalone')) {
      return
    }

    clearTarget()

    if (!to.hash) {
      return
    }

    setTimeout(() => {
      const selector = decodeURIComponent(to.hash)
      const anchor = document.querySelector(selector)
      if (!anchor) {
        return
      }

      if (anchor.tagName === 'CODE') {
        target = anchor.closest('tr')
      } else if (app.router.currentRoute.name === 'changelog' && anchor.tagName === 'H2') {
        target = anchor.closest('.version-item')
      } else if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(anchor.tagName)) {
        target = anchor
      }

      if (target) {
        target.dataset.target = ''
      }
    }, 0)
  })
}

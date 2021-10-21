let target

function clearTarget () {
  if (!target) {
    return
  }

  delete target.dataset.target
}

export default ({ app, route }) => {
  document.documentElement.addEventListener('click', clearTarget)

  app.router.afterEach(to => {
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
      } else if (route.name === 'changelog' && anchor.tagName === 'H2') {
        target = anchor.closest('.version-item')
      }

      if (target) {
        target.dataset.target = ''
      }
    }, 0)
  })
}

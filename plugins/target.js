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
    clearTarget()

    if (!to.hash) {
      return
    }

    setTimeout(() => {
      const selector = decodeURIComponent(to.hash)
      const anchor = document.querySelector(selector)

      if (anchor.tagName === 'CODE') {
        target = anchor.closest('tr')
        target.dataset.target = ''
      }
    }, 0)
  })
}

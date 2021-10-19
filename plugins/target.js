export default ({ app }) => {
  let target

  document.documentElement.addEventListener('click', () => {
    if (!target) {
      return
    }

    delete target.dataset.target
  })

  app.router.afterEach(to => {
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

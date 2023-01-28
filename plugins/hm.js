export default ({ app }) => {
  if (process.env.NODE_ENV !== 'production') return

  const _hmt = (window._hmt = window._hmt || [])

  const hm = document.createElement('script')
  hm.src = 'https://hm.baidu.com/hm.js?3b91e2b87603771f136a8c593a515811'
  const s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(hm, s)

  app.router.afterEach(to => {
    _hmt.push(['_trackPageview', to.fullPath])
  })
}

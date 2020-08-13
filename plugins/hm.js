export default ({ app }) => {
  if (process.env.NODE_ENV !== 'production') return

  var _hmt = window._hmt = window._hmt || []

  var hm = document.createElement('script')
  hm.src = 'https://hm.baidu.com/hm.js?d204d9e2f2ad504d6fe10939a9b5b588'
  var s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(hm, s)

  app.router.afterEach(to => {
    _hmt.push(['_trackPageview', to.fullPath])
  })
}

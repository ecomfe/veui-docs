module.exports = {
  chainWebpack (config) {
    config.resolve.alias.set('veui$', 'veui/dist/veui.esm')
  }
}

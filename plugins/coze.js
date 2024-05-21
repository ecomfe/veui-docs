import { getLocale } from '../common/i18n'

const loading = new Promise(resolve => {
  const tick = setInterval(() => {
    if (window.CozeWebSDK == null) {
      return
    }

    clearInterval(tick)
    resolve()
  }, 200)
})

const config = {
  bot_id: '7357926687948472328'
}
const componentProps = {
  title: 'Ask AI'
}

let currentLocale
let client

export default ({ app }) => {
  app.router.afterEach(async to => {
    await loading

    const locale = getLocale(to.path)
    if (client && currentLocale === locale) {
      return
    }

    if (client) {
      client.destroy()
    }

    currentLocale = locale

    const options = {
      config,
      componentProps: {
        ...componentProps,
        lang: locale === 'zh-Hans' ? 'zh-CN' : 'en'
      }
    }
    client = new window.CozeWebSDK.WebChatClient(options)
  })
}

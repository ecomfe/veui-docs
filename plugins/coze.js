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

let client
let currentLocale
let currentLayout = 'pc'

const mql = window.matchMedia('(max-width: 480px)')
if (mql.matches) {
  currentLayout = 'mobile'
}

mql.addEventListener('change', async ({ matches }) => {
  await loading

  currentLayout = matches ? 'mobile' : 'pc'
  console.log('mql changed', currentLayout)

  if (client) {
    client.destroy()
  }

  client = createClient(currentLocale, currentLayout)
})

export default ({ app }) => {
  app.router.afterEach(async to => {
    await loading

    const locale = getLocale(to.path)
    if (client && currentLocale === locale) {
      return
    }

    currentLocale = locale

    if (client) {
      client.destroy()
    }

    client = createClient(currentLocale, currentLayout)
  })
}

function createClient (locale, layout) {
  const options = {
    config,
    componentProps: {
      ...componentProps,
      lang: locale === 'zh-Hans' ? 'zh-CN' : 'en',
      layout
    }
  }
  return new window.CozeWebSDK.WebChatClient(options)
}

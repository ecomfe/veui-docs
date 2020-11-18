const path = require('path')

function resolve (p) {
  return path.resolve(__dirname, p)
}

function appendLoader (config, loader) {
  config.module.rules.push(loader)
}

module.exports = {
  target: 'static',

  /**
   * Headers of the page
   */
  head: {
    title: 'VEUI',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Website for VEUI: an enterprise component library for Vue.js.'
      }
    ],
    link: [
      { rel: 'shortcut icon', href: 'https://www.baidu.com/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://code.bdstatic.com/npm/docsearch.js@2.6.3/dist/cdn/docsearch.min.css'
      }
    ],
    script: [
      {
        src:
          'https://code.bdstatic.com/npm/docsearch.js@2.6.3/dist/cdn/docsearch.min.js',
        body: true
      }
    ]
  },
  /**
   * Customize the progress bar color
   */
  loading: { color: '#1e1f24' },

  pageTransition: {
    css: false
  },

  css: ['veui-theme-dls/common.less', '@/assets/styles/global.styl'],

  plugins: [
    { src: '~plugins/i18n.js' },
    { src: '~plugins/l10n.js' },
    { src: '~plugins/hm.js', ssr: false },
    { src: '~plugins/algolia.js', ssr: false }
  ],

  generate: {
    subFolders: false
  },

  /**
   * Build configuration
   */
  build: {
    transpile: ['veui', 'vue-awesome', 'resize-detector', 'less-plugin-dls', 'dls-graphics'],

    babel: {
      plugins: ['veui', 'lodash']
    },

    loaders: {
      vue: {
        compilerOptions: {
          whitespace: 'condense'
        }
      },
      stylus: {
        'include css': true
      },
      less: {
        javascriptEnabled: true
      }
    },

    extend (config) {
      /**
       * veui-loader
       */
      appendLoader(config, {
        enforce: 'pre',
        test: /\.vue$/,
        loader: 'veui-loader',
        options: {
          locale: ['zh-Hans', 'en-US'],
          modules: [
            {
              package: 'veui-theme-dls',
              fileName: '{module}.less'
            },
            {
              package: 'veui-theme-dls',
              fileName: '{module}.js',
              transform: false
            }
          ]
        },
        include: [resolve('pages'), resolve('node_modules/veui')]
      })

      appendLoader(config, {
        test: /\.js$/,
        include: [resolve('node_modules/focus-visible')],
        loader: 'short-circuit-loader',
        options: {
          expr: "process.env.VUE_ENV === 'server'"
        }
      })
    }
  }
}

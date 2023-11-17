const path = require('path')
const MonacoEditorPlugin = require('monaco-editor-webpack-plugin')

function resolve (p) {
  return path.resolve(__dirname, p)
}

function appendLoader (config, loader) {
  config.module.rules.push(loader)
}

module.exports = {
  target: 'static',
  telemetry: false,

  router: {
    prefetchPayloads: true
  },

  /**
   * Headers of the page
   */
  head: {
    title: 'VEUI',
    htmlAttrs: {
      lang: 'zh-Hans'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Website for VEUI: an enterprise component library for Vue.js.'
      },
      {
        name: 'theme-color',
        content: '#0052cc'
      }
    ],
    link: [
      { rel: 'shortcut icon', href: 'https://www.baidu.com/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Alata&display=swap'
      }
    ]
  },
  /**
   * Customize the progress bar color
   */
  loading: { color: '#0052cc' },

  pageTransition: {
    css: false
  },

  css: [
    'veui-theme-dls/common.less',
    'veui-theme-dls/typography.less',
    '@/assets/styles/global.styl',
    'veui-theme-dls/'
  ],

  plugins: [
    { src: '~plugins/global.js' },
    { src: '~plugins/hm.js', mode: 'client' },
    { src: '~plugins/preload.js', mode: 'client' },
    { src: '~plugins/i18n.js' },
    { src: '~plugins/l10n.js' },
    { src: '~plugins/target.js', mode: 'client' },
    { src: '~plugins/prism.js', mode: 'client' },
    { src: '~plugins/vercel.js', mode: 'client' }
  ],

  /**
   * Build configuration
   */
  build: {
    cache: true,

    parallel: true,

    transpile: [
      'veui',
      'vue-awesome',
      'resize-detector',
      'less-plugin-dls',
      'dls-graphics',
      '@stackblitz/sdk'
    ],

    babel: {
      plugins: ['veui']
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

    plugins: [
      new MonacoEditorPlugin({
        languages: ['javascript', 'css', 'html', 'typescript']
      })
    ],

    postcss: {
      postcssOptions: {
        plugins: {
          'postcss-preset-env': {
            features: {
              'image-set-function': false
            }
          }
        }
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

      config.resolve.alias.vue$ = resolve('./patched/vue.esm.js')
      config.resolve.alias[
        'vue-inbrowser-compiler-independent-utils/lib/vue-inbrowser-compiler-independent-utils.esm.mjs'
      ] = resolve('./patched/vue-inbrowser-compiler-independent-utils.esm.mjs')
      config.resolve.alias['vue-monaco'] = '@justfork/vue-monaco'

      config.devtool = false
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          veui: {
            test: /node_modules[\\/]veui/,
            chunks: 'all',
            priority: 20,
            name: true
          },
          'veui-theme-dls-icons': {
            test: /node_modules[\\/]veui-theme-dls-icons/,
            chunks: 'all',
            priority: 20,
            name: true
          },
          'vue-live': {
            test: /node_modules[\\/]vue-live/,
            chunks: 'all',
            priority: 20,
            name: true
          }
        }
      }
    }
  }
}

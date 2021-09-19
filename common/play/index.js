import { loading } from 'dls-graphics'
import sdk from '@stackblitz/sdk'
/* eslint-disable import/no-webpack-loader-syntax */
import packageCodeSandbox from '!!raw-loader!./templates/package.codesandbox'
import packageStackBlitz from '!!raw-loader!./templates/package.stackblitz'
import rcStackBlitz from '!!raw-loader!./templates/.stackblitzrc'
import vueConfig from '!!raw-loader!./templates/vue.config.js'
import prettier from '!!raw-loader!./templates/.prettierrc'
import index from '!!raw-loader!./templates/index.html'
import landing from '!!raw-loader!./templates/landing.html'
import main from '!!raw-loader!./templates/main.js'
import app from '!!raw-loader!./templates/App.vue'
/* eslint-enable import/no-webpack-loader-syntax */

const PLAYGROUND_FILES = {
  CodeSandbox: {
    'package.json': packageCodeSandbox,
    '.prettierrc': prettier,
    'public/index.html': index,
    'src/main.js': main,
    'src/App.vue': app
  },
  StackBlitz: {
    'package.json': packageStackBlitz,
    '.prettierrc': prettier,
    'public/index.html': index,
    'src/main.js': main,
    'src/App.vue': app,
    '.stackblitzrc': rcStackBlitz,
    'vue.config.js': vueConfig
  }
}

const PLAY_IMPLS = {
  CodeSandbox: createCodeSandbox,
  StackBlitz: createStackBlitz
}

export function play (sfc, { locale, vendor }) {
  PLAY_IMPLS[vendor](sfc, { locale })
}

const API_CSB = 'https://codesandbox.io/api/v1/sandboxes/define'

export function createCodeSandbox (sfc, { locale }) {
  const win = window.open()
  win.document.write(landing.replace('{{loading}}', genLoading()))

  const files = Object.entries(
    getPlaygroundFiles({ locale, vendor: 'CodeSandbox' })
  ).reduce((acc, [key, value]) => {
    acc[key] = { content: value }
    return acc
  }, {})

  fetch(`${API_CSB}?json=1`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      files: {
        ...files,
        'src/Demo.vue': {
          content: sfc.replace(/from 'veui'/g, `from 'veui/dist/veui.esm'`)
        }
      }
    })
  })
    .then(res => res.json())
    .then(data => {
      win.location = `https://codesandbox.io/s/${data.sandbox_id}?file=/src/Demo.vue`
    })
}

export function createStackBlitz (sfc, { locale }) {
  sdk.openProject(
    {
      title: 'VEUI Playground',
      files: {
        ...getPlaygroundFiles({ locale, vendor: 'StackBlitz' }),
        'src/Demo.vue': sfc
      },
      description: 'Online playground for VEUI.',
      template: 'node'
    },
    {
      openFile: 'src/Demo.vue'
    }
  )
}

function getPlaygroundFiles ({ locale, vendor }) {
  return Object.entries(PLAYGROUND_FILES[vendor]).reduce(
    (acc, [key, value]) => {
      acc[key] = value.replace('{{locale}}', locale)
      return acc
    },
    {}
  )
}

function genLoading () {
  const { contents, attrs } = loading
  const attrsStr = Object.entries({
    ...attrs,
    class: `loading ${attrs.class}`
  })
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ')
  return `<svg ${attrsStr}>${contents}</svg>`
}

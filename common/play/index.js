import { loading } from 'dls-graphics'
/* eslint-disable import/no-webpack-loader-syntax */
import meta from '!!raw-loader!./templates/package.raw'
import prettier from '!!raw-loader!./templates/.prettierrc.raw'
import index from '!!raw-loader!./templates/index.raw.html'
import landing from '!!raw-loader!./templates/landing.raw.html'
import main from '!!raw-loader!./templates/main.raw.js'
import app from '!!raw-loader!./templates/App.raw.vue'
/* eslint-enable import/no-webpack-loader-syntax */

const API_CSB = 'https://codesandbox.io/api/v1/sandboxes/define'

export function createCodeSandbox (sfc, { locale }) {
  const win = window.open()
  win.document.write(landing.replace('{{loading}}', genLoading()))
  fetch(`${API_CSB}?json=1`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      files: {
        ...getTemplateFiles({ locale }),
        'src/Demo.vue': {
          content: sfc
        }
      }
    })
  })
    .then(res => res.json())
    .then(data => {
      win.location = `https://codesandbox.io/s/${data.sandbox_id}?file=/src/Demo.vue`
    })
}

function getTemplateFiles ({ locale }) {
  return {
    'package.json': {
      content: meta
    },
    '.prettierrc': {
      content: prettier
    },
    'public/index.html': {
      content: index
    },
    'src/main.js': {
      content: main.replace('{{locale}}', locale)
    },
    'src/App.vue': {
      content: app
    }
  }
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

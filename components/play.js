import { loading } from 'dls-graphics'

const API_CSB = 'https://codesandbox.io/api/v1/sandboxes/define'

export function createCodeSandbox (sfc) {
  const win = window.open()
  win.document.write(landing)
  fetch(`${API_CSB}?json=1`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      files: {
        ...templateFiles,
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

const meta = `{
  "dependencies": {
    "veui": "2.1.1",
    "veui-theme-dls": "2.1.1",
    "vue": "2.6.14"
  }
}
`

const prettier = `{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "fluid": false
}
`

const index = `<!DOCTYPE html>
<html lang="zh-Hans">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>VEUI Playground</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>
`

const main = `import Vue from 'vue'
import App from './App.vue'
import 'veui-theme-dls/dist/dls.esm'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
`

const app = `<template>
<main>
  <demo/>
</main>
</template>

<script>
import Demo from './Demo'

export default {
  components: {
    Demo
  }
}
</script>

<style scoped>
main {
  padding: 24px;
}
</style>
`

const templateFiles = {
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
    content: main
  },
  'src/App.vue': {
    content: app
  }
}

const landing = `<!DOCTYPE html>
<html lang="zh-Hans">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>VEUI Playground</title>
  <style>
    * {
      box-sizing: border-box;
    }
    body {
      position: relative;
      width: 100vw;
      height: 100vh;
      margin: 0;
      background-color: #040404;
    }
    .loading {
      position: absolute;
      top: 38.4%;
      left: 50%;
      transform: translate(-50%, -38.4%);
      height: 48px;
      font-weight: 400;
      color: #fff;
    }
  </style>
</head>
<body>
  ${genLoading()}
</body>
</html>
`

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

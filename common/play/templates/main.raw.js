import Vue from 'vue'
import App from './App.vue'
import 'veui-theme-dls/dist/dls.esm'
import 'veui-theme-dls-icons/dist/icons.esm'
import 'veui/dist/locale.{{locale}}.esm'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')

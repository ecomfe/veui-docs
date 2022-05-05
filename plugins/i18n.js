import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getLocale } from '../common/i18n'
import i18nMgr from 'veui/managers/i18n'

Vue.use(VueI18n)

export default ({ app, route }) => {
  app.i18n = new VueI18n()
  i18nMgr.locale = app.i18n.locale = getLocale(route.path)
}

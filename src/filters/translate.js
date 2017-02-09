import Vue from 'vue'
import i18n from 'lib/i18n.js'

Vue.filter('translate', (key, replaces) => {
  return i18n.hum(key, replaces)
})
Vue.filter('tModel', (key, replaces) => {
  key = 'activerecord.' + (2 == key.split('.').length ? 'attributes.' : 'models.') + key
  return i18n.hum(key, replaces)
})

import Vue from 'vue'
import i18n from 'lib/i18n.js'

Vue.filter('enum', (obj, key) => {
  if (obj) {
    let k = key.split('.')[1]
    key = ['enums', key, obj[k]].join('.')
    return i18n.hum(key)
  }
})

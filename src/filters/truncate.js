import Vue from 'vue'

Vue.filter('truncate', (text, length = 30) => {
  return text.substr(0, length - 3) + '...'
})

import Vue from 'vue'
import {deepKey} from 'lib/utils.js'

Vue.directive('deepKey', (el, binding, vnode) => {
  if (binding.oldValue != binding.value) {
    el.innerText = deepKey(binding.value, vnode.key)
  }
})

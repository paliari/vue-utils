import Vue from 'vue'
import formatter, * as masks from 'lib/mask.js'

Vue.filter('mask', formatter)

for(let f in masks) {
  Vue.filter(f, masks[f])
}

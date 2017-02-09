import Vue from 'vue'
import Fecha from 'lib/fecha'

Vue.filter('date', (date, format = 'shortDateTime') => {
  try {
    date = Fecha.parse(date, 'json') || date
    return Fecha.format(date, format)
  } catch (e) {
    return date
  }
})

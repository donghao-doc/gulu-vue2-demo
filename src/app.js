import Vue from 'vue'

import Button from './Button.vue'
import Icon from './Icon.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false
  }
})

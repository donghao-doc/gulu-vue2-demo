import Vue from 'vue'

import Icon from './Icon.vue'
import Button from './Button.vue'
import ButtonGroup from './ButtonGroup.vue'
import Input from './Input'

Vue.component('g-icon', Icon)
Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false
  },
  methods: {
    onInput(event) {
      console.log(event.target.value)
    },
    onChange(event) {
      console.log(event.target.value)
    },
    onFocus(event) {
      console.log(event.target.value)
    },
    onBlur(event) {
      console.log(event.target.value)
    }
  }
})

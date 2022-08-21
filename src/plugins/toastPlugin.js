import Toast from '../Toast.vue'

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (content) {
      const Constructor = Vue.extend(Toast)
      console.log(Constructor)
      const toast = new Constructor()
      console.log(toast)
      toast.$slots.default = [content]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}

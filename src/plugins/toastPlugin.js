import Toast from '../Toast.vue'

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (content, closeButton) {
      const Constructor = Vue.extend(Toast)
      const toast = new Constructor({
        propsData: {
          closeButton
        }
      })
      toast.$slots.default = [content]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}

import Toast from '../Toast.vue'

let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (content, propsData) {
      if (currentToast) currentToast.closeDirectly()
      currentToast = createToast({
        Vue, content, propsData, onClose: () => currentToast = null
      })
    }
  }
}

function createToast({Vue, content, propsData, onClose}) {
  const Constructor = Vue.extend(Toast)
  const toast = new Constructor({propsData})
  toast.$slots.default = [content]
  toast.$mount()
  toast.$on('close', onClose)
  document.body.appendChild(toast.$el)
  return toast
}

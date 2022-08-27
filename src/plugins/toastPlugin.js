import Toast from '../Toast.vue'

let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (content, propsData) {
      if (currentToast) currentToast.close()
      currentToast = createToast(Vue, content, propsData)
    }
  }
}

function createToast(Vue, content, propsData) {
  const Constructor = Vue.extend(Toast)
  const toast = new Constructor({propsData})
  toast.$slots.default = [content]
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}

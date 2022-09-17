<template>
  <div>

    <section>
      <p>设置弹出位置</p>
      <g-button @click="showToast('top')">top</g-button>
      <g-button @click="showToast('middle')">middle</g-button>
      <g-button @click="showToast('bottom')">bottom</g-button>
      <pre><code>{{ code1 }}</code></pre>
    </section>

  </div>
</template>

<script>
import Vue from 'vue'
import Button from '../../../src/Button.vue'
import ToastPlugin from '../../../src/plugins/toastPlugin.js'

Vue.use(ToastPlugin)

export default {
  name: 'Toast-demos',
  components: { 'g-button': Button },
  data() {
    return {
      code1: `
        <g-button @click="showToast('top')">top</g-button>
        <g-button @click="showToast('middle')">middle</g-button>
        <g-button @click="showToast('bottom')">bottom</g-button>

        showToast(position) {
          this.$toast('内容内容内容', {
            autoClose: true,
            closeDelay: 2,
            position,
            closeButton: {
              text: '关闭',
              callback(toast) {
                toast.log()
              }
            }
          })
        },
      `.replace(/^ {8}/gm, '').trim(),
    }
  },
  methods: {
    showToast(position) {
      this.$toast(`内容内容内容`, {
        autoClose: true,
        closeDelay: 2,
        position,
        closeButton: {
          text: '关闭',
          callback(toast) {
            toast.log()
          }
        }
      })
    },
  }
}
</script>

<style scoped>

</style>

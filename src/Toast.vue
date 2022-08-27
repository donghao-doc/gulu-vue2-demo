<template>
  <div class="g-toast">
    <div v-if="enableHtml" v-html="$slots.default[0]" class="content"></div>
    <span v-else class="content"><slot></slot></span>
    <i class="line"></i>
    <span v-if="closeButton" class="closeButton" @click="handleCloseButton">{{ closeButton.text }}</span>
  </div>
</template>

<script>
export default {
  name: 'GToast',
  data() {
    return {
      timer: null
    }
  },
  props: {
    enableHtml: { type: Boolean, default: false },
    autoClose: { type: Boolean, default: false },
    closeDelay: { type: [String, Number], default: 3 },
    closeButton: {
      type: Object,
      default() {
        return { text: '关闭', callback: null }
      }
    }
  },
  mounted() {
    if (this.autoClose) {
      const delay = Number(this.closeDelay) * 1000
      this.timer = setTimeout(() => {
        this.close()
      }, delay)
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  },
  methods: {
    close() {
      this.$el.remove()
      this.$destroy()
    },
    log() {
      console.log('测试')
    },
    handleCloseButton() {
      this.close()
      const { callback } = this.closeButton
      callback && typeof callback === 'function' && callback(this)
    }
  }
}
</script>

<style scoped lang="scss">
$font-size: 14px;
$toast-bg: rgba(0, 0, 0, 0.75);

.g-toast {
  color: #fff; font-size: $font-size;
  background: $toast-bg; border-radius: 4px; box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  line-height: 1.6;
  padding: 8px 0;
  display: flex; align-items: center;
  position: fixed; left: 50%; top: 0; transform: translateX(-50%);
}

.content {
  padding: 0 16px;
}

.line {
  align-self: stretch;
  border-left: 1px solid #666;
}

.closeButton {
  flex-shrink: 0;
  cursor: default;
  padding: 0 16px;
}
</style>

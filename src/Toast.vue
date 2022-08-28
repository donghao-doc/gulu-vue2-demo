<template>
  <div ref="toast"
       :class="['g-toast', `position-${position}`, {[animationNames[0]]: show, [animationNames[1]]: !show}]"
  >
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
      timer: null,
      show: false
    }
  },
  props: {
    enableHtml: {type: Boolean, default: false},
    autoClose: {type: Boolean, default: false},
    closeDelay: {type: [String, Number], default: 3},
    closeButton: {
      type: Object,
      default() {
        return {text: '关闭', callback: null}
      }
    },
    position: {
      type: String, default: 'top',
      validator(value) {
        return ['top', 'middle', 'bottom'].includes(value)
      }
    }
  },
  computed: {
    animationNames() {
      const names = {
        middle: ['fadeIn', 'fadeOut'],
        top: ['topSlideDown', 'topSlideUp'],
        bottom: ['bottomSlideUp', 'bottomSlideDown']
      }
      return names[this.position]
    }
  },
  mounted() {
    this.show = true
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
      this.show = false
      this.$refs.toast.addEventListener('animationend', () => {
        this.$el.remove()
        this.$emit('close')
        this.$destroy()
      })
    },
    closeDirectly() {
      this.$el.remove()
      this.$emit('close')
      this.$destroy()
    },
    log() {
      console.log('测试')
    },
    handleCloseButton() {
      this.close()
      const {callback} = this.closeButton
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
  position: fixed; left: 50%; transform: translateX(-50%); z-index: 2000;
  &.position-top {
    top: 0;
    border-top-left-radius: 0; border-top-right-radius: 0;
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &.position-bottom {
    bottom: 0;
    border-bottom-left-radius: 0; border-bottom-right-radius: 0;
  }
  &.fadeIn { animation: fade-in 0.3s linear forwards; }
  &.fadeOut { animation: fade-out 0.3s linear forwards; }
  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes fade-out {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }
  &.topSlideDown { animation: top-slide-down 0.3s linear forwards; }
  &.topSlideUp { animation: top-slide-up 0.3s linear forwards; }
  @keyframes top-slide-down {
    0% { transform: translate(-50%, -100%); }
    100% { transform: translate(-50%, 0); }
  }
  @keyframes top-slide-up {
    0% { transform: translate(-50%, 0); }
    100% { transform: translate(-50%, -100%); }
  }
  &.bottomSlideDown { animation: bottom-slide-down 0.3s linear forwards; }
  &.bottomSlideUp { animation: bottom-slide-up 0.3s linear forwards; }
  @keyframes bottom-slide-down {
    0% { transform: translate(-50%, 0); }
    100% { transform: translate(-50%, 100%); }
  }
  @keyframes bottom-slide-up {
    0% { transform: translate(-50%, 100%); }
    100% { transform: translate(-50%, 0); }
  }
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

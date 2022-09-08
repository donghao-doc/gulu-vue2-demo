<template>
  <div ref="popover" class="g-popover" @click="handleTrigger">
    <div v-if="visible" ref="contentWrapper" :class="['g-popover-content-wrapper', `position-${position}`]">
      <slot name="content"></slot>
    </div>
    <div ref="triggerWrapper" class="trigger-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GPopover',
  data() {
    return {
      visible: false
    }
  },
  props: {
    position: {
      type: String, default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].includes(value)
      }
    }
  },
  methods: {
    handleTrigger(event) {
      if (!this.$refs.triggerWrapper.contains(event.target)) return
      if (this.visible) {
        this.close()
      } else {
        this.open()
      }
    },
    open() {
      this.visible = true
      this.$nextTick(() => {
        this.setContentPosition()
        document.addEventListener('click', this.handleDocument)
      })
    },
    close() {
      this.visible = false
      document.removeEventListener('click', this.handleDocument)
    },
    setContentPosition() {
      document.body.appendChild(this.$refs.contentWrapper)
      const {contentWrapper, triggerWrapper} = this.$refs
      const {width, height, left, top} = triggerWrapper.getBoundingClientRect()
      const {width: width2, height: height2} = contentWrapper.getBoundingClientRect()
      if (this.position === 'top' || this.position === 'bottom') {
        contentWrapper.style.left = left + window.scrollX + 'px'
        const tempHeight = this.position === 'top' ? (-height2) : height
        contentWrapper.style.top = top + window.scrollY + tempHeight + 'px'
      }
      if (this.position === 'left' || this.position === 'right') {
        const tempWidth = this.position === 'left' ? (-width2) : width
        contentWrapper.style.left = left + window.scrollX + tempWidth + 'px'
        contentWrapper.style.top = top + window.scrollY - (height2 - height) / 2 + 'px'
      }
    },
    handleDocument(e) {
      const {popover, contentWrapper} = this.$refs
      if (popover && (e.target === popover || popover.contains(e.target))) return
      if (contentWrapper && (e.target === contentWrapper || contentWrapper.contains(e.target))) return
      this.close()
    },
  }
}
</script>

<style scoped lang="scss">
$border-color: #333;
$border-radius: 4px;
.g-popover-content-wrapper {
  max-width: 20em;
  background: #fff;
  border: 1px solid $border-color; border-radius: $border-radius;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5)); word-break: break-all;
  padding: 10px;
  position: absolute;
  &::before, &::after {
    content: "";
    display: block;
    width: 0; height: 0;
    border: 10px solid transparent;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-10px);
    &::before {
      border-top-color: #000;
      left: 10px; top: 100%;
    }
    &::after {
      border-top-color: #fff;
      left: 10px; top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    transform: translateY(10px);
    &::before {
      border-bottom-color: #000;
      left: 10px; bottom: 100%;
    }
    &::after {
      border-bottom-color: #fff;
      left: 10px; bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-10px);
    &::before {
      border-left-color: #000;
      top: 50%; left: 100%;
      transform: translateY(-50%);
    }
    &::after {
      border-left-color: #fff;
      top: 50%; left: calc(100% - 1px);
      transform: translateY(-50%);
    }
  }
  &.position-right {
    transform: translateX(10px);
    &::before {
      border-right-color: #000;
      top: 50%; right: 100%;
      transform: translateY(-50%);
    }
    &::after {
      border-right-color: #fff;
      top: 50%; right: calc(100% - 1px);
      transform: translateY(-50%);
    }
  }
}

.g-popover {
  display: inline-block;
  vertical-align: middle;
  position: relative;
  > .trigger-wrapper { display: inline-block; }
}
</style>

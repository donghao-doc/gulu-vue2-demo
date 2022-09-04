<template>
  <div ref="popover" class="g-popover" @click="handleTrigger">
    <div v-if="visible" ref="contentWrapper" class="g-popover-content-wrapper">
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
      const {contentWrapper, triggerWrapper} = this.$refs
      const {left, top} = triggerWrapper.getBoundingClientRect()
      contentWrapper.style.left = left + window.scrollX + 'px'
      contentWrapper.style.top = top + window.scrollY + 'px'
      document.body.appendChild(contentWrapper)
    },
    handleDocument(e) {
      const { popover, contentWrapper } = this.$refs
      if (popover && (e.target === popover || popover.contains(e.target))) return
      if (contentWrapper && contentWrapper.contains(e.target)) return
      this.close()
    },


  }
}
</script>

<style scoped lang="scss">
.g-popover-content-wrapper {
  border: 1px solid green;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(-100%);
}

.g-popover {
  display: inline-block;
  vertical-align: middle;
  position: relative;
  > .trigger-wrapper {
    border: 1px solid red;
  }
}
</style>

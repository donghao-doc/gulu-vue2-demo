<template>
  <div class="g-popover" @click.stop="handleTrigger">
    <div v-if="visible" ref="contentWrapper" class="g-popover-content-wrapper" @click.stop>
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
    handleTrigger() {
      this.visible = !this.visible
      if (this.visible) {
        const eventHandler = () => {
          this.visible = false
          document.removeEventListener('click', eventHandler)
        }
        document.addEventListener('click', eventHandler)
        this.$nextTick(() => {
          const { contentWrapper, triggerWrapper } = this.$refs
          const { left, top } = triggerWrapper.getBoundingClientRect()
          contentWrapper.style.left = left + window.scrollX + 'px'
          contentWrapper.style.top = top + window.scrollY + 'px'
          document.body.appendChild(this.$refs.contentWrapper)
        })
      }
    }
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

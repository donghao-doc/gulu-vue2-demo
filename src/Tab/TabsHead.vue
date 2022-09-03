<template>
  <div class="g-tabsHead">
    <div class="tabsItem-wrapper">
      <slot></slot>
      <i :style="{width: line.width, transform: `translateX(${line.translateX})`}" class="line"></i>
    </div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GTabsHead',
  inject: ['eventBus'],
  data() {
    return {
      line: {
        width: '',
        translateX: ''
      }
    }
  },
  mounted() {
    this.eventBus.$on('update:selected', (name) => {
      console.log(this)
      if (this.$options.name !== 'GTabsHead') return
      const activeItem = this.$children.filter(item => item.name === name)[0]
      // this.line.width = getComputedStyle(activeItem.$el).width
      this.line.width = `${activeItem.$el.getBoundingClientRect().width}px`
      this.line.translateX = `${activeItem.$el.offsetLeft}px`
    })
  }
}
</script>

<style scoped lang="scss">
.g-tabsHead {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  > .tabsItem-wrapper {
    display: flex;
    &::after {
      content: "";
      width: 100%;
      height: 2px;
      background: #e4e7ed;
      position: absolute;
      left: 0;
      bottom: 0;
    }
    > .line {
      height: 2px;
      background: #409eff;
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 1;
      transition: all 0.2s linear;
    }
  }
  > .actions-wrapper { margin-left: auto; }
}
</style>

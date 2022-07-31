<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ButtonGroup',
  mounted() {
    for (let node of this.$el.children) {
      const tagName = node.nodeName.toLowerCase()
      if (tagName !== 'button') {
        console.warn(`g-button-group 的子元素应该全是 g-button，但是你写了 ${tagName}`)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.g-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .g-button {
    border-radius: 0;
    &:first-child { border-radius: var(--border-radius) 0 0 var(--border-radius); }
    &:last-child { border-radius: 0 var(--border-radius) var(--border-radius) 0; }
    &:not(:first-child) { margin-left: -1px; }
    &:hover { position: relative; z-index: 1; }
  }
}
</style>

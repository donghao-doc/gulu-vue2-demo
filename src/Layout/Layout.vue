<template>
  <div :class="['g-layout', {'has-sider': hasSider}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GLayout',
  data() {
    return {
      hasSider: false
    }
  },
  mounted() {
    this.$children.forEach(item => {
      if (item.$options.name === 'GSider') {
        this.hasSider = true
      }
    })
  }
}
</script>

<style scoped lang="scss">
.g-layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.has-sider {
    flex-direction: row;
    flex-grow: 1;
  }
}
</style>

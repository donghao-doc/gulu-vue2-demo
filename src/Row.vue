<template>
  <div :style="{marginLeft: `-${gutter/2}px`, marginRight: `-${gutter/2}px`}" class="g-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GRow',
  props: {
    gutter: [String, Number]
  }
}
</script>

<style scoped lang="scss">
.g-row { display: flex; }
</style>

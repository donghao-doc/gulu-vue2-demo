<template>
  <div
    :style="{marginLeft: `-${gutter/2}px`, marginRight: `-${gutter/2}px`}"
    :class="['g-row', align && `align-${align}`]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GRow',
  props: {
    gutter: [String, Number],
    align: {
      type: String,
      validator(value) {
        const validValue = ['left', 'center', 'right']
        return validValue.includes(value)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.g-row {
  display: flex;
  &.align-center { justify-content: center; }
  &.align-right { justify-content: right; }
}
</style>

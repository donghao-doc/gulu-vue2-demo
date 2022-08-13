<template>
  <div :class="['g-col', `col-${span}`, offset && `offset-${offset}`]"></div>
</template>

<script>
export default {
  name: 'GCol',
  props: {
    span: {type: [String, Number]},
    offset: {type: [String, Number]}
  }
}
</script>

<style scoped lang="scss">
.g-col {
  flex-grow: 1;
  height: 50px;
  background: grey;
  border: 1px solid red;
  @for $i from 1 through 24 {
    &.col-#{$i} { width: $i / 24 * 100%; }
    &.offset-#{$i} { margin-left: $i / 24 * 100%; }
  }
}
</style>

<template>
  <div
    :style="{paddingLeft: `${gutter}px`, paddingRight: `${gutter}px`}"
    :class="['g-col', span && `col-${span}`, offset && `offset-${offset}`]"
  ></div>
</template>

<script>
export default {
  name: 'GCol',
  props: {
    span: {type: [String, Number]},
    offset: {type: [String, Number]}
  },
  data() {
    return {
      gutter: 0
    }
  },
  created() {
    this.gutter = this.$parent.gutter / 2
  }
}
</script>

<style scoped lang="scss">
.g-col {
  flex-grow: 1;
  height: 50px;
  background: grey;
  border: 1px solid red;
  padding: 0 10px;
  @for $i from 1 through 24 {
    &.col-#{$i} { width: $i / 24 * 100%; }
    &.offset-#{$i} { margin-left: $i / 24 * 100%; }
  }
}
</style>

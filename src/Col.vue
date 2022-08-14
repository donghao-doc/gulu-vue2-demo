<template>
  <div
    :style="{paddingLeft: `${gutter}px`, paddingRight: `${gutter}px`}"
    :class="[
      'g-col',
      span && `col-${span}`, offset && `offset-${offset}`,
      pad && `col-pad-${pad.span}`,
      narrowPc && `col-narrowPc-${narrowPc.span}`, pc && `col-pc-${pc.span}`, widePc && `col-widePc-${widePc.span}`
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
const validator = (value) => {
  const keys = Object.keys(value)
  const validValue = ['span', 'offset']
  let valid = true
  for (let i = 0; i < keys.length; i++) {
    if (!validValue.includes(keys[i])) {
      valid = false
      break
    }
  }
  return valid
}
export default {
  name: 'GCol',
  props: {
    span: {type: [String, Number]},
    offset: {type: [String, Number]},
    pad: {type: Object, validator},
    narrowPc: {type: Object, validator},
    pc: {type: Object, validator},
    widePc: {type: Object, validator}
  },
  data() {
    return {
      gutter: 0
    }
  },
  created() {
    if (this.$parent.gutter) {
      this.gutter = this.$parent.gutter / 2
    }
  }
}
</script>

<style scoped lang="scss">
.g-col {
  @for $i from 1 through 24 {
    &.col-#{$i} { width: $i / 24 * 100%; }
    &.offset-#{$i} { margin-left: $i / 24 * 100%; }
  }
  @media (min-width: 577px) {
    @for $i from 1 through 24 {
      &.col-pad-#{$i} { width: $i / 24 * 100%; }
      &.offset-pad-#{$i} { margin-left: $i / 24 * 100%; }
    }
  }
  @media (min-width: 769px) {
    @for $i from 1 through 24 {
      &.col-narrowPc-#{$i} { width: $i / 24 * 100%; }
      &.offset-narrowPc-#{$i} { margin-left: $i / 24 * 100%; }
    }
  }
  @media (min-width: 993px) {
    @for $i from 1 through 24 {
      &.col-pc-#{$i} { width: $i / 24 * 100%; }
      &.offset-pc-#{$i} { margin-left: $i / 24 * 100%; }
    }
  }
  @media (min-width: 1201px) {
    @for $i from 1 through 24 {
      &.col-widePc-#{$i} { width: $i / 24 * 100%; }
      &.offset-widePc-#{$i} { margin-left: $i / 24 * 100%; }
    }
  }
}
</style>

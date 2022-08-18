<template>
  <div :style="{paddingLeft: `${gutter}px`, paddingRight: `${gutter}px`}" :class="colClass" class="g-col">
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
  computed: {
    colClass() {
      const {span, offset, pad, narrowPc, pc, widePc} = this
      const createClasses = (obj, model = '') => {
        const arr = []
        if (!obj) return arr
        if (obj.span) arr.push(`col-${model}${obj.span}`)
        if (obj.offset) arr.push(`offset-${model}${obj.offset}`)
        return arr
      }
      return [
        ...createClasses({span, offset}), ...createClasses(pad, 'pad-'),
        ...createClasses(narrowPc, 'narrowPc-'), ...createClasses(pc, 'pc-'), ...createClasses(widePc, 'widePc-'),
      ]
    }
  },
  created() {
    if (this.$parent && this.$parent.gutter) {
      this.gutter = this.$parent.gutter / 2
    }
  }
}
</script>

<style scoped lang="scss">
.g-col {
  @for $i from 1 through 24 {
    &.col-#{$i} { width: calc($i / 24 * 100%); }
    &.offset-#{$i} { margin-left: calc($i / 24 * 100%); }
  }
  @media (min-width: 577px) {
    @for $i from 1 through 24 {
      &.col-pad-#{$i} { width: calc($i / 24 * 100%); }
      &.offset-pad-#{$i} { margin-left: calc($i / 24 * 100%); }
    }
  }
  @media (min-width: 769px) {
    @for $i from 1 through 24 {
      &.col-narrowPc-#{$i} { width: calc($i / 24 * 100%); }
      &.offset-narrowPc-#{$i} { margin-left: calc($i / 24 * 100%); }
    }
  }
  @media (min-width: 993px) {
    @for $i from 1 through 24 {
      &.col-pc-#{$i} { width: calc($i / 24 * 100%); }
      &.offset-pc-#{$i} { margin-left: calc($i / 24 * 100%); }
    }
  }
  @media (min-width: 1201px) {
    @for $i from 1 through 24 {
      &.col-widePc-#{$i} { width: calc($i / 24 * 100%); }
      &.offset-widePc-#{$i} { margin-left: calc($i / 24 * 100%); }
    }
  }
}
</style>

<template>
  <button :class="['g-button', {[`icon-${iconPosition}`]: icon}]" @click="$emit('click')">
    <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
    <g-icon v-if="loading" name="loading" class="icon"></g-icon>
    <span class="content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import Icon from './Icon.vue'
export default {
  name: 'GButton',
  components: { 'g-icon': Icon },
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        const validValue = ['left', 'right']
        return validValue.includes(value)
      }
    },
    loading: { type: Boolean, default: false }
  }
}
</script>

<style scoped lang="scss">
$font-size: 14px;
$button-height: 32px;
$button-bg: #fff;
$button-bg-active: #eee;
$border-radius: 4px;
$border-color: #999;
$border-color-hover: #666;

.g-button {
  height: $button-height;
  background: $button-bg;
  font-size: $font-size;
  border: 1px solid $border-color; border-radius: $border-radius;
  padding: 0 1em;
  display: inline-flex; align-items: center;
  vertical-align: middle;
  &:hover { border-color: $border-color-hover; }
  &:active { background: $button-bg-active; }
  &:focus { outline: none; }
  &, &.icon-left {
    > .icon { order: 1; margin-right: .2em; }
    > .content { order: 2; }
  }
  &.icon-right {
    > .icon { order: 2; margin-left: .2em; margin-right: 0; }
    > .content { order: 1; }
  }
}
</style>

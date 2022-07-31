<template>
  <button :class="['g-button', {[`icon-${iconPosition}`]: icon}]">
    <g-icon v-if="icon" :name="icon" class="icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        const validValue = ['left', 'right']
        return validValue.includes(value)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.g-button {
  height: var(--button-height);
  background: var(--button-bg);
  font-size: var(--font-size);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  padding: 0 1em;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  &:hover { border-color: var(--border-color-hover); }
  &:active { background: var(--button-bg-active); }
  &:focus { outline: none; }
  &.icon-left {
    > .icon { order: 1; margin-right: .2em; }
    > .content { order: 2; }
  }
  &.icon-right {
    > .icon { order: 2; margin-left: .2em; margin-right: 0; }
    > .content { order: 1; }
  }
}
</style>

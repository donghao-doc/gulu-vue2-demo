<template>
  <div class="input-wrapper">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly" :class="{error}">
    <template v-if="error">
      <g-icon name="error" class="error-icon"></g-icon>
      <span class="error-message">{{ error }}</span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    value: { type: String },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    error: { type: String }
  }
}
</script>

<style scoped lang="scss">
$height: 32px;
$font-size: 12px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$disabled-color: #bbb;
$error-color: #f1453d;
.input-wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > input {
    height: $height;
    font-size: inherit;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    &:hover { border-color: $border-color-hover; }
    &:focus { outline: none; box-shadow: inset 0 1px 3px $box-shadow-color; }
    &[disabled] { color: $disabled-color; border-color: $disabled-color; cursor: not-allowed; }
    &[readonly] { color: $disabled-color; border-color: $disabled-color; }
    &.error {
      border: 1px solid $error-color;
    }
  }
  > .error-icon { fill: $error-color; margin: 0 .5em; }
  > .error-message { color: $error-color; }
}
</style>

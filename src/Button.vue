<template>
  <button class="g-button">按钮</button>
</template>

<script>
export default {
  name: 'Button'
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
  &:hover { border-color: var(--border-color-hover); }
  &:active { background: var(--button-bg-active); }
  &:focus { outline: none; }
}
</style>

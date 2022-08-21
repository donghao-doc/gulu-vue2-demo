<template>
  <div class="g-toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GToast'
}
</script>

<style scoped lang="scss">
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.g-toast {
  color: #fff; font-size: $font-size;
  height: $toast-height; line-height: 1.8;
  background: $toast-bg; border-radius: 4px; box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 1em;
  display: flex; align-items: center;
  position: fixed; left: 50%; top: 0; transform: translateX(-50%);
}
</style>

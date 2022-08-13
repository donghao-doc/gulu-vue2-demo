<template>
  <div class="g-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GRow'
}
</script>

<style scoped lang="scss">
.g-row { display: flex; }
</style>

<template>
  <div class="g-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GContent'
}
</script>

<style scoped>
.g-content {
  flex-grow: 1;
}
</style>

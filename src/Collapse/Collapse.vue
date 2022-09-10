<template>
  <div class="g-collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GCollapse'
}
</script>

<style scoped lang="scss">
$grey: #ddd;
$border-radius: 4px;

.g-collapse {
  border: 1px solid $grey; border-radius: $border-radius;
}
</style>

<template>
  <div class="g-tabsHead">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  name: 'GTabsHead'
}
</script>

<style scoped>
.g-tabsHead {}
</style>

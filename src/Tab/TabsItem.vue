<template>
  <div class="g-tabsItem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GTabsItem',
  props: {
    disabled: { type: Boolean, default: false }
  }
}
</script>

<style scoped>
.g-tabsItem {}
</style>

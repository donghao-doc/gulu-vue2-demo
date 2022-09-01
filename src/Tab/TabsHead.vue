<template>
  <div class="g-tabsHead">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GTabsHead'
}
</script>

<style scoped lang="scss">
.g-tabsHead {
  background: #f5f7fa;
  border-top: 1px solid #e4e7ed; border-bottom: 1px solid #e4e7ed;
  display: flex; justify-content: flex-start; align-items: center;
  > .actions-wrapper {
    flex-shrink: 0;
    margin-left: auto;
  }
}
</style>

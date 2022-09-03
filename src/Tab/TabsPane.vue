<template>
  <div :class="['g-tabsPane', {active}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GTabsPane',
  data() {
    return {
      active: false
    }
  },
  inject: ['eventBus'],
  props: {
    name: { type: [String, Number], required: true }
  },
  mounted() {
    this.eventBus && this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  }
}
</script>

<style scoped lang="scss">
.g-tabsPane {
  display: none;
  padding: 10px;
  &.active {
    display: block;
  }
}
</style>

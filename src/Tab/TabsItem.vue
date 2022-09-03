<template>
  <div :class="['g-tabsItem', {active}]" @click="switchTab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GTabsItem',
  data() {
    return {
      active: false
    }
  },
  inject: ['eventBus'],
  props: {
    disabled: { type: Boolean, default: false },
    name: { type: [String, Number], required: true }
  },
  mounted() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  },
  methods: {
    switchTab() {
      this.eventBus.$emit('update:selected', this.name)
    }
  }
}
</script>

<style scoped lang="scss">
$tab-height: 40px;
$tab-active-color: #409eff;
.g-tabsItem {
  height: $tab-height;
//   flex-shrink: 0;
  padding: 0 20px;
  display: flex; align-items: center;
  cursor: pointer;
  &:hover { color: $tab-active-color; }
  &.active { color: $tab-active-color; }
}
</style>

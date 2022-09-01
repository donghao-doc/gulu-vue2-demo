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
.g-tabsItem {
  height: $tab-height;
  flex-shrink: 0;
  border-left: 1px solid transparent; border-right: 1px solid transparent;
  padding: 0 20px;
  display: flex; align-items: center;
  cursor: pointer;
  &:hover { color: #409eff; }
  &.active {
    color: #409eff;
    background: #fff; border-right-color: #dcdfe6; border-left-color: #dcdfe6;
  }
}
</style>

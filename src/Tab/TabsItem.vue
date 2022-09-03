<template>
  <div :class="['g-tabsItem', {active, disabled}]" :data-name="name" @click="switchTab">
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
    this.eventBus && this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  },
  methods: {
    switchTab() {
      if (this.disabled) return
      this.eventBus && this.eventBus.$emit('update:selected', this.name)
      this.$emit('click', this)   // 用于单元测试时点击触发 click 事件
    }
  }
}
</script>

<style scoped lang="scss">
$tab-height: 40px;
$tab-active-color: #409eff;
$tab-disabled-color: grey;
.g-tabsItem {
  height: $tab-height;
  padding: 0 20px;
  display: flex; align-items: center;
  cursor: pointer;
  &:hover { color: $tab-active-color; }
  &.active { color: $tab-active-color; }
  &.disabled { color: $tab-disabled-color; cursor: not-allowed; }
}
</style>

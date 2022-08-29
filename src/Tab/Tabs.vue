<template>
  <div class="g-tabs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GTabs',
  props: {
    selected: { type: String, required: true },
    direction: {
      type: String, default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].includes(value)
      }
    }
  }
}
</script>

<style scoped>
.g-tabs {}
</style>

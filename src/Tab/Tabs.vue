<template>
  <div class="g-tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'GTabs',
  data() {
    return {
      eventBus: new Vue()
    }
  },
  props: {
    selected: { type: String, required: true },
    direction: {
      type: String, default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].includes(value)
      }
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    this.eventBus.$emit('update:selected', this.selected)
  }
}
</script>

<style scoped>
.g-tabs {}
</style>

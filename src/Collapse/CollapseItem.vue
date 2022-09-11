<template>
  <div class="g-collapseItem">
    <div :data-name="name" class="title" @click="toggle">{{ title }}</div>
    <div v-show="open" ref="content" class="content"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'GCollapseItem',
  inject: ['eventBus'],
  props: {
    title: { type: String, required: true },
    name: { type: String, required: true }
  },
  data() {
    return {
      open: false
    }
  },
  mounted() {
    this.eventBus && this.eventBus.$on('update:selected', names => {
      if (names && names.length) {
        this.open = names.includes(this.name)
      }
    })
  },
  methods: {
    toggle() {
      if (!this.eventBus) return
      if (this.open) {
        this.eventBus.$emit('update:removeSelected', this.name)
      } else {
        this.eventBus.$emit('update:addSelected', this.name)
      }
    }
  }
}
</script>

<style scoped lang="scss">
$grey: #ddd;
$border-radius: 4px;

.g-collapseItem {
  > .title {
    min-height: 32px;
    background: lighten($grey, 8%);
    border: 1px solid $grey;
    display: flex; align-items: center;
    padding: 0 8px;
    margin-top: -1px; margin-left: -1px; margin-right: -1px;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius; border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: $border-radius; border-bottom-right-radius: $border-radius;
    }
  }
  > .content { padding: 8px; }
}
</style>

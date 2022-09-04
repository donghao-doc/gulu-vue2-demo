<template>
  <div class="g-popover" @click="toggleContent">
    <div v-if="visible" class="content-wrapper">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GPopover',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    toggleContent() {
      this.visible = !this.visible
    }
  }
}
</script>

<style scoped lang="scss">
.g-popover {
  border: 1px solid red;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  > .content-wrapper {
    border: 1px solid green;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0;
    bottom: 100%;
  }
}
</style>

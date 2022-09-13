<template>
  <div>

    <g-button>默认按钮</g-button>
    <g-button :loading="loading1" @click="loading1 = !loading1">按钮1</g-button>
    <g-button icon="settings" :loading="loading2" @click="loading2 = !loading2">按钮2</g-button>
    <g-button icon="settings" icon-position="left" :loading="loading3" @click="loading3 = !loading3">按钮3</g-button>
    <g-button icon="settings" icon-position="right" :loading="loading4" @click="loading4 = !loading4">按钮4</g-button>
    <g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button>更多</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>

    <pre>
      <code>{{ code }}</code>
    </pre>

  </div>
</template>

<script>
import Button from '../../../src/Button.vue'
import ButtonGroup from '../../../src/ButtonGroup.vue'

export default {
  name: 'Button-demos',
  components: { 'g-button': Button, 'g-button-group': ButtonGroup },
  data() {
    return {
      loading1: false,
      loading2: true,
      loading3: false,
      loading4: false,
      code: `
        <g-button>默认按钮</g-button>
        <g-button :loading="loading1" @click="loading1 = !loading1">按钮1</g-button>
        <g-button icon="settings" :loading="loading2" @click="loading2 = !loading2">按钮2</g-button>
        <g-button icon="settings" icon-position="left" :loading="loading3" @click="loading3 = !loading3">按钮3</g-button>
        <g-button icon="settings" icon-position="right" :loading="loading4" @click="loading4 = !loading4">按钮4</g-button>
        <g-button-group>
          <g-button icon="left">上一页</g-button>
          <g-button>更多</g-button>
          <g-button icon="right" icon-position="right">下一页</g-button>
        </g-button-group>
      `
    }
  }
}
</script>

<style scoped>
pre {
  padding: 10px;
}
</style>

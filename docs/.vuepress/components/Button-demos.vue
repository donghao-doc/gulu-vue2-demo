<template>
  <div>

    <section>
      <p>基本用法</p>
      <g-button>默认按钮</g-button>
      <pre><code>{{ code1 }}</code></pre>
    </section>

    <section>
      <p>点击显示 loading</p>
      <g-button :loading="loading1" @click="loading1 = !loading1">按钮</g-button>
      <g-button icon="settings" :loading="loading2" @click="loading2 = !loading2">按钮</g-button>
      <pre><code>{{ code2 }}</code></pre>
    </section>

    <section>
      <p>设置 icon 位置</p>
      <g-button icon="settings" icon-position="left">按钮</g-button>
      <g-button icon="settings" icon-position="right">按钮</g-button>
      <pre><code>{{ code3 }}</code></pre>
    </section>

    <section>
      <p>按钮组</p>
      <g-button-group>
        <g-button icon="left">上一页</g-button>
        <g-button>更多</g-button>
        <g-button icon="right" icon-position="right">下一页</g-button>
      </g-button-group>
      <pre><code>{{ code4 }}</code></pre>
    </section>

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
      code1: '<g-button>默认按钮</g-button>',
      code2: `
        <g-button :loading="loading1" @click="loading1 = !loading1">按钮</g-button>
        <g-button icon="settings" :loading="loading2" @click="loading2 = !loading2">按钮</g-button>
      `.replace(/ /g, '').trim(),
      code3: `
        <g-button icon="settings" icon-position="left">按钮</g-button>
        <g-button icon="settings" icon-position="right">按钮</g-button>
      `.replace(/ /g, '').trim(),
      code4: `
        <g-button-group>
          <g-button icon="left">上一页</g-button>
          <g-button>更多</g-button>
          <g-button icon="right" icon-position="right">下一页</g-button>
        </g-button-group>
      `.replace(/^ {8}/gm, '').trim(),
    }
  }
}
</script>

<style scoped>

</style>

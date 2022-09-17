<template>
  <div>

    <section>
      <p>四个方位展示</p>
      <g-popover>
        <template v-slot:content>
          <div>内容内容内容</div>
        </template>
        <g-button>上</g-button>
      </g-popover>
      <g-popover position="bottom">
        <template v-slot:content>
          <div>内容内容内容</div>
        </template>
        <g-button>下</g-button>
      </g-popover>
      <g-popover position="left">
        <template v-slot:content>
          <div>内容内容内容</div>
        </template>
        <g-button>左</g-button>
      </g-popover>
      <g-popover position="right">
        <template v-slot:content>
          <div>内容内容内容</div>
        </template>
        <g-button>右</g-button>
      </g-popover>
      <pre><code>{{ code1 }}</code></pre>
    </section>

    <section>
      <p>包含关闭按钮</p>
      <g-popover>
        <template #content="{ close }">
          <div>内容内容内容</div>
          <g-button @click="close">关闭</g-button>
        </template>
        <g-button>click me</g-button>
      </g-popover>
      <pre><code>{{ code2 }}</code></pre>
    </section>

    <section>
      <p>包含 HTML 元素</p>
      <g-popover position="top">
        <div slot="content">内容内容 <a href="//qq.com">看新闻</a> 内容</div>
        <g-button>click me</g-button>
      </g-popover>
      <pre><code>{{ code3 }}</code></pre>
    </section>

    <section>
      <p>鼠标移入触发</p>
      <g-popover trigger="hover">
        <div slot="content">内容内容内容</div>
        <g-button>click me</g-button>
      </g-popover>
      <pre><code>{{ code4 }}</code></pre>
    </section>

  </div>
</template>

<script>
import Popover from '../../../src/Popover.vue'
import Button from '../../../src/Button.vue'

export default {
  name: 'Popover-demos',
  components: { 'g-popover': Popover, 'g-button': Button },
  data() {
    return {
      code1: `
        <g-popover>
          <template v-slot:content>
            <div>内容内容内容</div>
          </template>
          <g-button>上</g-button>
        </g-popover>
        <g-popover position="bottom">
          <template v-slot:content>
            <div>内容内容内容</div>
          </template>
          <g-button>下</g-button>
        </g-popover>
        <g-popover position="left">
          <template v-slot:content>
            <div>内容内容内容</div>
          </template>
          <g-button>左</g-button>
        </g-popover>
        <g-popover position="right">
          <template v-slot:content>
            <div>内容内容内容</div>
          </template>
          <g-button>右</g-button>
        </g-popover>
      `.replace(/^ {8}/gm, '').trim(),
      code2: `
        <g-popover>
          <template #content="{ close }">
            <div>内容内容内容</div>
            <g-button @click="close">关闭</g-button>
          </template>
          <g-button>click me</g-button>
        </g-popover>
      `.replace(/^ {8}/gm, '').trim(),
      code3: `
        <g-popover position="top">
          <div slot="content">内容内容 <a href="//qq.com">看新闻</a> 内容</div>
          <g-button>click me</g-button>
        </g-popover>
      `.replace(/^ {8}/gm, '').trim(),
      code4: `
        <g-popover trigger="hover">
          <div slot="content">内容内容内容</div>
          <g-button>click me</g-button>
        </g-popover>
      `.replace(/^ {8}/gm, '').trim()
    }
  },
}
</script>

<style scoped>

</style>

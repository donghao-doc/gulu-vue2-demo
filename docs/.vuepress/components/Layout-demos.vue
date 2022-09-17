<template>
  <div>

    <section>
      <p>基础布局</p>
      <g-layout style="height: 200px; background-color: #eee">
        <g-header style="border: 1px solid #aaa" class="center_flex">header</g-header>
        <g-content style="border: 1px solid #aaa" class="center_flex">content</g-content>
        <g-footer style="border: 1px solid #aaa" class="center_flex">footer</g-footer>
      </g-layout>
      <pre><code>{{ code1 }}</code></pre>
    </section>

    <section>
      <p>侧边栏在内容左边</p>
      <g-layout style="height: 200px; background-color: #eee">
        <g-header style="border: 1px solid #aaa" class="center_flex">header</g-header>
        <g-layout>
          <g-sider style="border: 1px solid #aaa" class="center_flex">sider</g-sider>
          <g-content style="border: 1px solid #aaa" class="center_flex">content</g-content>
        </g-layout>
        <g-footer style="border: 1px solid #aaa" class="center_flex">footer</g-footer>
      </g-layout>
      <pre><code>{{ code2 }}</code></pre>
    </section>

    <section>
      <p>侧边栏在内容右边</p>
      <g-layout style="height: 200px; background-color: #eee">
        <g-header style="border: 1px solid #aaa" class="center_flex">header</g-header>
        <g-layout>
          <g-content style="border: 1px solid #aaa" class="center_flex">content</g-content>
          <g-sider style="border: 1px solid #aaa" class="center_flex">sider</g-sider>
        </g-layout>
        <g-footer style="border: 1px solid #aaa" class="center_flex">footer</g-footer>
      </g-layout>
      <pre><code>{{ code3 }}</code></pre>
    </section>

    <section>
      <p>侧边栏在整体布局左边</p>
      <g-layout style="height: 200px; background-color: #eee">
        <g-sider style="border: 1px solid #aaa" class="center_flex">sider</g-sider>
        <g-layout>
          <g-header style="border: 1px solid #aaa" class="center_flex">header</g-header>
          <g-content style="border: 1px solid #aaa" class="center_flex">content</g-content>
          <g-footer style="border: 1px solid #aaa" class="center_flex">footer</g-footer>
        </g-layout>
      </g-layout>
      <pre><code>{{ code4 }}</code></pre>
    </section>



  </div>
</template>

<script>
import Layout from '../../../src/Layout/Layout.vue'
import Header from '../../../src/Layout/Header.vue'
import Footer from '../../../src/Layout/Footer.vue'
import Content from '../../../src/Layout/Content.vue'
import Sider from '../../../src/Layout/Sider.vue'

export default {
  name: 'Layout-demos',
  components: {
    'g-layout': Layout, 'g-header': Header, 'g-footer': Footer,
    'g-content': Content, 'g-sider': Sider
  },
  data() {
    return {
      code1: `
        <g-layout style="height: 200px; background-color: #eee">
          <g-header style="border: 1px solid #aaa">header</g-header>
          <g-content style="border: 1px solid #aaa">content</g-content>
          <g-footer style="border: 1px solid #aaa">footer</g-footer>
        </g-layout>
      `.replace(/^ {8}/gm, '').trim(),
      code2: `
        <g-layout style="height: 200px; background-color: #eee">
          <g-header style="border: 1px solid #aaa">header</g-header>
          <g-layout>
            <g-sider style="border: 1px solid #aaa">sider</g-sider>
            <g-content style="border: 1px solid #aaa">content</g-content>
          </g-layout>
          <g-footer style="border: 1px solid #aaa">footer</g-footer>
        </g-layout>
      `.replace(/^ {8}/gm, '').trim(),
      code3: `
        <g-layout style="height: 200px; background-color: #eee">
          <g-header style="border: 1px solid #aaa">header</g-header>
          <g-layout>
            <g-content style="border: 1px solid #aaa">content</g-content>
            <g-sider style="border: 1px solid #aaa">sider</g-sider>
          </g-layout>
          <g-footer style="border: 1px solid #aaa">footer</g-footer>
        </g-layout>
      `.replace(/^ {8}/gm, '').trim(),
      code4: `
        <g-layout style="height: 200px; background-color: #eee">
          <g-sider style="border: 1px solid #aaa" class="center_flex">sider</g-sider>
          <g-layout>
            <g-header style="border: 1px solid #aaa" class="center_flex">header</g-header>
            <g-content style="border: 1px solid #aaa" class="center_flex">content</g-content>
            <g-footer style="border: 1px solid #aaa" class="center_flex">footer</g-footer>
          </g-layout>
        </g-layout>
      `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>

<style scoped>
.center_flex {
  display: flex; justify-content: center; align-items: center;
}
</style>

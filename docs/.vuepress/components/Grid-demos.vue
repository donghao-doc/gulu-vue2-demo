<template>
  <div>

    <section>
      <p>响应式网格</p>
      <g-row style="background-color: #eee">
        <g-col
          v-for="item in 6" :key="item"
          span="24" :pad="{span: 12}" :narrow-pc="{span: 8}" :pc="{span: 6}" :wide-pc="{span: 4}"
        >
          <div style="border: 1px solid #aaa; height: 50px; text-align: center; line-height: 50px">{{ item }}</div>
        </g-col>
      </g-row>
      <pre><code>{{ code1 }}</code></pre>
    </section>

    <section>
      <p>设置偏移（offset）</p>
      <g-row style="background-color: #eee">
        <g-col span="24" :pad="{span: 12}" :narrow-pc="{span: 4}">
          <div style="border: 1px solid #aaa; height: 50px; text-align: center; line-height: 50px">1</div>
        </g-col>
        <g-col span="24" :pad="{span: 12}" :narrow-pc="{span: 8, offset: 4}">
          <div style="border: 1px solid #aaa; height: 50px; text-align: center; line-height: 50px">2</div>
        </g-col>
        <g-col span="24" :pad="{span: 12}" :narrow-pc="{span: 4, offset: 4}">
          <div style="border: 1px solid #aaa; height: 50px; text-align: center; line-height: 50px">3</div>
        </g-col>
      </g-row>
      <pre><code>{{ code2 }}</code></pre>
    </section>

    <section>
      <p>设置居中（align）</p>
      <g-row align="center" style="background-color: #eee">
        <g-col style="width: 100px; border: 1px solid #aaa; height: 50px; text-align: center; line-height: 50px">1</g-col>
        <g-col style="width: 100px; border: 1px solid #aaa; height: 50px; text-align: center; line-height: 50px">2</g-col>
      </g-row>
      <pre><code>{{ code3 }}</code></pre>
    </section>

    <section>
      <p>设置间隙（gutter）</p>
      <g-row :gutter="20" style="background-color: #eee">
        <g-col :span="2" :pc="{span: 6}" :wide-pc="{span: 8}">
          <div style="border: 1px solid #aaa; height: 50px; text-align: center; line-height: 50px">1</div>
        </g-col>
        <g-col :span="20" :pc="{span: 12}" :wide-pc="{span: 8}">
          <div style="border: 1px solid #aaa; height: 50px; text-align: center; line-height: 50px">2</div>
        </g-col>
      </g-row>
      <pre><code>{{ code4 }}</code></pre>
    </section>

  </div>
</template>

<script>
import Row from '../../../src/Grid/Row.vue'
import Col from '../../../src/Grid/Col.vue'

export default {
  name: 'Grid-demos',
  components: { 'g-row': Row, 'g-col': Col },
  data() {
    return {
      code1: `
        <g-row style="background-color: #eee">
          <g-col
            v-for="item in 6" :key="item"
            span="24" :pad="{span: 12}" :narrow-pc="{span: 8}" :pc="{span: 6}" :wide-pc="{span: 4}"
          >
            <div style="border: 1px solid #ccc; height: 50px; text-align: center; line-height: 50px">{{ item }}</div>
          </g-col>
        </g-row>
      `.replace(/^ {8}/gm, '').trim(),
      code2: `
        <g-row style="background-color: #eee">
          <g-col span="24" :pad="{span: 12}" :narrow-pc="{span: 4}">
            <div style="border: 1px solid #aaa; height: 50px; text-align: center; line-height: 50px">1</div>
          </g-col>
          <g-col span="24" :pad="{span: 12}" :narrow-pc="{span: 8, offset: 4}">
            <div style="border: 1px solid #aaa; height: 50px; text-align: center; line-height: 50px">2</div>
          </g-col>
          <g-col span="24" :pad="{span: 12}" :narrow-pc="{span: 4, offset: 4}">
            <div style="border: 1px solid #aaa; height: 50px; text-align: center; line-height: 50px">3</div>
          </g-col>
        </g-row>
      `.replace(/^ {8}/gm, '').trim(),
      code3: `
        <g-row align="center" style="background-color: #eee">
          <g-col style="width: 100px; border: 1px solid #aaa; height: 50px; text-align: center; line-height: 50px">1</g-col>
          <g-col style="width: 100px; border: 1px solid #aaa; height: 50px; text-align: center; line-height: 50px">2</g-col>
        </g-row>
      `.replace(/^ {8}/gm, '').trim(),
      code4: `
        <g-row :gutter="20" style="background-color: #eee">
          <g-col :span="2" :pc="{span: 6}" :wide-pc="{span: 8}">
            <div style="border: 1px solid #aaa; height: 50px; text-align: center; line-height: 50px">1</div>
          </g-col>
          <g-col :span="20" :pc="{span: 12}" :wide-pc="{span: 8}">
            <div style="border: 1px solid #aaa; height: 50px; text-align: center; line-height: 50px">2</div>
          </g-col>
        </g-row>
      `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>

<style scoped>

</style>

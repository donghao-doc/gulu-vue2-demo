<template>
  <div>

    <section>
      <p>禁用</p>
      <g-input value="张三" :disabled="true"></g-input>
      <pre><code>{{ code1 }}</code></pre>
    </section>

    <section>
      <p>只读</p>
      <g-input value="张三" :readonly="true"></g-input>
      <pre><code>{{ code2 }}</code></pre>
    </section>

    <section>
      <p>错误提示</p>
      <g-input value="张三" error="错误"></g-input>
      <pre><code>{{ code3 }}</code></pre>
    </section>

    <section>
      <p>事件</p>
      <g-input value="input事件" @input="onInput"></g-input>
      <g-input value="change事件" @change="onChange"></g-input>
      <g-input value="focus事件" @focus="onFocus"></g-input>
      <g-input value="blur事件" @blur="onBlur"></g-input>
      <pre><code>{{ code4 }}</code></pre>
    </section>

    <section>
      <p>双向绑定</p>
      <g-input v-model="message"></g-input> <span>{{ message }}</span>
      <pre><code>{{ code5 }}</code></pre>
    </section>

  </div>
</template>

<script>
import Input from '../../../src/Input.vue'

export default {
  name: 'Input-demos',
  components: { 'g-input': Input },
  data() {
    return {
      message: '你好世界',
      code1: '<g-input value="张三" :disabled="true"></g-input>',
      code2: '<g-input value="张三" :readonly="true"></g-input>',
      code3: '<g-input value="张三" error="错误"></g-input>',
      code4: `
        <g-input value="input事件" @input="onInput"></g-input>
        <g-input value="change事件" @change="onChange"></g-input>
        <g-input value="focus事件" @focus="onFocus"></g-input>
        <g-input value="blur事件" @blur="onBlur"></g-input>
      `.replace(/^ {8}/gm, '').trim(),
      code5: '<g-input v-model="message"></g-input>'
    }
  },
  methods: {
    onInput(value) {
      console.log(value)
    },
    onChange(value) {
      console.log(value)
    },
    onFocus(value) {
      console.log(value)
    },
    onBlur(value) {
      console.log(value)
    }
  }
}
</script>

<style scoped>

</style>

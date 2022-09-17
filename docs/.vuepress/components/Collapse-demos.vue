<template>
  <div>

    <section>
      <p>基本使用</p>
      <g-collapse>
        <g-collapse-item title="标题1" name="item1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" name="item2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" name="item3">内容3</g-collapse-item>
      </g-collapse>
    </section>

    <section>
      <p>默认展开</p>
      <g-collapse :single="true" :selected.sync="selected1">
        <g-collapse-item title="标题1" name="item1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" name="item2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" name="item3">内容3</g-collapse-item>
      </g-collapse>
    </section>

    <section>
      <p>允许展开多个</p>
      <g-collapse :single="false" :selected.sync="selected2">
        <g-collapse-item title="标题1" name="item1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" name="item2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" name="item3">内容3</g-collapse-item>
      </g-collapse>
    </section>

  </div>
</template>

<script>
import Collapse from '../../../src/Collapse/Collapse.vue'
import CollapseItem from '../../../src/Collapse/CollapseItem.vue'

export default {
  name: 'Collapse-demos',
  components: { 'g-collapse': Collapse, 'g-collapse-item': CollapseItem },
  data() {
    return {
      selected1: ['item2'],
      selected2: []
    }
  }
}
</script>

<style scoped>

</style>

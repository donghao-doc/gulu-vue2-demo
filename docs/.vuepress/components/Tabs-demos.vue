<template>
  <div>

    <section>
      <p>默认选中</p>
      <g-tabs :selected.sync="selectedTab2" style="background-color: #eee">
        <g-tabs-head>
          <g-tabs-item name="first">tab1</g-tabs-item>
          <g-tabs-item name="second">tab2</g-tabs-item>
          <g-tabs-item name="third">tab3</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="first">pane1</g-tabs-pane>
          <g-tabs-pane name="second">pane2</g-tabs-pane>
          <g-tabs-pane name="third">pane3</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
      <pre><code>{{ code1 }}</code></pre>
    </section>

    <section>
      <p>禁用 tab 项</p>
      <g-tabs :selected.sync="selectedTab3">
        <g-tabs-head>
          <g-tabs-item name="first">tab1</g-tabs-item>
          <g-tabs-item name="second" disabled>tab2</g-tabs-item>
          <g-tabs-item name="third">tab3</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="first">pane1</g-tabs-pane>
          <g-tabs-pane name="second">pane2</g-tabs-pane>
          <g-tabs-pane name="third">pane3</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
      <pre><code>{{ code2 }}</code></pre>
    </section>

    <section>
      <p>设置其他内容</p>
      <g-tabs :selected.sync="selectedTab4">
        <g-tabs-head>
          <g-tabs-item name="first">tab1</g-tabs-item>
          <g-tabs-item name="second">tab2</g-tabs-item>
          <g-tabs-item name="third">tab3</g-tabs-item>
          <template v-slot:actions>
            <g-button>设置</g-button>
          </template>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="first">pane1</g-tabs-pane>
          <g-tabs-pane name="second">pane2</g-tabs-pane>
          <g-tabs-pane name="third">pane3</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
      <pre><code>{{ code3 }}</code></pre>
    </section>

  </div>
</template>

<script>
import Tabs from '../../../src/Tab/Tabs.vue'
import TabsHead from '../../../src/Tab/TabsHead.vue'
import TabsItem from '../../../src/Tab/TabsItem.vue'
import TabsBody from '../../../src/Tab/TabsBody.vue'
import TabsPane from '../../../src/Tab/TabsPane.vue'
import Button from '../../../src/Button.vue'

export default {
  name: 'Tabs-demos',
  components: {
    'g-tabs': Tabs, 'g-tabs-head': TabsHead, 'g-tabs-body': TabsBody,
    'g-tabs-item': TabsItem, 'g-tabs-pane': TabsPane, 'g-button': Button
  },
  data() {
    return {
      selectedTab1: 'first',
      selectedTab2: 'second',
      selectedTab3: 'first',
      selectedTab4: 'first',
      code1: `
        <g-tabs :selected.sync="selectedTab2" style="background-color: #eee">
          <g-tabs-head>
            <g-tabs-item name="first">tab1</g-tabs-item>
            <g-tabs-item name="second">tab2</g-tabs-item>
            <g-tabs-item name="third">tab3</g-tabs-item>
          </g-tabs-head>
          <g-tabs-body>
            <g-tabs-pane name="first">pane1</g-tabs-pane>
            <g-tabs-pane name="second">pane2</g-tabs-pane>
            <g-tabs-pane name="third">pane3</g-tabs-pane>
          </g-tabs-body>
        </g-tabs>

        data() {
          return {
            selectedTab2: 'second'
          }
        }
      `.replace(/^ {8}/gm, '').trim(),
      code2: `
        <g-tabs :selected.sync="selectedTab3">
          <g-tabs-head>
            <g-tabs-item name="first">tab1</g-tabs-item>
            <g-tabs-item name="second" disabled>tab2</g-tabs-item>
            <g-tabs-item name="third">tab3</g-tabs-item>
          </g-tabs-head>
          <g-tabs-body>
            <g-tabs-pane name="first">pane1</g-tabs-pane>
            <g-tabs-pane name="second">pane2</g-tabs-pane>
            <g-tabs-pane name="third">pane3</g-tabs-pane>
          </g-tabs-body>
        </g-tabs>
      `.replace(/^ {8}/gm, '').trim(),
      code3: `
        <g-tabs :selected.sync="selectedTab4">
          <g-tabs-head>
            <g-tabs-item name="first">tab1</g-tabs-item>
            <g-tabs-item name="second">tab2</g-tabs-item>
            <g-tabs-item name="third">tab3</g-tabs-item>
            <template v-slot:actions>
              <g-button>设置</g-button>
            </template>
          </g-tabs-head>
          <g-tabs-body>
            <g-tabs-pane name="first">pane1</g-tabs-pane>
            <g-tabs-pane name="second">pane2</g-tabs-pane>
            <g-tabs-pane name="third">pane3</g-tabs-pane>
          </g-tabs-body>
        </g-tabs>
      `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>

<style scoped>

</style>

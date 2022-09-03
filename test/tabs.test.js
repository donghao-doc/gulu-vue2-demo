const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/Tab/Tabs.vue'
import TabsHead from '../src/Tab/TabsHead.vue'
import TabsItem from '../src/Tab/TabsItem.vue'
import TabsBody from '../src/Tab/TabsBody.vue'
import TabsPane from '../src/Tab/TabsPane.vue'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

  it('存在', () => {
    expect(Tabs).to.be.exist
  })

  it('可以设置 selected', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-tabs selected="second">
        <g-tabs-head>
          <g-tabs-item name="first">tab1</g-tabs-item>
          <g-tabs-item name="second">tab22</g-tabs-item>
          <g-tabs-item name="third">tab333</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="first">pane1</g-tabs-pane>
          <g-tabs-pane name="second">pane2</g-tabs-pane>
          <g-tabs-pane name="third">pane3</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    `
    const vm = new Vue({el: div})
    vm.$nextTick(() => {
      const activeItem = vm.$el.querySelector(`.g-tabsItem[data-name='second']`)
      expect(activeItem.classList.contains('active')).to.be.true
      done()
      vm.$el.remove()
      vm.$destroy()
    })
  })

})

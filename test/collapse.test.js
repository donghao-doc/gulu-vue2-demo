const expect = chai.expect
import Vue from 'vue'
import Collapse from '../src/Collapse/Collapse.vue'
import CollapseItem from '../src/Collapse/CollapseItem.vue'

Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Collapse', () => {

  it('存在', () => {
    expect(Collapse).to.be.exist
  })

  it('可以设置 single', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-collapse :single="true">
        <g-collapse-item title="标题1" name="item1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" name="item2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" name="item3">内容3</g-collapse-item>
      </g-collapse>
    `
    const vm = new Vue({ el: div })
    const collapseItems = vm.$el.querySelectorAll('.g-collapseItem')
    collapseItems.forEach(item => {
      const title = item.querySelector('.title')
      title.click()
    })
    vm.$nextTick(() => {
      const contents = vm.$el.querySelectorAll('.g-collapseItem > .content')
      let visibleCount = 0
      contents.forEach(content => {
        if (getComputedStyle(content).display === 'block') visibleCount += 1
      })
      expect(visibleCount).to.equal(1)
      done()
      vm.$el.remove()
      vm.$destroy()
    })
  })

  it('可以设置 selected', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-collapse :selected.sync="selected">
        <g-collapse-item title="标题1" name="item1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" name="item2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" name="item3">内容3</g-collapse-item>
      </g-collapse>
    `
    const vm = new Vue({ el: div, data: { selected: ['item2', 'item3'] } })
    vm.$nextTick(() => {
      const contents = vm.$el.querySelectorAll('.g-collapseItem > .content')
      let visibleCount = 0
      contents.forEach(content => {
        if (getComputedStyle(content).display === 'block') visibleCount += 1
      })
      expect(visibleCount).to.equal(2)
      done()
      vm.$el.remove()
      vm.$destroy()
    })
  })

})

const expect = chai.expect
import Vue from 'vue'
import CollapseItem from '../src/Collapse/CollapseItem.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('CollapseItem', () => {

  it('存在.', () => {
    expect(CollapseItem).to.be.exist
  })

  it('可以设置 title', () => {
    const Constructor = Vue.extend(CollapseItem)
    const vm = new Constructor({
      propsData: {
        title: '标题1'
      }
    }).$mount()
    const titleElement = vm.$el.querySelector('.title')
    expect(titleElement.textContent).to.equal('标题1')
    vm.$el.remove()
    vm.$destroy()
  })

  it('可以设置 name', () => {
    const Constructor = Vue.extend(CollapseItem)
    const vm = new Constructor({
      propsData: {
        name: 'item1'
      }
    }).$mount()
    const titleElement = vm.$el.querySelector('.title')
    expect(titleElement.getAttribute('data-name')).to.equal('item1')
    vm.$el.remove()
    vm.$destroy()
  })

  it('可以触发 click 事件', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(CollapseItem)
    const vm = new Constructor().$mount(div)
    const titleElement = vm.$el.querySelector('.title')
    const callback = sinon.fake()
    titleElement.addEventListener('click', callback)
    titleElement.click()
    expect(callback).to.have.been.called
    vm.$el.remove()
    vm.$destroy()
  })

})

const expect = chai.expect
import Vue from 'vue'
import TabsItem from '../src/Tab/TabsItem.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {

  it('存在', () => {
    expect(TabsItem).to.be.exist
  })

  it('可以设置 disabled', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: { disabled: true }
    }).$mount()
    expect(vm.$el.classList.contains('disabled')).to.be.true
    const callback = sinon.fake()
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
    vm.$el.remove()
    vm.$destroy()
  })

  it('可以设置 name', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: { name: 'hello' }
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).to.equal('hello')
    vm.$el.remove()
    vm.$destroy()
  })

})

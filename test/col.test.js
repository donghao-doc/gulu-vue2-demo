const expect = chai.expect
import Vue from 'vue'
import Col from '../src/Grid/Col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {

  it('存在.', () => {
    expect(Col).to.exist
  })

  it('可以设置span.', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        span: '1'
      }
    }).$mount(div)
    expect(Array.from(vm.$el.classList)).to.include('col-1')
    div.remove()
    vm.$destroy()
  })

  it('可以设置offset.', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        offset: 2
      }
    }).$mount(div)
    expect(Array.from(vm.$el.classList)).to.include('offset-2')
    div.remove()
    vm.$destroy()
  })

  it('可以设置 pad / narrowPc / pc / widePc.', () => {
    const propArr = ['pad', 'narrowPc', 'pc', 'widePc']
    propArr.forEach(item => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Col)
      const vm = new Constructor({
        propsData: {
          [item]: {span: 12, offset: 2}
        }
      }).$mount(div)
      expect(Array.from(vm.$el.classList)).to.include(`col-${item}-12`)
      expect(Array.from(vm.$el.classList)).to.include(`offset-${item}-2`)
      div.remove()
      vm.$destroy()
    })
  })

})

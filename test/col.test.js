const expect = chai.expect
import Vue from 'vue'
import Col from '../src/Col.vue'

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

  it('可以设置pad.', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        pad: {span: 12, offset: 2}
      }
    }).$mount(div)
    expect(Array.from(vm.$el.classList)).to.include('col-pad-12')
    expect(Array.from(vm.$el.classList)).to.include('offset-pad-2')
    div.remove()
    vm.$destroy()
  })

  it('可以设置narrowPc.', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        narrowPc: {span: 8, offset: 2}
      }
    }).$mount(div)
    expect(Array.from(vm.$el.classList)).to.include('col-narrowPc-8')
    expect(Array.from(vm.$el.classList)).to.include('offset-narrowPc-2')
    div.remove()
    vm.$destroy()
  })

  it('可以设置pc.', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        pc: {span: 6, offset: 2}
      }
    }).$mount(div)
    expect(Array.from(vm.$el.classList)).to.include('col-pc-6')
    expect(Array.from(vm.$el.classList)).to.include('offset-pc-2')
    div.remove()
    vm.$destroy()
  })

  it('可以设置widePc.', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        widePc: {span: 4, offset: 2}
      }
    }).$mount(div)
    expect(Array.from(vm.$el.classList)).to.include('col-widePc-4')
    expect(Array.from(vm.$el.classList)).to.include('offset-widePc-2')
    div.remove()
    vm.$destroy()
  })

})

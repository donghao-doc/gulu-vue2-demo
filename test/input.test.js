const expect = chai.expect
import Vue from 'vue'
import Input from '../src/Input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {

  it('存在', () => {
    expect(Input).to.be.ok
  })

  describe('props', () => {
    it('可以设置 value', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          value: '测试值'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('测试值')
      vm.$destroy()
    })
    it('可以设置 disabled', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
      vm.$destroy()
    })
    it('可以设置 readonly', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
      vm.$destroy()
    })
    it('可以设置 error', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          error: '错误信息'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      const svgElement = vm.$el.querySelector('.error-icon')
      const spanElement = vm.$el.querySelector('span.error-message')
      expect(inputElement.className).to.equal('error')
      expect(svgElement).to.be.ok
      expect(spanElement.textContent).to.equal('错误信息')
      vm.$destroy()
    })
  })

  describe('events', () => {
    it('支持 input/change/focus/blur 事件', () => {
      const Constructor = Vue.extend(Input)
      const events = ['input', 'change', 'focus', 'blur']
      events.forEach(eventName => {
        const vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on(eventName, callback)
        const event = new Event(eventName)
        const inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith(event)
        vm.$destroy()
      })
    })
  })

})

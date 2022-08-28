import sinon from 'sinon/pkg/sinon-esm'

const expect = chai.expect
import Vue from 'vue'
import Toast from '../src/Toast.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {

  it('存在.', () => {
    expect(Toast).to.be.exist
  })

  describe('props', function () {

    this.timeout(10000)   // 设置测试超时时间

    it('可以设置 autoClose', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: true,
        }
      }).$mount(div)
      vm.$on('close', () => {
        expect(document.body.contains(vm.$el)).to.equal(false)
        vm.$el.remove()
        vm.$destroy()
      })
    })

    it('可以设置 closeDelay', (done) => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: true,
          closeDelay: 2
        }
      }).$mount(div)
      const callback = sinon.fake()
      vm.$on('close', callback)
      setTimeout(() => {
        vm.$emit('close')
        expect(callback).to.have.been.called
        done()
        vm.$el.remove()
        vm.$destroy()
      }, 2000)
    })

    it('可以设置 closeButton', () => {
      const callback = sinon.fake()
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          closeButton: {text: '关闭', callback}
        }
      }).$mount()
      const closeBtnElement = vm.$el.querySelector('.closeButton')
      expect(closeBtnElement.textContent).to.equal('关闭')
      closeBtnElement.click()
      expect(callback).to.have.been.called
      vm.$el.remove()
      vm.$destroy()
    })

    it('可以设置 enableHtml', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          enableHtml: true
        }
      })
      vm.$slots.default = ['<strong id="hi">hi</strong>']
      vm.$mount()
      const strongElement = vm.$el.querySelector('div.content > strong#hi')
      expect(strongElement).to.be.exist
      expect(strongElement.textContent).to.equal('hi')
      vm.$el.remove()
      vm.$destroy()
    })

    it('可以设置 position', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          position: 'top'
        }
      }).$mount()
      expect(Array.from(vm.$el.classList)).to.include('position-top')
      expect(vm.$el.classList.contains('topSlideUp')).to.equal(true)
      vm.$el.remove()
      vm.$destroy()
    })

  })

})

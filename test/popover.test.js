const expect = chai.expect
import Vue from 'vue'
import Popover from '../src/Popover.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {

  it('存在', () => {
    expect(Popover).to.be.exist
  })

  it('可以设置 position', (done) => {
    Vue.component('g-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-popover position="bottom" ref="a">
        <template #content>弹出内容</template>
        <button>点我</button>
      </g-popover>
    `
    const vm = new Vue({ el: div })
    vm.$el.querySelector('button').click()
    vm.$nextTick(() => {
      const { contentWrapper } = vm.$refs.a.$refs
      expect(contentWrapper.classList.contains('position-bottom')).to.be.true
      done()
      vm.$el.remove()
      vm.$destroy()
    })
  })

  xit('可以设置 trigger', (done) => {
    Vue.component('g-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-popover trigger="hover" ref="a">
        <template #content>弹出内容</template>
        <button>点我</button>
      </g-popover>
    `
    const vm = new Vue({ el: div })
    const event = new Event('mouseenter')
    vm.$el.dispatchEvent(event)
    vm.$nextTick(() => {
      const { contentWrapper } = vm.$refs.a.$refs
      expect(contentWrapper).to.be.exist
      done()
      vm.$el.remove()
      vm.$destroy()
    })
  })

  // it('可以设置loading.', () => {
  //   const Constructor = Vue.extend(Button)
  //   const vm = new Constructor({
  //     propsData: {
  //       icon: 'settings',
  //       loading: true
  //     }
  //   }).$mount()
  //   const useElements = vm.$el.querySelectorAll('use')
  //   expect(useElements.length).to.equal(1)
  //   expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
  //   vm.$destroy()
  // })
  //
  // it('icon 默认的 order 是 1', () => {
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   const Constructor = Vue.extend(Button)
  //   const vm = new Constructor({
  //     propsData: {
  //       icon: 'settings',
  //     }
  //   }).$mount(div)
  //   const icon = vm.$el.querySelector('svg')
  //   expect(getComputedStyle(icon).order).to.eq('1')
  //   vm.$el.remove()
  //   vm.$destroy()
  // })
  //
  // it('设置 iconPosition 可以改变 order', () => {
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   const Constructor = Vue.extend(Button)
  //   const vm = new Constructor({
  //     propsData: {
  //       icon: 'settings',
  //       iconPosition: 'right'
  //     }
  //   }).$mount(div)
  //   const icon = vm.$el.querySelector('svg')
  //   expect(getComputedStyle(icon).order).to.eq('2')
  //   vm.$el.remove()
  //   vm.$destroy()
  // })
  //
  // it('点击 button 触发 click 事件', () => {
  //   const Constructor = Vue.extend(Button)
  //   const vm = new Constructor({
  //     propsData: {
  //       icon: 'settings',
  //     }
  //   }).$mount()
  //   const callback = sinon.fake()
  //   vm.$on('click', callback)
  //   vm.$el.click()
  //   expect(callback).to.have.been.called
  //   vm.$destroy()
  // })

})

import Vue from 'vue'

import Button from './Button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './ButtonGroup.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false
  }
})

/**
 * 单元测试
 */
import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)
const {expect} = chai

try {

  {
    // Button 组件 - 只传一个 icon
    const Constructor = Vue.extend(Button)
    const vc = new Constructor({
      propsData: {
        icon: 'settings'
      },
    })
    // vc.$mount('#test')   // 挂载到元素上
    vc.$mount()             // 也可以挂载到内存里
    const useElement = vc.$el.querySelector('use')
    const href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')
    vc.$el.remove()
    vc.$destroy()
  }

  {
    // Button 组件 - 传 icon, loading
    const Constructor = Vue.extend(Button)
    const vc = new Constructor({
      propsData: {
        icon: 'settings',
        loading: true
      },
    })
    vc.$mount()
    const useElement = vc.$el.querySelector('use')
    const href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    vc.$el.remove()
    vc.$destroy()
  }

  {
    // Button 组件 - order
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vc = new Constructor({
      propsData: {
        icon: 'settings'
      },
    })
    // button.$mount()   // 如果元素不挂载到页面上，页面就不渲染这个元素，css 设置的样式也就不会加到这个元素上，所以下方获取的 order 就为空
    vc.$mount(div)
    const svgElement = vc.$el.querySelector('svg')
    const {order} = window.getComputedStyle(svgElement)
    expect(order).to.eq('1')
    vc.$el.remove()
    vc.$destroy()
  }

  {
    // Button 组件 - order - 传 icon-position
    const div1 = document.createElement('div')
    document.body.appendChild(div1)
    const Constructor = Vue.extend(Button)
    const vc = new Constructor({
      propsData: {
        icon: 'settings',
        iconPosition: 'right'
      },
    })
    vc.$mount(div1)
    const svgElement = vc.$el.querySelector('svg')
    const {order} = window.getComputedStyle(svgElement)
    expect(order).to.eq('2')
    vc.$el.remove()
    vc.$destroy()
  }

  {
    // Button 组件 - click 事件
    const Constructor = Vue.extend(Button)
    const vc = new Constructor({
      propsData: {
        icon: 'settings',
      },
    })
    vc.$mount()
    const spy = chai.spy(() => {})
    vc.$on('click', spy)
    vc.$el.click()
    expect(spy).to.have.been.called()
    vc.$el.remove()
    vc.$destroy()
  }

} catch (error) {
  window.errors = [error]
} finally {
  window.errors && window.errors.length && window.errors.forEach(error => {
    console.error(error)
  })
}

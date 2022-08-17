const expect = chai.expect
import Vue from 'vue'
import Row from '../src/Row.vue'
import Col from '../src/Col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {

  it('存在.', () => {
    expect(Row).to.exist
  })

  it('可以设置gutter.', (done) => {
    Vue.component('g-row', Row)
    Vue.component('g-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-row gutter="20">
        <g-col span="12"></g-col>
        <g-col span="12"></g-col>
      </g-row>
    `
    const vm = new Vue({el: div})
    setTimeout(() => {
      const rowElement = vm.$el.querySelector('.g-row')
      const colElements = vm.$el.querySelectorAll('.g-col')
      expect(getComputedStyle(rowElement).marginLeft).to.equal('-10px')
      expect(getComputedStyle(rowElement).marginRight).to.equal('-10px')
      expect(getComputedStyle(colElements[0]).paddingLeft).to.equal('10px')
      expect(getComputedStyle(colElements[0]).paddingRight).to.equal('10px')
      expect(getComputedStyle(colElements[1]).paddingLeft).to.equal('10px')
      expect(getComputedStyle(colElements[1]).paddingRight).to.equal('10px')
      done()
      vm.$el.remove()
      vm.$destroy()
    }, 0)
  })

  it('可以设置align.', () => {
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'right'
      }
    }).$mount()
    expect(Array.from(vm.$el.classList)).to.include('align-right')
    vm.$destroy()
  })

})

const expect = chai.expect
import Vue from 'vue'
import Layout from '../src/Layout/Layout.vue'
import Header from '../src/Layout/Header.vue'
import Sider from '../src/Layout/Sider.vue'
import Content from '../src/Layout/Content.vue'
import Footer from '../src/Layout/Footer.vue'

Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Layout', () => {

  it('存在.', () => {
    expect(Layout).to.exist
  })

  it('基本布局.', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-layout>
        <g-header></g-header>
        <g-content></g-content>
        <g-footer></g-footer>
      </g-layout>
    `
    const vm = new Vue({el: div})
    setTimeout(() => {
      const layoutElement = vm.$el.querySelector('.g-layout')
      expect(getComputedStyle(layoutElement).flexDirection).to.equal('column')
      done()
      vm.$el.remove()
      vm.$destroy()
    }, 0)
  })

  it('包含 Sider 布局.', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-layout>
        <g-header></g-header>
        <g-layout>
          <g-sider></g-sider>
          <g-content></g-content>
        </g-layout>
        <g-layout>
          <g-content></g-content>
          <g-sider></g-sider>
        </g-layout>
        <g-footer></g-footer>
      </g-layout>
    `
    const vm = new Vue({el: div})
    setTimeout(() => {
      const outerLayoutElement = vm.$el.querySelector('.g-layout')
      const innerLayoutElement = outerLayoutElement.querySelector('.g-layout')
      expect(getComputedStyle(innerLayoutElement).flexDirection).to.equal('row')
      expect(getComputedStyle(innerLayoutElement).flexGrow).to.equal('1')
      done()
      vm.$el.remove()
      vm.$destroy()
    }, 0)
  })

  it('Sider 在左侧布局.', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-layout>
        <g-sider></g-sider>
        <g-layout>
          <g-header></g-header>
          <g-content></g-content>
          <g-footer></g-footer>
        </g-layout>
      </g-layout>
    `
    const vm = new Vue({el: div})
    setTimeout(() => {
      const outerLayoutElement = vm.$el.querySelector('.g-layout')
      const innerLayoutElement = outerLayoutElement.querySelector('.g-layout')
      expect(getComputedStyle(outerLayoutElement).display).to.equal('flex')
      expect(getComputedStyle(innerLayoutElement).flexGrow).to.equal('1')
      done()
      vm.$el.remove()
      vm.$destroy()
    }, 0)
  })

})

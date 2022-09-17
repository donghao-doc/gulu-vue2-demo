import Vue from 'vue'

import Icon from './Icon.vue'
import Button from './Button.vue'
import ButtonGroup from './ButtonGroup.vue'
import Input from './Input.vue'
import Row from './Grid/Row.vue'
import Col from './Grid/Col.vue'
import Layout from './Layout/Layout.vue'
import Header from './Layout/Header.vue'
import Sider from './Layout/Sider.vue'
import Content from './Layout/Content.vue'
import Footer from './Layout/Footer.vue'
import Tabs from './Tab/Tabs.vue'
import TabsHead from './Tab/TabsHead.vue'
import TabsItem from './Tab/TabsItem.vue'
import TabsBody from './Tab/TabsBody.vue'
import TabsPane from './Tab/TabsPane.vue'
import Popover from './Popover.vue'
import Collapse from './Collapse/Collapse.vue'
import CollapseItem from './Collapse/CollapseItem.vue'

Vue.component('g-icon', Icon)
Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)

import toastPlugin from './plugins/toastPlugin.js'
Vue.use(toastPlugin)

Vue.config.productionTip = false

new Vue({ el: '#app' })

import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'
import Tab from './utils/tabSwitch'
import Filter from './utils/filters';
import Global from './utils/global'
import './assets/css/index.less'
import './assets/css/element.scss'
import echarts from 'echarts'
import { log } from 'util';
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
require('es6-promise').polyfill()
Es6Promise.polyfill()
window.upLoadUrl = "http://10.8.145.43:8190";

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Tab)
Vue.use(Global)
Vue.use(Filter)
/* eslint-disable */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

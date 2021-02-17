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

import axios from 'axios'

axios.defaults.withCredentials = true;


require('es6-promise').polyfill()
Es6Promise.polyfill()
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

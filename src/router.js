import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/* eslint-disable */
export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('./views/login.vue')
        },
        {
            path: '/main',
            name: 'main',
            component: () => import('./views/mainList.vue')
        },
        {
            path: '/index',
            name: 'index',
            meta: [{name: '首页', path: '/index'}],
            component: () => import('./views/index.vue'),
            children: [{
              path: '/demo',
              name: 'demo',
              meta: [{name: '子应用管理', path: '/demo'}],
              component: () => import('./views/Demo.vue')
            }, {
                path: '/UsePlan',
                name: 'UsePlan',
                meta: [{name: '使用计划', path: '/UsePlan'}],
                component: () => import('./views/TrainingFieldM/UsePlan.vue')
            },{
                path: '/declareWarehousing',
                name: 'declareWarehousing',
                meta: [{name: '采购申报', path: '/declareWarehousing'}],
                component: () => import('./views/deviceManager/declareWarehousing.vue')
            }]
        },
    ]
})

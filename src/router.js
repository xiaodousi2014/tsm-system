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
                path: '/purchase', 
                name: 'purchase',
                meta: [{name: '采购申报', path: '/purchase'}],
                component: () => import('./views/deviceManager/purchase.vue')
            },{
                path: '/reviewPlan',
                name: 'reviewPlan',
                meta: [{name: '计划审核', path: '/reviewPlan'}],
                component: () => import('./views/deviceManager/reviewPlan.vue')
            },{
                path: '/warehousing', 
                name: 'warehousing',
                meta: [{name: '入库登记', path: '/warehousing'}],
                component: () => import('./views/deviceManager/warehousing.vue')
            },
            {
                path: '/equipment', 
                name: 'equipment',
                meta: [{name: '在库设备', path: '/equipment'}],
                component: () => import('./views/deviceManager/equipment.vue')
            },
            {
                path: '/pleaseRecord', 
                name: 'pleaseRecord',
                meta: [{name: '请领记录', path: '/pleaseRecord'}],
                component: () => import('./views/deviceManager/pleaseRecord.vue')
            }
        ]
        },
    ]
})

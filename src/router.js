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
            },
            {
                path: '/pleaseCheck', 
                name: 'pleaseCheck',
                meta: [{name: '请领审核', path: '/pleaseCheck'}],
                component: () => import('./views/deviceManager/pleaseCheck.vue')
            },
            {
                path: '/borrowRecord', 
                name: 'borrowRecord',
                meta: [{name: '借用记录', path: '/borrowRecord'}],
                component: () => import('./views/deviceManager/borrowRecord.vue')
            },
            {
                path: '/borrowCheck', 
                name: 'borrowCheck',
                meta: [{name: '借用审核', path: '/borrowCheck'}],
                component: () => import('./views/deviceManager/borrowCheck.vue')
            },
            {
                path: '/repairRecord', 
                name: 'repairRecord',
                meta: [{name: '维修记录', path: '/repairRecord'}],
                component: () => import('./views/deviceManager/repairRecord.vue')
            },
            {
                path: '/repairCheck', 
                name: 'repairCheck',
                meta: [{name: '维修审核', path: '/repairCheck'}],
                component: () => import('./views/deviceManager/repairCheck.vue')
            },
            {
                path: '/scrapRecord', 
                name: 'scrapRecord',
                meta: [{name: '报废记录', path: '/scrapRecord'}],
                component: () => import('./views/deviceManager/scrapRecord.vue')
            },
            {
                path: '/scrapCheck', 
                name: 'scrapCheck',
                meta: [{name: '报废审核', path: '/scrapCheck'}],
                component: () => import('./views/deviceManager/scrapCheck.vue')
            },
            {
                path: '/inventoryLog', 
                name: 'inventoryLog',
                meta: [{name: '盘点日志', path: '/inventoryLog'}],
                component: () => import('./views/deviceManager/inventoryLog.vue')
            },
            {
                path: '/deviceManage', 
                name: 'deviceManage',
                meta: [{name: '维护管理', path: '/deviceManage'}],
                component: () => import('./views/deviceManager/deviceManage.vue')
            }
        ]
        },
    ]
})

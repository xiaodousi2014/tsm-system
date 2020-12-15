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
                path: '/device-purchase', 
                name: 'device-purchase',
                meta: [{name: '采购申报', path: '/device-purchase'}],
                component: () => import('./views/deviceManager/purchase.vue')
            },{
                path: '/device-reviewPlan',
                name: 'device-reviewPlan',
                meta: [{name: '计划审核', path: '/device-reviewPlan'}],
                component: () => import('./views/deviceManager/reviewPlan.vue')
            },{
                path: '/device-warehousing', 
                name: 'device-warehousing',
                meta: [{name: '入库登记', path: '/device-warehousing'}],
                component: () => import('./views/deviceManager/warehousing.vue')
            },
            {
                path: '/device-equipment', 
                name: 'device-equipment',
                meta: [{name: '在库设备', path: '/device-equipment'}],
                component: () => import('./views/deviceManager/equipment.vue')
            },
            {
                path: '/device-pleaseRecord', 
                name: 'device-pleaseRecord',
                meta: [{name: '请领记录', path: '/device-pleaseRecord'}],
                component: () => import('./views/deviceManager/pleaseRecord.vue')
            },
            {
                path: '/device-pleaseCheck', 
                name: 'device-pleaseCheck',
                meta: [{name: '请领审核', path: '/device-pleaseCheck'}],
                component: () => import('./views/deviceManager/pleaseCheck.vue')
            },
            {
                path: '/device-borrowRecord', 
                name: 'device-borrowRecord',
                meta: [{name: '借用记录', path: '/device-borrowRecord'}],
                component: () => import('./views/deviceManager/borrowRecord.vue')
            },
            {
                path: '/device-borrowCheck', 
                name: 'device-borrowCheck',
                meta: [{name: '借用审核', path: '/device-borrowCheck'}],
                component: () => import('./views/deviceManager/borrowCheck.vue')
            },
            {
                path: '/device-repairRecord', 
                name: 'device-repairRecord',
                meta: [{name: '维修记录', path: '/device-repairRecord'}],
                component: () => import('./views/deviceManager/repairRecord.vue')
            },
            {
                path: '/device-repairCheck', 
                name: 'device-repairCheck',
                meta: [{name: '维修审核', path: '/device-repairCheck'}],
                component: () => import('./views/deviceManager/repairCheck.vue')
            },
            {
                path: '/device-scrapRecord', 
                name: 'device-scrapRecord',
                meta: [{name: '报废记录', path: '/device-scrapRecord'}],
                component: () => import('./views/deviceManager/scrapRecord.vue')
            },
            {
                path: '/device-scrapCheck', 
                name: 'device-scrapCheck',
                meta: [{name: '报废审核', path: '/device-scrapCheck'}],
                component: () => import('./views/deviceManager/scrapCheck.vue')
            },
            {
                path: '/device-inventoryLog', 
                name: 'device-inventoryLog',
                meta: [{name: '盘点日志', path: '/idevice-nventoryLog'}],
                component: () => import('./views/deviceManager/inventoryLog.vue')
            },
            {
                path: '/device-deviceManage', 
                name: 'device-deviceManage',
                meta: [{name: '维护管理', path: '/device-deviceManage'}],
                component: () => import('./views/deviceManager/deviceManage.vue')
            },{
                path: '/equipment-purchase', 
                name: 'equipment-purchase',
                meta: [{name: '采购申报', path: '/equipment-purchase'}],
                component: () => import('./views/equipmentManager/purchase.vue')
            },{
                path: '/equipment-reviewPlan',
                name: 'equipment-reviewPlan',
                meta: [{name: '计划审核', path: '/equipment-reviewPlan'}],
                component: () => import('./views/equipmentManager/reviewPlan.vue')
            },{
                path: '/equipment-warehousing', 
                name: 'equipment-warehousing',
                meta: [{name: '入库登记', path: '/equipment-warehousing'}],
                component: () => import('./views/equipmentManager/warehousing.vue')
            },
            {
                path: '/equipment-equipment', 
                name: 'equipment-equipment',
                meta: [{name: '在库设备', path: '/equipment-equipment'}],
                component: () => import('./views/equipmentManager/equipment.vue')
            },
            {
                path: '/equipment-pleaseRecord', 
                name: 'equipment-pleaseRecord',
                meta: [{name: '请领记录', path: '/equipment-pleaseRecord'}],
                component: () => import('./views/equipmentManager/pleaseRecord.vue')
            },
            {
                path: '/equipment-pleaseCheck', 
                name: 'equipment-pleaseCheck',
                meta: [{name: '请领审核', path: '/equipment-pleaseCheck'}],
                component: () => import('./views/equipmentManager/pleaseCheck.vue')
            },
            {
                path: '/equipment-borrowRecord', 
                name: 'equipment-borrowRecord',
                meta: [{name: '借用记录', path: '/equipment-borrowRecord'}],
                component: () => import('./views/equipmentManager/borrowRecord.vue')
            },
            {
                path: '/equipment-borrowCheck', 
                name: 'equipment-borrowCheck',
                meta: [{name: '借用审核', path: '/equipment-borrowCheck'}],
                component: () => import('./views/equipmentManager/borrowCheck.vue')
            },
            {
                path: '/equipment-repairRecord', 
                name: 'equipment-repairRecord',
                meta: [{name: '维修记录', path: '/equipment-repairRecord'}],
                component: () => import('./views/equipmentManager/repairRecord.vue')
            },
            {
                path: '/equipment-repairCheck', 
                name: 'equipment-repairCheck',
                meta: [{name: '维修审核', path: '/equipment-repairCheck'}],
                component: () => import('./views/equipmentManager/repairCheck.vue')
            },
            {
                path: '/equipment-scrapRecord', 
                name: 'equipment-scrapRecord',
                meta: [{name: '报废记录', path: '/equipment-scrapRecord'}],
                component: () => import('./views/equipmentManager/scrapRecord.vue')
            },
            {
                path: '/equipment-scrapCheck', 
                name: 'equipment-scrapCheck',
                meta: [{name: '报废审核', path: '/equipment-scrapCheck'}],
                component: () => import('./views/equipmentManager/scrapCheck.vue')
            },
            {
                path: '/equipment-inventoryLog', 
                name: 'equipment-inventoryLog',
                meta: [{name: '盘点日志', path: '/equipment-nventoryLog'}],
                component: () => import('./views/equipmentManager/inventoryLog.vue')
            },
            {
                path: '/equipment-deviceManage', 
                name: 'equipment-deviceManage',
                meta: [{name: '维护管理', path: '/equipment-deviceManage'}],
                component: () => import('./views/equipmentManager/deviceManage.vue')
            }
        ]
        },
    ]
})

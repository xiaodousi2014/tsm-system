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
                meta: [{name: '采购申报', parentName: '设备管理', path: '/device-purchase'}],
                component: () => import('./views/deviceManager/purchase.vue')
            },{
                path: '/device-reviewPlan',
                name: 'device-reviewPlan',
                meta: [{name: '计划审核', parentName: '设备管理', path: '/device-reviewPlan'}],
                component: () => import('./views/deviceManager/reviewPlan.vue')
            },{
                path: '/device-warehousing', 
                name: 'device-warehousing',
                meta: [{name: '入库登记', parentName: '设备管理', path: '/device-warehousing'}],
                component: () => import('./views/deviceManager/warehousing.vue')
            },
            {
                path: '/device-equipment', 
                name: 'device-equipment',
                meta: [{name: '在库设备', parentName: '设备管理', path: '/device-equipment'}],
                component: () => import('./views/deviceManager/equipment.vue')
            },
            {
                path: '/device-pleaseRecord', 
                name: 'device-pleaseRecord',
                meta: [{name: '请领记录', parentName: '设备管理', path: '/device-pleaseRecord'}],
                component: () => import('./views/deviceManager/pleaseRecord.vue')
            },
            {
                path: '/device-pleaseCheck', 
                name: 'device-pleaseCheck',
                meta: [{name: '请领审核',parentName: '设备管理', path: '/device-pleaseCheck'}],
                component: () => import('./views/deviceManager/pleaseCheck.vue')
            },
            {
                path: '/device-borrowRecord', 
                name: 'device-borrowRecord',
                meta: [{name: '借用记录', parentName: '设备管理', path: '/device-borrowRecord'}],
                component: () => import('./views/deviceManager/borrowRecord.vue')
            },
            {
                path: '/device-borrowCheck', 
                name: 'device-borrowCheck',
                meta: [{name: '借用审核', parentName: '设备管理', path: '/device-borrowCheck'}],
                component: () => import('./views/deviceManager/borrowCheck.vue')
            },
            {
                path: '/device-repairRecord', 
                name: 'device-repairRecord',
                meta: [{name: '维修记录', parentName: '设备管理', path: '/device-repairRecord'}],
                component: () => import('./views/deviceManager/repairRecord.vue')
            },
            {
                path: '/device-repairCheck', 
                name: 'device-repairCheck',
                meta: [{name: '维修审核', parentName: '设备管理', path: '/device-repairCheck'}],
                component: () => import('./views/deviceManager/repairCheck.vue')
            },
            {
                path: '/device-scrapRecord', 
                name: 'device-scrapRecord',
                meta: [{name: '报废记录', parentName: '设备管理', path: '/device-scrapRecord'}],
                component: () => import('./views/deviceManager/scrapRecord.vue')
            },
            {
                path: '/device-scrapCheck', 
                name: 'device-scrapCheck',
                meta: [{name: '报废审核', parentName: '设备管理', path: '/device-scrapCheck'}],
                component: () => import('./views/deviceManager/scrapCheck.vue')
            },
            {
                path: '/device-inventoryLog', 
                name: 'device-inventoryLog',
                meta: [{name: '盘点日志',parentName: '设备管理', path: '/device-nventoryLog'}],
                component: () => import('./views/deviceManager/inventoryLog.vue')
            },
            {
                path: '/device-deviceManage', 
                name: 'device-deviceManage',
                meta: [{name: '维护管理',parentName: '设备管理', parentName: '训练模拟器材管理', path: '/device-deviceManage'}],
                component: () => import('./views/deviceManager/deviceManage.vue')
            },{
                path: '/equipment-purchase', 
                name: 'equipment-purchase',
                meta: [{name: '采购申报', parentName: '训练模拟器材管理', path: '/equipment-purchase'}],
                component: () => import('./views/equipmentManager/purchase.vue')
            },{
                path: '/equipment-reviewPlan',
                name: 'equipment-reviewPlan',
                meta: [{name: '计划审核', parentName: '训练模拟器材管理', path: '/equipment-reviewPlan'}],
                component: () => import('./views/equipmentManager/reviewPlan.vue')
            },{
                path: '/equipment-warehousing', 
                name: 'equipment-warehousing',
                meta: [{name: '入库登记', parentName: '训练模拟器材管理', path: '/equipment-warehousing'}],
                component: () => import('./views/equipmentManager/warehousing.vue')
            },
            {
                path: '/equipment-equipment', 
                name: 'equipment-equipment',
                meta: [{name: '在库设备', parentName: '训练模拟器材管理', path: '/equipment-equipment'}],
                component: () => import('./views/equipmentManager/equipment.vue')
            },
            {
                path: '/equipment-pleaseRecord', 
                name: 'equipment-pleaseRecord',
                meta: [{name: '请领记录', parentName: '训练模拟器材管理', path: '/equipment-pleaseRecord'}],
                component: () => import('./views/equipmentManager/pleaseRecord.vue')
            },
            {
                path: '/equipment-pleaseCheck', 
                name: 'equipment-pleaseCheck',
                meta: [{name: '请领审核', parentName: '训练模拟器材管理', path: '/equipment-pleaseCheck'}],
                component: () => import('./views/equipmentManager/pleaseCheck.vue')
            },
            {
                path: '/equipment-borrowRecord', 
                name: 'equipment-borrowRecord',
                meta: [{name: '借用记录', parentName: '训练模拟器材管理', path: '/equipment-borrowRecord'}],
                component: () => import('./views/equipmentManager/borrowRecord.vue')
            },
            {
                path: '/equipment-borrowCheck', 
                name: 'equipment-borrowCheck',
                meta: [{name: '借用审核', parentName: '训练模拟器材管理', path: '/equipment-borrowCheck'}],
                component: () => import('./views/equipmentManager/borrowCheck.vue')
            },
            {
                path: '/equipment-repairRecord', 
                name: 'equipment-repairRecord',
                meta: [{name: '维修记录',parentName: '训练模拟器材管理', path: '/equipment-repairRecord'}],
                component: () => import('./views/equipmentManager/repairRecord.vue')
            },
            {
                path: '/equipment-repairCheck', 
                name: 'equipment-repairCheck',
                meta: [{name: '维修审核', parentName: '训练模拟器材管理', path: '/equipment-repairCheck'}],
                component: () => import('./views/equipmentManager/repairCheck.vue')
            },
            {
                path: '/equipment-scrapRecord', 
                name: 'equipment-scrapRecord',
                meta: [{name: '报废记录', parentName: '训练模拟器材管理', path: '/equipment-scrapRecord'}],
                component: () => import('./views/equipmentManager/scrapRecord.vue')
            },
            {
                path: '/equipment-scrapCheck', 
                name: 'equipment-scrapCheck',
                meta: [{name: '报废审核', parentName: '训练模拟器材管理', path: '/equipment-scrapCheck'}],
                component: () => import('./views/equipmentManager/scrapCheck.vue')
            },
            {
                path: '/equipment-inventoryLog', 
                name: 'equipment-inventoryLog',
                meta: [{name: '盘点日志', parentName: '训练模拟器材管理', path: '/equipment-nventoryLog'}],
                component: () => import('./views/equipmentManager/inventoryLog.vue')
            },
            {
                path: '/equipment-deviceManage', 
                name: 'equipment-deviceManage',
                meta: [{name: '维护管理', parentName: '训练模拟器材管理', path: '/equipment-deviceManage'}],
                component: () => import('./views/equipmentManager/deviceManage.vue')
            },
            {
                path: '/guarantee-purchase', 
                name: 'guarantee-purchase',
                meta: [{name: '采购申报', parentName: '训练教学保障装备管理', path: '/guarantee-purchase'}],
                component: () => import('./views/guaranteeManager/purchase.vue')
            },{
                path: '/guarantee-reviewPlan',
                name: 'guarantee-reviewPlan',
                meta: [{name: '计划审核', parentName: '训练教学保障装备管理', path: '/guarantee-reviewPlan'}],
                component: () => import('./views/guaranteeManager/reviewPlan.vue')
            },{
                path: '/guarantee-warehousing', 
                name: 'guarantee-warehousing',
                meta: [{name: '入库登记', parentName: '训练教学保障装备管理', path: '/guarantee-warehousing'}],
                component: () => import('./views/guaranteeManager/warehousing.vue')
            },
            {
                path: '/guarantee-equipment', 
                name: 'guarantee-equipment',
                meta: [{name: '在库设备', parentName: '训练教学保障装备管理', path: '/guarantee-equipment'}],
                component: () => import('./views/guaranteeManager/equipment.vue')
            },
            {
                path: '/guarantee-pleaseRecord', 
                name: 'guarantee-pleaseRecord',
                meta: [{name: '请领记录', parentName: '训练教学保障装备管理', path: '/guarantee-pleaseRecord'}],
                component: () => import('./views/guaranteeManager/pleaseRecord.vue')
            },
            {
                path: '/guarantee-pleaseCheck', 
                name: 'guarantee-pleaseCheck',
                meta: [{name: '请领审核', parentName: '训练教学保障装备管理', path: '/guarantee-pleaseCheck'}],
                component: () => import('./views/guaranteeManager/pleaseCheck.vue')
            },
            {
                path: '/guarantee-borrowRecord', 
                name: 'guarantee-borrowRecord',
                meta: [{name: '借用记录', parentName: '训练教学保障装备管理', path: '/guarantee-borrowRecord'}],
                component: () => import('./views/guaranteeManager/borrowRecord.vue')
            },
            {
                path: '/guarantee-borrowCheck', 
                name: 'guarantee-borrowCheck',
                meta: [{name: '借用审核', parentName: '训练教学保障装备管理', path: '/guarantee-borrowCheck'}],
                component: () => import('./views/guaranteeManager/borrowCheck.vue')
            },
            {
                path: '/guarantee-repairRecord', 
                name: 'guarantee-repairRecord',
                meta: [{name: '维修记录',parentName: '训练教学保障装备管理', path: '/guarantee-repairRecord'}],
                component: () => import('./views/guaranteeManager/repairRecord.vue')
            },
            {
                path: '/guarantee-repairCheck', 
                name: 'guarantee-repairCheck',
                meta: [{name: '维修审核', parentName: '训练教学保障装备管理', path: '/guarantee-repairCheck'}],
                component: () => import('./views/guaranteeManager/repairCheck.vue')
            },
            {
                path: '/guarantee-scrapRecord', 
                name: 'guarantee-scrapRecord',
                meta: [{name: '报废记录', parentName: '训练教学保障装备管理', path: '/guarantee-scrapRecord'}],
                component: () => import('./views/guaranteeManager/scrapRecord.vue')
            },
            {
                path: '/guarantee-scrapCheck', 
                name: 'guarantee-scrapCheck',
                meta: [{name: '报废审核', parentName: '训练教学保障装备管理', path: '/guarantee-scrapCheck'}],
                component: () => import('./views/guaranteeManager/scrapCheck.vue')
            },
            {
                path: '/guarantee-inventoryLog', 
                name: 'guarantee-inventoryLog',
                meta: [{name: '盘点日志', parentName: '训练教学保障装备管理', path: '/guarantee-nventoryLog'}],
                component: () => import('./views/guaranteeManager/inventoryLog.vue')
            },
            {
                path: '/guarantee-deviceManage', 
                name: 'guarantee-deviceManage',
                meta: [{name: '维护管理', parentName: '训练教学保障装备管理', path: '/guarantee-deviceManage'}],
                component: () => import('./views/guaranteeManager/deviceManage.vue')
            },
            
            {
                path: '/information-purchase', 
                name: 'information-purchase',
                meta: [{name: '采购申报', parentName: '训练信息资源管理', path: '/information-purchase'}],
                component: () => import('./views/informationManager/purchase.vue')
            },
            {
                path: '/information-reviewPlan',
                name: 'information-reviewPlan',
                meta: [{name: '计划审核', parentName: '训练信息资源管理', path: '/information-reviewPlan'}],
                component: () => import('./views/informationManager/reviewPlan.vue')
            },{
                path: '/information-warehousing', 
                name: 'information-warehousing',
                meta: [{name: '入库登记', parentName: '训练信息资源管理', path: '/information-warehousing'}],
                component: () => import('./views/informationManager/warehousing.vue')
            },
            {
                path: '/information-equipment', 
                name: 'information-equipment',
                meta: [{name: '库存信息', parentName: '训练信息资源管理', path: '/information-equipment'}],
                component: () => import('./views/informationManager/equipment.vue')
            },
           

            {
                path: '/teaching-purchase', 
                name: 'teaching-purchase',
                meta: [{name: '采购申报', parentName: '教材管理', path: '/teaching-purchase'}],
                component: () => import('./views/teachingManager/purchase.vue')
            },{
                path: '/teaching-reviewPlan',
                name: 'teaching-reviewPlan',
                meta: [{name: '计划审核', parentName: '教材管理', path: '/teaching-reviewPlan'}],
                component: () => import('./views/teachingManager/reviewPlan.vue')
            },{
                path: '/teaching-warehousing', 
                name: 'teaching-warehousing',
                meta: [{name: '入库登记', parentName: '教材管理', path: '/teaching-warehousing'}],
                component: () => import('./views/teachingManager/warehousing.vue')
            },
            {
                path: '/teaching-equipment', 
                name: 'teaching-equipment',
                meta: [{name: '在库设备', parentName: '教材管理', path: '/teaching-equipment'}],
                component: () => import('./views/teachingManager/equipment.vue')
            },
            {
                path: '/teaching-pleaseRecord', 
                name: 'teaching-pleaseRecord',
                meta: [{name: '请领记录', parentName: '教材管理', path: '/teaching-pleaseRecord'}],
                component: () => import('./views/teachingManager/pleaseRecord.vue')
            },
            {
                path: '/teaching-pleaseCheck', 
                name: 'teaching-pleaseCheck',
                meta: [{name: '请领审核', parentName: '教材管理', path: '/teaching-pleaseCheck'}],
                component: () => import('./views/teachingManager/pleaseCheck.vue')
            },
            {
                path: '/teaching-borrowRecord', 
                name: 'teaching-borrowRecord',
                meta: [{name: '借用记录', parentName: '教材管理', path: '/teaching-borrowRecord'}],
                component: () => import('./views/teachingManager/borrowRecord.vue')
            },
            {
                path: '/teaching-borrowCheck', 
                name: 'teaching-borrowCheck',
                meta: [{name: '借用审核', parentName: '教材管理', path: '/teaching-borrowCheck'}],
                component: () => import('./views/teachingManager/borrowCheck.vue')
            },
            {
                path: '/teaching-repairRecord', 
                name: 'teaching-repairRecord',
                meta: [{name: '维修记录',parentName: '教材管理', path: '/teaching-repairRecord'}],
                component: () => import('./views/teachingManager/repairRecord.vue')
            },
            {
                path: '/teaching-repairCheck', 
                name: 'teaching-repairCheck',
                meta: [{name: '维修审核', parentName: '教材管理', path: '/teaching-repairCheck'}],
                component: () => import('./views/teachingManager/repairCheck.vue')
            },
            {
                path: '/teaching-scrapRecord', 
                name: 'teaching-scrapRecord',
                meta: [{name: '报废记录', parentName: '教材管理', path: '/teaching-scrapRecord'}],
                component: () => import('./views/teachingManager/scrapRecord.vue')
            },
            {
                path: '/teaching-scrapCheck', 
                name: 'teaching-scrapCheck',
                meta: [{name: '报废审核', parentName: '教材管理', path: '/teaching-scrapCheck'}],
                component: () => import('./views/teachingManager/scrapCheck.vue')
            },
            {
                path: '/teaching-inventoryLog', 
                name: 'teaching-inventoryLog',
                meta: [{name: '盘点日志', parentName: '教材管理', path: '/teaching-nventoryLog'}],
                component: () => import('./views/teachingManager/inventoryLog.vue')
            },
            {
                path: '/teaching-deviceManage', 
                name: 'teaching-deviceManage',
                meta: [{name: '维护管理', parentName: '教材管理', path: '/teaching-deviceManage'}],
                component: () => import('./views/teachingManager/deviceManage.vue')
            },
            {
                path: '/map-purchase', 
                name: 'map-purchase',
                meta: [{name: '采购申报', parentName: '地图管理', path: '/map-purchase'}],
                component: () => import('./views/mapManager/purchase.vue')
            },{
                path: '/map-reviewPlan',
                name: 'map-reviewPlan',
                meta: [{name: '计划审核', parentName: '地图管理', path: '/map-reviewPlan'}],
                component: () => import('./views/mapManager/reviewPlan.vue')
            },{
                path: '/map-warehousing', 
                name: 'map-warehousing',
                meta: [{name: '入库登记', parentName: '地图管理', path: '/map-warehousing'}],
                component: () => import('./views/mapManager/warehousing.vue')
            },
            {
                path: '/map-equipment', 
                name: 'map-equipment',
                meta: [{name: '在库设备', parentName: '地图管理', path: '/map-equipment'}],
                component: () => import('./views/mapManager/equipment.vue')
            },
            {
                path: '/map-pleaseRecord', 
                name: 'map-pleaseRecord',
                meta: [{name: '请领记录', parentName: '地图管理', path: '/map-pleaseRecord'}],
                component: () => import('./views/mapManager/pleaseRecord.vue')
            },
            {
                path: '/map-pleaseCheck', 
                name: 'map-pleaseCheck',
                meta: [{name: '请领审核', parentName: '地图管理', path: '/map-pleaseCheck'}],
                component: () => import('./views/mapManager/pleaseCheck.vue')
            },
            {
                path: '/map-borrowRecord', 
                name: 'map-borrowRecord',
                meta: [{name: '借用记录', parentName: '地图管理', path: '/map-borrowRecord'}],
                component: () => import('./views/mapManager/borrowRecord.vue')
            },
            {
                path: '/map-borrowCheck', 
                name: 'map-borrowCheck',
                meta: [{name: '借用审核', parentName: '地图管理', path: '/map-borrowCheck'}],
                component: () => import('./views/mapManager/borrowCheck.vue')
            },
            {
                path: '/map-repairRecord', 
                name: 'map-repairRecord',
                meta: [{name: '维修记录',parentName: '地图管理', path: '/map-repairRecord'}],
                component: () => import('./views/mapManager/repairRecord.vue')
            },
            {
                path: '/map-repairCheck', 
                name: 'map-repairCheck',
                meta: [{name: '维修审核', parentName: '地图管理', path: '/map-repairCheck'}],
                component: () => import('./views/mapManager/repairCheck.vue')
            },
            {
                path: '/map-scrapRecord', 
                name: 'map-scrapRecord',
                meta: [{name: '报废记录', parentName: '地图管理', path: '/map-scrapRecord'}],
                component: () => import('./views/mapManager/scrapRecord.vue')
            },
            {
                path: '/map-scrapCheck', 
                name: 'map-scrapCheck',
                meta: [{name: '报废审核', parentName: '地图管理', path: '/map-scrapCheck'}],
                component: () => import('./views/mapManager/scrapCheck.vue')
            },
            {
                path: '/map-inventoryLog', 
                name: 'map-inventoryLog',
                meta: [{name: '盘点日志', parentName: '地图管理', path: '/map-nventoryLog'}],
                component: () => import('./views/mapManager/inventoryLog.vue')
            },
            {
                path: '/map-deviceManage', 
                name: 'map-deviceManage',
                meta: [{name: '维护管理', parentName: '地图管理', path: '/map-deviceManage'}],
                component: () => import('./views/mapManager/deviceManage.vue')
            },
            {
                path: '/stationery-purchase', 
                name: 'stationery-purchase',
                meta: [{name: '采购申报', parentName: '文具与低值易耗品管理', path: '/stationery-purchase'}],
                component: () => import('./views/stationeryManager/purchase.vue')
            },{
                path: '/stationery-reviewPlan',
                name: 'stationery-reviewPlan',
                meta: [{name: '计划审核', parentName: '文具与低值易耗品管理', path: '/stationery-reviewPlan'}],
                component: () => import('./views/stationeryManager/reviewPlan.vue')
            },{
                path: '/stationery-warehousing', 
                name: 'stationery-warehousing',
                meta: [{name: '入库登记', parentName: '文具与低值易耗品管理', path: '/stationery-warehousing'}],
                component: () => import('./views/stationeryManager/warehousing.vue')
            },
            {
                path: '/stationery-equipment', 
                name: 'stationery-equipment',
                meta: [{name: '在库设备', parentName: '文具与低值易耗品管理', path: '/stationery-equipment'}],
                component: () => import('./views/stationeryManager/equipment.vue')
            },
            {
                path: '/stationery-pleaseRecord', 
                name: 'stationery-pleaseRecord',
                meta: [{name: '请领记录', parentName: '文具与低值易耗品管理', path: '/stationery-pleaseRecord'}],
                component: () => import('./views/stationeryManager/pleaseRecord.vue')
            },
            {
                path: '/stationery-pleaseCheck', 
                name: 'stationery-pleaseCheck',
                meta: [{name: '请领审核', parentName: '文具与低值易耗品管理', path: '/stationery-pleaseCheck'}],
                component: () => import('./views/stationeryManager/pleaseCheck.vue')
            },
            {
                path: '/stationery-borrowRecord', 
                name: 'stationery-borrowRecord',
                meta: [{name: '借用记录', parentName: '文具与低值易耗品管理', path: '/stationery-borrowRecord'}],
                component: () => import('./views/stationeryManager/borrowRecord.vue')
            },
            {
                path: '/stationery-borrowCheck', 
                name: 'stationery-borrowCheck',
                meta: [{name: '借用审核', parentName: '文具与低值易耗品管理', path: '/stationery-borrowCheck'}],
                component: () => import('./views/stationeryManager/borrowCheck.vue')
            },
            {
                path: '/stationery-repairRecord', 
                name: 'stationery-repairRecord',
                meta: [{name: '维修记录',parentName: '文具与低值易耗品管理', path: '/stationery-repairRecord'}],
                component: () => import('./views/stationeryManager/repairRecord.vue')
            },
            {
                path: '/stationery-repairCheck', 
                name: 'stationery-repairCheck',
                meta: [{name: '维修审核', parentName: '文具与低值易耗品管理', path: '/stationery-repairCheck'}],
                component: () => import('./views/stationeryManager/repairCheck.vue')
            },
            {
                path: '/mstationeryap-scrapRecord', 
                name: 'stationery-scrapRecord',
                meta: [{name: '报废记录', parentName: '文具与低值易耗品管理', path: '/stationery-scrapRecord'}],
                component: () => import('./views/stationeryManager/scrapRecord.vue')
            },
            {
                path: '/stationery-scrapCheck', 
                name: 'stationery-scrapCheck',
                meta: [{name: '报废审核', parentName: '文具与低值易耗品管理', path: '/stationery-scrapCheck'}],
                component: () => import('./views/stationeryManager/scrapCheck.vue')
            },
            {
                path: '/stationery-inventoryLog', 
                name: 'stationery-inventoryLog',
                meta: [{name: '盘点日志', parentName: '文具与低值易耗品管理', path: '/stationery-nventoryLog'}],
                component: () => import('./views/stationeryManager/inventoryLog.vue')
            },
            {
                path: '/stationery-deviceManage', 
                name: 'stationery-deviceManage',
                meta: [{name: '维护管理', parentName: '文具与低值易耗品管理', path: '/stationery-deviceManage'}],
                component: () => import('./views/stationeryManager/deviceManage.vue')
            },
        ]
        },
        {
          path: '/knowledge-delRecord',
          name: 'knowledge-delRecord',
          meta: [{
            name: '法规删除记录',
            path: '/knowledge-delRecord'
          }],
          component: () => import('./views/StateKnowledge/delRecord.vue')
        },
        {
          path: '/knowledge-retrieval',
          name: 'knowledge-retrieval',
          meta: [{
            name: '知识检索',
            path: '/knowledge-retrieval'
          }],
          component: () => import('./views/StateKnowledge/retrieval.vue')
        },
        {
          path: '/object-index',
          name: 'object-index',
          meta: [{
            name: '申报入库',
            path: '/object-index'
          }],
          component: () => import('./views/objectManage/index.vue')
        },
        {
          path: '/object-delRecord',
          name: 'object-delRecord',
          meta: [{
            name: '申报删除记录',
            path: '/object-delRecord'
          }],
          component: () => import('./views/objectManage/delRecord.vue')
        },
        {
          path: '/object-rkRecord',
          name: 'object-rkRecord',
          meta: [{
            name: '项目导入',
            path: '/object-rkRecord'
          }],
          component: () => import('./views/objectManage/rkRecord.vue')
        },
        {
          path: '/object-examine',
          name: 'object-examine',
          meta: [{
            name: '申报审核',
            path: '/object-examine'
          }],
          component: () => import('./views/objectManage/examine.vue')
        }
    ]
})

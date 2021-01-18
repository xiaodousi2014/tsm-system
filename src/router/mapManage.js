//地图管理

import layout from '@/layout/index';
export default {
 path: '/map-manage',
 component: layout,
 meta: {
  name: '地图管理',
 },
 children: [
  {
   path: 'plan-declare',
   name: 'map-manage-plan-declare',
   meta: {
    name: '计划申报',
   },
   component: () => import('@/views/mapManage/planDeclare/index.vue')
  },

  {
   path: 'plan-examine',
   name: 'map-manage-plan-examine',
   meta: {
    name: '计划审核',
   },
   component: () => import('@/views/mapManage/planExamine/index.vue')
  },

  {
   path: 'in-stock-register',
   name: 'map-manage-in-stock-register',
   meta: {
    name: '入库登记',
   },
   component: () => import('@/views/mapManage/inStockRegister/index.vue')
  },

  {
   path: 'storage-equipment',
   name: 'map-manage-storage-equipment',
   meta: {
    name: '在库设备',
   },
   component: () => import('@/views/mapManage/storageEquipment/index.vue')
  },

  {
   path: 'receive-record',
   name: 'map-manage-receive-record',
   meta: {
    name: '请领记录',
   },
   component: () => import('@/views/mapManage/receiveRecord/index.vue')
  },

  {
   path: 'receive-examine',
   name: 'map-manage-receive-examine',
   meta: {
    name: '请领审核',
   },
   component: () => import('@/views/mapManage/receiveExamine/index.vue')
  },

  {
   path: 'borrow-record',
   name: 'map-manage-borrow-record',
   meta: {
    name: '借用记录',
   },
   component: () => import('@/views/mapManage/borrowRecord/index.vue')
  },
  {
   path: 'borrow-examine',
   name: 'map-manage-borrow-examine',
   meta: {
    name: '借用审核',
   },
   component: () => import('@/views/mapManage/borrowExamine/index.vue')
  },

  {
   path: 'repair-record',
   name: 'map-manage-repair-record',
   meta: {
    name: '维修记录',
   },
   component: () => import('@/views/mapManage/repairRecord/index.vue')
  },

  {
   path: 'repair-examine',
   name: 'map-manage-repair-examine',
   meta: {
    name: '维修审核',
   },
   component: () => import('@/views/mapManage/repairExamine/index.vue')
  },

  {
   path: 'scrap-record',
   name: 'map-manage-scrap-record',
   meta: {
    name: '报废记录',
   },
   component: () => import('@/views/mapManage/scrapRecord/index.vue')
  },
  {
   path: 'scrap-examine',
   name: 'map-manage-scrap-examine',
   meta: {
    name: '报废审核',
   },
   component: () => import('@/views/mapManage/scrapExamine/index.vue')
  },

  {
   path: 'inventory-journal',
   name: 'map-manage-inventory-journal',
   meta: {
    name: '盘点日志',
   },
   component: () => import('@/views/mapManage/inventoryJournal/index.vue')
  },
  {
   path: 'maintain-manage',
   name: 'map-manage-maintain-manage',
   meta: {
    name: '维护管理',
   },
   component: () => import('@/views/mapManage/maintainManage/index.vue')
  },
 ]
}


//地图管理

import layout from '@/layout/index';
export default {
 path: '/maps',
 component: layout,
 meta: {
  name: '地图管理',
 },
 children: [
  {
   path: 'plan-declare',
   name: 'map-manage-plan-declare',
   meta: [{name: '计划申报', parentName: '地图管理', path: '/overview'}],
   component: () => import('@/views/mapManager/planDeclare/index.vue')
  },
  {
    path: 'delete-list',
    name: 'teaching-equipment-plan-declare',
    meta: [{name: '删除列表', parentName: '地图管理', path: '/delete-list'}],
    component: () => import('@/views/mapManager/storageEquipment/deleteList.vue')
   },
  {
   path: 'in-stock-register',
   name: 'map-manage-in-stock-register',
   meta: [{name: '入库登记', parentName: '地图管理', path: '/overview'}],
   component: () => import('@/views/mapManager/inStockRegister/index.vue')
  },

  {
   path: 'storage-equipment',
   name: 'map-manage-storage-equipment',
   meta: [{name: '在库设备', parentName: '地图管理', path: '/overview'}],
   component: () => import('@/views/mapManager/storageEquipment/index.vue')
  },

  {
   path: 'receive-record',
   name: 'map-manage-receive-record',
   meta: [{name: '请领记录', parentName: '地图管理', path: '/overview'}],
   component: () => import('@/views/mapManager/receiveRecord/index.vue')
  },

  {
   path: 'receive-examine',
   name: 'map-manage-receive-examine',
   meta: [{name: '请领审核', parentName: '地图管理', path: '/overview'}],
   component: () => import('@/views/mapManager/receiveExamine/index.vue')
  },

  {
   path: 'borrow-record',
   name: 'map-manage-borrow-record',
   meta: [{name: '借用记录', parentName: '地图管理', path: '/overview'}],
   component: () => import('@/views/mapManager/borrowRecord/index.vue')
  },
  {
    path: 'borrow-examine',
    name: 'map-manage-borrow-examine',
    meta: [{name: '借用审核', parentName: '地图管理', path: '/overview'}],
    component: () => import('@/views/mapManager/borrowExamine/index.vue')
   },

  {
   path: 'scrap-record',
   name: 'map-manage-scrap-record',
   meta: [{name: '报废记录', parentName: '地图管理', path: '/overview'}],
   component: () => import('@/views/mapManager/scrapRecord/index.vue')
  },
  {
   path: 'scrap-examine',
   name: 'map-manage-scrap-examine',
   meta: [{name: '报废审核', parentName: '地图管理', path: '/overview'}],
   component: () => import('@/views/mapManager/scrapExamine/index.vue')
  },

  {
   path: 'inventory-journal',
   name: 'map-manage-inventory-journal',
   meta: [{name: '盘点日志', parentName: '地图管理', path: '/overview'}],
   component: () => import('@/views/mapManager/inventoryJournal/index.vue')
  },
  {
   path: 'maintain-manage',
   name: 'map-manage-maintain-manage',
   meta: [{name: '维护管理', parentName: '地图管理', path: '/overview'}],
   component: () => import('@/views/mapManager/maintainManage/index.vue')
  },
 ]
}


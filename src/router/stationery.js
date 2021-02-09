//易耗品管理

import layout from '@/layout/index';
export default {
 path: '/stationery',
 component: layout,
 meta: {
  name: '易耗品管理',
 },

 children: [
  {
   path: 'plan',
   name: 'consumables-manage-plan-declare',
   meta: [{name: '计划申报', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/stationery/planDeclare/index.vue')
  },
  {
   path: 'record',
   name: 'consumables-manage-in-stock-register',
   meta: [{name: '入库登记', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/stationery/inStockRegister/index.vue')
  },
  {
    path: 'delete/list',
    name: 'teaching-equipment-plan-declare',
    meta: [{name: '删除列表', parentName: '易耗品管理', path: '/delete-list'}],
    component: () => import('@/views/stationery/storageEquipment/deleteList.vue')
   },
  {
   path: 'inventory',
   name: 'consumables-manage-storage-equipment',
   meta: [{name: '在库设备', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/stationery/storageEquipment/index.vue')
  },

  {
   path: 'receive/record',
   name: 'consumables-manage-receive-record',
   meta: [{name: '请领记录', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/stationery/receiveRecord/index.vue')
  },

  {
   path: 'receive/audit',
   name: 'consumables-manage-receive-examine',
   meta: [{name: '请领审核', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/stationery/receiveExamine/index.vue')
  },

  {
   path: 'borrow/record',
   name: 'consumables-manage-borrow-record',
   meta: [{name: '借用记录', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/stationery/borrowRecord/index.vue')
  },
  {
   path: 'borrow/examine',
   name: 'consumables-manage-borrow-examine',
   meta: [{name: '借用审核', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/stationery/borrowExamine/index.vue')
  },

  {
   path: 'repair/record',
   name: 'consumables-manage-repair-record',
   meta: [{name: '维修记录', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/stationery/repairRecord/index.vue')
  },

  {
   path: 'repair/examine',
   name: 'consumables-manage-repair-examine',
   meta: [{name: '维修审核', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/stationery/repairExamine/index.vue')
  },

  {
   path: 'scrap/record',
   name: 'consumables-manage-scrap-record',
   meta: [{name: '报废记录', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/stationery/scrapRecord/index.vue')
  },
  {
   path: 'scrap/audit',
   name: 'consumables-manage-scrap-examine',
   meta: [{name: '报废审核', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/stationery/scrapExamine/index.vue')
  },

  {
   path: 'check/log',
   name: 'consumables-manage-inventory-journal',
   meta: [{name: '盘点日志', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/stationery/inventoryJournal/index.vue')
  },
  {
   path: 'attr',
   name: 'consumables-manage-maintain-manage',
   meta: [{name: '维护管理', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/stationery/maintainManage/index.vue')
  },
 ]
}


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
   path: 'plan-declare',
   name: 'consumables-manage-plan-declare',
   meta: [{name: '计划申报', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/consumablesManager/planDeclare/index.vue')
  },

  {
   path: 'plan-examine',
   name: 'consumables-manage-plan-examine',
   meta: [{name: '计划审核', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/consumablesManager/planExamine/index.vue')
  },

  {
   path: 'in-stock-register',
   name: 'consumables-manage-in-stock-register',
   meta: [{name: '入库登记', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/consumablesManager/inStockRegister/index.vue')
  },

  {
   path: 'storage-equipment',
   name: 'consumables-manage-storage-equipment',
   meta: [{name: '在库设备', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/consumablesManager/storageEquipment/index.vue')
  },

  {
   path: 'receive-record',
   name: 'consumables-manage-receive-record',
   meta: [{name: '请领记录', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/consumablesManager/receiveRecord/index.vue')
  },

  {
   path: 'receive-examine',
   name: 'consumables-manage-receive-examine',
   meta: [{name: '请领审核', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/consumablesManager/receiveExamine/index.vue')
  },

  {
   path: 'borrow-record',
   name: 'consumables-manage-borrow-record',
   meta: [{name: '借用记录', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/consumablesManager/borrowRecord/index.vue')
  },
  {
   path: 'borrow-examine',
   name: 'consumables-manage-borrow-examine',
   meta: [{name: '借用审核', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/consumablesManager/borrowExamine/index.vue')
  },

  {
   path: 'repair-record',
   name: 'consumables-manage-repair-record',
   meta: [{name: '维修记录', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/consumablesManager/repairRecord/index.vue')
  },

  {
   path: 'repair-examine',
   name: 'consumables-manage-repair-examine',
   meta: [{name: '维修审核', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/consumablesManager/repairExamine/index.vue')
  },

  {
   path: 'scrap-record',
   name: 'consumables-manage-scrap-record',
   meta: [{name: '报废记录', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/consumablesManager/scrapRecord/index.vue')
  },
  {
   path: 'scrap-examine',
   name: 'consumables-manage-scrap-examine',
   meta: [{name: '报废审核', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/consumablesManager/scrapExamine/index.vue')
  },

  {
   path: 'inventory-journal',
   name: 'consumables-manage-inventory-journal',
   meta: [{name: '盘点日志', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/consumablesManager/inventoryJournal/index.vue')
  },
  {
   path: 'maintain-manage',
   name: 'consumables-manage-maintain-manage',
   meta: [{name: '维护管理', parentName: '易耗品管理', path: '/declare-in-stock'}],
   component: () => import('@/views/consumablesManager/maintainManage/index.vue')
  },
 ]
}


// 教材管理

import layout from '@/layout/index';
export default {
 path: '/material',
 component: layout,
 meta: {
  name: '教材管理',
 },
 children: [
  {
   path: 'plan',
   name: 'teaching-material-manage-plan-declare',
   meta: [{name: '计划申报', parentName: '教材管理', path: '/declare-in-stock'}],
   component: () => import('@/views/material/planDeclare/index.vue')
  },
  {
   path: 'record',
   name: 'teaching-material-manage-in-stock-register',
   meta: [{name: '入库登记', parentName: '教材管理', path: '/declare-in-stock'}],
   component: () => import('@/views/material/inStockRegister/index.vue')
  },

  {
   path: 'inventory',
   name: 'teaching-material-manage-storage-equipment',
   meta: [{name: '在库教材', parentName: '教材管理', path: '/declare-in-stock'}],
   component: () => import('@/views/material/storageEquipment/index.vue')
  },
  {
    path: 'delete/list',
    name: 'teaching-equipment-plan-declare',
    meta: [{name: '删除列表', parentName: '教材管理', path: '/delete-list'}],
    component: () => import('@/views/material/storageEquipment/deleteList.vue')
   },
  {
   path: 'receive/record',
   name: 'teaching-material-manage-receive-record',
   meta: [{name: '请领记录', parentName: '教材管理', path: '/declare-in-stock'}],
   component: () => import('@/views/material/receiveRecord/index.vue')
  },

  {
   path: 'receive/audit',
   name: 'teaching-material-manage-receive-examine',
   meta: [{name: '请领审核', parentName: '教材管理', path: '/declare-in-stock'}],
   component: () => import('@/views/material/receiveExamine/index.vue')
  },

  {
   path: 'borrow/record',
   name: 'teaching-material-manage-borrow-record',
   meta: [{name: '借用记录', parentName: '教材管理', path: '/declare-in-stock'}],
   component: () => import('@/views/material/borrowRecord/index.vue')
  },
  {
   path: 'borrow/audit',
   name: 'teaching-material-manage-borrow-examine',
   meta: [{name: '借用审核', parentName: '教材管理', path: '/declare-in-stock'}],
   component: () => import('@/views/material/borrowExamine/index.vue')
  },

  {
   path: 'scrap/record',
   name: 'teaching-material-manage-scrap-record',
   meta: [{name: '报废记录', parentName: '教材管理', path: '/declare-in-stock'}],
   component: () => import('@/views/material/scrapRecord/index.vue')
  },
  {
   path: 'scrap/audit',
   name: 'teaching-material-manage-scrap-examine',
   meta: [{name: '报废审核', parentName: '教材管理', path: '/declare-in-stock'}],
   component: () => import('@/views/material/scrapExamine/index.vue')
  },

  {
   path: 'check/log',
   name: 'teaching-material-manage-inventory-journal',
   meta: [{name: '盘点日志', parentName: '教材管理', path: '/declare-in-stock'}],
   component: () => import('@/views/material/inventoryJournal/index.vue')
  },
  {
   path: 'attr',
   name: 'teaching-material-manage-maintain-manage',
   meta: [{name: '维护管理', parentName: '教材管理', path: '/declare-in-stock'}],
   component: () => import('@/views/material/maintainManage/index.vue')
  },
 ]
}


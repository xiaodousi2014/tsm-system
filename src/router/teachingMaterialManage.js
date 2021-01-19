// 教材管理

import layout from '@/layout/index';
export default {
 path: '/teaching-material-manage',
 component: layout,
 meta: {
  name: '教材管理',
 },
 children: [
  {
   path: 'plan-declare',
   name: 'teaching-material-manage-plan-declare',
   meta: [{name: '计划申报', parentName: '教材管理', path: '/declare-in-stock'}],
   component: () => import('@/views/teachingMaterialManage/planDeclare/index.vue')
  },

  {
   path: 'plan-examine',
   name: 'teaching-material-manage-plan-examine',
   meta: [{name: '计划审核', parentName: '教材管理', path: '/declare-in-stock'}],
   component: () => import('@/views/teachingMaterialManage/planExamine/index.vue')
  },

  {
   path: 'in-stock-register',
   name: 'teaching-material-manage-in-stock-register',
   meta: [{name: '入库登记', parentName: '教材管理', path: '/declare-in-stock'}],
   component: () => import('@/views/teachingMaterialManage/inStockRegister/index.vue')
  },

  {
   path: 'storage-equipment',
   name: 'teaching-material-manage-storage-equipment',
   meta: [{name: '在库设备', parentName: '教材管理', path: '/declare-in-stock'}],
   component: () => import('@/views/teachingMaterialManage/storageEquipment/index.vue')
  },

  {
   path: 'receive-record',
   name: 'teaching-material-manage-receive-record',
   meta: [{name: '请领记录', parentName: '教材管理', path: '/declare-in-stock'}],
   component: () => import('@/views/teachingMaterialManage/receiveRecord/index.vue')
  },

  {
   path: 'receive-examine',
   name: 'teaching-material-manage-receive-examine',
   meta: [{name: '请领审核', parentName: '教材管理', path: '/declare-in-stock'}],
   component: () => import('@/views/teachingMaterialManage/receiveExamine/index.vue')
  },

  {
   path: 'borrow-record',
   name: 'teaching-material-manage-borrow-record',
   meta: [{name: '借用记录', parentName: '教材管理', path: '/declare-in-stock'}],
   component: () => import('@/views/teachingMaterialManage/borrowRecord/index.vue')
  },
  {
   path: 'borrow-examine',
   name: 'teaching-material-manage-borrow-examine',
   meta: [{name: '借用审核', parentName: '教材管理', path: '/declare-in-stock'}],
   component: () => import('@/views/teachingMaterialManage/borrowExamine/index.vue')
  },

  {
   path: 'repair-record',
   name: 'teaching-material-manage-repair-record',
   meta: [{name: '维修记录', parentName: '教材管理', path: '/declare-in-stock'}],
   component: () => import('@/views/teachingMaterialManage/repairRecord/index.vue')
  },

  {
   path: 'repair-examine',
   name: 'teaching-material-manage-repair-examine',
   meta: [{name: '维修审核', parentName: '教材管理', path: '/declare-in-stock'}],
   component: () => import('@/views/teachingMaterialManage/repairExamine/index.vue')
  },

  {
   path: 'scrap-record',
   name: 'teaching-material-manage-scrap-record',
   meta: [{name: '报废记录', parentName: '教材管理', path: '/declare-in-stock'}],
   component: () => import('@/views/teachingMaterialManage/scrapRecord/index.vue')
  },
  {
   path: 'scrap-examine',
   name: 'teaching-material-manage-scrap-examine',
   meta: [{name: '报废审核', parentName: '教材管理', path: '/declare-in-stock'}],
   component: () => import('@/views/teachingMaterialManage/scrapExamine/index.vue')
  },

  {
   path: 'inventory-journal',
   name: 'teaching-material-manage-inventory-journal',
   meta: [{name: '盘点日志', parentName: '教材管理', path: '/declare-in-stock'}],
   component: () => import('@/views/teachingMaterialManage/inventoryJournal/index.vue')
  },
  {
   path: 'maintain-manage',
   name: 'teaching-material-manage-maintain-manage',
   meta: [{name: '维护管理', parentName: '教材管理', path: '/declare-in-stock'}],
   component: () => import('@/views/teachingMaterialManage/maintainManage/index.vue')
  },
 ]
}


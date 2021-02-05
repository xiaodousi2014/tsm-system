// 教学设备 

import layout from '@/layout/index';
export default {
 path: '/device',
 component: layout,
 meta: {
  name: '教学设备',
 },
 children: [
  {
   path: 'plan',
   name: 'teaching-equipment-plan-declare',
   meta: [{name: '计划申报', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/device/planDeclare/index.vue')
  },

  {
   path: 'plan/audit',
   name: 'teaching-equipment-plan-examine',
   meta: [{name: '计划审核', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/device/planExamine/index.vue')
  },
  {
   path: 'record',
   name: 'teaching-equipment-in-stock-register',
   meta: [{name: '入库登记', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/device/inStockRegister/index.vue')
  },

  {
   path: 'inventory',
   name: 'teaching-equipment-storage-equipment',
   meta: [{name: '在库设备', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/device/storageEquipment/index.vue')
  },
  {
    path: 'delete/list',
    name: 'teaching-equipment-plan-declare',
    meta: [{name: '删除列表', parentName: '教学设备', path: '/delete-list'}],
    component: () => import('@/views/device/storageEquipment/deleteList.vue')
   },
  {
   path: 'receive/record',
   name: 'teaching-equipment-receive-record',
   meta: [{name: '请领记录', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/device/receiveRecord/index.vue')
  },

  {
   path: 'receive/audit',
   name: 'teaching-equipment-receive-examine',
   meta: [{name: '请领审核', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/device/receiveExamine/index.vue')
  },

  {
   path: 'borrow/record',
   name: 'teaching-equipment-borrow-record',
   meta: [{name: '借用记录', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/device/borrowRecord/index.vue')
  },
  {
   path: 'borrow/audit',
   name: 'teaching-equipment-borrow-examine',
   meta: [{name: '借用审核', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/device/borrowExamine/index.vue')
  },

  {
   path: 'repair/record',
   name: 'teaching-equipment-repair-record',
   meta: [{name: '维修记录', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/device/repairRecord/index.vue')
  },

  {
   path: 'repair/audit',
   name: 'teaching-equipment-repair-examine',
   meta: [{name: '维修审核', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/device/repairExamine/index.vue')
  },

  {
   path: 'scrap/record',
   name: 'teaching-equipment-scrap-record',
   meta: [{name: '报废记录', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/device/scrapRecord/index.vue')
  },
  {
   path: 'scrap/audit',
   name: 'teaching-equipment-scrap-examine',
   meta: [{name: '报废审核', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/device/scrapExamine/index.vue')
  },

  {
   path: 'check/log',
   name: 'teaching-equipment-inventory-journal',
   meta: [{name: '盘点日志', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/device/inventoryJournal/index.vue')
  },
  {
   path: 'attr',
   name: 'teaching-equipment-maintain-manage',
   meta: [{name: '维护管理', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/device/maintainManage/index.vue')
  },
 ]
}


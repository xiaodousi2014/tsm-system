// 模拟器械
import layout from '@/layout/index';
export default {
 path: '/trainingdevice',
 component: layout,
 meta: {
  name: '模拟器械',
 },
 children: [
  {
   path: 'plan',
   name: 'simulation-equipment-plan-declare',
   meta: [{name: '计划申报', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/trainingdevice/planDeclare/index.vue')
  },

  {
    path: 'plan-examine',
    name: 'simulation-equipment-plan-examine',
    meta: [{name: '计划审核', parentName: '模拟器械', path: '/declare-in-stock'}],
    component: () => import('@/views/trainingdevice/planExamine/index.vue')
   },
  {
   path: 'record',
   name: 'simulation-equipment-in-stock-register',
   meta: [{name: '入库登记', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/trainingdevice/inStockRegister/index.vue')
  },

  {
   path: 'inventory',
   name: 'simulation-equipment-storage-equipment',
   meta: [{name: '在库器械', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/trainingdevice/storageEquipment/index.vue')
  },
  {
    path: 'receive/record',
    name: 'simulation-equipment-receive-record',
    meta: [{name: '请领记录', parentName: '模拟器械', path: '/declare-in-stock'}],
    component: () => import('@/views/trainingdevice/receiveRecord/index.vue')
   },
   {
    path: 'receive/examine',
    name: 'simulation-equipment-receive-examine',
    meta: [{name: '请领审核', parentName: '模拟器械', path: '/declare-in-stock'}],
    component: () => import('@/views/trainingdevice/receiveExamine/index.vue')
   },
  {
   path: 'borrow/record',
   name: 'simulation-equipment-borrow-record',
   meta: [{name: '借用记录', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/trainingdevice/borrowRecord/index.vue')
  },
  {
   path: 'borrow/audit',
   name: 'simulation-equipment-borrow-examine',
   meta: [{name: '借用审核', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/trainingdevice/borrowExamine/index.vue')
  },

  {
   path: 'repair/record',
   name: 'simulation-equipment-repair-record',
   meta: [{name: '维修记录', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/trainingdevice/repairRecord/index.vue')
  },

  {
   path: 'repair/audit',
   name: 'simulation-equipment-repair-examine',
   meta: [{name: '维修审核', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/trainingdevice/repairExamine/index.vue')
  },

  {
   path: 'scrap/record',
   name: 'simulation-equipment-scrap-record',
   meta: [{name: '报废记录', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/trainingdevice/scrapRecord/index.vue')
  },
  {
   path: 'scrap/audit',
   name: 'simulation-equipment-scrap-examine',
   meta: [{name: '报废审核', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/trainingdevice/scrapExamine/index.vue')
  },

  {
   path: 'check/log',
   name: 'simulation-equipment-inventory-journal',
   meta: [{name: '盘点日志', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/trainingdevice/inventoryJournal/index.vue')
  },
  {
   path: 'attr',
   name: 'simulation-equipment-maintain-manage',
   meta: [{name: '维护管理', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/trainingdevice/maintainManage/index.vue')
  },
 ]
}


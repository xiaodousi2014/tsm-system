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
   path: 'plan-declare',
   name: 'simulation-equipment-plan-declare',
   meta: [{name: '计划申报', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/trainingdeviceManager/planDeclare/index.vue')
  },

  {
   path: 'in-stock-register',
   name: 'simulation-equipment-in-stock-register',
   meta: [{name: '入库登记', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/trainingdeviceManager/inStockRegister/index.vue')
  },

  {
   path: 'storage-equipment',
   name: 'simulation-equipment-storage-equipment',
   meta: [{name: '在库器械', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/trainingdeviceManager/storageEquipment/index.vue')
  },
  {
    path: 'receive-record',
    name: 'simulation-equipment-receive-record',
    meta: [{name: '请领记录', parentName: '模拟器械', path: '/declare-in-stock'}],
    component: () => import('@/views/trainingdeviceManager/receiveRecord/index.vue')
   },
   {
    path: 'receive-examine',
    name: 'simulation-equipment-receive-examine',
    meta: [{name: '请领审核', parentName: '模拟器械', path: '/declare-in-stock'}],
    component: () => import('@/views/trainingdeviceManager/receiveExamine/index.vue')
   },
  {
   path: 'borrow-record',
   name: 'simulation-equipment-borrow-record',
   meta: [{name: '借用记录', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/trainingdeviceManager/borrowRecord/index.vue')
  },
  {
   path: 'borrow-examine',
   name: 'simulation-equipment-borrow-examine',
   meta: [{name: '借用审核', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/trainingdeviceManager/borrowExamine/index.vue')
  },

  {
   path: 'repair-record',
   name: 'simulation-equipment-repair-record',
   meta: [{name: '维修记录', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/trainingdeviceManager/repairRecord/index.vue')
  },

  {
   path: 'repair-examine',
   name: 'simulation-equipment-repair-examine',
   meta: [{name: '维修审核', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/trainingdeviceManager/repairExamine/index.vue')
  },

  {
   path: 'scrap-record',
   name: 'simulation-equipment-scrap-record',
   meta: [{name: '报废记录', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/trainingdeviceManager/scrapRecord/index.vue')
  },
  {
   path: 'scrap-examine',
   name: 'simulation-equipment-scrap-examine',
   meta: [{name: '报废审核', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/trainingdeviceManager/scrapExamine/index.vue')
  },

  {
   path: 'inventory-journal',
   name: 'simulation-equipment-inventory-journal',
   meta: [{name: '盘点日志', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/trainingdeviceManager/inventoryJournal/index.vue')
  },
  {
   path: 'maintain-manage',
   name: 'simulation-equipment-maintain-manage',
   meta: [{name: '维护管理', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/trainingdeviceManager/maintainManage/index.vue')
  },
 ]
}


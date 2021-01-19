// 模拟器械
import layout from '@/layout/index';
export default {
 path: '/simulation-equipment',
 component: layout,
 meta: {
  name: '模拟器械',
 },
 children: [
  {
   path: 'plan-declare',
   name: 'simulation-equipment-plan-declare',
   meta: [{name: '计划申报', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/simulationEquipment/planDeclare/index.vue')
  },

  {
   path: 'plan-examine',
   name: 'simulation-equipment-plan-examine',
   meta: [{name: '计划审核', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/simulationEquipment/planExamine/index.vue')
  },

  {
   path: 'in-stock-register',
   name: 'simulation-equipment-in-stock-register',
   meta: [{name: '入库登记', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/simulationEquipment/inStockRegister/index.vue')
  },

  {
   path: 'storage-equipment',
   name: 'simulation-equipment-storage-equipment',
   meta: [{name: '在库器械', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/simulationEquipment/storageEquipment/index.vue')
  },

  {
   path: 'borrow-record',
   name: 'simulation-equipment-borrow-record',
   meta: [{name: '借用记录', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/simulationEquipment/borrowRecord/index.vue')
  },
  {
   path: 'borrow-examine',
   name: 'simulation-equipment-borrow-examine',
   meta: [{name: '借用审核', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/simulationEquipment/borrowExamine/index.vue')
  },

  {
   path: 'repair-record',
   name: 'simulation-equipment-repair-record',
   meta: [{name: '维修记录', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/simulationEquipment/repairRecord/index.vue')
  },

  {
   path: 'repair-examine',
   name: 'simulation-equipment-repair-examine',
   meta: [{name: '维修审核', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/simulationEquipment/repairExamine/index.vue')
  },

  {
   path: 'scrap-record',
   name: 'simulation-equipment-scrap-record',
   meta: [{name: '报废记录', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/simulationEquipment/scrapRecord/index.vue')
  },
  {
   path: 'scrap-examine',
   name: 'simulation-equipment-scrap-examine',
   meta: [{name: '报废审核', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/simulationEquipment/scrapExamine/index.vue')
  },

  {
   path: 'inventory-journal',
   name: 'simulation-equipment-inventory-journal',
   meta: [{name: '盘点日志', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/simulationEquipment/inventoryJournal/index.vue')
  },
  {
   path: 'maintain-manage',
   name: 'simulation-equipment-maintain-manage',
   meta: [{name: '维护管理', parentName: '模拟器械', path: '/declare-in-stock'}],
   component: () => import('@/views/simulationEquipment/maintainManage/index.vue')
  },
 ]
}


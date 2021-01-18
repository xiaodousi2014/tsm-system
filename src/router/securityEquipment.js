// 保障设备 
import layout from '@/layout/index';
export default {
 path: '/security-equipment',
 component: layout,
 meta: {
  name: '保障设备',
 },
 children: [
  {
   path: 'plan-declare',
   name: 'security-equipment-plan-declare',
   meta: {
    name: '计划申报',
   },
   component: () => import('@/views/securityEquipment/planDeclare/index.vue')
  },

  {
   path: 'plan-examine',
   name: 'security-equipment-plan-examine',
   meta: {
    name: '计划审核',
   },
   component: () => import('@/views/securityEquipment/planExamine/index.vue')
  },

  {
   path: 'in-stock-register',
   name: 'security-equipment-in-stock-register',
   meta: {
    name: '入库登记',
   },
   component: () => import('@/views/securityEquipment/inStockRegister/index.vue')
  },

  {
   path: 'storage-equipment',
   name: 'security-equipment-storage-equipment',
   meta: {
    name: '在库设备',
   },
   component: () => import('@/views/securityEquipment/storageEquipment/index.vue')
  },

  {
   path: 'borrow-record',
   name: 'security-equipment-borrow-record',
   meta: {
    name: '借用记录',
   },
   component: () => import('@/views/securityEquipment/borrowRecord/index.vue')
  },
  {
   path: 'borrow-examine',
   name: 'security-equipment-borrow-examine',
   meta: {
    name: '借用审核',
   },
   component: () => import('@/views/securityEquipment/borrowExamine/index.vue')
  },

  {
   path: 'repair-record',
   name: 'security-equipment-repair-record',
   meta: {
    name: '维修记录',
   },
   component: () => import('@/views/securityEquipment/repairRecord/index.vue')
  },

  {
   path: 'repair-examine',
   name: 'security-equipment-repair-examine',
   meta: {
    name: '维修审核',
   },
   component: () => import('@/views/securityEquipment/repairExamine/index.vue')
  },

  {
   path: 'scrap-record',
   name: 'security-equipment-scrap-record',
   meta: {
    name: '报废记录',
   },
   component: () => import('@/views/securityEquipment/scrapRecord/index.vue')
  },
  {
   path: 'scrap-examine',
   name: 'security-equipment-scrap-examine',
   meta: {
    name: '报废审核',
   },
   component: () => import('@/views/securityEquipment/scrapExamine/index.vue')
  },

  {
   path: 'inventory-journal',
   name: 'security-equipment-inventory-journal',
   meta: {
    name: '盘点日志',
   },
   component: () => import('@/views/securityEquipment/inventoryJournal/index.vue')
  },
  {
   path: 'maintain-manage',
   name: 'security-equipment-maintain-manage',
   meta: {
    name: '维护管理',
   },
   component: () => import('@/views/securityEquipment/maintainManage/index.vue')
  },
 ]
}


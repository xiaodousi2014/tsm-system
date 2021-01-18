// 教学设备 

import layout from '@/layout/index';
export default {
 path: '/teaching-equipment',
 component: layout,
 meta: {
  name: '教学设备',
 },
 children: [
  {
   path: 'plan-declare',
   name: 'teaching-equipment-plan-declare',
   meta: {
    name: '计划申报',
   },
   component: () => import('@/views/teachingEquipment/planDeclare/index.vue')
  },

  {
   path: 'plan-examine',
   name: 'teaching-equipment-plan-examine',
   meta: {
    name: '计划审核',
   },
   component: () => import('@/views/teachingEquipment/planExamine/index.vue')
  },

  {
   path: 'in-stock-register',
   name: 'teaching-equipment-in-stock-register',
   meta: {
    name: '入库登记',
   },
   component: () => import('@/views/teachingEquipment/inStockRegister/index.vue')
  },

  {
   path: 'storage-equipment',
   name: 'teaching-equipment-storage-equipment',
   meta: {
    name: '在库设备',
   },
   component: () => import('@/views/teachingEquipment/storageEquipment/index.vue')
  },

  {
   path: 'receive-record',
   name: 'teaching-equipment-receive-record',
   meta: {
    name: '请领记录',
   },
   component: () => import('@/views/teachingEquipment/receiveRecord/index.vue')
  },

  {
   path: 'receive-examine',
   name: 'teaching-equipment-receive-examine',
   meta: {
    name: '请领审核',
   },
   component: () => import('@/views/teachingEquipment/receiveExamine/index.vue')
  },

  {
   path: 'borrow-record',
   name: 'teaching-equipment-borrow-record',
   meta: {
    name: '借用记录',
   },
   component: () => import('@/views/teachingEquipment/borrowRecord/index.vue')
  },
  {
   path: 'borrow-examine',
   name: 'teaching-equipment-borrow-examine',
   meta: {
    name: '借用审核',
   },
   component: () => import('@/views/teachingEquipment/borrowExamine/index.vue')
  },

  {
   path: 'repair-record',
   name: 'teaching-equipment-repair-record',
   meta: {
    name: '维修记录',
   },
   component: () => import('@/views/teachingEquipment/repairRecord/index.vue')
  },

  {
   path: 'repair-examine',
   name: 'teaching-equipment-repair-examine',
   meta: {
    name: '维修审核',
   },
   component: () => import('@/views/teachingEquipment/repairExamine/index.vue')
  },

  {
   path: 'scrap-record',
   name: 'teaching-equipment-scrap-record',
   meta: {
    name: '报废记录',
   },
   component: () => import('@/views/teachingEquipment/scrapRecord/index.vue')
  },
  {
   path: 'scrap-examine',
   name: 'teaching-equipment-scrap-examine',
   meta: {
    name: '报废审核',
   },
   component: () => import('@/views/teachingEquipment/scrapExamine/index.vue')
  },

  {
   path: 'inventory-journal',
   name: 'teaching-equipment-inventory-journal',
   meta: {
    name: '盘点日志',
   },
   component: () => import('@/views/teachingEquipment/inventoryJournal/index.vue')
  },
  {
   path: 'maintain-manage',
   name: 'teaching-equipment-maintain-manage',
   meta: {
    name: '维护管理',
   },
   component: () => import('@/views/teachingEquipment/maintainManage/index.vue')
  },
 ]
}


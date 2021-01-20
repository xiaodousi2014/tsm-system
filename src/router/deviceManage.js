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
   path: 'plan-declare',
   name: 'teaching-equipment-plan-declare',
   meta: [{name: '计划申报', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/deviceManage/index.vue')
  },

  {
   path: 'plan-examine',
   name: 'teaching-equipment-plan-examine',
   meta: [{name: '计划审核', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/deviceManage/index.vue')
  },

  {
   path: 'in-stock-register',
   name: 'teaching-equipment-in-stock-register',
   meta: [{name: '入库登记', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/deviceManage/index.vue')
  },

  {
   path: 'storage-equipment',
   name: 'teaching-equipment-storage-equipment',
   meta: [{name: '在库设备', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/deviceManage/index.vue')
  },

  {
   path: 'receive-record',
   name: 'teaching-equipment-receive-record',
   meta: [{name: '请领记录', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/deviceManage/index.vue')
  },

  {
   path: 'receive-examine',
   name: 'teaching-equipment-receive-examine',
   meta: [{name: '请领审核', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/deviceManage/index.vue')
  },

  {
   path: 'borrow-record',
   name: 'teaching-equipment-borrow-record',
   meta: [{name: '借用记录', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/deviceManage/index.vue')
  },
  {
   path: 'borrow-examine',
   name: 'teaching-equipment-borrow-examine',
   meta: [{name: '借用审核', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/deviceManage/index.vue')
  },

  {
   path: 'repair-record',
   name: 'teaching-equipment-repair-record',
   meta: [{name: '维修记录', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/deviceManage/index.vue')
  },

  {
   path: 'repair-examine',
   name: 'teaching-equipment-repair-examine',
   meta: [{name: '维修审核', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/deviceManage/index.vue')
  },

  {
   path: 'scrap-record',
   name: 'teaching-equipment-scrap-record',
   meta: [{name: '报废记录', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/deviceManage/index.vue')
  },
  {
   path: 'scrap-examine',
   name: 'teaching-equipment-scrap-examine',
   meta: [{name: '报废审核', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/deviceManage/index.vue')
  },

  {
   path: 'inventory-journal',
   name: 'teaching-equipment-inventory-journal',
   meta: [{name: '盘点日志', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/deviceManage/index.vue')
  },
  {
   path: 'maintain-manage',
   name: 'teaching-equipment-maintain-manage',
   meta: [{name: '维护管理', parentName: '教学设备', path: '/declare-in-stock'}],
   component: () => import('@/views/deviceManage/index.vue')
  },
 ]
}


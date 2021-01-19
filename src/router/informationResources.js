// 信息资源 
import layout from '@/layout/index';
export default {
 path: '/information-resources',
 component: layout,
 meta: {
  name: '信息资源',
 },


 children: [
  {
   path: 'plan-declare',
   name: 'information-resources-plan-declare',
   meta: [{name: '计划申报', parentName: '信息资源', path: '/declare-in-stock'}],
   component: () => import('@/views/informationResources/planDeclare/index.vue')
  },

  {
   path: 'plan-examine',
   name: 'information-resources-plan-examine',
   meta: [{name: '计划审核', parentName: '信息资源', path: '/declare-in-stock'}],
   component: () => import('@/views/informationResources/planExamine/index.vue')
  },

  {
   path: 'information',
   name: 'information-resources-information',
   meta: [{name: '信息资源登记', parentName: '信息资源', path: '/declare-in-stock'}],
   component: () => import('@/views/informationResources/information/index.vue')
  },

  {
   path: 'stock-manage',
   name: 'information-resources-stock-manage',
   meta: [{name: '库存管理', parentName: '信息资源', path: '/declare-in-stock'}],
   component: () => import('@/views/informationResources/stockManage/index.vue')
  },

 ]
}


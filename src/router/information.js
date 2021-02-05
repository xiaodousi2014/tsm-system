// 信息资源 
import layout from '@/layout/index';
export default {
 path: '/information',
 component: layout,
 meta: {
  name: '信息资源',
 },


 children: [
  {
   path: 'plan',
   name: 'information-resources-plan-declare',
   meta: [{name: '计划申报', parentName: '信息资源', path: '/declare-in-stock'}],
   component: () => import('@/views/information/planDeclare/index.vue')
  },
  {
    path: 'delete-list',
    name: 'teaching-equipment-plan-declare',
    meta: [{name: '删除列表', parentName: '信息资源', path: '/delete-list'}],
    component: () => import('@/views/information/stockManage/deleteList.vue')
   },
   {
    path: 'delete-list-two',
    name: 'teaching-equipment-plan-declare',
    meta: [{name: '删除列表', parentName: '信息资源', path: '/delete-list'}],
    component: () => import('@/views/information/stockManage/deleteListTwo.vue')
   },
   {
    path: 'delete-list-three',
    name: 'teaching-equipment-plan-declare',
    meta: [{name: '删除列表', parentName: '信息资源', path: '/delete-list'}],
    component: () => import('@/views/information/stockManage/deleteListThree.vue')
   },
  {
   path: 'record/:id',
   name: 'information-resources-information',
   meta: [{name: '信息资源登记', parentName: '信息资源', path: '/declare-in-stock'}],
   component: () => import('@/views/information/information/index.vue')
  },

  {
   path: 'inventory',
   name: 'information-resources-stock-manage',
   meta: [{name: '库存管理', parentName: '信息资源', path: '/declare-in-stock'}],
   component: () => import('@/views/information/stockManage/index.vue')
  },

 ]
}


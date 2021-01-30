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
   path: 'plan-declare',
   name: 'information-resources-plan-declare',
   meta: [{name: '计划申报', parentName: '信息资源', path: '/declare-in-stock'}],
   component: () => import('@/views/informationManager/planDeclare/index.vue')
  },
  {
    path: 'delete-list',
    name: 'teaching-equipment-plan-declare',
    meta: [{name: '删除列表', parentName: '信息资源', path: '/delete-list'}],
    component: () => import('@/views/informationManager/stockManage/deleteList.vue')
   },
   {
    path: 'delete-list-two',
    name: 'teaching-equipment-plan-declare',
    meta: [{name: '删除列表', parentName: '信息资源', path: '/delete-list'}],
    component: () => import('@/views/informationManager/stockManage/deleteListTwo.vue')
   },
   {
    path: 'delete-list-three',
    name: 'teaching-equipment-plan-declare',
    meta: [{name: '删除列表', parentName: '信息资源', path: '/delete-list'}],
    component: () => import('@/views/informationManager/stockManage/deleteListThree.vue')
   },
  {
   path: 'information',
   name: 'information-resources-information',
   meta: [{name: '信息资源登记', parentName: '信息资源', path: '/declare-in-stock'}],
   component: () => import('@/views/informationManager/information/index.vue')
  },

  {
   path: 'stock-manage',
   name: 'information-resources-stock-manage',
   meta: [{name: '库存管理', parentName: '信息资源', path: '/declare-in-stock'}],
   component: () => import('@/views/informationManager/stockManage/index.vue')
  },

 ]
}


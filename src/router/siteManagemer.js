// 场地维护
import layout from '@/layout/index';
export default {
 path: '/site',
 component: layout,
 meta: {
  name: '场地维护',
 },

 children: [
  {
   path: 'field',
   name: 'field-maintain-plan-declare',
   meta: [{name: '场地', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/field/index.vue')
  },

  {
   path: 'use-plan',
   name: 'field-maintain-use-plan',
   meta: [{name: '使用计划', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/usePlan/index.vue')
  },


  {
   path: 'location-display',
   name: 'field-maintain-location-display',
   meta: [{name: '位置显示', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/locationDisplay/index.vue')
  },

  {
   path: 'training-base',
   name: 'field-maintain-training-base',
   meta: [{name: '训练基地', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/trainingBase/index.vue')
  },

  {
   path: 'training-field',
   name: 'field-maintain-training-field',
   meta: [{name: '训练场地', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/trainingField/index.vue')
  },

  {
   path: 'room',
   name: 'field-maintain-room',
   meta: [{name: '保障用房', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/room/index.vue')
  },

  {
   path: 'facilitie-config',
   name: 'field-maintain-facilitie-config',
   meta: [{name: '配置设施', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/facilitieConfig/index.vue')
  },


  {
   path: 'fortification',
   name: 'field-maintain-fortification',
   meta: [{name: '阵地工事', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/fortification/index.vue')
  },


  {
   path: 'road-network',
   name: 'field-maintain-road-network',
   meta: [{name: '道路管网', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/roadNetwork/index.vue')
  },

  {
   path: 'officer-training-center',
   name: 'field-maintain-officer-training-center',
   meta: [{name: '军官训练中心', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/officerTrainingCenter/index.vue')
  },

  {
   path: 'teaching-institution',
   name: 'field-maintain-teaching-institution',
   meta: [{name: '教导机构', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/teachingInstitution/index.vue')
  },

  {
   path: 'classroom',
   name: 'field-maintain-classroom',
   meta: [{name: '普通教室', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/classroom/index.vue')
  },

  {
   path: 'major-training-center',
   name: 'field-maintain-major-training-center',
   meta: [{name: '专业训练中心', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/majorTtrainingCenter/index.vue')
  },

  {
   path: 'library',
   name: 'field-maintain-library',
   meta: [{name: '图书馆', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/library/index.vue')
  },

  {
   path: 'military-gymnasium',
   name: 'field-maintain-military-gymnasium',
   meta: [{name: '军体馆', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/militaryGymnasium/index.vue')
  },

  {
   path: 'studio',
   name: 'field-maintain-studio',
   meta: [{name: '演播室(电教设备)', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/studio/index.vue')
  },

  {
   path: 'laboratory-manage',
   name: 'field-maintain-laboratory-manage',
   meta: [{name: '实验室管理', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/laboratorymanage/index.vue')
  }, 
  {
   path: 'maintain-manage',
   name: 'field-maintain-maintain-manage',
   meta: [{name: '维护管理', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/maintainManage/index.vue')
  },  
 ]
}


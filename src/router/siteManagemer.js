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
   path: 'use-plan',
   name: 'site-managemer-use-plan',
   meta: [{name: '使用计划', parentName: '场地维护', path: '/use-plan'}],
   component: () => import('@/views/siteManagemer/usePlan/index.vue')
  },
  {
   path: 'location-display',
   name: 'site-managemer-location-display',
   meta: [{name: '位置显示', parentName: '场地维护', path: '/location-display'}],
   component: () => import('@/views/siteManagemer/locationDisplay/index.vue')
  }, 
  {
   path: 'training-base',
   name: 'site-managemer-training-base',
   meta: [{name: '训练基地', parentName: '场地维护', path: '/training-base'}],
   component: () => import('@/views/siteManagemer/trainingBase/index.vue')
  }, 
  {
   path: 'training-field',
   name: 'site-managemer-training-field',
   meta: [{name: '训练场地', parentName: '场地维护', path: '/training-field'}],
   component: () => import('@/views/siteManagemer/trainingField/index.vue')
  }, 
  {
   path: 'room',
   name: 'site-managemer-room',
   meta: [{name: '保障用房', parentName: '场地维护', path: '/room'}],
   component: () => import('@/views/siteManagemer/room/index.vue')
  }, 
  {
   path: 'facilitie-config',
   name: 'site-managemer-facilitie-config',
   meta: [{name: '配置设施', parentName: '场地维护', path: '/facilitie-config'}],
   component: () => import('@/views/siteManagemer/facilitieConfig/index.vue')
  }, 
  {
   path: 'fortification',
   name: 'site-managemer-fortification',
   meta: [{name: '阵地工事', parentName: '场地维护', path: '/fortification'}],
   component: () => import('@/views/siteManagemer/fortification/index.vue')
  }, 
  {
   path: 'road-network',
   name: 'site-managemer-road-network',
   meta: [{name: '道路管网', parentName: '场地维护', path: '/road-network'}],
   component: () => import('@/views/siteManagemer/roadnNetwork/index.vue')
  }, 
  {
   path: 'officer-training-center',
   name: 'site-managemer-officer-training-center',
   meta: [{name: '军官训练中心', parentName: '场地维护', path: '/officer-training-center'}],
   component: () => import('@/views/siteManagemer/officerTrainingCenter/index.vue')
  }, 
  {
   path: 'teaching-institution',
   name: 'site-managemer-teaching-institution',
   meta: [{name: '教导机构', parentName: '场地维护', path: '/teaching-institution'}],
   component: () => import('@/views/siteManagemer/teachingInstitution/index.vue')
  }, 
  {
   path: 'classroom',
   name: 'site-managemer-classroom',
   meta: [{name: '普通教室', parentName: '场地维护', path: '/classroom'}],
   component: () => import('@/views/siteManagemer/classroom/index.vue')
  }, 
  {
   path: 'major-training-center',
   name: 'site-managemer-major-training-center',
   meta: [{name: '专业训练中心', parentName: '场地维护', path: '/major-training-center'}],
   component: () => import('@/views/siteManagemer/majorTrainingCenter/index.vue')
  }, 
  {
   path: 'library',
   name: 'site-managemer-library',
   meta: [{name: '图书馆', parentName: '场地维护', path: '/library'}],
   component: () => import('@/views/siteManagemer/library/index.vue')
  }, 
  {
   path: 'military-gymnasium',
   name: 'site-managemer-military-gymnasium',
   meta: [{name: '军体馆', parentName: '场地维护', path: '/military-gymnasium'}],
   component: () => import('@/views/siteManagemer/militaryGymnasium/index.vue')
  }, 
  {
   path: 'studio',
   name: 'site-managemer-studio',
   meta: [{name: '演播室(电教设备)', parentName: '场地维护', path: '/studio'}],
   component: () => import('@/views/siteManagemer/studio/index.vue')
  }, 
  {
   path: 'laboratory-manage',
   name: 'site-managemer-laboratory-manage',
   meta: [{name: '实验室管理', parentName: '场地维护', path: '/laboratory-manage'}],
   component: () => import('@/views/siteManagemer/laboratoryManage/index.vue')
  }, 
  {
   path: 'maintain-manage',
   name: 'site-managemer-maintain-manage',
   meta: [{name: '维护管理', parentName: '场地维护', path: '/maintain-manage'}],
   component: () => import('@/views/siteManagemer/maintainManage/index.vue')
  }, 
 ]
}
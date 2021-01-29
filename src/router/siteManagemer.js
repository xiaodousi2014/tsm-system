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
   path: 'location-display',
   name: 'field-maintain-location-display',
   meta: [{name: '训练基地', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/locationDisplay/index.vue')
  }, 
  {
   path: 'location-display',
   name: 'field-maintain-location-display',
   meta: [{name: '训练场地', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/locationDisplay/index.vue')
  }, 
  {
   path: 'location-display',
   name: 'field-maintain-location-display',
   meta: [{name: '保障用房', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/locationDisplay/index.vue')
  }, 
  {
   path: 'location-display',
   name: 'field-maintain-location-display',
   meta: [{name: '配置设施', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/locationDisplay/index.vue')
  }, 
  {
   path: 'location-display',
   name: 'field-maintain-location-display',
   meta: [{name: '阵地工事', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/locationDisplay/index.vue')
  }, 
  {
   path: 'location-display',
   name: 'field-maintain-location-display',
   meta: [{name: '道路管网', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/locationDisplay/index.vue')
  }, 
  {
   path: 'location-display',
   name: 'field-maintain-location-display',
   meta: [{name: '军官训练中心', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/locationDisplay/index.vue')
  }, 
  {
   path: 'location-display',
   name: 'field-maintain-location-display',
   meta: [{name: '位置显示', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/locationDisplay/index.vue')
  }, 
  {
   path: 'location-display',
   name: 'field-maintain-location-display',
   meta: [{name: '教导机构', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/locationDisplay/index.vue')
  }, 
  {
   path: 'location-display',
   name: 'field-maintain-location-display',
   meta: [{name: '普通教室', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/locationDisplay/index.vue')
  }, 
  {
   path: 'location-display',
   name: 'field-maintain-location-display',
   meta: [{name: '专业训练中心', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/locationDisplay/index.vue')
  }, 
  {
   path: 'location-display',
   name: 'field-maintain-location-display',
   meta: [{name: '图书馆', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/locationDisplay/index.vue')
  }, 
  {
   path: 'location-display',
   name: 'field-maintain-location-display',
   meta: [{name: '军体馆', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/locationDisplay/index.vue')
  }, 
  {
   path: 'location-display',
   name: 'field-maintain-location-display',
   meta: [{name: '演播室(电教设备)', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/locationDisplay/index.vue')
  }, 
  {
   path: 'location-display',
   name: 'field-maintain-location-display',
   meta: [{name: '实验室管理', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/locationDisplay/index.vue')
  }, 
  {
   path: 'location-display',
   name: 'field-maintain-location-display',
   meta: [{name: '维护管理', parentName: '场地维护', path: '/declare-in-stock'}],
   component: () => import('@/views/siteManagemer/locationDisplay/index.vue')
  }, 
 ]
}


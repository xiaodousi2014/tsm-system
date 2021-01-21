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
 ]
}


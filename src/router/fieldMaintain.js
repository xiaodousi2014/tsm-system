// 场地维护
 

import layout from '@/layout/index';
export default {
 path: '/field-maintain',
 component: layout,
 meta: {
  name: '场地维护',
 },

 children: [
  {
   path: 'field',
   name: 'field-maintain-plan-declare',
   meta: {
    name: '场地',
   },
   component: () => import('@/views/fieldMaintain/field/index.vue')
  },

  {
   path: 'use-plan',
   name: 'field-maintain-use-plan',
   meta: {
    name: '使用计划',
   },
   component: () => import('@/views/fieldMaintain/usePlan/index.vue')
  },


  {
   path: 'location-display',
   name: 'field-maintain-location-display',
   meta: {
    name: '位置显示',
   },
   component: () => import('@/views/fieldMaintain/locationDisplay/index.vue')
  },

  {
   path: 'training-base',
   name: 'field-maintain-training-base',
   meta: {
    name: '训练基地',
   },
   component: () => import('@/views/fieldMaintain/trainingBase/index.vue')
  },

  {
   path: 'training-field',
   name: 'field-maintain-training-field',
   meta: {
    name: '训练场地',
   },
   component: () => import('@/views/fieldMaintain/trainingField/index.vue')
  },

  {
   path: 'room',
   name: 'field-maintain-room',
   meta: {
    name: '保障用房',
   },
   component: () => import('@/views/fieldMaintain/room/index.vue')
  },

  {
   path: 'facilitie-config',
   name: 'field-maintain-facilitie-config',
   meta: {
    name: '配置设施',
   },
   component: () => import('@/views/fieldMaintain/facilitieConfig/index.vue')
  },


  {
   path: 'fortification',
   name: 'field-maintain-fortification',
   meta: {
    name: '阵地工事',
   },
   component: () => import('@/views/fieldMaintain/fortification/index.vue')
  },


  {
   path: 'road-network',
   name: 'field-maintain-road-network',
   meta: {
    name: '道路管网',
   },
   component: () => import('@/views/fieldMaintain/roadNetwork/index.vue')
  },

  {
   path: 'officer-training-center',
   name: 'field-maintain-officer-training-center',
   meta: {
    name: '军官训练中心',
   },
   component: () => import('@/views/fieldMaintain/officerTrainingCenter/index.vue')
  },

  {
   path: 'teaching-institution',
   name: 'field-maintain-teaching-institution',
   meta: {
    name: '教导机构',
   },
   component: () => import('@/views/fieldMaintain/teachingInstitution/index.vue')
  },

  {
   path: 'classroom',
   name: 'field-maintain-classroom',
   meta: {
    name: '普通教室',
   },
   component: () => import('@/views/fieldMaintain/classroom/index.vue')
  },

  {
   path: 'major-training-center',
   name: 'field-maintain-major-training-center',
   meta: {
    name: '专业训练中心',
   },
   component: () => import('@/views/fieldMaintain/majorTtrainingCenter/index.vue')
  },

  {
   path: 'library',
   name: 'field-maintain-library',
   meta: {
    name: '图书馆',
   },
   component: () => import('@/views/fieldMaintain/library/index.vue')
  },

  {
   path: 'military-gymnasium',
   name: 'field-maintain-military-gymnasium',
   meta: {
    name: '军体馆',
   },
   component: () => import('@/views/fieldMaintain/militaryGymnasium/index.vue')
  },

  {
   path: 'studio',
   name: 'field-maintain-studio',
   meta: {
    name: '演播室(电教设备)',
   },
   component: () => import('@/views/fieldMaintain/studio/index.vue')
  },

  {
   path: 'laboratory-manage',
   name: 'field-maintain-laboratory-manage',
   meta: {
    name: '实验室管理',
   },
   component: () => import('@/views/fieldMaintain/laboratorymanage/index.vue')
  }, 
  {
   path: 'maintain-manage',
   name: 'field-maintain-maintain-manage',
   meta: {
    name: '维护管理',
   },
   component: () => import('@/views/fieldMaintain/maintainManage/index.vue')
  },  
 ]
}


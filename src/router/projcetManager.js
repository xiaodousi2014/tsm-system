// 项目管理 一级大类
/* 
1.申报入库
2.申报审核
3.在建项目
4.已结项目
5.维护管理 
 */
import layout from '@/layout/index';
export default {
  path: '/pm',
  component: layout,
  meta: {
    name: '项目管理',
  },
  children: [{
      path: 'declare-in-stock',
      name: 'projcet-declare-in-stock',
      meta: [{
        name: '申报入库',
        parentName: '项目管理',
        path: '/declare-in-stock'
      }],
      component: () => import('@/views/projcetManager/declareInStock/index.vue')
    },
    {
      path: 'declare-in-stock-delete',
      name: 'projcet-declare-in-stock',
      meta: [{
        name: '申报删除记录',
        parentName: '项目管理',
        path: '/declare-in-stock'
      }],
      component: () => import('@/views/projcetManager/declareInStock/delRecord.vue')
    },
    {
      path: 'declare-in-stock-import',
      name: 'projcet-declare-in-stock',
      meta: [{
        name: '项目导入',
        parentName: '项目管理',
        path: '/declare-in-stock'
      }],
      component: () => import('@/views/projcetManager/declareInStock/rkRecord.vue')
    },
    {
      path: 'declare-examine',
      name: 'projcet-declare-examine',
      meta: [{
        name: '申报审核',
        parentName: '项目管理',
        path: '/declare-examine'
      }],
      component: () => import('@/views/projcetManager/declareExamine/index.vue')
    },
    {
      path: 'progress-projcet',
      name: 'progress-projcet',
      meta: [{
        name: '在建项目',
        parentName: '项目管理',
        path: '/progress-projcet'
      }],
      component: () => import('@/views/projcetManager/progressProjcet/index.vue')
    },
    {
      path: 'progress-projcet-delete',
      name: 'progress-projcet',
      meta: [{
        name: '删除表',
        parentName: '项目管理',
        path: '/progress-projcet'
      }],
      component: () => import('@/views/projcetManager/progressProjcet/deleteTable.vue')
    },
    {
      path: 'progress-projcet-task',
      name: 'progress-projcet',
      meta: [{
        name: '任务分解',
        parentName: '项目管理',
        path: '/progress-projcet'
      }],
      component: () => import('@/views/projcetManager/progressProjcet/taskBreakDown.vue')
    },
    {
      path: 'progress-projcet-import',
      name: 'progress-projcet',
      meta: [{
        name: '任务导入',
        parentName: '项目管理',
        path: '/progress-projcet'
      }],
      component: () => import('@/views/projcetManager/progressProjcet/taskImport.vue')
    },
    {
      path: 'progress-projcet-fund',
      name: 'progress-projcet',
      meta: [{
        name: '经费报销登记',
        parentName: '项目管理',
        path: '/progress-projcet'
      }],
      component: () => import('@/views/projcetManager/progressProjcet/fundRegistration.vue')
    },
    {
      path: 'progress-projcet-results',
      name: 'progress-projcet',
      meta: [{
        name: '成果信息',
        parentName: '项目管理',
        path: '/progress-projcet'
      }],
      component: () => import('@/views/projcetManager/progressProjcet/resultsInfo.vue')
    },
    {
      path: 'complete-projcet',
      name: 'progress-complete-projcet',
      meta: [{
        name: '已结项目',
        parentName: '项目管理',
        path: '/complete-projcet'
      }],
      component: () => import('@/views/projcetManager/completeProjcet/index.vue')
    },
    {
      path: 'maintain-manage',
      name: 'progress-maintain-manage',
      meta: [{
        name: '维护管理',
        parentName: '项目管理',
        path: '/maintain-manage'
      }],
      component: () => import('@/views/projcetManager/maintainManage/index.vue')
    },

  ]
}
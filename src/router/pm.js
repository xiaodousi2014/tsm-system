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
  children: [ 
    {
    path: 'record',
      name: 'pm-record',
      meta: [{
        name: '申报入库',
        parentName: '项目管理',
        path: '/declare-in-stock'
      }],
      component: () => import('@/views/pm/declareInStock/index.vue')
    }, 
    {
      path: 'record/audit',
      name: 'pm-record-audit',
      meta: [{
        name: '申报审核',
        parentName: '项目管理',
        path: '/declare-examine'
      }],
      component: () => import('@/views/pm/declareExamine/index.vue')
    }, 
    {
      path: 'declare-in-stock-delete',
      name: 'projcet-declare-in-stock',
      meta: [{
        name: '申报删除记录',
        parentName: '项目管理',
        path: '/declare-in-stock'
      }],
      component: () => import('@/views/pm/declareInStock/delRecord.vue')
    }, 
    {
      path: 'declare-in-stock-import',
      name: 'projcet-declare-in-stock',
      meta: [{
        name: '项目导入',
        parentName: '项目管理',
        path: '/declare-in-stock'
      }],
      component: () => import('@/views/pm/declareInStock/rkRecord.vue')
    }, 
    {
      path: 'record/inprocess', 
      name: 'record-inprocess',
      meta: [{
        name: '在建项目',
        parentName: '项目管理',
        path: '/progress-projcet'
      }],
      component: () => import('@/views/pm/progressProjcet/index.vue')
    },

    {
      path: 'progress-projcet-delete',
      name: 'progress-projcet',
      meta: [{
        name: '删除表',
        parentName: '项目管理',
        path: '/progress-projcet'
      }],
      component: () => import('@/views/pm/progressProjcet/deleteTable.vue')
    },
    {
      path: 'progress-projcet-task',
      name: 'progress-projcet',
      meta: [{
        name: '任务分解',
        parentName: '项目管理',
        path: '/progress-projcet'
      }],
      component: () => import('@/views/pm/progressProjcet/taskBreakDown.vue')
    },
    {
      path: 'progress-projcet-import',
      name: 'progress-projcet',
      meta: [{
        name: '任务导入',
        parentName: '项目管理',
        path: '/progress-projcet'
      }],
      component: () => import('@/views/pm/progressProjcet/taskImport.vue')
    },
    {
      path: 'progress-projcet-fund',
      name: 'progress-projcet',
      meta: [{
        name: '经费报销登记',
        parentName: '项目管理',
        path: '/progress-projcet'
      }],
      component: () => import('@/views/pm/progressProjcet/fundRegistration.vue')
    },
    {
      path: 'progress-projcet-results',
      name: 'progress-projcet',
      meta: [{
        name: '成果信息',
        parentName: '项目管理',
        path: '/progress-projcet'
      }],
      component: () => import('@/views/pm/progressProjcet/resultsInfo.vue')
    },
    {
      path: 'record/complete',
      // /pm/record/complete

      name: 'pm-record-inprocess',
      meta: [{
        name: '已结项目',
        parentName: '项目管理',
        path: '/complete-projcet'
      }],
      component: () => import('@/views/pm/completeProjcet/index.vue')
    },
    {
      path: 'attr',
      name: 'pm-attr',
      meta: [{
        name: '维护管理',
        parentName: '项目管理',
        path: '/maintain-manage'
      }],
      component: () => import('@/views/pm/maintainManage/index.vue')
    },

  ]
}
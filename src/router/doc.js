// 法规知识 一级大类

import layout from '@/layout/index';
export default {
  path: '/doc',
  component: layout,
  meta: {
    name: '法规知识',
  },
  children: [{
    path: 'overview',
    name: 'doc-overview',
    meta: [{
      name: '法规总览',
      parentName: '法规知识',
      path: '/overview'
    }],
    component: () => import('@/views/doc/overview.vue')
  },
  {
    // /doc/record

    path: 'record',
    name: 'doc-record',
    meta: [{
      name: '入库记录',
      parentName: '法规知识',
      path: '/in-stock-record'
    }],
    component: () => import('@/views/doc/inStockRecord.vue')
  },
  {
    path: 'in-stock-record-del',
    name: 'doc-in-stock-record',
    meta: [{
      name: '删除记录',
      parentName: '法规知识',
      path: '/in-stock-record'
    }],
    component: () => import('@/views/doc/delRecord.vue')
  },
  {
    path: 'attr',
    name: 'doc-attr',
    meta: [{
      name: '维护管理',
      parentName: '法规知识',
      path: '/maintain-manage'
    }],
    component: () => import('@/views/doc/maintainManage.vue')
  },

  {
    path: 'retrieval',
    name: 'doc-retrieval',
    meta: [{
      name: '知识检索',
      parentName: '入库记录',
      path: '/retrieval'
    }],
    component: () => import('@/views/doc/retrieval.vue')
  },

  ]
}
// 法规知识 一级大类
 
import layout from '@/layout/index';
export default {
    path: '/doc',
    component: layout,
    meta: {
        name: '法规知识',
    },
    children: [ 
        {
            path: 'overview',
            name: 'doc-overview',
            // meta: {
            //     name: '法规总览',
            // },
            meta: [{name: '法规总览', parentName: '法规知识', path: '/overview'}],
            component: () => import('@/views/StateKnowledge/overview.vue')
        },
        {
            path: 'in-stock-record',
            name: 'doc-in-stock-record',
            // meta: {
            //     name: '入库记录',
            // },
            meta: [{name: '法规总览', parentName: '入库记录', path: '/in-stock-record'}],
            component: () => import('@/views/StateKnowledge/inStockRecord.vue')
        }, 
        {
            path: 'maintain-manage',
            name: 'doc-maintain-manage',
            // meta: {
            //     name: '维护管理',
            // },
            meta: [{name: '维护管理', parentName: '入库记录', path: '/maintain-manage'}],
            component: () => import('@/views/StateKnowledge/maintainManage.vue')
        }, 

        {
            path: 'retrieval',
            name: 'doc-retrieval',
            // meta: {
            //   name: '知识检索', 
            // },
            meta: [{name: '知识检索', parentName: '入库记录', path: '/retrieval'}],
            component: () => import('@/views/StateKnowledge/retrieval.vue')
          },

    ]
}
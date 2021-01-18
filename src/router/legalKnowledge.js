// 法规知识 一级大类
 
import layout from '@/layout/index';
export default {
    path: '/state-knowledge',
    component: layout,
    meta: {
        name: '法规知识',
       },
      
    children: [ 
        {
            path: 'overview',
            name: 'knowledge-overview',
            meta: {
                name: '法规总览',
            },
            component: () => import('@/views/StateKnowledge/overview.vue')
        },
        {
            path: 'in-stock-record',
            name: 'knowledge-in-stock-record',
            meta: {
                name: '入库记录',
            },
            component: () => import('@/views/StateKnowledge/inStockRecord.vue')
        }, 
        {
            path: 'maintain-manage',
            name: 'knowledge-maintain-manage',
            meta: {
                name: '维护管理',
            },
            component: () => import('@/views/StateKnowledge/maintainManage.vue')
        }, 

        {
            path: 'retrieval',
            name: 'knowledge-retrieval',
            meta: {
              name: '知识检索', 
            },
            component: () => import('@/views/StateKnowledge/retrieval.vue')
          },

    ]
}

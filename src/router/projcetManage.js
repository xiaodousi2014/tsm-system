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
    path: '/projcet-manage',
    component: layout,
    meta: {
        name: '项目管理',
       },
    children: [
        {
            path: 'declare-in-stock',
            name: 'projcet-declare-in-stock',
           
            meta: [{name: '申报入库', parentName: '项目管理', path: '/declare-in-stock'}],
            component: () => import('@/views/projectManage/declareInStock/index.vue')
        },

        {
            path: 'declare-examine',
            name: 'projcet-declare-examine',
           
            meta: [{name: '申报审核', parentName: '项目管理', path: '/declare-examine'}],
            component: () => import('@/views/projectManage/declareExamine/index.vue')
        },

        {
            path: 'progress-projcet',
            name: 'progress-projcet',
           
            meta: [{name: '在建项目', parentName: '项目管理', path: '/progress-projcet'}],
            component: () => import('@/views/projectManage/progressProjcet/index.vue')
        },
        {
            path: 'complete-projcet',
            name: 'progress-complete-projcet',
           
            meta: [{name: '已结项目', parentName: '项目管理', path: '/complete-projcet'}],
            component: () => import('@/views/projectManage/completeProjcet/index.vue')
        },
        {
            path: 'maintain-manage',
            name: 'progress-maintain-manage',
           
            meta: [{name: '维护管理', parentName: '项目管理', path: '/maintain-manage'}],
            component: () => import('@/views/projectManage/maintainManage/index.vue')
        },

    ]
}

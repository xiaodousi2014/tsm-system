// 系统管理 一级大类
/* 
1.登录页面
2.首页面
3.角色管理
4.用户管理
5.机构管理  

 */
import layout from '@/layout/index';
export default {
    path: '/system',
    component: layout,
    meta: {
        name: '系统管理',
       },
    children: [
        {
            path: 'role-manage',
            name: 'system-role-manage',
            meta: [{name: '角色管理', parentName: '系统管理', path: '/declare-in-stock'}],
            component: () => import('@/views/systemManager/roleManage/index.vue')
        },

        {
            path: 'user-manage',
            name: 'system-user-manage',
            meta: [{name: '用户管理', parentName: '系统管理', path: '/declare-in-stock'}],
            component: () => import('@/views/systemManager/userManage/index.vue')
        },
        {
            path: 'service-manage',
            name: 'system-service-manage',
            meta: [{name: '机构管理', parentName: '系统管理', path: '/declare-in-stock'}],
            component: () => import('@/views/systemManager/servicesManage/index.vue')
        },

    ]
}

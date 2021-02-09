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
            path: 'notification',
            name: 'system-role-manage',
            meta: [{name: '通知发布', parentName: '系统管理', path: '/declare-in-stock'}],
            component: () => import('@/views/system/notification/index.vue')
        },
 
        {
            path: 'role',
            name: 'system-role-manage',
            meta: [{name: '角色管理', parentName: '系统管理', path: '/declare-in-stock'}],
            component: () => import('@/views/system/roleManage/index.vue')
        },

        {
            path: 'user',
            name: 'system-user-manage',
            meta: [{name: '用户管理', parentName: '系统管理', path: '/declare-in-stock'}],
            component: () => import('@/views/system/userManage/index.vue')
        },
 
        {
            path: 'config',
            name: 'system-user-manage',
            meta: [{name: '系统配置', parentName: '系统管理', path: '/declare-in-stock'}],
            component: () => import('@/views/system/config/index.vue')
        },

    ]
}

//基础信息
import layout from '@/layout/index';
export default {
    path: '/baseData',
    component: layout,
    meta: {
        name: '基础数据',
    },
    children: [
        {
            path: 'org',
            name: 'base-data-org',
            meta: [{name: '组织架构', parentName: '基础数据', path: '/declare-in-stock'}],
            component: () => import('@/views/baseData/org/index.vue')
        },

        {
            path: 'student',
            name: 'base-info-student-manage',
            meta: [{name: '学员管理', parentName: '基础数据', path: '/declare-in-stock'}],
            component: () => import('@/views/baseData/studentManage/index.vue')
        },

        {
            path: 'teacher',
            name: 'base-info-teacher-manage',
            meta: [{name: '教员管理', parentName: '基础数据', path: '/declare-in-stock'}],
            component: () => import('@/views/baseData/teacherManage/index.vue')
        },
        {
            path: 'staff',
            name: 'base-info-office-staff-manage',
            meta: [{name: '机关业务人员管理', parentName: '基础数据', path: '/declare-in-stock'}],
            component: () => import('@/views/baseData/officeStaffManage/index.vue')
        },

    ]
}

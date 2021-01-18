//基础信息
import layout from '@/layout/index';
export default {
    path: '/base-info',
    component: layout,
    meta: {
        name: '基础数据',
    },
    children: [
        {
            path: 'student-manage',
            name: 'base-info-student-manage',
            meta: {
                name: '学员管理',
            },
            component: () => import('@/views/baseInfo/studentManage/index.vue')
        },

        {
            path: 'teacher-manage',
            name: 'base-info-teacher-manage',
            meta: {
                name: '教员管理',
            },
            component: () => import('@/views/baseInfo/teacherManage/index.vue')
        },
        {
            path: 'office-staff-manage',
            name: 'base-info-office-staff-manage',
            meta: {
                name: '机关业务人员管理',
            },
            component: () => import('@/views/baseInfo/officeStaffManage/index.vue')
        },

    ]
}

// 场地维护
import layout from '@/layout/index'
export default {
    path: '/site',
    component: layout,
    meta: {
        name: '场地维护',
    },
    children: [
        // {
        //     path: 'field',
        //     name: 'site-plan-declare',
        //     meta: [{name: '场地', parentName: '场地维护', path: '/site'}],
        //     component: () => import('@/views/site/field/index.vue')
        // },
        {
            path: 'plan',
            name: 'site-managemer-use-plan',
            meta: [{ name: '使用计划', parentName: '场地维护', path: '/use-plan' }],
            component: () => import('@/views/site/usePlan/index.vue'),
        },
        {
            path: 'location/display',
            name: 'site-managemer-location-display',
            meta: [{ name: '位置显示', parentName: '场地维护', path: '/location-display' }],
            component: () => import('@/views/site/locationDisplay/index.vue'),
        },
        {
            path: 'training/base',
            name: 'site-managemer-training-base',
            meta: [{ name: '训练基地', parentName: '场地维护', path: '/training-base' }],
            component: () => import('@/views/site/trainingBase/index.vue'),
        },
        {
            path: 'training/site',
            name: 'site-managemer-training-field',
            meta: [{ name: '训练场地', parentName: '场地维护', path: '/training-field' }],
            component: () => import('@/views/site/trainingField/index.vue'),
        },
        {
            path: 'room',
            name: 'site-managemer-room',
            meta: [{ name: '保障用房', parentName: '场地维护', path: '/room' }],
            component: () => import('@/views/site/room/index.vue'),
        },
        {
            path: 'facilities',
            name: 'site-managemer-facilitie-config',
            meta: [{ name: '配置设施', parentName: '场地维护', path: '/facilitie-config' }],
            component: () => import('@/views/site/facilitieConfig/index.vue'),
        },
        {
            path: 'bastion',
            name: 'site-managemer-fortification',
            meta: [{ name: '阵地工事', parentName: '场地维护', path: '/fortification' }],
            component: () => import('@/views/site/fortification/index.vue'),
        },
        {
            path: 'road/network',
            name: 'site-managemer-road-network',
            meta: [{ name: '道路管网', parentName: '场地维护', path: '/road-network' }],
            component: () => import('@/views/site/roadNetwork/index.vue'),
        },
        {
            path: 'officercenter',
            name: 'site-managemer-officer-training-center',
            meta: [{ name: '军官训练中心', parentName: '场地维护', path: '/officer-training-center' }],
            component: () => import('@/views/site/officerTrainingCenter/index.vue'),
        },
        {
            path: 'teachorg',
            name: 'site-managemer-teaching-institution',
            meta: [{ name: '教导机构', parentName: '场地维护', path: '/teaching-institution' }],
            component: () => import('@/views/site/teachingInstitution/index.vue'),
        },
        {
            path: 'classroom',
            name: 'site-managemer-classroom',
            meta: [{ name: '普通教室', parentName: '场地维护', path: '/classroom' }],
            component: () => import('@/views/site/classroom/index.vue'),
        },
        {
            path: 'professioncentre',
            name: 'site-managemer-major-training-center',
            meta: [{ name: '专业训练中心', parentName: '场地维护', path: '/major-training-center' }],
            component: () => import('@/views/site/majorTtrainingCenter/index.vue'),
        },
        {
            path: 'library',
            name: 'site-managemer-library',
            meta: [{ name: '图书馆', parentName: '场地维护', path: '/library' }],
            component: () => import('@/views/site/library/index.vue'),
        },
        {
            path: 'military',
            name: 'site-managemer-military-gymnasium',
            meta: [{ name: '军体馆', parentName: '场地维护', path: '/military-gymnasium' }],
            component: () => import('@/views/site/militaryGymnasium/index.vue'),
        },
        {
            path: 'studio',
            name: 'site-managemer-studio',
            meta: [{ name: '演播室(电教设备)', parentName: '场地维护', path: '/site' }],
            component: () => import('@/views/site/studio/index.vue'),
        },
        //   实验室	site_lab	二级	/site/lab
        // 实验项目	lab_experiment	二级	/lab/experiment
        // 实验成果	lab_result	二级	/lab/result
        // 实验人员	lab_man	二级	/lab/tester
        // 实验论文	lab_thesis	二级	/lab/thesis
        // 实验专利	lab_patent	二级	/lab/patent

        {
            path: 'lab',
            name: 'site-lab',
            meta: [{ name: '实验室', parentName: '场地维护', path: '/site' }],
            component: () => import('@/views/site/lab/index.vue'),
        },

        {
            path: 'lab/experiment',
            name: 'site-experiment',
            meta: [{ name: '实验项目', parentName: '场地维护', path: '/site' }],
            component: () => import('@/views/site/experiment/index.vue'),
        },

        {
            path: 'lab/result',
            name: 'site-result',
            meta: [{ name: '实验成果', parentName: '场地维护', path: '/site' }],
            component: () => import('@/views/site/result/index.vue'),
        },

        {
            path: 'lab/tester',
            name: 'site-tester',
            meta: [{ name: '实验人员', parentName: '场地维护', path: '/site' }],
            component: () => import('@/views/site/result/index.vue'),
        },

        {
            path: 'lab/thesis',
            name: 'site-thesis',
            meta: [{ name: '实验论文', parentName: '场地维护', path: '/site' }],
            component: () => import('@/views/site/thesis/index.vue'),
        },

        {
            path: 'lab/patent',
            name: 'site-patent',
            meta: [{ name: '实验专利', parentName: '场地维护', path: '/site' }],
            component: () => import('@/views/site/patent/index.vue'),
        },
        {
            path: 'attr',
            name: 'site-manage',

            meta: [{ name: '维护管理', parentName: '场地维护' }],
            component: () => import('@/views/site/maintainManage/index.vue'),
        },
    ],
}

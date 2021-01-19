import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 法规总览
import legalKnowledge from "@/router/legalKnowledge";
// 项目管理
import projcetManage from "@/router/projcetManage";
// 系统管理
import systemManage from "@/router/systemManage";
// 基础信息
import baseInfo from "@/router/baseInfo";
// 教学设备
import teachingEquipment from "@/router/teachingEquipment.js";
// 模拟器械
import simulationEquipment from "@/router/simulationEquipment.js";
// 保障设备
import securityEquipment from "@/router/securityEquipment.js";
// 信息资源
import informationResources from "@/router/informationResources.js";
// 教材管理
import teachingMaterialManage from "@/router/teachingMaterialManage.js";
// 地图管理 
import mapManage from "@/router/mapManage.js";
// 易耗品管理
import consumablesManage from "@/router/consumablesManage"
// 场地维护
import fieldMaintain from "@/router/fieldMaintain"

/* eslint-disable */
export default new Router({
  routes: [{
    path: '/', 
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      title: 'Login',
      icon: 'el-icon-eleme', 
    }
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main.vue'),
    meta: {
      name: '首页',
    }
  }, 


  {
    path: '/index',
    name: 'main-index',
    component: () => import('@/views/index.vue'),
    // meta: {
    //   name: '菜单页',
    // },
    meta: [{name: '菜单页', parentName: '登录页', path: '/index'}],

    children: [
      legalKnowledge,//法规总览
      projcetManage,//项目管理
      teachingEquipment,//教学设备
      teachingMaterialManage,//教材管理
      mapManage,//地图管理
      consumablesManage,//易耗品维护
      informationResources,//信息资源
      simulationEquipment,//模拟器械
      securityEquipment,//保障设备 
      fieldMaintain,//场地维护
      baseInfo,//基础信息
      systemManage,//系统管理
      

      {
        path: '/demo',
        name: 'demo',
        meta: {
          name: '子应用管理',
          path: '/demo'
        },
        component: () => import('@/views/Demo.vue')
      }, 

      {
        path: '/UsePlan',
        name: 'UsePlan',
        meta: {
          name: '使用计划',
          path: '/UsePlan'
        },
        component: () => import('@/views/TrainingFieldM/UsePlan.vue')
      }, {
        path: '/classifiedDisplay',
        name: 'ClassifiedDisplay',
        meta: {
          name: '分类显示',
          path: '/ClassifiedDisplay'
        },
        component: () => import('@/views/statuteKnow/classifiedDisplay.vue')
      },
 
    ]
  },
  ]
})

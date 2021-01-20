import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 法规知识
import doc from "@/router/StateKnowledge";
// 项目管理
import pm from "@/router/projcetManager";
// 设备管理-教学设备
import device from "@/router/deviceManage.js";
// 训练模拟器材管理-模拟器械
import trainingdevice from "@/router/equipmentManager.js";
// 训练教学保障装备管理-保障装备
import equipment from "@/router/supportEquipmentManager.js";
// 训练信息资源管理-信息资源
import information from "@/router/informationManager.js";
// 教材管理
import material from "@/router/textbookManager.js";
// 地图管理
import maps from "@/router/mapManager.js";
// 文具与低值易耗品管理-易耗品管理
import stationery from "@/router/consumablesManager.js";
// 训练场地管理-场地维护
import site from "@/router/siteManagemer.js";
// 基础信息-基础信息
import company from "@/router/baseInfo.js";
// 系统管理-系统管理
import system from "@/router/systemManager.js";

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
        doc,//法规总览
        pm,//项目管理
        device,//设备管理
        trainingdevice,//训练模拟器材管理
        equipment,//训练教学保障装备管理
        information,//训练信息资源管理
        material,//教材管理
        maps,//地图管理
        stationery,//文具与低值易耗品管理 
        site,//训练场地管理
        company,//基础信息
        system,//系统管理
    ]
  },
  ]
})

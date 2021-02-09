import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/**
 * 1.修改路由index
 * 2.修改router里面的文件名称
 * 3.修改router文件的路由路径
 * 4.修改views文件的文件夹名称
 * 5.全局搜索这个单词是否还存在
 *  

 * 
 */ 
// 法规知识
import doc from "@/router/doc"; 
// 项目管理
import pm from "@/router/pm";  
// 设备管理-教学设备
import device from "@/router/device.js"; 
// 训练模拟器材管理-模拟器械
import trainingdevice from "@/router/trainingdevice.js";
// 训练教学保障装备管理-保障装备
import equipment from "@/router/equipment.js";
// 训练信息资源管理-信息资源
import information from "@/router/information.js";
// 教材管理
import material from "@/router/material.js";
// 地图管理
import maps from "@/router/maps.js";
// 文具与低值易耗品管理-易耗品管理
import stationery from "@/router/stationery.js";
// 训练场地管理-场地维护
import site from "@/router/site.js";
// 基础信息-基础信息
import baseData from "@/router/baseData.js";
// 系统管理-系统管理
import system from "@/router/system.js";

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
        baseData,//基础信息
        system,//系统管理
    ]
  },
  ]
})

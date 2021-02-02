<template>
  <div class="manage">
    <!-- <el-header>
         <span style="color: #fff;font-size:26px">教学保障管理系统</span>
          <div class="user-box"> -->
    <!-- <i class="icon-icon_renwu iconfont"></i>
            <span style="color: #fff;"></span>
            <i class="el-icon-caret-bottom"></i>
              <div class="users">
                <div class="userDiv one" @click="showModificationDialog">
                  <i class="icon-icon_mima iconfont"></i>
                  <p>修改密码</p>
                </div>
                <div class="userDiv two" @click="showLogout">
                  <i class="icon-icon_tuichusj iconfont"></i>
                  <p>注销</p>
                </div>
              </div> -->
    <!-- <span style="color: #fff">测试账号</span>
             <el-button type="primary" size="mini" >退出</el-button> -->

    <!-- <el-dropdown @command="handleLogout">
                <span class="el-dropdown-link">
                    测试账号<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
          </div>
        </el-header> -->
    <el-container class="main-container">
      <div
        style="line-height: 68px;    text-align: center;color: #fff;font-size:20px;width: 208px;background: #001529;"
      >
        教学保障管理系统
      </div>
      <el-aside width="208px">
        <el-menu
          unique-opened
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="#001529"
          text-color="#000"
          active-text-color="#fff"
        >
          <template v-for="parent in menuList">
            <el-menu-item
              class="is-active"
              v-if="parent.children.length === 0"
              :index="parent.url"
              :key="parent.url"
            >
              {{ parent.name }}
            </el-menu-item>
            <el-submenu
              v-if="parent.children.length !== 0"
              :index="parent.url"
              :key="parent.menuId"
            >
              <template slot="title">
                <span>{{ parent.name }}</span>
              </template>
              <el-menu-item
                v-for="child in parent.children"
                :index="setIndex(parent, child)"
                :key="child.menuId"
                @click="getRouter(parent, child)"
              >
                {{ child.name }}
              </el-menu-item>
            </el-submenu>
          </template>
        </el-menu>

        <!-- aside 侧边栏 -->
      </el-aside>

      <el-header>
        <div class="user-box" style="color:#666">
          <!-- <span style="color: #fff;"></span> -->
          <i class="el-icon-bell iconfont"></i>
          <!-- <div class="users">
            <div class="userDiv one" @click="showModificationDialog">
                <i class="icon-icon_mima iconfont"></i>
                <p>修改密码</p>
            </div>
            <div class="userDiv two" @click="showLogout">
                <i class="icon-icon_tuichusj iconfont"></i>
                <p>注销</p>
            </div>
            </div> -->
          <span style="font-size:14px;color:#000;margin-left:20px"
            >测试账号</span
          >
          <span style="padding:0 10px;font-size:14px"
            >2020.11.11 15:20 登录</span
          >
          <el-button size="mini">退出</el-button>
        </div>

        <div
          style="text-align: left;line-height: 20px;position: relative;margin-top: 40px;"
        >
          <span style="color:#666">{{ $route.meta[0].parentName }}</span
          >/<span style="color:#666">{{ $route.meta[0].name }}</span>
          <div style="font-size:20px;font-weight:bold; margin-top: 15px;">
            {{ $route.meta[0].name }}
          </div>
        </div>
      </el-header>

      <!-- <el-main> -->
      <div
        style="background: #f0f2f5; height: calc(100% - 105px);width: calc(100% - 208px);position:absolute;left:208px;top:105px"
      >
        <div
          style="height: 100%;border-radius: 8px;margin-top: 20px;overflow-y:scroll"
        >
          <h1 class="title" v-show="$route.path === '/index'">
            园区用户管理系统 欢迎您！
          </h1>
          <p
            style="font-size: 12px; color: #a8a8a8"
            v-show="$route.path === '/index'"
          ></p>
          <div
            class="home-img"
            :style="{ backgroundImage: 'url(' + homeBg + ')' }"
            v-show="$route.path === '/index'"
          ></div>
          <router-view />
        </div>
      </div>
    </el-container>

    <el-dialog
      title="修改密码"
      :visible.sync="modificationDialog"
      inline-message
      width="25%"
    >
      <el-form
        :model="modificationPassword"
        :rules="rules"
        ref="modificationPassword"
        label-width="100px"
      >
        <el-form-item label="原密码：" prop="password">
          <el-input
            @focus="inputChange"
            v-model="modificationPassword.password"
            type="password"
          ></el-input>
          <span class="passwordError" v-show="oldpasswordError"
            >原密码有误</span
          >
        </el-form-item>
        <el-form-item label="新密码：" prop="newpasswordOne">
          <span class="passwordError" v-show="oldpasswordError"
            >原密码有误</span
          >
        </el-form-item>
        <el-form-item label="新密码：" prop="newpasswordOne">
          <el-input
            @input="inputChange"
            v-model="modificationPassword.newpasswordOne"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码确认：" prop="newpasswordTwo">
          <el-input
            @focus="inputChange"
            v-model="modificationPassword.newpasswordTwo"
            type="password"
          ></el-input>
          <span class="passwordError" v-show="passwordError">{{ msg }}</span>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="modificationDialog = false">取 消</el-button>
        <el-button type="primary" @click="modificationSuccess">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="温馨提示"
      :visible.sync="logoutDialog"
      inline-message
      width="20%"
    >
      <p style="text-align: center">确定要退出系统吗？</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="logoutDialog = false">取 消</el-button>
        <el-button
          type="primary"
          v-loading.fullscreen.lock="loading"
          @click="enterLogout"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import router from '@/router/index'

export default {
  data() {
    return {
      homeBg: '',
      menuList: [
        {
          id: 1,
          menuId: '11',
          name: '法规知识',
          url: '/doc/',
          parentId: '',
          children: [
            {
              id: 2,
              menuId: '11111',
              name: '法规总览',
              url: 'overview',
              parentId: 1,
              children: [],
            },
            {
              id: 2,
              menuId: '121111',
              name: '入库记录',
              url: 'in-stock-record',
              parentId: 1,
              children: [],
            },
            {
              id: 3,
              menuId: '131111',
              name: '维护管理',
              url: 'maintain-manage',
              parentId: 1,
              children: [],
            },
            {
              id: 4,
              menuId: '141111',
              name: '知识检索',
              url: 'retrieval',
              parentId: 1,
              children: [],
            },
          ],
        },
        {
          id: 222,
          menuId: '1',
          name: '项目管理',
          url: '/pm/',
          parentId: '',
          children: [
            {
              id: 1,
              menuId: '11',
              name: '申报入库',
              url: 'declare-in-stock',
              parentId: 222,
              children: [],
            },
            {
              id: 2,
              menuId: '12',
              name: '申报审核',
              url: 'declare-examine',
              parentId: 222,
              children: [],
            },
            {
              id: 3,
              menuId: '13',
              name: '在建项目',
              url: 'progress-projcet',
              parentId: 222,
              children: [],
            },
            {
              id: 4,
              menuId: '14',
              name: '已结项目',
              url: 'complete-projcet',
              parentId: 222,
              children: [],
            },
            {
              id: 5,
              menuId: '15',
              name: '维护管理',
              url: 'maintain-manage',
              parentId: 222,
              children: [],
            },
          ],
        },
        {
          id: 8,
          menuId: '81',
          name: '设备管理',
          url: '/device/',
          parentId: '',
          children: [
            {
              id: 2,
              menuId: '42',
              name: '采购申报',
              url: 'plan-declare',
              parentId: 8,
              children: [],
            },
            {
              id: 4,
              menuId: '44',
              name: '设备登记',
              url: 'in-stock-register',
              parentId: 8,
              children: [],
            },
            {
              id: 5,
              menuId: '45',
              name: '库存记录',
              url: 'storage-equipment',
              parentId: 8,
              children: [],
            },
            {
              id: 6,
              menuId: '46',
              name: '请领记录',
              url: 'receive-record',
              parentId: 8,
              children: [],
            },
            {
              id: 7,
              menuId: '47',
              name: '请领审核',
              url: 'receive-examine',
              parentId: 8,
              children: [],
            },
            {
              id: 8,
              menuId: '48',
              name: '借用记录',
              url: 'borrow-record',
              parentId: 8,
              children: [],
            },
            {
              id: 9,
              menuId: '49',
              name: '借用审核',
              url: 'borrow-examine',
              parentId: 8,
              children: [],
            },
            {
              id: 10,
              menuId: '411',
              name: '维修记录',
              url: 'repair-record',
              parentId: 8,
              children: [],
            },
            {
              id: 11,
              menuId: '422',
              name: '维修审核',
              url: 'repair-examine',
              parentId: 8,
              children: [],
            },
            {
              id: 12,
              menuId: '433',
              name: '报废记录',
              url: 'scrap-record',
              parentId: 8,
              children: [],
            },
            {
              id: 13,
              menuId: '444',
              name: '报废审核',
              url: 'scrap-examine',
              parentId: 8,
              children: [],
            },
            {
              id: 14,
              menuId: '455',
              name: '盘点记录',
              url: 'inventory-journal',
              parentId: 8,
              children: [],
            },
            {
              id: 15,
              menuId: '456',
              name: '维护管理',
              url: 'maintain-manage',
              parentId: 8,
              children: [],
            },
          ],
        },
        {
          id: 2,
          menuId: '21',
          name: '训练模拟器材管理',
          url: '/trainingdevice/',
          parentId: '',
          children: [
            {
              id: 2,
              menuId: '22',
              name: '采购申报',
              url: 'plan-declare',
              parentId: 2,
              children: [],
            },
            {
              id: 4,
              menuId: '24',
              name: '设备登记',
              url: 'in-stock-register',
              parentId: 2,
              children: [],
            },
            {
              id: 5,
              menuId: '25',
              name: '库存记录',
              url: 'storage-equipment',
              parentId: 2,
              children: [],
            },

            {
              id: 8,
              menuId: '28',
              name: '借用记录',
              url: 'borrow-record',
              parentId: 2,
              children: [],
            },
            {
              id: 9,
              menuId: '29',
              name: '借用审核',
              url: 'borrow-examine',
              parentId: 2,
              children: [],
            },
            {
              id: 10,
              menuId: '30',
              name: '维修记录',
              url: 'repair-record',
              parentId: 2,
              children: [],
            },
            {
              id: 11,
              menuId: '31',
              name: '维修审核',
              url: 'repair-examine',
              parentId: 2,
              children: [],
            },
            {
              id: 12,
              menuId: '32',
              name: '报废记录',
              url: 'scrap-record',
              parentId: 2,
              children: [],
            },
            {
              id: 13,
              menuId: '33',
              name: '报废审核',
              url: 'scrap-examine',
              parentId: 2,
              children: [],
            },
            {
              id: 14,
              menuId: '34',
              name: '盘点记录',
              url: 'inventory-journal',
              parentId: 2,
              children: [],
            },
            {
              id: 15,
              menuId: '35',
              name: '维护管理',
              url: 'maintain-manage',
              parentId: 2,
              children: [],
            },
          ],
        },
        {
          id: 3,
          menuId: '31',
          name: '训练教学保障装备管理',
          url: '/equipment/',
          parentId: '',
          children: [
            {
              id: 4,
              menuId: '34',
              name: '设备登记',
              url: 'in-stock-register',
              parentId: 3,
              children: [],
            },
            {
              id: 5,
              menuId: '35',
              name: '库存记录',
              url: 'storage-equipment',
              parentId: 3,
              children: [],
            },
            {
              id: 6,
              menuId: '36',
              name: '请领记录',
              url: 'receive-record',
              parentId: 3,
              children: [],
            },
            {
              id: 7,
              menuId: '37',
              name: '请领审核',
              url: 'receive-examine',
              parentId: 3,
              children: [],
            },
            {
              id: 8,
              menuId: '38',
              name: '借用记录',
              url: 'borrow-record',
              parentId: 3,
              children: [],
            },
            {
              id: 9,
              menuId: '39',
              name: '借用审核',
              url: 'borrow-examine',
              parentId: 3,
              children: [],
            },
            {
              id: 10,
              menuId: '30',
              name: '维修记录',
              url: 'repair-record',
              parentId: 3,
              children: [],
            },
            {
              id: 11,
              menuId: '31',
              name: '维修审核',
              url: 'repair-examine',
              parentId: 3,
              children: [],
            },
            {
              id: 12,
              menuId: '42',
              name: '报废记录',
              url: 'scrap-record',
              parentId: 3,
              children: [],
            },
            {
              id: 13,
              menuId: '43',
              name: '报废审核',
              url: 'scrap-examine',
              parentId: 3,
              children: [],
            },
            {
              id: 14,
              menuId: '44',
              name: '盘点日志',
              url: 'inventory-journal',
              parentId: 3,
              children: [],
            },
            {
              id: 15,
              menuId: '45',
              name: '维护管理',
              url: 'maintain-manage',
              parentId: 3,
              children: [],
            },
          ],
        },
        {
          id: 5,
          menuId: '51',
          name: '训练信息资源管理',
          url: '/information/',
          parentId: '',
          children: [
            {
              id: 2,
              menuId: '52',
              name: '计划申报',
              url: 'plan-declare',
              parentId: 5,
              children: [],
            },
            {
              id: 4,
              menuId: '54',
              name: '入库登记',
              url: 'information',
              parentId: 5,
              children: [],
            },
            {
              id: 5,
              menuId: '55',
              name: '库存信息',
              url: 'stock-manage',
              parentId: 5,
              children: [],
            },
          ],
        },
        {
          id: 4,
          menuId: '41',
          name: '教材管理',
          url: '/material/',
          parentId: '',
          children: [
            {
              id: 2,
              menuId: '42',
              name: '计划申报',
              url: 'plan-declare',
              parentId: 4,
              children: [],
            },
            {
              id: 4,
              menuId: '44',
              name: '登记入库',
              url: 'in-stock-register',
              parentId: 4,
              children: [],
            },
            {
              id: 5,
              menuId: '45',
              name: '库存记录',
              url: 'storage-equipment',
              parentId: 4,
              children: [],
            },
            {
              id: 6,
              menuId: '46',
              name: '请领记录',
              url: 'receive-record',
              parentId: 4,
              children: [],
            },
            {
              id: 7,
              menuId: '47',
              name: '请领审核',
              url: 'receive-examine',
              parentId: 4,
              children: [],
            },
            {
              id: 8,
              menuId: '48',
              name: '借用记录',
              url: 'borrow-record',
              parentId: 4,
              children: [],
            },
            {
              id: 9,
              menuId: '49',
              name: '借用审核',
              url: 'borrow-examine',
              parentId: 4,
              children: [],
            },
            {
              id: 12,
              menuId: '433',
              name: '报废记录',
              url: 'scrap-record',
              parentId: 4,
              children: [],
            },
            {
              id: 13,
              menuId: '444',
              name: '报废审核',
              url: 'scrap-examine',
              parentId: 4,
              children: [],
            },
            {
              id: 14,
              menuId: '455',
              name: '盘点日志',
              url: 'inventory-journal',
              parentId: 4,
              children: [],
            },
            {
              id: 15,
              menuId: '456',
              name: '维护管理',
              url: 'maintain-manage',
              parentId: 4,
              children: [],
            },
          ],
        },
        {
          id: 6,
          menuId: '61',
          name: '地图管理',
          url: '/maps/',
          parentId: '',
          children: [
            {
              id: 2,
              menuId: '42',
              name: '计划申报',
              url: 'plan-declare',
              parentId: 6,
              children: [],
            },
            {
              id: 4,
              menuId: '44',
              name: '登记入库',
              url: 'in-stock-register',
              parentId: 6,
              children: [],
            },
            {
              id: 5,
              menuId: '45',
              name: '库存记录',
              url: 'storage-equipment',
              parentId: 6,
              children: [],
            },
            {
              id: 6,
              menuId: '46',
              name: '请领记录',
              url: 'receive-record',
              parentId: 6,
              children: [],
            },
            {
              id: 7,
              menuId: '47',
              name: '请领审核',
              url: 'receive-examine',
              parentId: 6,
              children: [],
            },
            {
              id: 8,
              menuId: '48',
              name: '借用记录',
              url: 'borrow-record',
              parentId: 6,
              children: [],
            },
            {
              id: 9,
              menuId: '49',
              name: '借用审核',
              url: 'borrow-examine',
              parentId: 6,
              children: [],
            },
            {
              id: 12,
              menuId: '433',
              name: '报废记录',
              url: 'scrap-record',
              parentId: 6,
              children: [],
            },
            {
              id: 13,
              menuId: '444',
              name: '报废审核',
              url: 'scrap-examine',
              parentId: 6,
              children: [],
            },
            {
              id: 14,
              menuId: '455',
              name: '盘点日志',
              url: 'inventory-journal',
              parentId: 6,
              children: [],
            },
            {
              id: 15,
              menuId: '456',
              name: '维护管理',
              url: 'maintain-manage',
              parentId: 6,
              children: [],
            },
          ],
        },
        {
          id: 7,
          menuId: '71',
          name: '文具与低值易耗品管理',
          url: '/stationery/',
          parentId: '',
          children: [
            {
              id: 2,
              menuId: '42',
              name: '计划申报',
              url: 'plan-declare',
              parentId: 7,
              children: [],
            },
            {
              id: 4,
              menuId: '44',
              name: '登记入库',
              url: 'in-stock-register',
              parentId: 7,
              children: [],
            },
            {
              id: 5,
              menuId: '45',
              name: '库存记录',
              url: 'storage-equipment',
              parentId: 7,
              children: [],
            },
            {
              id: 6,
              menuId: '46',
              name: '请领记录',
              url: 'receive-record',
              parentId: 7,
              children: [],
            },
            {
              id: 7,
              menuId: '47',
              name: '请领审核',
              url: 'receive-examine',
              parentId: 7,
              children: [],
            },
            {
              id: 12,
              menuId: '433',
              name: '报废记录',
              url: 'scrap-record',
              parentId: 7,
              children: [],
            },
            {
              id: 13,
              menuId: '444',
              name: '报废审核',
              url: 'scrap-examine',
              parentId: 7,
              children: [],
            },
            {
              id: 14,
              menuId: '455',
              name: '盘点记录',
              url: 'inventory-journal',
              parentId: 7,
              children: [],
            },
            {
              id: 15,
              menuId: '456',
              name: '维护管理',
              url: 'maintain-manage',
              parentId: 7,
              children: [],
            },
          ],
        },

        {
          id: 17,
          menuId: '300022',
          name: '训练场地管理',
          url: '/site/',
          parentId: '',
          children: [
            {
              id: 1,
              menuId: '300023',
              name: '使用计划',
              url: 'use-plan',
              parentId: '17',
              children: [],
            },
            {
              id: 2,
              menuId: '300024',
              name: '位置显示',
              url: 'location-display',
              parentId: '17',
              children: [],
            },
            {
              id: 3,
              menuId: '300026',
              name: '训练基地',
              url: 'training-base',
              parentId: '17',
              children: [],
            },
            {
              id: 4,
              menuId: '300027',
              name: '训练场地',
              url: 'training-field',
              parentId: '17',
              children: [],
            },
            {
              id: 5,
              menuId: '300028',
              name: '保障用房',
              url: 'room',
              parentId: '17',
              children: [],
            },
            {
              id: 6,
              menuId: '300029',
              name: '配置设施',
              url: 'facilitie-config',
              parentId: '17',
              children: [],
            },
            {
              id: 7,
              menuId: '300033',
              name: '阵地工事',
              url: 'fortification',
              parentId: '17',
              children: [],
            },
            {
              id: 8,
              menuId: '300043',
              name: '道路管网',
              url: 'road-network',
              parentId: '17',
              children: [],
            },
            {
              id: 9,
              menuId: '300053',
              name: '军官训练中心',
              url: 'officer-training-center',
              parentId: '17',
              children: [],
            },
            {
              id: 10,
              menuId: '300063',
              name: '教导机构',
              url: 'teaching-institution',
              parentId: '17',
              children: [],
            },
            {
              id: 11,
              menuId: '300073',
              name: '普通教室',
              url: 'classroom',
              parentId: '17',
              children: [],
            },
            {
              id: 12,
              menuId: '300083',
              name: '专业训练中心',
              url: 'major-training-center',
              parentId: '17',
              children: [],
            },
            {
              id: 13,
              menuId: '300093',
              name: '图书馆',
              url: 'library',
              parentId: '17',
              children: [],
            },
            {
              id: 14,
              menuId: '300123',
              name: '军体馆',
              url: 'military-gymnasium',
              parentId: '17',
              children: [],
            },
            {
              id: 15,
              menuId: '300223',
              name: '演播室(电教设备)',
              url: 'studio',
              parentId: '17',
              children: [],
            },
            {
              id: 16,
              menuId: '300323',
              name: '实验室管理',
              url: 'laboratory-manage',
              parentId: '17',
              children: [],
            },
            {
              id: 17,
              menuId: '300423',
              name: '维护管理',
              url: 'maintain-manage',
              parentId: '17',
              children: [],
            },
          ],
        },
      ],
      openRouter: [],
      homeBg: '',
      userName: '',
      modificationDialog: false,
      oldpasswordError: false,
      passwordError: false,
      logoutDialog: false,
      loading: false,
      msg: '',
      clickMenu: false,
      modificationPassword: {
        password: '',
        newpasswordOne: '',
        newpasswordTwo: '',
      },
      rules: {
        password: [
          { required: true, message: '请输入原密码', trigger: 'blur' },
        ],
        newpasswordOne: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          {
            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[])+$)([^(0-9a-zA-Z)]|[]|[a-zA-Z]|[0-9]){6,}$/,
            message: '不低于6位，数字、大小写、符号两种或以上',
            trigger: 'blur',
          },
        ],
        newpasswordTwo: [
          { required: true, message: '请再次输入新密码', trigger: 'blur' },
          {
            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[])+$)([^(0-9a-zA-Z)]|[]|[a-zA-Z]|[0-9]){6,}$/,
            message: '不低于6位，数字、大小写、符号两种或以上',
            trigger: 'blur',
          },
        ],
      },
    }
  },

  // 获取侧边栏菜单结构
  created() {
    // 注,这只是一个临时路由，之后会用接口代替
    // 这个参数是router文件夹里面存储的参数
    // this.menuList = router.options.routes[3].children

    // 获取开始时传递的数据
    this.openRouter = [this.$route.matched[1].path]
  },

  methods: {
    setIndex(parent, child) {
      return parent.url + child.url
    },
    getRouter(parent, child) {
      // debugger

      this.$router.push(parent.url + child.url)
    },
    handleLogout() {
      this.logoutDialog = true
    },
    enterLogout() {
      this.loading = true
      logout()
        .then((res) => {
          this.logoutDialog = false
          removeStorage('ifLogin')
          removeStorage('token')
          delCookie('token')
          this.$router.push('/login')
        })
        .finally(() => {
          this.loading = false
        })
    },
    showLogout() {
      this.logoutDialog = true
    },
    showModificationDialog() {
      this.modificationDialog = true
    },
    modificationSuccess() {
      this.$refs.modificationPassword.validate((valid) => {
        if (valid) {
          let user = { ...this.modificationPassword }
          let password = user.password
          let encryptPassword = encrypt(password)
          let users = getStorage('ifLogin')
          let mobile = users.mobile
          let data = {
            password: encryptPassword,
            mobile: mobile,
          }
          isPassword(data).then((res) => {
            let { code, msg } = res
            console.log(res)
            if (code === 200) {
              this.updateUserPassword()
            } else {
              this.oldpasswordError = true
              // this.$refs.modificationPassword.resetFields()
            }
          })
        }
      })
    },
    getUserName() {
      const user = getStorage('ifLogin')
      const name = user.employeeName
      this.userName = name
    },
    updateUserPassword() {
      let user = { ...this.modificationPassword }
      let users = getStorage('ifLogin')
      let mobile = users.mobile
      let data = {
        mobile: mobile,
        password: encrypt(user.newpasswordOne),
      }
      if (user.newpasswordOne !== user.newpasswordTwo) {
        this.msg = '两次输入密码不一致'
        this.passwordError = true
        return false
      } else {
        updatePassword(data).then((res) => {
          if (res.code === 200) {
            this.$refs.modificationPassword.resetFields()
            this.$message.success('密码已修改，请重新登录')
            removeStorage('ifLogin')
            this.$router.push('/login')
          } else {
            this.msg = res.msg
            this.passwordError = true
          }
        })
      }
    },
    inputChange() {
      this.passwordError = false
      this.oldpasswordError = false
    },
  },
  // 获取侧边栏菜单结构
  created() {
    console.log(this.$route.meta)
    // debugger
    // this.getUserName()
    // try {
    //   getMenuList()
    //   .then(res => {
    //     const {dataMap: data} = res;
    //     if (data && data.length > 0){
    //       let pages =[];
    //       this.$router.options.routes.some((value,inde)=>{
    //         if(value.name=='manage'){
    //           pages = value.children;
    //         }
    //       })
    //       data.forEach(item=>{
    //         let obj = {}
    //         obj.name = item.name;
    //         obj.menuId = item.menuId;
    //         obj.id = item.id;
    //         obj.url = item.url;
    //         obj.parentId = item.parentId;
    //         obj.children =[];
    //         if (item.children){
    //           item.children.forEach(a=>{
    //             pages.some((value,inde)=>{
    //               if(a.url==value.name){
    //                 obj.children.push(a);
    //               }
    //             })
    //           });
    //         }
    //         pages.some((v,index)=>{
    //           if (v.name == obj.url) {
    //             this.menuList.push(obj);
    //             return true;
    //           }
    //           if ((index == pages.length - 1) && (obj.children && obj.children.length)){
    //             this.menuList.push(obj);
    //           }
    //         });
    //       });
    //     }
    //   })
    // } catch(err) {
    //   console.log(err)
    // }
  },
}
</script>

<style lang="less" scoped>
.manage {
  height: 100%;
  .main-container {
    height: 100%;
    overflow: hidden;
  }
  .el-container-sub {
  }
}
.el-dropdown-menu {
  z-index: 30000 !important;
}
.el-header {
  line-height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
}
.el-header .el-dropdown {
  color: #fff;
}
.el-header {
  position: absolute;
  left: 210px;
  top: 0px;
  width: calc(100% - 210px);
  height: 105px !important;
  line-height: 140px;
}
.el-header {
  color: #333;
  line-height: 140px;
  .user-box {
    position: absolute;
    top: 0;
    line-height: 50px;
    right: 20px;
    color: #000000;
    li {
      margin-left: 20px;
      float: left;
      a {
        color: #000000;
      }
    }
  }
  .icon-icon_renwu {
    position: absolute;
    right: 50%;
    top: 50%;
    margin-top: -20px;
    margin-right: 50px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 30px;
    border-radius: 50%;
    color: #ffffff;
    background-color: #a1c5f5;
  }
  .el-icon-caret-bottom {
    font-size: 5px;
    color: #ffffff;
  }
  .users {
    position: absolute;
    top: 60px;
    right: -15px;
    display: none;
    width: 100px;
    background-color: #fff;
    z-index: 20;
    .userDiv {
      display: block;
      height: 100px;
      border: 1px solid #e4e4e4;
      cursor: pointer;
    }
    .userDiv:nth-child(1) {
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
      border-bottom: none;
    }
    .iconfont {
      font-size: 30px;
    }
    p {
      font-size: 15px;
      height: 15px;
      line-height: 15px;
    }
    .userDiv.one:hover {
      color: #0091ea;
    }
    .userDiv.two:hover {
      color: #0091ea;
    }
  }
  .user-box:hover .users {
    display: block;
  }
}
.el-aside {
  height: calc(100% - 68px);
  background-color: rgb(0, 21, 41);
  color: #333;
  text-align: left;
  h1 {
    color: #fff;
    text-align: center;
    background-color: rgb(0, 21, 41);
    line-height: 60px;
    a {
      color: #fff;
      font-family: MicrosoftYaHei;
    }
  }
  .el-menu-item {
    height: 50px;
    text-align: left;
    font-size: 14px;
  }
  .el-menu {
    height: calc(100% - 60px);
    border-right: none;
    width: 208px;
  }
}
.el-main {
  position: relative;
  height: 100%;
  background: #eef0f3;
  color: #000;
  padding: 0 !important;
  .el-breadcrumb {
    margin: 0;
  }
  .el-breadcrumb__item {
    height: 40px;
    line-height: 40px;
  }
  .title {
    height: 80px;
    line-height: 80px;
    color: #008de9;
    font-size: 20px;
    font-weight: 400;
  }
  .home-img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 860px;
    height: 330px;
    background-repeat: no-repeat;
  }
}
body > .el-container {
  margin-bottom: 40px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
/deep/.el-dialog__header {
  color: #444444;
  // background-color: #0091ea;
}
/deep/.el-dialog__footer {
  text-align: center;
}
/deep/.el-dialog__headerbtn .el-dialog__close {
  color: #444444;
}
.el-menu {
  padding: 0 0px 0 0px;
}
/deep/ .el-menu--inline {
  padding-left: 0px !important;
}
.el-menu-item {
  padding-left: 38px !important;
  min-width: inherit !important;
  background-color: #001529 !important;
  height: 40px !important;
  //   text-align: center !important;
  line-height: 40px !important;
  // border-radius: 8px;
  color: #fff !important;
  min-width: inherit !important;
  background-color: #000d17 !important;
  // padding: 0 !important;
  height: 40px !important;
  line-height: 40px !important;
  color: #fff !important;
}
.el-menu-item:hover {
  background-color: #1890ff !important;
}
.el-menu-item.is-active {
  background-color: #1890ff !important;
}
/deep/.el-submenu__title {
  line-height: 40px;
  height: 40px;
  // border-radius: 8px;
  padding: 0;
  margin: 10px 0;
  color: #fff !important;
  padding-left: 10px !important;
}
/deep/.el-submenu__title:hover {
  background-color: #1890ff !important;
}
/deep/.el-submenu__title:active {
  background-color: #fff !important;
}
.el-submenu:focus {
  background-color: #1890ff !important;
}
.el-menu-item.is-active {
  background-color: #1890ff !important;
}
/deep/ .el-submenu__icon-arrow {
  color: #fff;
  right: 5%;
  font-size: 14px;
  font-weight: 700;
}
.el-breadcrumb {
  font-size: 15px;
  color: #666666;
  padding-left: 10px;
  border-bottom: 1px solid #e4e4e4;
  margin-left: -20px;
  margin-right: -20px;
}
/deep/.el-breadcrumb__inner.is-link {
  color: #666666;
  font-weight: 400;
}
/deep/.is-link {
  color: #666666;
  font-weight: 400;
}
/deep/.el-breadcrumb__separator {
  color: #666666;
  margin: 0 3px;
  // display: none;
}
.logo {
  //   background: #0181d0 url('../assets/logo.png') no-repeat 50%;
  background-size: 128px auto;
  line-height: 60px;
  height: 60px;
  background-color: #409eff;
}
/deep/.el-button--primary:hover {
  // background-color: #3d85cc;
}
.passwordError {
  color: #f56c6c;
  font-size: 12px;
  line-height: 1;
  padding-top: 4px;
  position: absolute;
  top: 100%;
  left: 0;
}

/*解决表格错位，必须加在index.html或APP.vue中 cak*/
body .el-table th.gutter {
  display: table-cell !important;
}

body .el-table colgroup.gutter {
  display: table-cell !important;
}
</style>

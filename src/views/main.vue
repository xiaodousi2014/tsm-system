<template>
  <div class="home">
    <div class="contain">
      <div class="contetn">
        <div class="home-title">教学保障管理系统</div>
        <div>
          <div class="home-name">
            <div class="name">刘教官</div>
            <div class="name">2020/12/27 登录</div>
            <div class="logined_icon">
              <dropMenuOnUser></dropMenuOnUser>
            </div>
          </div>
        </div>
      </div>
      <div class="content-m">
        <div class="login-list">
          <!-- <el-row :gutter="20">
          <el-col v-for="item in mainList" :key="item.id" :span="6">
            <router-link :to="item.path"> {{ item.name }}</router-link>
          </el-col>
        </el-row> -->
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="grid-content bg1 bg-purple" @click="onRouter('/doc/overview')">
                法规知识
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg2 bg-purple" @click="onRouter('/pm/declare-in-stock')">
                项目管理
              </div>
            </el-col>
            <el-col :span="4">
              <div
                class="grid-content bg3 bg-purple"
                @click="onRouter('/device/plan-declare')"
              >
                教学设备
              </div>
            </el-col>
            <el-col :span="4">
              <div
                class="grid-content bg4 bg-purple"
                @click="onRouter('/trainingdevice/plan-declare')"
              >
                模拟器械
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <div
                class="grid-content bg5 bg-purple"
                @click="onRouter('/material/plan-declare')"
              >
                教材管理
              </div>
            </el-col>
            <el-col :span="8">
              <div
                class="grid-content bg6 bg-purple"
                @click="onRouter('/maps/plan-declare')"
              >
                地图管理
              </div>
            </el-col>
            <el-col :span="4">
              <div
                class="grid-content bg7 bg-purple"
                @click="onRouter('/stationery/plan-declare')"
              >
                易耗品管理
              </div>
            </el-col>
            <el-col :span="4">
              <div
                class="grid-content bg8 bg-purple"
                @click="onRouter('/equipment/plan-declare')"
              >
                保障设备
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="4">
              <div
                class="grid-content bg9 bg-purple"
                @click="onRouter('/site/plan-declare')"
              >
                训练场地
              </div>
            </el-col>
            <el-col :span="4">
              <div
                class="grid-content bg10 bg-purple"
                @click="onRouter('/system/role-manage')"
              >
                系统管理
              </div>
            </el-col>
            <el-col :span="8">
              <div
                class="grid-content bg11 bg-purple"
                @click="onRouter('/company/student-manage')"
              >
                基础信息
              </div>
            </el-col>
            <el-col :span="8">
              <div
                class="grid-content bg12 bg-purple"
                @click="onRouter('/information/plan-declare')"
              >
                信息资源
              </div>
            </el-col>
          </el-row>
        </div>
        <div>
          <div class="infomation">重要通知</div>
          <div class="infomation content-g">消息管理</div>
        </div>
      </div>
      <div class="bottom-name">中国人民解放军陆军军事交通学院汽车士官学校</div>
    </div>
  </div>
</template>
<script>
import Http from '../api/api'
import dropMenuOnUser from '../components/dropMenu.vue'

import router from '@/router/index'

export default {
  name: 'main-list',
  components: { dropMenuOnUser },
  data() {
    return {
      form: {
        name: '',
        password: '',
      },
      mainList: [],
    }
  },
  created() {
    this.getMainList()
  },

  methods: {
    onRouter(routerName) {
      this.$router.push(routerName)

      return
      //   let routeList = router.options.routes[3].children
      //   // 前端静态操作，根据大类来读取小类，并且直接跳转
      //   routeList.forEach((val) => {
      //     if (val.path == routerName) {
      //       if (val.children && val.children.length > 0) {
      //         this.$router.push({ name: val.children[0].name })
      //       } else {
      //         this.$router.push({ path: routerName })
      //       }
      //     }
      //   })

      // this.$router.push({name:""});
    },

    submitForm() {},
    getMainList() {
      this.mainList = [
        {
          id: 1,
          name: '法规知识',
          path: 'index',
        },
        {
          id: 2,
          name: '项目管理',
          path: 'index',
        },
        {
          id: 3,
          name: '教学设备',
          path: 'index',
        },
        {
          id: 4,
          name: '模拟器械',
          path: 'index',
        },
        {
          id: 5,
          name: '教材管理',
          path: 'index',
        },
        {
          id: 6,
          name: '地图管理',
          path: 'index',
        },
        {
          id: 7,
          name: '易耗品管理',
          path: 'index',
        },
        {
          id: 8,
          name: '教学装备',
          path: 'index',
        },
        {
          id: 9,
          name: '训练场地',
          path: 'index',
        },
        {
          id: 10,
          name: '系统管理',
          path: 'index',
        },
        {
          id: 11,
          name: '基础信息',
          path: 'index',
        },
        {
          id: 12,
          name: '信息资源',
          path: 'index',
        },
      ]
    },
  },
}
</script>
<style scoped>
.home {
  width: 100vw;
  height: 115vh;
  background: #f0f3f7;
}
.contain {
  width: 80%;
  margin: 0 auto;
}
.home-title {
  width: 384px;
  height: 33px;
  font-size: 48px;
  font-family: PingFangSC-Light, PingFang SC;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.85);
  line-height: 33px;
}
.contetn {
  display: flex;
  justify-content: space-between;
  padding: 50px 0 0 0;
}
.imges {
  width: 51px;
  height: 51px;
  vertical-align: bottom;
}
.home-name {
  display: inline-block;
}
.name {
  height: 25px;
  line-height: 25px;
}
.logined_icon {
  /* width: 51px; */
  height: 130px;
}
.login-list {
  width: 80%;
}
.bg-purple {
  width: 281px;
  height: 166px;
}
.grid-content {
  width: 120px;
}
.bg1 {
  background: #039eaf;
}
.bg2 {
  background: #5936b1;
  opacity: 0.85;
}
.bg3 {
  background: #42a5f5;
}
.bg4 {
  background: #008a03;
  opacity: 0.71;
}
.bg5 {
  background: #51bfb1;
}
.bg6 {
  background: #6dbcff;
}
.bg7 {
  background: #a426ac;
  opacity: 0.83;
}
.bg8 {
  background: #167cf2;
}
.bg9 {
  background: #ed7c5a;
}
.bg10 {
  background: #377f90;
  opacity: 0.92;
}
.bg11 {
  background: #377f90;
  opacity: 0.92;
}
.bg11 {
  background: #bb1d4a;
  opacity: 0.8;
}
.bg12 {
  background: #03abd0;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  color: #fff;
  font-size: 24px;
  padding: 20px 0 0 20px;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  width: 100%;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.bottom-name {
  /* position: absolute; */
  /* bottom: 10px; */

  text-align: center;
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.45);
  line-height: 20px;
}
.infomation {
  box-sizing: border-box;
  width: 280px;
  height: 166px;
  background: #d1e0e8;
  line-height: 32px;
  font-size: 24px;
  padding: 20px 0 0 20px;
}
.content-m {
  display: flex;
  justify-content: space-between;
}
.content-g {
  margin-top: 20px;
}
</style>

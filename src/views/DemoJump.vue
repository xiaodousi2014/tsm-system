<template>
  <div class="manage">
    <el-container>
      <el-aside width="200px">
        <h1 class="logo"><router-link style="opacity: 1" to="/manage">首页</router-link></h1>
        <el-menu
          unique-opened
          router
          :default-active="$route.path.slice(1).split('-')[0]"
          class="el-menu-vertical-demo"
          background-color="#F5F5F5"
          text-color="#444444"
          active-text-color="#0091E9">
          <template v-for="parent in menuList">
            <el-menu-item
            v-if="parent.children.length === 0"
            :index="parent.url">
              {{parent.name}}
            </el-menu-item>
            <el-submenu
            v-if="parent.children.length !== 0"
            :index="parent.url" :key="parent.menuId">
            <template slot="title">
              <span>{{parent.name}}</span>
            </template>
              <el-menu-item
              v-for="child in parent.children"
              :index="child.url"
              :key="child.menuId">
                {{child.name}}
              </el-menu-item>
            </el-submenu>
          </template>

        </el-menu>
        <!-- aside 侧边栏 -->
      </el-aside>
      <el-container>
        <el-header>
            
              <span style="color: #fff;font-size:26px">教学保障管理系统</span>
          <div class="user-box">
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
              测试账号
                <el-button type="primary" size="mini" >退出</el-button>
          </div>
        </el-header>
        <el-main>
          <el-breadcrumb separator="/">
            <!-- <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item> -->
            <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index" :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
          </el-breadcrumb>
          <h1 class="title" v-show="$route.path === '/manage'">园区用户管理系统 欢迎您！</h1>
          <p style="font-size: 12px; color: #A8A8A8;" v-show="$route.path === '/manage'"></p>
          <div class="home-img" :style="{backgroundImage:'url('+homeBg+')'}" v-show="$route.path === '/manage'"></div>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
    <el-dialog
      title="修改密码"
      :visible.sync="modificationDialog"
      inline-message
      width="25%">
      <el-form :model="modificationPassword" :rules="rules" ref="modificationPassword" label-width="100px">
        <el-form-item label="原密码：" prop="password">
          <el-input @focus="inputChange" v-model="modificationPassword.password" type="password"></el-input>
          <span class="passwordError" v-show="oldpasswordError">原密码有误</span>
        </el-form-item>
        <el-form-item label="新密码：" prop="newpasswordOne">
          <el-input @input="inputChange" v-model="modificationPassword.newpasswordOne" type="password"></el-input>
        </el-form-item>
        <el-form-item label="密码确认：" prop="newpasswordTwo">
          <el-input @focus="inputChange" v-model="modificationPassword.newpasswordTwo" type="password"></el-input>
          <span class="passwordError" v-show="passwordError">{{msg}}</span>
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
      width="20%">
      <p style="text-align: center;">确定要退出系统吗？</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="logoutDialog = false">取 消</el-button>
        <el-button type="primary" v-loading.fullscreen.lock="loading" @click="enterLogout">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import { setStorage, getStorage,getStorageJson, removeStorage, encrypt,delCookie } from '@/config/Utils'
// import { getMenuList, isPassword, updatePassword ,logout} from '@/api/getApi'
export default {
  data () {
    return {
      homeBg: '',
      menuList: [ {
            "id":15,
            "menuId":"300001",
            "name":"子应用平台",
            "url":"subApp",
            "parentId":"",
            "children":[
                {
                    "id":16,
                    "menuId":"300011",
                    "name":"子应用管理",
                    "url":"index",
                    "parentId":"300001",
                    "children":[

                    ]
                }
            ]
        }],
      userName: "",
      modificationDialog: false,
      oldpasswordError: false,
      passwordError: false,
      logoutDialog: false,
      loading:false,
      msg: '',
      clickMenu: false,
      modificationPassword: {
        password: '',
        newpasswordOne: '',
        newpasswordTwo: ''
      },
      rules: {
        password: [{required: true, message: '请输入原密码', trigger: 'blur'}],
        newpasswordOne: [{required: true, message: '请输入新密码', trigger: 'blur'},
        {pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[])+$)([^(0-9a-zA-Z)]|[]|[a-zA-Z]|[0-9]){6,}$/, message: '不低于6位，数字、大小写、符号两种或以上', trigger: 'blur'}],
        newpasswordTwo: [{required: true, message: '请再次输入新密码', trigger: 'blur'},
        {pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[])+$)([^(0-9a-zA-Z)]|[]|[a-zA-Z]|[0-9]){6,}$/, message: '不低于6位，数字、大小写、符号两种或以上', trigger: 'blur'}],
      }
    }
  },
  methods: {
    enterLogout () {
      this.loading = true;
      logout().then(res=>{
          this.logoutDialog = false;
          removeStorage('ifLogin')
          removeStorage('token')
          delCookie('token');
          this.$router.push('/login')
      }).finally(()=>{
        this.loading = false;
      });



    },
    showLogout () {
      this.logoutDialog = true
    },
    showModificationDialog () {
      this.modificationDialog = true
    },
    modificationSuccess () {
      this.$refs.modificationPassword.validate((valid) => {
        if (valid) {
          let user = {...this.modificationPassword}
          let password = user.password
          let encryptPassword = encrypt(password)
          let users = getStorage('ifLogin')
          let mobile = users.mobile
          let data = {
            password: encryptPassword,
            mobile: mobile
          }
          isPassword(data)
          .then(res => {
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
    getUserName () {
      const user = getStorage('ifLogin')
      const name = user.employeeName
      this.userName = name
    },
    updateUserPassword () {
      let user = {...this.modificationPassword}
      let users = getStorage('ifLogin')
      let mobile = users.mobile
      let data = {
        mobile: mobile,
        password: encrypt(user.newpasswordOne)
      }
      if (user.newpasswordOne !== user.newpasswordTwo) {
        this.msg = '两次输入密码不一致'
        this.passwordError = true
        return false
      } else {
        updatePassword(data)
        .then(res => {
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
    inputChange () {
      this.passwordError = false
      this.oldpasswordError = false
    }
  },
  // 获取侧边栏菜单结构
  created () {
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
  }
}
</script>

<style lang="less" scoped>
.manage {
  height: 100%;
  .el-container {
    height: 100%;
  }
}
.el-header,
.el-footer {
  background-color: #0091EA;
  color: #333;
  text-align: center;
  line-height: 60px;
  .user-box {
    position: relative;
    float: right;
    li {
      margin-left: 20px;
      float: left;
      a {
        color: #FFF;
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
    color: #FFFFFF;
    background-color: #A1C5F5;
  }
  .el-icon-caret-bottom {
    font-size: 5px;
    color: #ffffff;
  }
  .user-box {
    position: relative;
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
      border: 1px solid #E4E4E4;
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
      color: #0091EA;
    }
    .userDiv.two:hover {
      color: #0091EA;
    }
  }
  .user-box:hover .users {
    display: block;
  }
}
.el-aside {
  background-color: #F5F5F5;
  color: #333;
  text-align: left;
  line-height: 200px;
  h1 {
    text-align: center;
    background-color: #0281CE;
    line-height: 60px;
    a {
      color: #FFF;
      font-family: MicrosoftYaHei;
    }
  }
  .el-menu-item {
    height: 50px;
    text-align: left;
    font-size: 14px;
  }
  .el-menu {
    border-right: none;
    width: 200px;
  }
}
.el-main {
  position: relative;
  padding-top: 0;
  background-color: #FFF;
  color: #333;
  .title {
    height: 80px;
    line-height: 80px;
    color: #008DE9;
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
  background-color: #0091ea;
}
/deep/.el-dialog__footer {
  text-align: center;
}
/deep/.el-dialog__headerbtn .el-dialog__close {
  color: #444444;
}
.el-menu-item:hover {
  background-color: #EBEBEB !important;
}
/deep/.el-submenu__title:hover {
  background-color: #EBEBEB !important;
}
.el-submenu:focus {
  background-color: #EBEBEB !important;
}
.el-menu-item.is-active {
  background-color: #fff !important;
}
.el-menu-item.is-active::before {
  content: '' !important;
  position: absolute !important;
  background-color: #0091EA !important;
  width: 6px !important;
  height: 50px !important;
  top: 0 !important;
  left: 0 !important;
  display: block !important;
}
/deep/.el-submenu__title:focus {
  background-color: #fff !important;
}
/deep/.el-submenu__title:focus::before {
  content: '';
  position: absolute;
  background-color: #0091EA;
  width: 5px;
  height: 50px;
  top: 0;
  left: 0;
  display: block;
}
/deep/ .el-submenu__icon-arrow {
  color: #999999;
  right: 5%;
  font-size: 14px;
  font-weight: 700;
}
.el-breadcrumb {
  font-size: 15px;
  color: #666666;
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e4e4e4;
  margin-left: -20px;
  margin-right: -20px;
}
/deep/.el-breadcrumb__inner.is-link{
  color: #666666;
  font-weight: 400;
}
/deep/.is-link{
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
}
/deep/.el-button--primary:hover {
  background-color: #3D85CC;
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
</style>

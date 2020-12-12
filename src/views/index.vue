<template>
  <div class="manage">
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
              <!-- <span style="color: #fff">测试账号</span>
             <el-button type="primary" size="mini" >退出</el-button> -->

            <el-dropdown @command="handleLogout">
                <span class="el-dropdown-link">
                    测试账号<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
          </div>
        </el-header>
    <el-container class="main-container">
        
      <el-aside width="200px">
            <el-menu
                unique-opened
                router
                :default-active="$route.path.slice(1).split('-')[0]"
                class="el-menu-vertical-demo"
                background-color="#fff"
                    text-color="#000"
                    active-text-color="rgba(0, 102, 153, 0.81960784)">
                <template v-for="parent in menuList">
                    <el-menu-item
                    class="is-activedddd"
                    v-if="parent.children.length === 0"
                    :index="parent.url"
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
                        :index="child.url"
                        :key="child.menuId"
                    >
                        {{ child.name }}
                    </el-menu-item>
                    </el-submenu>
                </template>
            </el-menu>

                <!-- aside 侧边栏 -->
     </el-aside>
        
      
      
        <el-main>
          <div style="background: #fff; border-radius: 8px;height: calc(100% - 40px);">
              <el-breadcrumb separator="/" style="position: fixed;
    z-index: 20000;
    background: rgb(249 249 249);
    right: 0;
    width: calc(100% - 200px);
    height: 40px;
    top: 60px;
    border-bottom: none;
    border-left: 5px solid #61BBD8;
    border-bottom: 1px solid #e6e7e8;">
                <!-- <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item> -->
                <el-breadcrumb-item
                v-for="(item, index) in $route.meta"
                :key="index"
                :to="{ path: item.path }"
                >{{ item.name }}</el-breadcrumb-item
                >
            </el-breadcrumb>
            <div style="height: 100%;margin-top: 40px;border-radius: 8px;">
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
        </el-main>
      </el-container>
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
// import { setStorage, getStorage,getStorageJson, removeStorage, encrypt,delCookie } from '@/config/Utils'
// import { getMenuList, isPassword, updatePassword ,logout} from '@/api/getApi'
export default {
  data() {
    return {
      homeBg: "",
      menuList: [
        {
          id: 15,
          menuId: "300001",
          name: "测试字符串长速使用",
          url: "subApp",
          parentId: "",
          children: [
            {
              id: 16,
              menuId: "300011",
              name: "演播室（电教设备）",
              url: "demo",
              parentId: "300001",
              children: [],
            },
          ],
        },
        {
          id: 1,
          menuId: '11',
          name: "设备管理",
          url: "subApp1",
          parentId: "",
          children: [
            {
              id: 2,
              menuId: "22",
              name: "申报入库",
              url: "declareWarehousing",
              parentId: 1,
              children: [],
            },
          ],
        },
        {
          id: 17,
          menuId: "300022",
          name: "训练场地管理",
          url: "subApp17",
          parentId: "",
          children: [
            {
              id: 18,
              menuId: "300023",
              name: "使用计划",
              url: "UsePlan",
              parentId: "300022",
              children: [],
            },
          ],
        },
      ],
      userName: "",
      modificationDialog: false,
      oldpasswordError: false,
      passwordError: false,
      logoutDialog: false,
      loading: false,
      msg: "",
      clickMenu: false,
      modificationPassword: {
        password: "",
        newpasswordOne: "",
        newpasswordTwo: "",
      },
      rules: {
        password: [
          { required: true, message: "请输入原密码", trigger: "blur" },
        ],
        newpasswordOne: [
          { required: true, message: "请输入新密码", trigger: "blur" },
          {
            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[])+$)([^(0-9a-zA-Z)]|[]|[a-zA-Z]|[0-9]){6,}$/,
            message: "不低于6位，数字、大小写、符号两种或以上",
            trigger: "blur",
          },
        ],
        newpasswordTwo: [
          { required: true, message: "请再次输入新密码", trigger: "blur" },
          {
            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[])+$)([^(0-9a-zA-Z)]|[]|[a-zA-Z]|[0-9]){6,}$/,
            message: "不低于6位，数字、大小写、符号两种或以上",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleLogout() {
        this.logoutDialog = true
    },
    enterLogout() {
      this.loading = true;
      logout()
        .then((res) => {
          this.logoutDialog = false;
          removeStorage("ifLogin");
          removeStorage("token");
          delCookie("token");
          this.$router.push("/login");
        })
        .finally(() => {
          this.loading = false;
        });
    },
    showLogout() {
      this.logoutDialog = true;
    },
    showModificationDialog() {
      this.modificationDialog = true;
    },
    modificationSuccess() {
      this.$refs.modificationPassword.validate((valid) => {
        if (valid) {
          let user = { ...this.modificationPassword };
          let password = user.password;
          let encryptPassword = encrypt(password);
          let users = getStorage("ifLogin");
          let mobile = users.mobile;
          let data = {
            password: encryptPassword,
            mobile: mobile,
          };
          isPassword(data).then((res) => {
            let { code, msg } = res;
            console.log(res);
            if (code === 200) {
              this.updateUserPassword();
            } else {
              this.oldpasswordError = true;
              // this.$refs.modificationPassword.resetFields()
            }
          });
        }
      });
    },
    getUserName() {
      const user = getStorage("ifLogin");
      const name = user.employeeName;
      this.userName = name;
    },
    updateUserPassword() {
      let user = { ...this.modificationPassword };
      let users = getStorage("ifLogin");
      let mobile = users.mobile;
      let data = {
        mobile: mobile,
        password: encrypt(user.newpasswordOne),
      };
      if (user.newpasswordOne !== user.newpasswordTwo) {
        this.msg = "两次输入密码不一致";
        this.passwordError = true;
        return false;
      } else {
        updatePassword(data).then((res) => {
          if (res.code === 200) {
            this.$refs.modificationPassword.resetFields();
            this.$message.success("密码已修改，请重新登录");
            removeStorage("ifLogin");
            this.$router.push("/login");
          } else {
            this.msg = res.msg;
            this.passwordError = true;
          }
        });
      }
    },
    inputChange() {
      this.passwordError = false;
      this.oldpasswordError = false;
    },
  },
  // 获取侧边栏菜单结构
  created() {
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
};
</script>

<style lang="less" scoped>
.manage {
  height: 100%;
  .main-container {
    height: calc(100% - 60px);
  }
  .el-container-sub {
  }
}
.el-dropdown-menu {
    z-index: 30000 !important;
}
.el-header .el-dropdown {
    color: #fff;
}
.el-header,
.el-footer {
  background-color: rgba(0, 102, 153, 0.819607843137255);
  color: #333;
  text-align: center;
  line-height: 60px;
  .user-box {
    position: absolute;
    top: 0;
    right: 20px;
    li {
      margin-left: 20px;
      float: left;
      a {
        color: #fff;
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
height: 100%;
  background-color: #F5F5F5;
  color: #333;
  text-align: left;
  line-height: 200px;
  h1 {
    text-align: center;
    background-color: #0281ce;
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
      height: 100%;
    border-right: none;
    width: 200px;
  }
}
.el-main {
  position: relative;
  height: 100%;
  background: rgba(249,250,252,1);
  color: #333;
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
  background-color: #0091ea;
}
/deep/.el-dialog__footer {
  text-align: center;
}
/deep/.el-dialog__headerbtn .el-dialog__close {
  color: #444444;
}
.el-menu {
    padding: 0 10px;
}
/deep/ .el-menu--inline {
    padding-left: 30px !important;
}
.el-menu-item {
    min-width: inherit !important;
    background-color:#61BBD8 !important;
    padding:0 !important;
    height: 35px !important;
    text-align: center !important;
    line-height: 35px !important;
    border-radius: 8px;
    color: #fff !important;
}
.el-menu-item:hover {
  background-color: #006699 !important;
}
/deep/.el-submenu__title {
    line-height: 35px;
    height: 35px;
    border-radius: 8px;
    background: #61BBD8 !important;
    padding: 0;
    margin: 10px 0;
    color: #fff !important;
}
/deep/.el-submenu__title:hover {
  background-color: #006699 !important;
}
/deep/.el-submenu__title:active {
  background-color: #fff !important;
}
.el-submenu:focus {
  background-color: #ebebeb !important;
}
.el-menu-item.is-active {
  background-color: #006699 !important;
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
  height: 50px;
  line-height: 50px;
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
  background-color: #3d85cc;
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

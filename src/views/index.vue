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
      <el-aside width="208px">
          <!-- <h1 style="font-size：30px;">教学保障管理系统</h1> -->
            <el-menu
                unique-opened
                router
                :default-active="$route.path.slice(1).split('_')[0]"
                class="el-menu-vertical-demo"
                background-color="#001529"
                    text-color="#000"
                    active-text-color="#fff">
                    
          <div style="line-height: 68px;    text-align: center;color: #fff;font-size:20px">教学保障管理系统</div>
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
                        <i class="el-icon-location"></i>
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
        

        <el-header>
          <div class="user-box">
            <!-- <span style="color: #fff;"></span> -->
            <i class="el-icon-caret-bottom"></i>
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
            <span>测试账号</span>
            <span style="padding-right: 10px">2020.11.11 15:20 登录</span>
            <el-button size="mini" >退出</el-button>
            <!-- <el-dropdown @command="handleLogout">
            <span class="el-dropdown-link">
            <el-dropdown @command="handleLogout">
              <span class="el-dropdown-link">
                测试账号<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown> -->
          </div>

          <!-- <el-breadcrumb separator="/" style="right: 0;"> -->
                <!-- <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item> -->
                <!-- <span v-for="(item, index) in $route.matched" :key="index">
                    <el-breadcrumb-item
                        v-if="$route.matched.length === 1"
                        :to="{ path: item.path }"
                        >{{ item.meta[0].name }}</el-breadcrumb-item>
                    <el-breadcrumb-item
                        v-if="$route.matched.length === 2"
                        :to="{ path: item.path }"
                        >{{ item.meta[0].name }}&nbsp;{{ 0 == index ? '/' : '' }}&nbsp;</el-breadcrumb-item>
                </span>
            </el-breadcrumb> -->

            <div style="text-align: left;line-height: 60px;position: relative;">
               <span>{{ $route.meta[0].parentName }}</span>/<span>{{ $route.meta[0].name }}</span>
                
                <!-- <div style="position: absolute;right: 0; top: 0;">
                    <el-button type="primary">检索</el-button>
                    <el-button>文件导入</el-button>
                    <el-button>新建</el-button>
                    <el-button>编辑</el-button>
                    <el-button>删除</el-button>
                    <el-button type="primary">上传附件</el-button>
                </div> -->
            </div>
        </el-header>
      
          <!-- <el-main> -->
          <div style="background: #fff; border-radius: 8px;height: calc(100% - 40px);width: calc(100% - 210px);position:absolute;left:210px;top:40px">
              <!-- <el-breadcrumb separator="/" style="position: fixed;
    z-index: 2;
    background: rgb(249 249 249);
    right: 0;
    width: calc(100% - 200px);
    height: 40px;
    top: 60px;
    border-bottom: none;
    border-left: 5px solid #61BBD8;
    border-bottom: 1px solid #e6e7e8;"> -->
                <!-- <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item> -->
                <!-- <el-breadcrumb-item
                v-for="(item, index) in $route.meta"
                :key="index"
                :to="{ path: item.path }"
                >{{ item.name }}</el-breadcrumb-item
                >
            </el-breadcrumb> -->
            <div style="height: 100%;border-radius: 8px;">
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
        <div style="height: 50px;width: 100%;"></div>
        <div>
          <el-breadcrumb
            separator="/"
            style="z-index: 2;
            background: #ffffff;
            padding: 0 24px;
            border-bottom: none;"
          >
            <!-- <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item> -->
            <el-breadcrumb-item
              v-for="(item, index) in $route.meta"
              :key="index"
              :to="{ path: item.path }"
            >{{ item.name }}</el-breadcrumb-item>
          </el-breadcrumb>
          <div style="height: 100%;">
            <!-- <h1 class="title"
                v-show="$route.path === '/index'">
              园区用户管理系统 欢迎您！
            </h1>
            <p style="font-size: 12px; color: #a8a8a8"
               v-show="$route.path === '/index'"></p>
            <div class="home-img"
                 :style="{ backgroundImage: 'url(' + homeBg + ')' }"
                 v-show="$route.path === '/index'"></div> -->
            <router-view />
          </div>
        </div>
      <!-- </el-main> -->
    <!-- </el-container> -->

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
        <el-form-item
          label="原密码："
          prop="password"
        >
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
          <span
            class="passwordError"
            v-show="oldpasswordError"
          >原密码有误</span>
        </el-form-item>
        <el-form-item
          label="新密码："
          prop="newpasswordOne"
        >
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
import router from "@/router/index";

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
              name: "采购申报",
              url: "device-purchase",
              parentId: 1,
              children: [],
            },
             {
              id: 3,
              menuId: "23",
              name: "计划审核",
              url: "device-reviewPlan",
              parentId: 1,
              children: [],
            },
             {
              id: 4,
              menuId: "24",
              name: "入库登记",
              url: "device-warehousing",
              parentId: 1,
              children: [],
            },
             {
              id: 5, 
              menuId: "25",
              name: "在库设备",
              url: "device-equipment",
              parentId: 1,
              children: [],
            },
             {
              id: 6, 
              menuId: "26",
              name: "请领记录",
              url: "device-pleaseRecord",
              parentId: 1,
              children: [],
            },
             {
              id: 7, 
              menuId: "27",
              name: "请领审核",
              url: "device-pleaseCheck",
              parentId: 1,
              children: [],
            },
             {
              id: 8, 
              menuId: "28",
              name: "借用记录",
              url: "device-borrowRecord",
              parentId: 1,
              children: [],
            },
             {
              id: 9, 
              menuId: "29",
              name: "借用审核",
              url: "device-borrowCheck",
              parentId: 1,
              children: [],
            },
             {
              id: 10, 
              menuId: "30",
              name: "维修记录",
              url: "device-repairRecord",
              parentId: 1,
              children: [],
            },
             {
              id: 11, 
              menuId: "31",
              name: "维修审核",
              url: "device-repairCheck",
              parentId: 1,
              children: [],
            },
              {
              id: 12, 
              menuId: "32",
              name: "报废记录",
              url: "device-scrapRecord",
              parentId: 1,
              children: [],
            },
             {
              id: 13, 
              menuId: "33",
              name: "报废审核",
              url: "device-scrapCheck",
              parentId: 1,
              children: [],
            },
             {
              id: 14, 
              menuId: "34",
              name: "盘点日志",
              url: "device-inventoryLog",
              parentId: 1,
              children: [],
            },
              {
              id: 15, 
              menuId: "35",
              name: "维护管理",
              url: "device-deviceManage",
              parentId: 1,
              children: [],
            },
          ],
        },
          {
          id: 2,
          menuId: '21',
          name: "训练模拟器材管理",
          url: "subApp222",
          parentId: "",
          children: [
            {
              id: 2,
              menuId: "22",
              name: "采购申报",
              url: "equipment-purchase",
              parentId: 2,
              children: [],
            },
             {
              id: 3,
              menuId: "23",
              name: "计划审核",
              url: "equipment-reviewPlan",
              parentId: 2,
              children: [],
            },
             {
              id: 4,
              menuId: "24",
              name: "入库登记",
              url: "equipment-warehousing",
              parentId: 2,
              children: [],
            },
             {
              id: 5, 
              menuId: "25",
              name: "在库设备",
              url: "equipment-equipment",
              parentId: 2,
              children: [],
            },
             {
              id: 6, 
              menuId: "26",
              name: "请领记录",
              url: "equipment-pleaseRecord",
              parentId: 2,
              children: [],
            },
             {
              id: 7, 
              menuId: "27",
              name: "请领审核",
              url: "equipment-pleaseCheck",
              parentId: 2,
              children: [],
            },
             {
              id: 8, 
              menuId: "28",
              name: "借用记录",
              url: "equipment-borrowRecord",
              parentId: 2,
              children: [],
            },
             {
              id: 9, 
              menuId: "29",
              name: "借用审核",
              url: "equipment-borrowCheck",
              parentId: 2,
              children: [],
            },
             {
              id: 10, 
              menuId: "30",
              name: "维修记录",
              url: "equipment-repairRecord",
              parentId: 2,
              children: [],
            },
             {
              id: 11, 
              menuId: "31",
              name: "维修审核",
              url: "equipment-repairCheck",
              parentId: 2,
              children: [],
            },
              {
              id: 12, 
              menuId: "32",
              name: "报废记录",
              url: "equipment-scrapRecord",
              parentId: 2,
              children: [],
            },
             {
              id: 13, 
              menuId: "33",
              name: "报废审核",
              url: "equipment-scrapCheck",
              parentId: 2,
              children: [],
            },
             {
              id: 14, 
              menuId: "34",
              name: "盘点日志",
              url: "equipment-inventoryLog",
              parentId: 2,
              children: [],
            },
              {
              id: 15, 
              menuId: "35",
              name: "维护管理",
              url: "equipment-deviceManage",
              parentId: 2,
              children: [],
            },
          ],
        },
         {
          id: 3,
          menuId: '31',
          name: "训练教学保障装备管理",
          url: "subApp2",
          parentId: "",
          children: [
            {
              id: 2,
              menuId: "32",
              name: "采购申报",
              url: "guarantee-purchase",
              parentId: 3,
              children: [],
            },
             {
              id: 3,
              menuId: "33",
              name: "计划审核",
              url: "guarantee-reviewPlan",
              parentId: 3,
              children: [],
            },
             {
              id: 4,
              menuId: "34",
              name: "入库登记",
              url: "guarantee-warehousing",
              parentId: 3,
              children: [],
            },
             {
              id: 5, 
              menuId: "35",
              name: "在库设备",
              url: "guarantee-equipment",
              parentId: 3,
              children: [],
            },
             {
              id: 6, 
              menuId: "36",
              name: "请领记录",
              url: "guarantee-pleaseRecord",
              parentId: 3,
              children: [],
            },
             {
              id: 7, 
              menuId: "37",
              name: "请领审核",
              url: "guarantee-pleaseCheck",
              parentId: 3,
              children: [],
            },
             {
              id: 8, 
              menuId: "38",
              name: "借用记录",
              url: "guarantee-borrowRecord",
              parentId: 3,
              children: [],
            },
             {
              id: 9, 
              menuId: "39",
              name: "借用审核",
              url: "guarantee-borrowCheck",
              parentId: 3,
              children: [],
            },
             {
              id: 10, 
              menuId: "30",
              name: "维修记录",
              url: "guarantee-repairRecord",
              parentId: 3,
              children: [],
            },
             {
              id: 11, 
              menuId: "31",
              name: "维修审核",
              url: "guarantee-repairCheck",
              parentId: 3,
              children: [],
            },
              {
              id: 12, 
              menuId: "42",
              name: "报废记录",
              url: "guarantee-scrapRecord",
              parentId: 3,
              children: [],
            },
             {
              id: 13, 
              menuId: "43",
              name: "报废审核",
              url: "guarantee-scrapCheck",
              parentId: 3,
              children: [],
            },
             {
              id: 14, 
              menuId: "44",
              name: "盘点日志",
              url: "guarantee-inventoryLog",
              parentId: 3,
              children: [],
            },
              {
              id: 15, 
              menuId: "45",
              name: "维护管理",
              url: "guarantee-deviceManage",
              parentId: 3,
              children: [],
            },{
              menuId: '23',
              name: '申报入库',
              url: 'object-index',
              parentId: 1,
              children: []
            },
            {
              id: 4,
              menuId: '24',
              name: '申报审核',
              url: 'object-examine',
              parentId: 1,
              children: []
            },
            // {
            //   id: 4,
            //   menuId: '24',
            //   name: '入库记录',
            //   url: 'knowledge-rkRecord',
            //   parentId: 1,
            //   children: []
            // },
            // {
            //   id: 5,
            //   menuId: '25',
            //   name: '知识检索',
            //   url: 'knowledge-retrieval',
            //   parentId: 1,
            //   children: []
            // }
          ]
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
      openRouter:[],
      homeBg: "",
      menuList: [],
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

  // 获取侧边栏菜单结构
  created() {
    // 注,这只是一个临时路由，之后会用接口代替 
    // 这个参数是router文件夹里面存储的参数
    this.menuList = router.options.routes[3].children;

    // 获取开始时传递的数据 
    this.openRouter=[this.$route.matched[1].path] 
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
      console.log(this.$route.meta)
      debugger
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
    height: 140px !important;
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
    color:#000000;
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
  height: 100%;
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
  background-color: #0091ea;
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
    padding-left: 42px !important;
    min-width: inherit !important;
    background-color:#001529 !important;
    padding:0 !important;
    height: 40px !important;
    text-align: center !important;
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
  background-color: #1890FF !important;
}
.el-menu-item.is-active {
  background-color:#1890FF !important;
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

/*解决表格错位，必须加在index.html或APP.vue中 cak*/
body .el-table th.gutter {
  display: table-cell !important;
}

body .el-table colgroup.gutter {
  display: table-cell !important;
}
</style>
 
<!-- 解决表格错位问题  cak 
<style  src="@/styles/fromAlignment.css"></style> 
-->

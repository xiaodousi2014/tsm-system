<template>
  <div class="home">
    <el-header style="
        line-height: 60px;
        text-align: center;
        font-size: 33px;
        padding: 120px 0;
      ">教学保障管理系统</el-header>
    <div class="login-content">
      <div class="login-error-text">
        <el-alert
          v-if="isShowingText"
          title="密码输入错误"
          style="border:1px solid #FFCCC7;margin-bottom:12px;"
          type="error"
          show-icon
          @close="onColseErrorText"
        ></el-alert>
      </div>

      <el-form
        :model="loginForm"
        :rules="loginFormFieldRules"
        ref="loginForm"
      >
        <el-form-item
          prop="u_name"
          style="margin-bottom:26px !important;"
        >
          <el-input
            v-model="loginForm.u_name"
            placeholder="请输入账号"
          >
            <i
              slot="prefix"
              class="el-icon-s-custom icon"
            ></i>
          </el-input>
        </el-form-item>

        <el-form-item prop="u_passwd">
          <el-input
            v-model="loginForm.u_passwd"
            show-password
            placeholder="请输入密码"
          >
            <i
              slot="prefix"
              class="el-icon-unlock icon"
            ></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            style="width: 100%;margin-top:20px"
            @click="submitForm('loginForm')"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="login-list">
      <el-row :gutter="20">
        <el-col
          v-for="item in mainFunctionButtonList"
          :key="item.id"
          :span="6"
        >
          <div>{{ item.name }}</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Http from "@/api/api";

export default {
  name: "login",
  components: {},
  data() {
    return {
      isShowingText: false,
      form: {
        name: "",
        password: "",
      },
      mainList: [],
      flag: false,
      loginForm: {
        u_name: "",
        u_passwd: "",
      },
      mainFunctionButtonList: [],
      loginFormFieldRules: {
        u_name: [{ required: true, message: "请输入账号", trigger: "blur" }],
        u_passwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },

  methods: {

    // 判断是否登录
    isLogin() {
      let loginToken = sessionStorage.getItem("loginToken");
      if (loginToken && loginToken != "") {
        this.$router.push("/main");
      }
    },

    // 关闭错误提示框
    onColseErrorText() {
      this.isShowingText = false;
    },

    submitForm() {
      // this.isShowingText = true;
      this.$refs["loginForm"].validate((valid) => {
        if (valid) {
          this.loading = true;
          let params = this.loginForm;
          let url = "/trmslogin";
          Http.login(params)
            .then((res) => {
              if (res.code == "0000") {
                console.log("读取登录的数据");
                console.log(res);
                
                sessionStorage.setItem("loginToken", res.token);
                sessionStorage.setItem("loginName", res.u_name);
                sessionStorage.setItem("userId", res.id);
                this.$router.push("/main");
              } else {
                this.isShowingText = true;
              }
            })
            .finally(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    getMainFunctionButtonList() {
      this.mainFunctionButtonList = [
        {
          id: 1,
          name: "法规知识",
        },
        {
          id: 2,
          name: "项目管理",
        },
        {
          id: 3,
          name: "教学设备",
        },
        {
          id: 4,
          name: "模拟器械",
        },
        {
          id: 5,
          name: "教材管理",
        },
        {
          id: 6,
          name: "地图管理",
        },
        {
          id: 7,
          name: "易耗品管理",
        },
        {
          id: 8,
          name: "教学装备",
        },
        {
          id: 9,
          name: "训练场地",
        },
        {
          id: 10,
          name: "系统管理",
        },
        {
          id: 11,
          name: "基础信息",
        },
        {
          id: 12,
          name: "信息资源",
        },
      ];
    },

  },

  created() {
    // 判断是否已经登录,如果已经登录则直接进入到主页
    this.isLogin();
    this.getMainFunctionButtonList();
  },
  
};
</script>
<style    scoped>
.login-content {
  width: 368px;
  margin: 50px auto;
}

.login-error-text {
  height: 40px;
}
.login-content >>> .el-alert__title {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65) !important;
}

.login-list {
  width: 650px;
  line-height: 22px;
  /* padding: 200px 600px; */
  line-height: 40px;
  text-align: center;
  color: rgba(0, 0, 0, 0.65);
  margin: 0 auto;
  /* margin-top: 20vh; */
}
.content-bottom {
  position: absolute;
  width: 100%;
  bottom: 20px;
  text-align: center;
  font-size: 14px;
  margin: 0 auto;
}
</style>

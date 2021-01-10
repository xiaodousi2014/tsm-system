<template>
  <div class="home">
    <el-header
      style="
        line-height: 60px;
        text-align: center;
        font-size: 33px;
        padding: 120px 0;
      "
      >教学保障管理系统</el-header
    >
    <div class="login-content">
      <el-form ref="form" :model="form">
        <el-form-item style="text-align: center">
        <el-input placeholder="账户" v-model="form.name" >
          <i slot="prefix" class="el-icon-user" style="color: #5cb6ff;margin-left:5px"></i>
        </el-input>
        </el-form-item>
         <el-form-item style="margin-top:20px">
        <el-input placeholder="密码" v-model="form.name">
          <i slot="prefix" class="el-icon-lock" style="color: #5cb6ff;margin-left:5px"></i>
        </el-input>
         </el-form-item>
        <el-form-item style="margin-top:50px">
          <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%"
            >登陆</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <div class="login-list">
      <el-row :gutter="20">
        <el-col v-for="item in mainList" :key="item.id" :span="6"
          ><div style="margin-top:13px">{{ item.name }}</div></el-col
        >
      </el-row>
    </div>
  </div>
</template>
<script>
import Http from "../api/api";
// import tableCustom from '../components/tableCustom'

export default {
  name: "login",
  components: {},
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
      mainList: [],
    };
  },
  methods: {
    submitForm() {
      this.$router.replace("./main");
    },
    getMainList() {
      this.mainList = [
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
    this.getMainList();
  },
};
</script>
<style scoped>
.login-content {
  width: 368px;
  margin: 50px auto;
}
.login-list {
 width:650px;
  line-height: 22px;
  text-align: center;
  font-size: 14px;
  margin: 0 auto;
}
</style>

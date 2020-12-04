<template>
  <div class="home">
    <el-header
      style="line-height: 60px; text-align: center; background: #0091ea"
      >教学保障管理系统</el-header
    >
    <div class="login-content">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item style="text-align: center">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登陆</el-button
          >
        </el-form-item>
      </el-form>
    
    </div>
      <div class="login-list">
        <el-row :gutter="20">
          <el-col v-for="item in mainList" :key="item.id" :span="6"
            ><div>{{ item.name }}</div></el-col
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
        this.$router.replace('./main')
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
  width: 500px;
  margin: 50px auto;
}
.login-list {
    margin: 20px auto;
    padding: 0 500px;
    line-height: 60px;
    text-align: center;
}
</style>

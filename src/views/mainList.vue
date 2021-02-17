<template>
  <div class="home">
    <el-header
      style="line-height: 60px; text-align: center; background: #0091ea"
      >教学保障管理系统</el-header
    >
      <div class="login-list">
        <el-row :gutter="20">
          <el-col v-for="item in mainList" :key="item.id" :span="6">
            <router-link :to=item.path> {{item.name}}</router-link>
            </el-col>
        </el-row>
      </div>
  </div>
</template>
<script>
import Http from "../api/api";
// import tableCustom from '../components/tableCustom'

export default {
  name: "main-list",
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
    submitForm() {},
    getMainList() {
      this.mainList = [
        {
          id: 1,
          name: "法规知识",
          path: 'index'
        },
        {
          id: 2,
          name: "项目管理",
           path: 'index'
        },
        {
          id: 3,
          name: "教学设备",
           path: 'index'
        },
        {
          id: 4,
          name: "模拟器械",
           path: 'index'
        },
        {
          id: 5,
          name: "教材管理",
           path: 'index'
        },
        {
          id: 6,
          name: "地图管理",
           path: 'index'
        },
        {
          id: 7,
          name: "易耗品管理",
           path: 'index'
        },
        {
          id: 8,
          name: "教学装备",
           path: 'index'
        },
        {
          id: 9,
          name: "训练场地",
           path: 'index'
        },
        {
          id: 10,
          name: "系统管理",
           path: 'index'
        },
        {
          id: 11,
          name: "基础信息",
           path: 'index'
        },
        {
          id: 12,
          name: "信息资源",
           path: 'index'
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
    font-weight: bolder;
}
</style>

<template>
  <div class="ClassifiedDisplay padding20">
       <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="文件资料" name="first" :lazy='true'>
      <documentation></documentation>
    </el-tab-pane>
    <el-tab-pane label="电教设备" name="second">
      <equipment></equipment>
    </el-tab-pane>
    <el-tab-pane label="信息系统" name="third">
      <system></system>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
import documentation from "./documentation";
import equipment from "./equipment";
import Http from "../../../api/api";
import system from './system'
export default {
  name: "declareWarehousing",
  components: { documentation, equipment, system},
  data() {
   
     return {
      activeName: 'first'
    };
  },
  methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
  },
  created() {
    
  },
};
</script>
<style scoped lang="less">
.showIcon {
  text-align: right;
  padding-right: 5px;
  font-size: 25px;
  position: relative;
  .selectList {
    position: absolute;
    height: 400px;
    overflow-y: scroll;
    top: 30px;
    right: 0;
    z-index: 99;
    min-width: 100px;
    text-align: left;
    font-size: 20px;
    padding: 20px 0;
    background: #fdfdfd;
    border: 1px solid rgb(238, 238, 238);
    li {
      padding: 0 10px;
      line-height: 50px;
    }
  }
}
.pagination {
  margin-top:20px;
}
.showIcon i {
  cursor: pointer;
}
</style>

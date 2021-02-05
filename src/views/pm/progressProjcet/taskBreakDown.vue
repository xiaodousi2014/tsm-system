<template>
  <div class="content_box" style="background: #eff2f5;margin: 0 10px 24px">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="新建" name="1">
        <el-row>
          <div class="task_box add_task">
            <div style="text-align:center;color:#666666;">
              <div class="add_icon">
                <i class="el-icon-plus"></i>
              </div><br/>
              新建
            </div>
          </div>
          <div v-for="i in 10" :key="i" class="task_box">
            <div class="content">
              <div class="title">这是标题标题标题啊啊啊啊啊啊啊啊啊啊啊啊啊</div>
              <div class="title" style="color: rgba(0, 0, 0, 0.45);">时间：2021年01月01日</div>
            </div>
            <div class="btn_box">
              <div class="btn1">完成</div>
              <div class="btn2">编辑</div>
            </div>
          </div>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="进行中" name="2">
        <el-row>b</el-row>
      </el-tab-pane>
      <el-tab-pane label="已完成" name="3">
        <el-row>c</el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>

let id = 1000

export default {
  name: 'objectIndex',
  components: {},
  data() {
    return {
      dialogVisible: false,
      value: '1',
      activeName: '1'
    }
  },
  created() {},
  methods: {
    handleClick(value) {
      console.log(value)
    },
  },
}
</script>
<style lang="less" scoped>
.task_box{
  width: 278px;
  height: 162px;
  border: 1px solid #E9E9E9;
  border-radius: 2px;
  box-sizing: border-box;
  margin: 0 20px 36px 0;
  background: #ffffff;
  display: inline-block;
  float: left;
  div{
    display: inline-block;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .content{
    width: 100%;
    height: 118px;
    .title{
      width: 100%;
      padding: 20px 17px;
      height: 60px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
  }
  .btn_box{
    width: 100%;
    height: 40px;
    padding-top: 8px;
    border-top: 1px solid #eeeeee;
    background: #FAFAFA;
    .btn1{
      width: 50%;
      text-align: center;
      &::before{
        content: '';
        background: #0f2950;
        border-left: 1px solid #bbbbbb;
        position: relative;
        left: 60%;
      }
    }
    .btn2{
      width: 50%;
      text-align: center;
    }
  }
}
.add_task{
  display: flex;
  justify-content: center;
  align-items: center;
  .add_icon{
    width: 88px;
    height: 88px;
    font-size: 50px;
    line-height: 88px;
    text-align: center;
    color: #E9E9E9;
    background: #fafafa;
    margin-bottom: 10px;
  }
}
</style>

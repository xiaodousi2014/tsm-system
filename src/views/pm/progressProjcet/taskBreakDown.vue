<template>
  <div class="content_box" style="padding-top:14px;">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="新建" name="0">
        <TaskCom task_status="0" ref="task0"/>
      </el-tab-pane>
      <el-tab-pane label="进行中" name="1">
        <TaskCom task_status="1" ref="task1"/>
      </el-tab-pane>
      <el-tab-pane label="已完成" name="2">
        <TaskCom task_status="2" ref="task2"/>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>
<script>
import TaskCom from './components/taskBreak'

export default {
  name: 'objectIndex',
  components: {
    TaskCom
  },
  data() {
    return {
      serverUrl: `${process.env.VUE_APP_API_URL}`,
      fileUrl: '',
      dialogVisible: false,
      exportPutModal: false,
      value: '1',
      activeName: '0',
      searchList: [],
      tableData: [],
      tableAllIist: [],
      multipleSelectionInfo:{},
      query: {},
      pagination: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      },
      project_id:'',
      project_name:'',
      indexArr:[]
    }
  },
  created() {
    this.fileUrl = `${this.serverUrl}/common/import` // 项目导入
    this.project_id = this.$route.query.project_id
    this.project_name = this.$route.query.project_name
  },
  methods: {
    handleClick(tab, event) {
      console.log(this.activeName)
      this.$refs[`task${this.activeName}`].getTableList()
    },
    goDelectPage() { // 删除记录页面
      this.$router.push({path: "/pm/progress-projcet-task-delete",
        query: {
          project_id: this.project_id,
          project_name: this.project_name
        }
      });
    },
    close() {
      this.exportPutModal = false
      this.$refs[`task${this.activeName}`].getTableList()
    },
    importExcel() { // 项目导入
      this.exportPutModal = true
    },
    onTemplateDown() { // 下载导入模版
      window.open(`${this.serverUrl}/common/attachment/download_TemplateFile?infoType=t_project_task`)
    },
  },
}
</script>
<style lang="less" scoped>
.task_box {
  width: 278px;
  height: 162px;
  border: 1px solid #E9E9E9;
  border-radius: 2px;
  box-sizing: border-box;
  margin: 0 20px 36px 0;
  background: #ffffff;
  display: inline-block;
  float: left;

  div {
    display: inline-block;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .content {
    width: 100%;
    height: 118px;

    .title {
      width: 100%;
      padding: 20px 17px;
      height: 60px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
  }

  .btn_box {
    width: 100%;
    height: 40px;
    padding-top: 8px;
    border-top: 1px solid #eeeeee;
    background: #FAFAFA;

    .btn1 {
      width: 50%;
      text-align: center;

      &::before {
        content: '';
        background: #0f2950;
        border-left: 1px solid #bbbbbb;
        position: relative;
        left: 60%;
      }
    }

    .btn2 {
      width: 50%;
      text-align: center;
    }
  }
}

.add_task {
  display: flex;
  justify-content: center;
  align-items: center;

  .add_icon {
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

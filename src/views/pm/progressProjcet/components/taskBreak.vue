<template>
  <div>
    <el-row>
      <div class="menu-type" style="padding-top:0px;">
        <span>
          <el-switch
              v-model="value"
              active-text="卡片展示"
              inactive-text="列表显示">
          </el-switch>
        </span>
        <div class="top-menu-but">
          <el-button class="btnSty" @click="exportList()">导出</el-button>
          <el-button class="btnSty" @click="importExcel()">任务导入</el-button>
          <el-button class="btnSty" @click="onTemplateDown()">导入模版下载</el-button>
          <el-button class="btnSty" @click="goDelectPage()">删除记录</el-button>
        </div>
      </div>

      <el-row v-if="value">
        <el-col
            :md="8"
            :sm="12"
            :xs="24"
            class="task_box add_task">
          <div style="text-align:center;color:#666666;" @click="dialogVisible = true">
            <div class="add_icon">
              <i class="el-icon-plus"></i>
            </div>
            <br/>
            新建
          </div>
        </el-col>

        <el-col
            :md="8"
            :sm="12"
            :xs="24"
            v-for="item in taskList" :key="item.id"
            :class="['task_box', item.speedColor]"
        >
          <div class="content">
            <div class="title" @click="view(item)">{{ item.task_name }}</div>
            <div class="title" style="color: rgba(0, 0, 0, 0.45);">时间：{{ item.end_time }}</div>
          </div>
          <div class="btn_box" v-if="task_status!=2">
            <div class="btn1" @click="next(item)">完成</div>
            <div class="btn2" @click="edit(item)">编辑</div>
            <div class="btn1" v-if="task_status==0" @click="deleteItem(item)">删除</div>
          </div>
          <div class="btn_box" v-else>
            <div class="btn1" >已完成</div>
          </div>
        </el-col>
      </el-row>
      <el-row v-if="!value">
        <custom-table-select :list="tableAllIist"></custom-table-select>
        <custom-table
            :tableAllIist="tableAllIist"
            :tableData="tableData"
            @selectTableList="selectTableList"
        ></custom-table>
      </el-row>
    </el-row>
    <el-row >
      <Pagination :pagination="pagination" @getSizeChange="getSizeChange" @getCurrentChange="getCurrentChange"/>
    </el-row>

    <el-dialog v-if="dialogVisible" :visible.sync="dialogVisible" title="新增" width="1100px" :close-on-press-escape="false" :close-on-click-modal="false">
      <custom-create
          @close="close"
          :searchList="searchList"
          @listCreate="listCreate"
          :form="{}"
      ></custom-create>
    </el-dialog>

    <el-dialog v-if="dialogView" :visible.sync="dialogView" title="查看" width="1100px">
      <custom-view
          @close="close"
          :searchList="searchList"
          @listCreate="listCreate"
          :form="multipleSelectionInfo"
      ></custom-view>
    </el-dialog>

    <el-dialog v-if="editModal" :visible.sync="editModal" title="编辑" width="1100px" :close-on-press-escape="false" :close-on-click-modal="false">
      <custom-edit
          @close="close"
          :searchList="searchList"
          :form="multipleSelectionInfo"
          @listEdit="listEdit"
      ></custom-edit>
    </el-dialog>

    <el-dialog v-if="exportPutModal" title="导入任务" :visible.sync="exportPutModal" width="500px">
      <custom-upload-file-form-put infoType="t_project_task" :up_id="project_id" :up_name="project_name" :url="fileUrl" @close="close" />
    </el-dialog>
  </div>
</template>
<script>
import Api from "@/api/pmTaskBreak";
import customView from '@/components/customView'
import customCreate from '@/components/customCreate'
import customTable from '@/components/customTable'
import customTableSelect from '@/components/customTableSelect'
import customEdit from '@/components/customEdit'
import Pagination from "@/components/pagination";
import Utils from "@/utils/utils";
import customUploadFileFormPut from '@/components/customUploadFileFormPut'

export default {
  name: 'objectIndex',
  components: {
    customView,
    customCreate,
    customEdit,
    customTable,
    customTableSelect,
    Pagination,
    customUploadFileFormPut
  },
  props: ['task_status'],
  data() {
    return {
      checkedCities: [],
      editModal: false,
      dialogView: false,
      serverUrl: `${process.env.VUE_APP_API_URL}`,
      fileUrl: '',
      dialogVisible: false,
      exportPutModal: false,
      value: true,
      activeName: '1',
      searchList: [],
      tableData: [],
      tableAllIist: [],
      multipleSelection: [],
      borrowList: [],
      repairList: [],
      multipleSelectionInfo: {},
      query: {},
      pagination: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      },
      project_id: '',
      project_name: '',
      indexArr: []
    }
  },
  computed: {
    taskList(){
      let list =[]
      if(this.tableData && this.tableData.length>0){
        this.tableData.forEach((v)=>{
          v.speed = (((new Date()).getTime()-(new Date(v.start_time)).getTime())/((new Date(v.end_time)).getTime()-(new Date(v.start_time).getTime()))*100).toFixed(2)
          v.speedColor = v.speed > 35 && v.speed < 70 ? 'bordercolor2' : (v.speed < 35 ? 'bordercolor1' : 'bordercolor3')
          const item = v
          list.push(item)
        })
      }
      return list
    }
  },
  created() {
    this.fileUrl = `${this.serverUrl}/common/import` // 项目导入
    this.project_id = this.$route.query.project_id
    this.project_name = this.$route.query.project_name
    this.indexArr.push(
        {
          "col_type": "string",
          "col_name": "project_id",
          "value": this.project_id,
          "relation": 1,
          "indexType": 1
        }
    )
    this.indexArr.push(
        {
          "col_type": "map",
          "col_name": "task_status",
          "value": this.task_status,
          "relation": 1,
          "indexType": 1
        }
    )
    this.getInfoType()
    this.getTableList()
  },
  methods: {
    getInfoType() {
      // 获取所有字段
      Api.getInfoType().then((res) => {
        if (res.code == "0000") {
          if (res.data.filter.length) {
            //  this.tableAllIist = res.data.filter;
            let list = res.data.filter.filter((item) => {
              return item.display == true;
            });
            this.searchList = list;
          }
        } else {
          this.$message.error(res.msg)
        }
      })
        .catch((res) => {
          this.$message.error('系统繁忙')
        });
    },
    getTableList() {
      let indexArray = Utils.changeIndexArray(this.query.indexArray, this.indexArr)
      this.query.indexArray = indexArray
      let params = Object.assign({}, this.query, this.pagination)
      Api.queryTask(Utils.filterParams(params)).then((res) => {
        if (res.code === '0000') {
          this.tableData = [];
          this.tableAllIist = res.data.columns;
          if (res.data.searchList.length) {
            this.tableData = res.data.searchList;
            this.pagination.total = res.page.page_total;
          } else {
            this.tableData = [];
            this.pagination.total = 0;
          }
        }
      })
    },
    // 分页功能
    getCurrentChange(val) {
      this.pagination.pageNum = val;
      this.getTableList();
    },
    getSizeChange(val) {
      this.pagination.pageSize = val;
      this.getTableList();
    },
    listCreate(event) { // 创建保存
      console.log('listCreate', event)
      event.project_id = this.project_id
      event.project_name = this.project_name
      Api.addTask(event).then((res) => {
        if (res.code == '0000') {
          this.$message.success('操作成功！')
          this.close()
        }
      }).catch(() => {
        this.$message.error('系统繁忙')
      })
    },
    listEdit(event) { // 修改保存
      event.project_id = this.project_id
      event.project_name = this.project_name
      Api.putTask(event).then((res) => {
        if (res.code == '0000') {
          this.$message.success('操作成功！')
          this.close()
        }
      }).catch(() => {
        this.$message.error('系统繁忙')
      })
    },
    close() {
      this.editModal = false
      this.dialogVisible = false
      this.searchModal = false
      this.exportPutModal = false
      this.dialogView = false
      this.getTableList()
      // this.search();
    },
    view(item) {
      this.multipleSelectionInfo = item
      console.log(this.multipleSelectionInfo)
      this.dialogView = true
    },
    edit(item) {
      this.multipleSelectionInfo = item
      this.editModal = true
    },
    next(item) {
      if (this.task_status == 0) {
        //新建
        const params = {
          ids: [item.id]
        }
        Api.nextTask(params).then((res)=>{
          if(res.code == '0000'){
            this.getTableList()
            this.$message.success('操作成功！')
          }
        })
      } else if (this.task_status == 1) {
        const params = {
          ids: [item.id]
        }
        Api.closeTask(params).then((res)=>{
          if(res.code == '0000'){
            this.getTableList()
            this.$message.success('操作成功！')
          }
        })
      }
    },
    deleteItem(value) {
      let that = this;
      this.$confirm('是否确认删除该任务?', "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(function () {
          const params = {
            ids: [value.id]
          }
          Api.delTask(params).then((res)=>{
            if(res.code == '0000'){
              that.getTableList()
              this.$message.success('操作成功！')
            }
          })
        })
        .catch(function () {
        });
    },
    goDelectPage() { // 删除记录页面
      this.$router.push({path: "/pm/progress-projcet-task-delete",
        query: {
          project_id: this.project_id,
          project_name: this.project_name
        }
      });
    },
    importExcel() { // 项目导入
      this.exportPutModal = true
    },
    onTemplateDown() { // 下载导入模版
      window.open(`${this.serverUrl}/common/attachment/download_TemplateFile?infoType=t_project_task`)
    },
    exportList(){ // 项目导出
      this.value = false
      if(!this.multipleSelection || this.multipleSelection.length===0){
        this.$message.warning('请先选择数据')
        return
      }
      window.open(`${this.serverUrl}/common/attachment/export?infoType=t_project_task&ids=${this.multipleSelection.join(',')}`)
    },
    // table选中
    selectTableList(list) {
      let query = []
      list.forEach((item) => {
        query.push(item.id)
      })
      this.multipleSelection = query
      this.multipleSelectionInfo = list.length>0 ? list[0] : {}
      this.form = []
      list.forEach((item) => {
        let query = {
          device_id: item.id,
          device_name: item.name,
          receiver: sessionStorage.getItem("loginName"),
          quantity: '1',
          locate_site: '',
          receiver_tel: '',
        }
        this.form.push(query)
      })
      this.borrowList = []
      list.forEach((item) => {
        let query = {
          device_id: item.id,
          device_name: item.name,
          borrower: sessionStorage.getItem("loginName"),
          quantity: '1',
          locate_site: '',
          borrower_org: '',
          borrower_time: '',
          borrower_tel: '',
          course_name: '',
          return_man: '',
          return_time: '',
        }
        this.borrowList.push(query)
      })
      this.repairList = []
      list.forEach((item) => {
        let query = {
          device_id: item.id,
          device_name: item.name,
          repair_content: '',
        }
        this.repairList.push(query)
      })
    },
  },
}
</script>
<style lang="less" scoped>
.task_box {
  width: 278px;
  height: 170px;
  border: 1px solid #E9E9E9;
  border-radius: 2px;
  box-sizing: border-box;
  margin: 0 20px 36px 0;
  background: #ffffff;
  display: inline-block;
  overflow: hidden;
  //float: left;

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
      cursor: pointer;
    }
  }

  .btn_box {
    width: 100%;
    height: 40px;
    padding-top: 8px;
    border-top: 1px solid #eeeeee;
    background: #FAFAFA;
    cursor: pointer;
    display: flex;
    justify-content: space-around;

    .btn1 {
      //width: 50%;
      text-align: center;

      //&::before {
      //  content: '';
      //  background: #0f2950;
      //  border-left: 1px solid #bbbbbb;
      //  position: relative;
      //  left: 60%;
      //}
    }

    .btn2 {
      //width: 50%;
      text-align: center;
    }
  }
}
.bordercolor1{
  border-top: 8px solid #33a7ff;
}
.bordercolor2{
  border-top: 8px solid #f9b147;
}
.bordercolor3{
  border-top: 8px solid #e03c80;
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

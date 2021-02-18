<template>
  <div>
    <div class="my-el-table content_box">
      <div class="menu-type">
        <span>项目成果</span>
        <div class="top-menu-but">
          <el-button
              type="primary"
              class="btnWidth"
              @click="searchlist">检索</el-button>
          <el-button class="btnSty" @click="addForm">新增</el-button>
          <el-button class="btnSty" @click="edit">编辑</el-button>
          <el-button class="btnSty" @click="delectList">删除</el-button>
          <el-button class="btnSty" @click="importExcel()">导入成果</el-button>
          <el-button class="btnSty" @click="onTemplateDown()">导入模版下载</el-button>
          <el-button class="btnSty" @click="goPage()">上传附件</el-button>
          <el-button class="btnSty" @click="goDelectPage(2)">删除记录</el-button>
        </div>
      </div>

      <el-row >
        <custom-table-select :list="tableAllIist"></custom-table-select>
        <custom-table
            :tableAllIist="tableAllIist"
            :tableData="tableData"
            @selectTableList="selectTableList"
            @getAttachFile="getAttachFile"
            @clickrow="clickrow"
        ></custom-table>
        <Pagination :pagination="pagination" @getSizeChange="getSizeChange" @getCurrentChange="getCurrentChange"/>
      </el-row>
    </div>

    <el-dialog v-if="dialogVisible" :visible.sync="dialogVisible" title="新增" width="1100px">
      <custom-create
          @close="close"
          :searchList="searchList"
          @listCreate="listCreate"
          :form="{}"
      ></custom-create>
    </el-dialog>
    <el-dialog v-if="editModal" :visible.sync="editModal" title="编辑" width="1100px">
      <custom-edit
          @close="close"
          :searchList="searchList"
          :form="multipleSelectionInfo"
          @listEdit="listEdit"
      ></custom-edit>
    </el-dialog>
    <el-dialog v-if="searchModal" :visible.sync="searchModal" title="检索" width="1100px">
      <custom-search :searchList="searchList" @Search="Search"></custom-search>
    </el-dialog>

    <el-dialog v-if="exportPutModal" title="导入成果" :visible.sync="exportPutModal" width="500px">
      <custom-upload-file-form-put infoType="t_project_result" :up_id="project_id" :up_name="project_name" :url="fileUrl" @close="close" />
    </el-dialog>

    <el-dialog v-if="exportPutModal2" title="导入附件" :visible.sync="exportPutModal2" width="500px">
      <custom-upload-file-form-put infoType="t_project_result" :id="multipleSelectionInfo.id" :url="fileUrl2" @close="close" />
    </el-dialog>
  </div>
</template>
<script>
import Api from "@/api/pmTaskBreak";
import Utils from '@/utils/utils'
import Pagination from "@/components/pagination";
import customTableSelect from '@/components/customTableSelect'
import customSearch from '@/components/customSearch'
import customTable from '@/components/customTable'
import customUploadFile from '@/components/customUploadFile'
import customCreate from '@/components/customCreate'
import customEdit from '@/components/customEdit'
import customUploadFileFormPut from '@/components/customUploadFileFormPut'

export default {
  name: "record",
  components: {
    Pagination,
    customTableSelect,
    customSearch,
    customTable,
    customUploadFile,
    customCreate,
    customEdit,
    customUploadFileFormPut
  },
  data() {
    return {
      serverUrl: `${process.env.VUE_APP_API_URL}`,
      fileUrl: '',
      fileUrl2: '',
      dialogVisible: false,
      editModal: false,
      searchModal: false,
      exportPutModal: false,
      exportPutModal2: false,
      value: undefined,
      tableAllIist: [],
      multipleSelectionInfo: {},
      searchList: [],
      query: {
        // orderField: "unit_group", //排序字段
        // orderOrient: "1", //排序顺序 1正序 2倒序
        // indexArray: "1", //检索参数
      },
      //0-txt,1-pdf,2-doc,3-jpg,4-png,5-bmp,6-gif,7-媒体,9-其他
      file_generate_unit_rank: [], // 文件生成单位级别
      tableData: [
      ],
      pagination: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      },
      field_data: [],
      project_id: '',
      project_name: '',
      indexArr: []
    };
  },
  created() {
    this.fileUrl = `${this.serverUrl}/common/import` // excel导入
    this.fileUrl2 = `${this.serverUrl}/common/uploadfile` // excel导入
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
          "col_type": "string",
          "col_name": "project_name",
          "value": this.project_name,
          "relation": 1,
          "indexType": 1
        }
    )
    console.log(this.project_id,this.project_name)
    this.getTableList()
  },
  mounted() {
    this.getInfoType()
  },
  methods: {
    getInfoType(){
      // 获取所有字段
      Api.getInfoTypeOut().then((res) => {
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
    },
    getTableList() {
      console.log(this.query.indexArray,this.indexArr)
      let indexArray = Utils.changeIndexArray(this.query.indexArray,this.indexArr)
      this.query.indexArray = indexArray
      let params = Object.assign({},this.query,this.pagination)
      Api.queryOutcomeslist(Utils.filterParams(params)).then((res)=>{
        if(res.code === '0000'){
          this.tableData = [];
          // this.total = 0;
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
    searchlist(){
      this.searchModal = true;
    },
    addForm() {
      this.dialogVisible = true;
    },
    edit() { // 编辑按钮
      console.log('multipleSelectionInfo', JSON.stringify(this.multipleSelectionInfo),this.multipleSelectionInfo)
      if(JSON.stringify(this.multipleSelectionInfo) == '{}'){
        this.$message.warning('请先选择数据')
        return
      }
      this.editModal = true;
    },
    delectList() { // 删除
      console.log('selectTableList', this.multipleSelection)
      if(!this.multipleSelection || this.multipleSelection.length === 0){
        this.$message.warning('请先选择数据')
        return
      }
      let params = {
        ids: this.multipleSelection
      }
      Api.delOutcomes(params).then((res)=>{
        if (res.code == '0000') {
          this.$message.success('删除成功')
          this.close()
        } else {
          this.$message.error(res.msg)
        }
      }).catch(()=>{
        this.$message.error('系统繁忙')
      })
    },
    listCreate(event) { // 创建保存
      console.log('listCreate', event)
      event.project_id = this.project_id
      event.project_name = this.project_name
      Api.addOutcomes(event).then((res)=>{
        if (res.code == '0000') {
          this.$message.success('操作成功！')
          this.close()
        }
      }).catch(()=>{
        this.$message.error('系统繁忙')
      })
    },
    listEdit(event) { // 修改保存
      event.project_id = this.project_id
      event.project_name = this.project_name
      Api.putOutcomes(event).then((res)=>{
        if (res.code == '0000') {
          this.$message.success('操作成功！')
          this.close()
        }
      }).catch(()=>{
        this.$message.error('系统繁忙')
      })
    },
    Search(event) {
      this.query.indexArray = []
      this.query.indexArray = event
      this.searchModal = false
      this.getTableList()
    },
    goDelectPage() { // 删除记录页面
      // this.$router.push("/pm/progress-projcet-fund-delete");
      this.$router.push({path: "/pm/progress-projcet-results-delete",
        query: {
          project_id: this.project_id,
          project_name: this.project_name
        }
      });
    },
    goPage() {
      console.log(this.multipleSelectionInfo)
      if(!this.multipleSelectionInfo || !this.multipleSelectionInfo.id){
        this.$message.warning('请先选择数据')
        return
      }
      this.exportPutModal2 = true
    },
    onTemplateDown() { // 下载导入模版
      window.open(`${this.serverUrl}/common/attachment/download_TemplateFile?infoType=t_project_result`)
    },
    importExcel() { // excel导入
      this.exportPutModal = true
    },
    close() {
      this.editModal = false
      this.dialogVisible = false
      this.searchModal = false
      this.exportPutModal = false
      this.exportPutModal2 = false
      this.getTableList()
      // this.search();
    },
    getAttachFile(query) { // 下载附件
      window.open(`${process.env.VUE_APP_API_URL}/common/attachment/download_TemplateFile?infoType=t_docs&id=${query.row.id}&file=${query.file}`)
    },
    // table选中
    selectTableList(list) {
      let query = []
      console.log(list,list.length)
      list.length>0 && list.forEach((item) => {
        query.push(item.id)
      })
      this.multipleSelection = query
      this.multipleSelectionInfo = list.length>0 ? list[0] : {}
      this.form = []
      list.length>0 && list.forEach((item) => {
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
      list.length>0 && list.forEach((item) => {
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
      list.length>0 && list.forEach((item) => {
        let query = {
          device_id: item.id,
          device_name: item.name,
          repair_content: '',
        }
        this.repairList.push(query)
      })
    },
    clickrow(row){
      console.log('====',row)
    }
  },
};
</script>
<style lang="less" scoped>
.type-sele {
  width: 120px;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.el-mini-input {
  height: 25px;
  line-height: 25px;
  width: 120px;
  /deep/ .el-input__inner {
    height: 25px;
    line-height: 25px;
    padding: 0 10px;
  }
}
.el-mini-btn {
  padding: 5px 12px;
}
.type-btn {
  height: 22px;
  width: 59px;
  font-size: 14px;
  display: inline-block;
  text-align: center;
  line-height: 22px;
  cursor: pointer;
}
.type-btn-checked {
  background: #1890ff;
  color: #ffffff;
  border-radius: 2px;
}
</style>

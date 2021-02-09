<template>
  <div>
    <div class="my-el-table content_box">
      <div class="menu-type">
        <span>已结项目</span>
        <div class="top-menu-but">
          <el-button
              type="primary"
              class="btnWidth"
              @click="searchlist">检索</el-button>
          <el-button class="btnSty" @click="onTemplateDown()">附件模版下载</el-button>
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

    <el-dialog v-if="searchModal" :visible.sync="searchModal" title="检索" width="1100px">
      <custom-search :searchList="searchList" @Search="Search"></custom-search>
    </el-dialog>

    <el-dialog title="导入附件" :visible.sync="exportPutModal" width="500px">
      <custom-upload-file-form-put infoType="t_docs" :id="multipleSelectionInfo.id" :url="fileUrl" @close="close" />
    </el-dialog>

  </div>
</template>
<script>
import Api from "@/api/pmManager";
import Common from "@/api/common";
import Utils from '@/utils/utils'
import Pagination from "@/components/pagination";
import customTableSelect from '@/components/customTableSelect'
import customSearch from '@/components/customSearch'
import customTable from '@/components/customTable'
import customUploadFileFormPut from '@/components/customUploadFileFormPut'

let id = 1000;

export default {
  name: "record",
  components: {
    Pagination,
    customTableSelect,
    customSearch,
    customTable,
    customUploadFileFormPut
  },
  data() {
    return {
      fileUrl: 'http://24992uu588.qicp.vip:80/common/uploadfile',
      dialogVisible: false,
      editModal: false,
      searchModal: false,
      exportPutModal: false,
      value: undefined,
      tableAllIist: [],
      multipleSelectionInfo: {},
      searchList: [],
      query: {
      },
      tableData: [
      ],
      pagination: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      },
      field_data: [],
      project_status: {
        "col_type": "map",
        "col_name": "project_status",
        "value": "2",
        "relation": 1,
        "indexType": 1
      }
    };
  },
  created() {
    this.getTableList()
  },
  mounted() {
    this.getInfoType()
  },
  methods: {
    getInfoType(){
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
      let indexArray2 = []
      indexArray2.push(this.project_status)
      let indexArray = Utils.changeIndexArray(this.query.indexArray,indexArray2)
      this.query.indexArray = indexArray
      let params = Object.assign({},this.query,this.pagination)
      Api.queryRecord(Utils.filterParams(params)).then((res)=>{
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
    listCreate(event) { // 创建保存
      console.log('listCreate', event)
      Api.addRecord(event).then((res)=>{
        if (res.code == '0000') {
          this.$message.success('操作成功！')
          this.close()
        }
      }).catch(()=>{
        this.$message.error('系统繁忙')
      })
    },
    listEdit(event) { // 修改保存
      Api.putRecord(event).then((res)=>{
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
      this.$router.push("/pm/declare-in-stock-delete");
    },
    goPage() {
      console.log(this.multipleSelectionInfo)
      if(!this.multipleSelectionInfo || !this.multipleSelectionInfo.id){
        this.$message.warning('请先选择数据')
        return
      }
      this.exportPutModal = true
    },
    onTemplateDown() {
      window.open(`http://24992uu588.qicp.vip:80/common/attachment/download_TemplateFile?infoType=t_docs`)
    },
    close() {
      this.editModal = false
      this.dialogVisible = false
      this.searchModal = false
      this.exportPutModal = false
      this.getTableList()
      // this.search();
    },
    getAttachFile(query) { // 下载附件
      window.open(`http://24992uu588.qicp.vip:80/common/attachment/download_TemplateFile?infoType=t_docs&id=${query.row.id}&file=${query.file}`)
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
          receiver: '测试用户',
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
          borrower: '测试用户',
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
      this.$router.push({path: "/pm/progress-projcet-task",query: {id:row.id}});
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

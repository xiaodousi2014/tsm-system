<template>
  <div>
    <div class="content_box my-el-table">
      <div class="menu-type">
        <span style="font-size: 20px; font-weight: 900">入库记录</span>

        <div class="top-menu-but">
          <el-button
            type="primary"
            class="btnWidth"
            @click="searchModal = true"
            >检索</el-button
          >
          <el-button class="btnSty" @click="delectList">撤销操作</el-button>
          <el-button class="btnSty" @click="onTemplateDown()">导入模板下载</el-button>
          <el-button class="btnSty" @click="goPage()">导入文件</el-button>
        </div>
      </div>

      <el-row>
        <custom-table-select :list="tableAllIist"></custom-table-select>
        <custom-table
          :tableAllIist="tableAllIist"
          :tableData="tableData"
          @selectTableList="selectTableList"
          @getAttachFile="getAttachFile"
          @clickrow="clickrow"
        ></custom-table>
        <Pagination
          :pagination="pagination"
          @getSizeChange="getSizeChange"
          @getCurrentChange="getCurrentChange"
        />
      </el-row>
    </div>

    <el-dialog v-if="searchModal" :visible.sync="searchModal" title="检索" width="1100px">
      <custom-search :searchList="searchList" @Search="Search"></custom-search>
    </el-dialog>

    <el-dialog title="导入文件" :visible.sync="exportPutModal" width="500px">
      <custom-upload-file-form-put :infoType="tableName" :id="multipleSelectionInfo.id" :url="fileUrl" @close="close" />
    </el-dialog>
  </div>

</template>
<script>
import Common from "@/api/common";
import Utils from '@/utils/utils'
import Pagination from "@/components/pagination";
import customTable from '@/components/customTable'
import customTableSelect from '@/components/customTableSelect'
import customSearch from '@/components/customSearch'
import customUploadFileFormPut from '@/components/customUploadFileFormPut'

export default {
  name: "rkRecord",
  props: ['tableName','deleted'],
  components: {
    Pagination,
    customTable,
    customTableSelect,
    customSearch,
    customUploadFileFormPut
  },
  data() {
    return {
      serverUrl: `${process.env.VUE_APP_API_URL}`,
      fileUrl: '',
      exportPutModal: false,
      multipleSelectionInfo: {},
      multipleSelection: [],
      tableAllIist: [],
      searchList: [],
      tableData: [],
      query: {},
      pagination: {
        pageNum: 1,
        pageSize: 10,
        total: 0,
      },
      searchModal: false,
      indexArr: []
    };
  },
  created() {
    this.fileUrl = `${this.serverUrl}/common/import` // 项目导入
    this.indexArr.push(
        {
          "col_type": "string",
          "col_name": "data_table",
          "value": this.tableName,
          "relation": 1,
          "indexType": 1
        }
    )
    this.getInfoType()
  },
  mounted() {
    console.log("----");
    this.getTableList()
  },
  methods: {
    getInfoType(){
    },
    goPage() {
      this.exportPutModal = true
    },
    onTemplateDown() {
      window.open(`${this.serverUrl}/common/attachment/download_TemplateFile?infoType=${this.tableName}`)
    },
    getTableList() {
      let indexArray = Utils.changeIndexArray(this.query.indexArray,this.indexArr)
      this.query.indexArray = indexArray
      let params = Object.assign({},this.query,this.pagination)
      Common.queryInStock(Utils.filterParams(params)).then((res)=>{
        if(res.code === '0000'){
          this.tableData = [];
          // this.total = 0;
          this.tableAllIist = res.data.columns;
          if (res.data.searchList.length) {
            let list = res.data.columns.filter((item) => {
              return item.display == true;
            });
            this.searchList = list;
            this.tableData = res.data.searchList;
            this.pagination.total = res.page.page_total;
          } else {
            this.tableData = [];
            this.pagination.total = 0;
          }
        }
      })
    },
    close() {
      this.editModal = false
      this.dialogVisible = false
      this.searchModal = false
      this.exportPutModal = false
      this.getTableList()
      // this.search();
    },
    Search(event) {
      this.query.indexArray = []
      this.query.indexArray = event
      this.searchModal = false
      this.getTableList()
    },
    delectList() { // 撤销删除
      console.log('selectTableList', this.multipleSelection)
      if(!this.multipleSelection || this.multipleSelection.length === 0){
        this.$message.warning('请先选择数据')
        return
      }
      let params = {
        ids: this.multipleSelection
      }
      if(this.deleted){
        params.delType = 'deleted'
      }
      Common.deleteInStock(params).then((res)=>{
        if (res.code == '0000') {
          this.$message.success('操作成功')
          this.close()
        }
      }).catch(()=>{
        this.$message.error('系统异常')
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
    getAttachFile(query) {
      const link = document.createElement('a')
      Common.getAttachFile({
        id: query.row.id,
        infoType: 't_doc',
        file: query.file,
      })
        .then((res) => {
          let blob = new Blob([res], { type: 'application/octet-stream' }) // res就是接口返回的文件流了
          let objectUrl = URL.createObjectURL(blob)
          link.href = objectUrl
          link.download = query.file
          link.click()
          URL.revokeObjectURL(objectUrl)
        })
        .catch((res) => {
          debugger
          this.$message.error('系统繁忙')
        })
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
          receiver: '测试用户',
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
      list.forEach((item) => {
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
</style>

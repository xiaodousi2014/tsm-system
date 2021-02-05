<template>
  <div class="ClassifiedDisplay padding20">
    <!-- 表格 -->
    <!--搜索表单-->
    <div class="table-button">
      <el-button  type="primary" @click="searchModal = true"
        >检索</el-button
      >
      <el-button class="btnSty" @click="onUploadFile()"
        >上传附件</el-button
      >
      <el-button class="btnSty" @click="onTemplateDown()">导入模板下载</el-button>
      <el-button class="btnSty" @click="onUpload()"
        >文件导入</el-button
      >
      <el-button class="btnSty" v-if="failReason">查看错误信息</el-button>
      <el-button class="btnSty" @click="onRevoke()"
        >撤销操作</el-button
      >
    </div>
    <custom-table-select :list="tableAllIist"></custom-table-select>
    <custom-table
      :tableAllIist="tableAllIist"
      :tableData="tableData"
      @selectTableList="selectTableList"
       @getAttachFile='getAttachFile'
    ></custom-table>
    <!-- 分页 -->
    <div class="pagination">
      <Pagination
        ref="Pagination"
        @getSizeChange="getSizeChange"
        @getCurrentChange="getCurrentChange"
        :pagination="query"
        :total="total"
      />
    </div>
    <el-dialog title="导入" :visible.sync="exportModal" width="500px">
      <custom-upload-file :url="fileUrl" @close="close"></custom-upload-file>
    </el-dialog>
     <el-dialog title="检索" :visible.sync="searchModal" width="1100px">
      <custom-search :searchList="searchList" @Search="Search"></custom-search>
    </el-dialog>
     <el-dialog title="导入附件" :visible.sync="exportPutModal" width="500px">
      <custom-upload-file-put :url="fileUrl" @close="close"></custom-upload-file-put>
    </el-dialog>
  </div>
</template>
<script>
import Pagination from "../../../components/customPagination";
import customTableSelect from "../../../components/customTableSelect";
import customSearch from "../../../components/customSearch";
import Http from "@/api/mapManager";
import customTable from "../../../components/customTable";
import customUploadFile from "../../../components/customUploadFile";
import customUploadFilePut from "../../../components/customUploadFilePut";
export default {
  name: "declareWarehousing",
  components: {
    customTableSelect,
    customSearch,
    customTable,
    Pagination,
    customUploadFile,
    customUploadFilePut
  },
  data() {
    return {
      query: {
        orderField: "id",
        orderOrient: "2",
         indexArray: [
          {
            col_type: "string",
            col_name: "data_table",
            indexType: "1",
            value: "t_maps",
          },
        ],
        pageNum: 1,
        pageCount: 10,
      },
      failReason: "",
      total: 0,
      dataId: 0,
      tableData: [],
      tableAllIist: [],
      searchList: [],
      multipleSelection: [],
      exportModal: false,
      searchModal: false,
      exportPutModal: false,
      fileUrl: `${window.upLoadUrl}/maps/import`,
    };
  },
  mounted() {
    this.getAllField();
  },
  methods: {
    onTemplateDown() {
      window.open(`${window.upLoadUrl}/common/attachment/download_TemplateFile?infoType=t_maps`)
    },
     getAttachFile(query) {
       const link = document.createElement("a");
      Http.getAttachFile({id:query.row.id, infoType: "t_import_record" , file: query.file})
      .then((res) => {
        let blob = new Blob([res], { type: "application/octet-stream" }); // res就是接口返回的文件流了
          let objectUrl = URL.createObjectURL(blob);
          link.href = objectUrl;
          link.download = query.file;
          link.click();
          URL.revokeObjectURL(objectUrl);
      })
      .catch((res) => {
        debugger
        this.$message.error(res.msg || "系统异常");
      });
    },
     Search(event) {
      this.query.indexArray = [];
      this.query.indexArray = event;
      this.searchModal = false;
      this.getTableList();
    },
    // 上传附件
    onUploadFile() {
      if (!this.multipleSelection.length) {
        this.$message.warning("请选择要操作的数据列！");
        return;
      }
      if (this.multipleSelection.length > 1) {
        this.$message.warning("只能选择单个数据列操作！");
        return;
      }
      this.fileUrl = `${window.upLoadUrl}/common/import/attachment/upload?import_id=${this.dataId}`;
      this.exportPutModal = true;
    },
    close() {
      this.searchModal = false;
      this.exportModal = false;
      this.getTableList();
      // this.search();
    },
    // table选中
    selectTableList(list) {
      // debugger
       if(list.length) {
         this.dataId = list[0].data_id;
      }
      let query = [];
      list.forEach((item) => {
        query.push(item.id);
      });
      this.multipleSelection = query;
    },
    // 撤销操作
    onRevoke() {
      if (!this.multipleSelection.length) {
        this.$message.warning("请选择要撤销操作的数据列！");
        return;
      }
      Http.onStockRevoke(this.multipleSelection)
        .then((res) => {
          if (res.code == "0000") {
            this.$message.success("撤销成功！");
            this.multipleSelection = [];
            this.getTableList();
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    onUpload() {
      (this.fileUrl = "${window.upLoadUrl}/maps/import"),
        (this.exportModal = true);
    },
    getAllField() {
      Http.getStockTitle()
        .then((res) => {
          if (res.code == "0000") {
            if (res.data.filter.length) {
              let list = res.data.filter.filter((item) => {
                return item.display == true;
              });
              this.searchList = list;
              this.getTableList();
            }
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    getTableList() {
      Http.getStockList(this.query)
        .then((res) => {
          if (res.code == "0000") {
            this.tableData = [];
            this.total = 0;
            this.tableAllIist = res.data.columns;
            if (res.data.searchList.length) {
              this.tableData = res.data.searchList;
              this.total = res.page.page_total;
            }
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    getCurrentChange(val) {
      this.query.pageNum = val;
      this.getTableList();
    },
    getSizeChange(val) {
      this.query.pageCount = val;
      this.getTableList();
    },
    // 编辑
    onEdit() {
      if (!this.multipleSelection.length) {
        this.$message.warning("请选择要编辑的数据列！");
        return;
      }
      if (this.multipleSelection.length > 1) {
        this.$message.warning("只能选择单个数据列编辑！");
        return;
      }
    },
  },
  created() {},
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
  margin-top: 20px;
}
.showIcon i {
  cursor: pointer;
}
</style>

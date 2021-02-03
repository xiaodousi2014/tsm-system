<template>
  <div class="ClassifiedDisplay padding20">
    <!-- 表格 -->
    <!--搜索表单-->
    <div>
      <el-button class="btnSty" @click="searchModal = true"
        >检索</el-button
      >
      <el-button class="btnSty" @click="onAgree()"
        >同意</el-button
      >
      <el-button class="btnSty" @click="onReturn()"
        >驳回</el-button
      >
      <el-button class="btnSty" @click="onBack()"
        >归还</el-button
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
    <el-dialog title="检索" :visible.sync="searchModal" width="1100px">
      <custom-search :searchList="searchList" @Search="Search"></custom-search>
    </el-dialog>
  </div>
</template>
<script>
import Pagination from "../../../components/customPagination";
import customTableSelect from "../../../components/customTableSelect";
import customSearch from "../../../components/customSearch";
import Http from "@/api/deviceManage";
import customTable from "../../../components/customTable";
export default {
  name: "declareWarehousing",
  components: { customTableSelect, customSearch, customTable, Pagination },
  data() {
    return {
      query: {
        orderField: "id",
        orderOrient: "2",
        indexArray: [
          {
            col_type: "int",
            col_name: "lent_status",
            indexType: "1",
            value: "1",
            relation: '2'
          },
           {
            col_type: "int",
            col_name: "lent_status",
            indexType: "1",
            value: "2",
             relation: '2'
          }
        ],
        pageNum: 1,
        pageCount: 10,
      },
      total: 0,
      tableData: [],
      tableAllIist: [],
      searchList: [],
      multipleSelection: [],
      searchModal: false,
    };
  },
  mounted() {
    this.getAllField();
  },
  methods: {
    onExport() {
         if (!this.multipleSelection.length) {
        this.$message.warning("请选择要导出的数据列！");
        return;
      }
      if (this.multipleSelection.length > 1) {
        this.$message.warning("只能选择单个数据列导出！");
        return;
      }
      let query = [];
      this.multipleSelection.forEach((item) => {
        query.push(item.id);
      });
      window.open(`http://139.198.188.175:8190/common/attachment/export?ids=${query.toString()}&&infoType=t_device`)

    },
     getAttachFile(query) {
       const link = document.createElement("a");
      Http.getAttachFile({id:query.row.id, infoType: "t_device_lent" , file: query.file})
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
      this.getTableList();
      this.searchModal = false;
    },
    //同意
    onAgree() {
      if (!this.multipleSelection.length) {
        this.$message.warning("请选择要同意的数据列！");
        return;
      }
      if (this.multipleSelection.length > 1) {
        this.$message.warning("只能选择单个数据列编辑！");
        return;
      }
      Http.getBorrowAgree({ id: this.multipleSelection[0].id, status: 2 })
        .then((res) => {
          if (res.code == "0000") {
            this.$message.success("操作成功！");
            this.getTableList();
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    //归还
    onBack() {
      if (!this.multipleSelection.length) {
        this.$message.warning("请选择要归还的数据列！");
        return;
      }
      if (this.multipleSelection.length > 1) {
        this.$message.warning("只能选择单个数据列归还！");
        return;
      }
      Http.getBorrowAgree({ id: this.multipleSelection[0].id, status: 4 })
        .then((res) => {
          if (res.code == "0000") {
            this.$message.success("操作成功！");
            this.getTableList();
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    //驳回
    onReturn() {
      if (!this.multipleSelection.length) {
        this.$message.warning("请选择要驳回的数据列！");
        return;
      }
      if (this.multipleSelection.length > 1) {
        this.$message.warning("只能选择单个数据列编辑！");
        return;
      }
      Http.getBorrowAgree({ id: this.multipleSelection[0].id, status: 3 })
        .then((res) => {
          if (res.code == "0000") {
            this.$message.success("操作成功！");
            this.getTableList();
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    getAllField() {
      Http.getBorrowTitle()
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
      Http.getBorrowList(this.query)
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
    // 上传附件
    onUploadAttachment() {
      if (!this.multipleSelection.length) {
        this.$message.warning("请选择要上传附件的数据列！");
        return;
      }
      if (this.multipleSelection.length > 1) {
        this.$message.warning("只能选择单个数据列上传附件！");
        return;
      }
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
    // 删除
    onDelete() {
      if (!this.multipleSelection.length) {
        this.$message.warning("请选择要删除的数据列！");
        return;
      }
      this.$confirm("此操作将永久删除该记录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message.success("删除成功");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // table选中
    selectTableList(list) {
      this.multipleSelection = list;
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

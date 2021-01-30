<template>
  <div class="ClassifiedDisplay padding20">
    <!-- 表格 -->
    <!--搜索表单-->
    <div>
      <el-button icon="el-icon-edit" size="small" @click="searchModal = true"
        >检索</el-button
      >
      <el-button icon="el-icon-search" size="small" @click="onAgree()"
        >同意</el-button
      >
      <el-button icon="el-icon-search" size="small" @click="onReturn()"
        >驳回</el-button
      >
    </div>
    <custom-table-select :list="tableAllIist"></custom-table-select>
    <custom-table
      :tableAllIist="tableAllIist"
      :tableData="tableData"
      @selectTableList="selectTableList"
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
import Http from "@/api/textbookManager";
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
            col_type: "init",
            col_name: "use_status",
            indexType: "1",
            value: "1",
          },
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
     Search(event) {
      this.query.indexArray = [];
      this.query.indexArray = event;
      this.getTableList();
      this.searchModal = false;
    },
    getAllField() {
      Http.getReciveTitle()
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
      Http.getReciveList(this.query)
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

    // 提交
    onSumit() {
      if (!this.multipleSelection.length) {
        this.$message.warning("请选择要提交的数据列！");
        return;
      }
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
      Http.getReciveAgree({ id: this.multipleSelection[0].id, status: 2 })
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
      Http.getReciveAgree({ id: this.multipleSelection[0].id, status: 3 })
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

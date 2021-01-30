<template>
  <div class="ClassifiedDisplay padding20">
    <!-- 表格 -->
    <!--搜索表单-->
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
    <div style="margin: 30px 0 20px 0; text-align: center">
      <el-button size="small" @click="cancal()">取消</el-button>
      <el-button
        size="small"
        @click="onRevoke()"
        :disabled="!multipleSelection.length"
        >撤销删除</el-button
      >
    </div>
  </div>
</template>
<script>
import Pagination from "../../../components/customPagination";
import customTableSelect from "../../../components/customTableSelect";
import customSearch from "../../../components/customSearch";
import Http from "@/api/informationManage";
import customTable from "../../../components/customTable";
export default {
  name: "declareWarehousing",
  components: { customTableSelect, customSearch, customTable, Pagination },
  data() {
    return {
      query: {
        orderField: "id",
        orderOrient: "2",
        indexArray: [],
        pageNum: 1,
        pageCount: 10,
      },
      total: 0,
      tableData: [],
      tableAllIist: [],
      searchList: [],
      multipleSelection: [],
    };
  },
  mounted() {
    this.getAllField();
  },
  methods: {
    cancal() {
      this.$router.push("stock-manage");
    },
    getAllField() {
      Http.getThreeDeleteStorageTitle()
        .then((res) => {
          if (res.code == "0000") {
            if (res.data.filter.length) {
              this.getTableList();
            }
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    getTableList() {
      Http.getThreeDeleteStorageList(this.query)
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

    // 撤销操作
    onRevoke() {
      Http.putThreeStorageList(this.multipleSelection)
        .then((res) => {
          if (res.code == "0000") {
            this.$message.success("撤销成功！");
            this.getTableList();
            this.multipleSelection = [];
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
      //  this.$router.push('storage-equipment');
    },
    // table选中
    selectTableList(list) {
      let query = [];
      list.forEach((item) => {
        query.push(item.id);
      });
      this.multipleSelection = query;
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

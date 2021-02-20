<template>
  <div class="ClassifiedDisplay padding20">
    <!-- 表格 -->
    <!--搜索表单-->
    <div class="table-button">
      <el-button type="primary"  @click="searchModal = true"
        >检索</el-button
      >
      <el-button class="btnSty" @click="onExport()"
        >导出</el-button
      >
    <el-button class="btnSty" @click="onPreferences()">偏好设置</el-button>
    </div>

       <el-dialog title="偏好设置" v-if="preferencesModal" :visible.sync="preferencesModal" width="800px" :close-on-press-escape="false" :close-on-click-modal="false">
            <commonon-preferences @close="close" :infoType="infoType"></commonon-preferences>
        </el-dialog>
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
import Http from "@/api/trainingdeviceManage";
import customTable from "../../../components/customTable";
import commononPreferences from '@/components/commononPreferences'
export default {
  name: "declareWarehousing",
  components: { customTableSelect, customSearch, customTable, Pagination,commononPreferences },
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
      searchModal: false,
     preferencesModal:false,
      infoType: 't_trainingdevice_lent',
    };
  },
  mounted() {
    this.getAllField();
  },
  methods: {
     close() {
      this.preferencesModal = false;
      this.getBorrowList();
      // this.search();
    },
     onExport() {
         if (!this.multipleSelection.length) {
        this.$message.warning("请选择要导出的数据列！");
        return;
      }
      let query = [];
      this.multipleSelection.forEach((item) => {
        query.push(item.id);
      });
      window.open(`${process.env.VUE_APP_API_URL}/common/attachment/export?ids=${query.toString()}&&infoType=t_training_device_lent`)

    },
     getAttachFile(query) {
       const link = document.createElement("a");
      Http.getAttachFile({id:query.row.id, infoType: "t_trainingdevice_lent" , file: query.file})
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
      this.getBorrowList();
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
              //  this.tableAllIist = res.data.filter;
              this.getBorrowList();
            }
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    getBorrowList() {
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
      this.getBorrowList();
    },
    getSizeChange(val) {
      this.query.pageCount = val;
      this.getBorrowList();
    },

    // 提交
    onSumit() {
      if (!this.multipleSelection.length) {
        this.$message.warning("请选择要提交的数据列！");
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

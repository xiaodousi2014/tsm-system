<template>
  <div class="ClassifiedDisplay padding20">
    <!-- 表格 -->
    <!--搜索表单-->
    <!-- <custom-table-select :list="tableAllIist"></custom-table-select> -->
    <div class="table-button">
      <el-button type="primary" @click="searchModal = true">检索</el-button>
       <el-button class="btnSty"  @click="onRevoke()"
        :disabled="!multipleSelection.length"
        >撤销操作</el-button
      >
        <el-button class="btnSty" @click="cancal()"
        >返回</el-button
      >
      <el-button class="btnSty" @click="preferencesModal = true"
        >偏好设置</el-button
      >
      
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
      <el-dialog title="检索" :visible.sync="searchModal" width="1100px">
      <custom-search :searchList="searchList2" @Search="Search"></custom-search>
    </el-dialog>
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
  </div>
</template>
<script>
import Pagination from "../../../components/customPagination";
import customTableSelect from "../../../components/customTableSelect";
import customSearch from "../../../components/customSearch";
import Http from "@/api/trainingdeviceManage";
import customTable from "../../../components/customTable";
import commononPreferences from "@/components/commononPreferences";
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
      searchList2: [],
      searchModal: false,

      multipleSelection: [],
       preferencesModal: false,
      infoType: "t_training_device_dirty",
    };
  },
  mounted() {
    this.getAllField();
  },
  methods: {
    close() {
      this.preferencesModal = false;
    },
     Search(event) {
      this.query.indexArray = [];
      this.query.indexArray = event;
      this.searchModal = false;
      this.getTableList();
    },
     getAttachFile(query) {
       const link = document.createElement("a");
      Http.getAttachFile({id:query.row.id, infoType: "t_trainingdevice_dirty" , file: query.file})
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
    cancal() {
      this.$router.push("/trainingdevice/inventory");
    },
    getAllField() {
      Http.getDeleteStorageTitle()
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
      Http.getDeleteStorageList(this.query)
        .then((res) => {
          if (res.code == "0000") {
            this.tableData = [];
            this.total = 0;
            this.tableAllIist = res.data.columns;
             if (res.data.columns.length) {
              let list = res.data.columns.filter((item) => {
                return item.display == true;
              });
              let list2 = res.data.columns.filter((item) => {
                return item.display == true && item.queryable == true;
              });
              this.searchList = list2
              this.searchList2 = list;
            }
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
      Http.putStorageList(this.multipleSelection)
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

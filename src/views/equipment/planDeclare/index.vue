<template>
  <div class="ClassifiedDisplay padding20">
    <!-- 表格 -->
    <!--搜索表单-->
    <div class="table-button">
      <el-button  type="primary"  @click="searchModal = true"
        >检索</el-button
      >
      <el-button class="btnSty" @click="onUploadFile()"
        >导入文件</el-button
      >
      <!-- <el-button size="small" v-if="failReason">查看错误信息</el-button> -->
      <el-button class="btnSty" @click="onRevoke()"
        >撤销操作</el-button
      >
      <el-button class="btnSty" @click="preferencesModal = true"
        >偏好设置</el-button
      >
    </div>
    <el-dialog
      title="偏好设置"
      v-if="preferencesModal"
      :visible.sync="preferencesModal"
      width="800px"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
    >
      <commonon-preferences
        @close="close"
        :infoType="infoType"
      ></commonon-preferences>
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
    <el-dialog title="导入" :visible.sync="exportModal" width="500px">
      <custom-upload-file :url="fileUrl" @close="close"></custom-upload-file>
    </el-dialog>
      <el-dialog title="检索" :visible.sync="searchModal" width="1100px">
      <custom-search :searchList="searchList" @Search="Search"></custom-search>
    </el-dialog>
  </div>
</template>
<script>
import Pagination from "../../../components/customPagination";
import customTableSelect from "../../../components/customTableSelect";
import customSearch from "../../../components/customSearch";
import Http from "@/api/equipmentManage";
import customTable from "../../../components/customTable";
import customUploadFile from "../../../components/customUploadFile";
import commononPreferences from '@/components/commononPreferences'
export default {
  name: "declareWarehousing",
  components: {
    customTableSelect,
    customSearch,
    customTable,
    Pagination,
    customUploadFile,
    commononPreferences
  },
  data() {
    return {
      query: {
        orderField: "id",
        orderOrient: "2",
        indexArray: [],
        pageNum: 1,
        pageCount: 10,
      },
      failReason: "",
      total: 0,
      tableData: [],
      tableAllIist: [],
      searchList: [],
      multipleSelection: [],
      exportModal: false,
      fileUrl: `${process.env.VUE_APP_API_URL}/equipment/plan/import`,
      searchModal: false,
       preferencesModal: false,
      infoType: 't_equipment_plan',
    };
  },
  mounted() {
    this.getAllField();
  },
  methods: {
     getAttachFile(query) {
       const link = document.createElement("a");
      Http.getAttachFile({id:query.row.id, infoType: "t_equipment_plan" , file: query.file})
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
      this.getPlanList();
    },
    // table选中
    selectTableList(list) {
      // debugger
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
      Http.onPlanRevoke(this.multipleSelection)
        .then((res) => {
          if (res.code == "0000") {
            this.$message.success("撤销成功！");
            this.multipleSelection = [];
            this.getPlanList();
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    onUploadFile() {
      this.exportModal = true;
    },
    close() {
      this.preferencesModal = false;
      this.exportModal = false;
      this.getPlanList();
      // this.search();
    },
    getAllField() {
      Http.getPlanTitle()
        .then((res) => {
          if (res.code == "0000") {
            if (res.data.filter.length) {
              //  this.tableAllIist = res.data.filter;
              let list = res.data.filter.filter((item) => {
                return item.display == true;
              });
              this.searchList = list;
              this.getPlanList();
            }
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    getPlanList() {
      
      Http.getPlanList(this.query)
        .then((res) => {
          if (res.code == "0000") {
            this.tableData = [];
            this.total = 0;
            this.tableAllIist = res.data.columns;
            if (res.data.searchList.length) {
              this.tableData = res.data.searchList;
              this.total = res.page.page_total;
            } else {
              this.tableData = [];
              this.total = 0;
            }
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    getCurrentChange(val) {
      this.query.pageNum = val;
      this.getPlanList();
    },
    getSizeChange(val) {
      this.query.pageCount = val;
      this.getPlanList();
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

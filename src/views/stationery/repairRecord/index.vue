<template>
  <div class="ClassifiedDisplay padding20">
    <!-- 表格 -->
    <!--搜索表单-->
    <div class="table-button">
      <el-button  type="primary" @click="searchModal = true">检索</el-button>
<el-button  class="btnSty" @click="onExport()">导出</el-button>

    </div>
    <custom-search :searchList="searchList"></custom-search>
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
  </div>
</template>
<script>
import Pagination from "../../../components/customPagination";
import customTableSelect from "../../../components/customTableSelect";
import customSearch from "../../../components/customSearch";
import Http from '@/api/consumablesManager'
import customTable from '../../../components/customTable'
export default {
  name: 'declareWarehousing',
  components: { customTableSelect, customSearch, customTable, Pagination },
  data() {
    return {
      query: {
        orderField: 'id',
        orderOrient: '2',
        indexArray: [],
        pageNum: 1,
        pageCount: 10,
      },
      total: 0,
      tableData: [],
      tableAllIist: [],
      searchList: [],
      multipleSelection: [],
    }
  },
  mounted() {
    this.getAllField()
  },
  methods: {
    getAttachFile(query) {
       const link = document.createElement("a");
      Http.getAttachFile({id:query.row.id, infoType: "t_stationery_repair" , file: query.file})
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
     // 导出
    onExport() {
         if (!this.multipleSelection.length) {
        this.$message.warning("请选择要导出的数据列！");
        return;
      }
       let query = [];
      this.multipleSelection.forEach((item) => {
        query.push(item.id);
      });
      window.open(`${window.upLoadUrl}/common/attachment/export?ids=${query.toString()}&&infoType=t_stationery_repair`)
    },
    getAllField() {
      Http.getRepairTitle()
        .then((res) => {
          if(res.code == '0000') {
           if(res.data.filter.length) {
             this.getTableList();
          }
          }
        })
        .catch((res) => {this.$message.error(res.msg || '系统异常')})
    },
    getTableList() {
       Http.getRepairList(this.query)
        .then((res) => {
          if(res.code == '0000') {
             this.tableData = [];
            this.total = 0;
            this.tableAllIist = res.data.columns;
           if(res.data.searchList.length) {
             this.tableData = res.data.searchList;
             this.total = res.page.page_total;
          }
          }
        })
        .catch((res) => {this.$message.error(res.msg || '系统异常')})
    },
    getCurrentChange(val) {
      this.query.pageNum = val
      this.getTableList()
    },
    getSizeChange(val) {
      this.query.pageCount = val
      this.getTableList()
    },
   

    // 撤销操作
    onRevoke() {
      if (!this.multipleSelection.length) {
        this.$message.warning('请选择要撤销操作的数据列！')
        return
      }
    },
    // 提交
    onSumit() {
      if (!this.multipleSelection.length) {
        this.$message.warning('请选择要提交的数据列！')
        return
      }
    },
    // 编辑
    onEdit() {
      if (!this.multipleSelection.length) {
        this.$message.warning('请选择要编辑的数据列！')
        return
      }
      if (this.multipleSelection.length > 1) {
        this.$message.warning('只能选择单个数据列编辑！')
        return
      }
    },
    // 删除
    onDelete() {
      if (!this.multipleSelection.length) {
        this.$message.warning('请选择要删除的数据列！')
        return
      }
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.$message.success('删除成功')
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
   
    // table选中
    selectTableList(list) {
      this.multipleSelection = list
    },
  },
  created() {
  },
}
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

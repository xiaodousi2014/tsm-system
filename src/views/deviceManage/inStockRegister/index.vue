<template>
  <div class="ClassifiedDisplay padding20">
    <!-- 表格 -->
    <!--搜索表单-->
    <div>
      <el-button  icon="el-icon-edit" size="small">检索</el-button>
<el-button  icon="el-icon-search" size="small" @click="onUploadFile()">导入文件</el-button>
  <el-button size="small">导入模板下载</el-button>
  <el-button size="small" v-if="failReason">查看错误信息</el-button>
<el-button  icon="el-icon-search" size="small" @click="onRevoke()">撤销操作</el-button>

    </div>
    <custom-search :searchList = searchList></custom-search>
    <custom-table-select
      :list="tableAllIist"
    ></custom-table-select>
    <custom-table :tableAllIist = tableAllIist :tableData = tableData @selectTableList= selectTableList></custom-table>
    <!-- 分页 -->
    <div class="pagination" >
       <Pagination
        ref="Pagination"
        @getSizeChange="getSizeChange"
        @getCurrentChange="getCurrentChange"
        :pagination="query"
        :total='total'
      />
    </div>
     <el-dialog title="导入" :visible.sync="exportModal" width="500px">
        <custom-upload-file :url= fileUrl @close= close></custom-upload-file>
     </el-dialog>
  </div>
</template>
<script>
import Pagination from "../../../components/customPagination";
import customTableSelect from "../../../components/customTableSelect";
import customSearch from "../../../components/customSearch";
import Http from '@/api/deviceManage/inStockRegister'
import customTable from '../../../components/customTable'
import customUploadFile from '../../../components/customUploadFile'
export default {
  name: "declareWarehousing",
  components: { customTableSelect, customSearch, customTable, Pagination, customUploadFile},
  data() {
    return {
      query: {
        orderField: 'id',
        orderOrient: '2',
        indexArray: [],
        pageNum: 1,
        pageCount: 10,
      },
      failReason: '',
      total: 0,
     tableData: [],
      tableAllIist: [],
      searchList: [],
      multipleSelection: [],
      exportModal: false,
      fileUrl: 'http://10.8.145.43:8190/device/import',
    };
  },
  mounted() {
    this.getAllField()
  },
  methods: {
     // table选中
    selectTableList(list) {
      // debugger
      let query = [];
      list.forEach(item => {
        query.push(item.id)
      })
     this.multipleSelection = query;
    },
    // 撤销操作
    onRevoke() {
     if(!this.multipleSelection.length) {
       this.$message.warning('请选择要撤销操作的数据列！');
       return
     }
      Http.onRevoke(this.multipleSelection)
        .then((res) => {
          if(res.code == '0000') {
             this.$message.success('撤销成功！');
             this.multipleSelection = [];
             this.getTableList();
          }
        })
        .catch(() => {})
    },
    onUploadFile() {
       this.exportModal = true;
    },
     close() {
      this.exportModal = false;
      this.getTableList();
      // this.search(); 
    },
    getAllField() {
      Http.getTableTitle()
        .then((res) => {
          if(res.code == '0000') {
           if(res.data.filter.length) {
             res.data.filter.forEach(item => {
               item.checked = true;
             });
             this.tableAllIist = res.data.filter;
             this.getTableList();
          }
          }
        })
        .catch(() => {})
    },
    getTableList() {
       Http.getTableList(this.query)
        .then((res) => {
          if(res.code == '0000') {
           if(res.data.searchList.length) {
             this.tableData = res.data.searchList;
             this.total = res.page.page_total;
          }
          }
        })
        .catch(() => {})
    },
      getCurrentChange(val) {
      this.query.pageNum = val;
      this.getTableList();
    },
    getSizeChange(val) {
      this.query.pageCount = val;
      this.getTableList();
    },
    // 维修结算
    onRepairSettlement(){
      
    },
    // 请领
    onQingLing() {

    },
      // 借用
    onBorrow() {

    },
      // 报修
    onReport() {

    },
      // 报废
    onScrap() {

    },
      // 盘点
    onInventory() {

    },
      // 归还
    onReturn() {

    },

    // 文件汇总
    onDocumentSummary(){

    },
    // 处理意见
    onHandlingOpinions() {

    },
    // 同意
    onAgree() {

    },
    // 驳回
    onReject() {

    },
    //导出
    onExport() {

    },
    // 上传附件
    onUploadAttachment() {
       if(!this.multipleSelection.length) {
       this.$message.warning('请选择要上传附件的数据列！');
       return
     }
     if(this.multipleSelection.length > 1) {
       this.$message.warning('只能选择单个数据列上传附件！');
       return
     }
    },
    
    // 提交
    onSumit() {
     if(!this.multipleSelection.length) {
       this.$message.warning('请选择要提交的数据列！');
       return
     }
    },
    // 编辑
    onEdit() {
      if(!this.multipleSelection.length) {
       this.$message.warning('请选择要编辑的数据列！');
       return
     }
     if(this.multipleSelection.length > 1) {
       this.$message.warning('只能选择单个数据列编辑！');
       return
     }
    },
    // 删除
    onDelete() {
     if(!this.multipleSelection.length) {
       this.$message.warning('请选择要删除的数据列！');
       return
     }
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        this.$message.success('删除成功')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    handleSizeChange() {

    },
    handleCurrentChange() {

    },
  },
  created() {
  },
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
  margin-top:20px;
}
.showIcon i {
  cursor: pointer;
}
</style>

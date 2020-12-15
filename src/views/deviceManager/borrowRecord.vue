<template>
  <div class="ClassifiedDisplay padding20">
    <!-- 表格 -->
    <!--搜索表单-->
    <div>
      <el-button type="primary" icon="el-icon-edit" size="small">检索</el-button>
<el-button type="primary" icon="el-icon-search" size="small" @click="onReturn()">归还</el-button>
<el-button type="primary" icon="el-icon-search" size="small" @click="onExport()">导出</el-button>

    </div>
    <custom-search :searchList = searchList></custom-search>
    <custom-table-select
      :list="tableAllIist"
    ></custom-table-select>
    <custom-table :tableAllIist = tableAllIist :tableData = tableData3 @selectTableList= selectTableList></custom-table>
    <!-- 分页 -->
    <div class="pagination" >
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="query.pageNo"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="query.limit"
        layout="total,prev, pager, next,sizes"
        :total="total"
        border
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import customTableSelect from "../../components/customTableSelect";
import customSearch from "../../components/customSearch";
import Http from "../../api/api";
import customTable from '../../components/customTable'
export default {
  name: "declareWarehousing",
  components: { customTableSelect, customSearch, customTable},
  data() {
    return {
      query: {
         limit: 1,
         pageNo: 10
      },
      total: 0,
      tableData3: [
        {
          id: "1",
          number: "112",
          a: "这是个数据",
          b: "这是个数据",
          c: "这是个数据",
          d: "这是个数据",
          e: "这是个数据",
          f: "这是个数据",
          g: "这是个数据",
          h: "这是个数据",
          j: "这是个数据",
          k: "这是个数据",
          l: "这是个数据",
        },
        {
          id: "2",
          number: "113",
          a: "这是个数据1",
          b: "这是个数据2",
          c: "这是个数据3",
          d: "这是个数据4",
          e: "这是个数据5",
          f: "这是个数据6",
          g: "这是个数据7",
          h: "这是个数据8",
          j: "这是个数据9",
          k: "这是个数据10",
          l: "这是个数据",
        },
      ],
      tableAllIist: [],
      searchList: [
        {
          name: "姓名",
          type: "text",
          code: "name",
          value: "",
        },
        {
          name: "性别",
          type: "text",
          code: "sex",
          value: "",
        },
        {
          name: "年龄",
          type: "number",
          code: "age",
          value: "",
        },
        {
          name: "出生日期",
          type: "date",
          code: "year",
          value: "",
        },
        {
          name: "爱好",
          type: "text",
          code: "like",
          value: "",
        },
        {
          name: "专业",
          type: "text",
          code: "object",
          value: "",
        },
        {
          name: "描述",
          type: "text",
          code: "remark",
          value: "",
        },
      ],
      multipleSelection: [],
    };
  },
  methods: {
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
    // 撤销操作
    onRevoke() {
     if(!this.multipleSelection.length) {
       this.$message.warning('请选择要撤销操作的数据列！');
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
    // table选中
    selectTableList(list) {
     this.multipleSelection = list;
    },
    getAllTableList() {
      this.tableAllIist = [
        {
          code: "a",
          name: "北京",
          checked: true,
        },
        {
          code: "b",
          name: "上海上海上海上海上海上海上海上海",
          checked: true,
        },
        {
          code: "c",
          name: "成都",
          checked: true,
        },
        {
          code: "d",
          name: "四川",
          checked: true,
        },
        {
          code: "e",
          name: "俄罗斯",
          checked: false,
        },
        {
          code: "f",
          name: "福建",
          checked: true,
        },
        {
          code: "g",
          name: "广州",
          checked: true,
        },
        {
          code: "h",
          name: "杭州",
          checked: false,
        },
        {
          code: "j",
          name: "济南",
          checked: true,
        },
        {
          code: "k",
          name: "河南",
          checked: true,
        },
      ];
    },
  },
  created() {
    this.getAllTableList();
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

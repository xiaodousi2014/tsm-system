<template>
  <div class="ClassifiedDisplay padding20">
    <!-- 表格 -->
    <!--搜索表单-->
    <div>
      <el-button  icon="el-icon-edit" size="small">检索</el-button>
<el-button  icon="el-icon-search" size="small" @click="onReturn()">归还</el-button>
<el-button  icon="el-icon-search" size="small" @click="onExport()">导出</el-button>

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
  </div>
</template>
<script>
import Pagination from "../../../components/customPagination";
import customTableSelect from "../../../components/customTableSelect";
import customSearch from "../../../components/customSearch";
import Http from '@/api/deviceManage'
import customTable from '../../../components/customTable'
export default {
  name: "declareWarehousing",
  components: { customTableSelect, customSearch, customTable, Pagination},
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
      searchList: [
       
      
      ],
      multipleSelection: [],
    };
  },
  mounted() {
    this.getAllField()
  },
  methods: {
    getAllField() {
      Http.getRepairTitle()
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
       Http.getRepairList(this.query)
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
    // table选中
    selectTableList(list) {
     this.multipleSelection = list;
    }
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

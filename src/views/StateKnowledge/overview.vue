<template>
  <div>
    <div class="my-el-table content_box">
      <div class="menu-type">
        <div>
          <span>法规分类：&nbsp;&nbsp;</span>
          <div
            :class="['type-btn', value == item && 'type-btn-checked']"
            v-for="item in file_generate_unit_rank"
            :key="item"
            @click="clickType(item)"
          >
            {{ item }}
          </div>
          <div class="type-btn type-btn-checked">学校</div>
        </div>
        <div class="top-menu-but">
          <el-button
            type="primary"
            class="btnWidth"
            @click="searchlist"
            >检索</el-button
          >
          <el-button class="btnSty" @click="addForm">新增</el-button>
          <el-button class="btnSty" @click="edit">编辑</el-button>
          <el-button class="btnSty" @click="delectList">删除</el-button>
          <el-button class="btnSty" @click="goPage(1)">文件导入</el-button>
          <el-button class="btnSty" @click="goDelectPage(2)">删除记录</el-button>
        </div>
      </div>
      <!-- <el-table
        :data="tableData"
        id="el-table"
        @selection-change="handleSelectionChange"
        style="width: 100%"
      >
        <el-table-column type="selection" width="55"> </el-table-column> -->
        <!-- 动态循环的列表 -->
        <!-- <template v-for="(item, index) in tableLabel">
          <el-table-column :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          </el-table-column>
        </template> -->
        <!-- 固定的列：从业人员 -->
        <!-- <el-table-column label="操作" width="200px">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="edit(scope.row)"
              >编辑</el-button
            >
            <el-button type="text" size="small" @click="rowDelete(scope.row)"
              >删除</el-button
            >
            <el-button type="text" size="small">上传附件</el-button>
          </template>
        </el-table-column>
      </el-table> -->
      <el-row >
        <custom-table-select :list="tableAllIist"></custom-table-select>
        <custom-table
          :tableAllIist="tableAllIist"
          :tableData="tableData"
          @selectTableList="selectTableList"
          @getAttachFile="getAttachFile"
        ></custom-table>
        <Pagination :pagination="pagination" />
      </el-row>
      
    </div>

    <!-- <div class="marginTo25">
      <TreeComp />
    </div> -->

    <el-dialog v-if="dialogVisible" :visible.sync="dialogVisible" title="新增" width="1100px">
      <custom-create
        @close="close"
        :searchList="searchList"
        @listCreate="listCreate"
        :form="{}"
      ></custom-create>
    </el-dialog>
    <el-dialog title="编辑" :visible.sync="editModal" width="1100px">
      <custom-edit
        @close="close"
        :searchList="searchList"
        :form="multipleSelectionInfo"
        @listEdit="listEdit"
      ></custom-edit>
    </el-dialog>
    <el-dialog title="检索" :visible.sync="searchModal" width="1100px">
      <custom-search :searchList="searchList" @Search="Search"></custom-search>
    </el-dialog>
    
  </div>
</template>
<script>
import Api from "@/api/stateKnowledge";
import Common from "@/api/common";
import Utils from '@/utils/utils'
import Pagination from "../../components/pagination";
import customTableSelect from '@/components/customTableSelect'
import customSearch from '@/components/customSearch'
import customTable from '@/components/customTable'
import customUploadFile from '@/components/customUploadFile'
import customCreate from '@/components/customCreate'
import customEdit from '@/components/customEdit'

let id = 1000;

export default {
  name: "overview",
  components: {
    Pagination, 
    customTableSelect,
    customSearch,
    customTable,
    customUploadFile,
    customCreate,
    customEdit,
  },
  data() {
    return {
      dialogVisible: false,
      editModal: false,
      searchModal: false,
      value: "1",
      tableAllIist: [],
      multipleSelectionInfo: {},
      searchList: [],
      params: {
        orderField: "unit_group", //排序字段
        orderOrient: "1", //排序顺序 1正序 2倒序
        // indexArray: "1", //检索参数
        pageNum: 1, //页码
        pageCount: 10, //每页数量
      },
      ruleForm: {
        name: "哈哈哈",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
      content_type: [], // 内容分类
      //0-txt,1-pdf,2-doc,3-jpg,4-png,5-bmp,6-gif,7-媒体,9-其他
      file_format: [
        {label:'txt',value:0},
        {label:'pdf',value:1},
        {label:'doc',value:2},
        {label:'jpg',value:3},
        {label:'png',value:4},
        {label:'bmp',value:5},
        {label:'gif',value:6},
        {label:'媒体',value:7},
        {label:'其他',value:9},
      ], // 文件格式
      file_generate_unit_rank: [], // 文件生成单位级别
      file_sort: [], // 文件类别
      file_type: [], // 文件类型
      tableData: [
        {
          id: "1",
          number: "112",
          a: "这是个数据",
          b: "这是个数据",
        },
      ],
      tableLabel: [
        { label: "文件标题", prop: "file_name" },
        { label: "作者", prop: "undertaker" },
        { label: "发布时间", prop: "create_time",width: '160' },
        { label: "发布层级", prop: "b" },
        { label: "发布人", prop: "b" },
        { label: "分类", prop: "b" },
        { label: "创建日期", prop: "b" },
      ],
      pagination: {
        pageNum: 1,
        pageSize: 10,
        total: 200,
      },
      field_data: []
    };
  },
  created() {
    this.getTableList()
    // 获取所有字段
    Api.getInfoType().then((res) => {
      if (res.code == "0000") {
        if (res.data.filter.length) {
          //  this.tableAllIist = res.data.filter;
          let list = res.data.filter.filter((item) => {
            return item.display == true;
          });
          this.searchList = list;
          // this.getPlanList();
        }
      }
    })
    .catch((res) => {
      this.$message.error(res.msg || "系统异常");
    });
    Common.attrdata('d_docs').then((res)=>{
      if(res.code === '0000' && res.data && res.data.field_data){
        const {data:{field_data}} = res
      }
    })
  },
  methods: {
    getTableList() {
      Api.queryRecord(Utils.filterParams(this.params)).then((res)=>{
        if(res.code === '0000'){
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
    },
    searchlist(){
      this.searchModal = true;
    },
    addForm() {
      this.dialogVisible = true;
    },
    edit() {
      this.editModal = true;
    },
    clickType(value) {
      console.log(value);
      this.value = value;
    },
    listEdit() {
      // Http.onListEdit(this.multipleSelectionInfo)
      //   .then((res) => {
      //     if (res.code == '0000') {
      //       this.$message.success('编辑成功！')
      //       this.close()
      //     }
      //   })
      //   .catch((res) => {
      //     this.$message.error(res.msg || '系统异常')
      //   })
    },
    Search(event) {
      this.query.indexArray = []
      this.query.indexArray = event
      this.searchModal = false
      this.getTableList()
    },
    delectList() {
      console.log('selectTableList', this.selectTableList)
    },
    goDelectPage() {
      this.$router.push("/doc/in-stock-record-del");
    },
    goPage(flag) {
      if (flag === 1) {
        this.$router.push("/doc/in-stock-record");
      }
    },
    close() {
      this.editModal = false
      this.createModal = false
      this.exportModal = false
      this.getTableList()
      // this.search();
    },
    getAttachFile(query) {
      const link = document.createElement('a')
      Http.getAttachFile({
        id: query.row.id,
        infoType: 't_device',
        file: query.file,
      })
        .then((res) => {
          let blob = new Blob([res], { type: 'application/octet-stream' }) // res就是接口返回的文件流了
          let objectUrl = URL.createObjectURL(blob)
          link.href = objectUrl
          link.download = query.file
          link.click()
          URL.revokeObjectURL(objectUrl)
        })
        .catch((res) => {
          debugger
          this.$message.error(res.msg || '系统异常')
        })
    },
    // table选中
    selectTableList(list) {
      let query = []
      list.forEach((item) => {
        query.push(item.id)
      })
      this.multipleSelection = query
      this.multipleSelectionInfo = list[0]
      this.form = []
      list.forEach((item) => {
        let query = {
          device_id: item.id,
          device_name: item.name,
          receiver: sessionStorage.getItem("loginName"),
          quantity: '1',
          locate_site: '',
          receiver_tel: '',
        }
        this.form.push(query)
      })
      this.borrowList = []
      list.forEach((item) => {
        let query = {
          device_id: item.id,
          device_name: item.name,
          borrower: sessionStorage.getItem("loginName"),
          quantity: '1',
          locate_site: '',
          borrower_org: '',
          borrower_time: '',
          borrower_tel: '',
          course_name: '',
          return_man: '',
          return_time: '',
        }
        this.borrowList.push(query)
      })
      this.repairList = []
      list.forEach((item) => {
        let query = {
          device_id: item.id,
          device_name: item.name,
          repair_content: '',
        }
        this.repairList.push(query)
      })
    },
  },
};
</script>
<style lang="less" scoped>
.type-sele {
  width: 120px;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.el-mini-input {
  height: 25px;
  line-height: 25px;
  width: 120px;
  /deep/ .el-input__inner {
    height: 25px;
    line-height: 25px;
    padding: 0 10px;
  }
}
.el-mini-btn {
  padding: 5px 12px;
}
.type-btn {
  height: 22px;
  width: 59px;
  font-size: 14px;
  display: inline-block;
  text-align: center;
  line-height: 22px;
  cursor: pointer;
}
.type-btn-checked {
  background: #1890ff;
  color: #ffffff;
  border-radius: 2px;
}
</style>

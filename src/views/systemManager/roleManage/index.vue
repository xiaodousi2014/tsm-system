<template>
  <div>
    <div class="top-menu">
      <span style="font-size: 20px;font-weight:900;">用户管理</span>
      <div class="top-menu-but">
        <el-button type="primary" class="btnWidth" @click="dialogVisible = true">检索</el-button>

        <el-button class="btnSty" @click="addForm">新增</el-button>
        <el-button class="btnSty">导入</el-button>
      </div>
    </div>

    <div class="marginTo14 marginLeftAndRight paddingBtm20 my-el-table">
      <div>
        <el-form :inline="true" @submit.native.prevent>
          <el-form-item>
            <el-tree
              :data="data"
              :props="defaultProps"
              @node-click="handleNodeClick"
              @node-contextmenu="rightClick"
              style="width:150px;margin:8px 0 0 10px"
            ></el-tree>
          </el-form-item>
        </el-form>
      </div>

      <el-table
        :data="tableDataPage"
        @selection-change="handleSelectionChange"
        :row-key="getRowKeys"
        style="width: 100%"
        ref="tableDataPage"
        height="400"
      >
        <el-table-column :reserve-selection="true" type="selection" width="55"></el-table-column>
        <!-- 动态循环的列表 -->
        <template v-for="(item, index) in tableLabel">
          <el-table-column
            :key="index"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
            align="center"
          ></el-table-column>
        </template>

        <el-table-column label="操作" width="120px" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="updateForm(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="rowDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <Pagination
        ref="Pagination"
        @getSizeChange="getSizeChange"
        @getCurrentChange="getCurrentChange"
        :pagination="pagination"
      />
    </div>

    <!-- 新增或修改组件 -->
    <addUpdate ref="addUpdate" @fetchData="fetchData" />

    <!-- 检索弹框  可做成子组件调用 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" center width="1184px">
      <div>
        <RuleForm @handleClose="handleClose" :formInfo="ruleForm" />
      </div>
    </el-dialog>
  </div>
</template>
<script>
// 新增或修改学员
import addUpdate from "./addUpdate";

 
// 分页
import Pagination from "@/components/pagination"; 

//检索
import RuleForm from "@/views/StateKnowledge/components/ruleForm.vue"; 

export default {
  name: "overview",
  components: { Pagination, addUpdate, RuleForm },
  data() {
    return {
      // 检索弹框
      dialogVisible: false,

      ruleForm: {
        name: "哈哈哈"
      },

      // 机构
      orgOption: [
        { id: "1", name: "a机构" },
        { id: "2", name: "b机构" },
        { id: "3", name: "c机构" },
        { id: "4", name: "d机构" }
      ],

      // 树形数据源
      data: [
        {
          label: "学校",
          children: [
            {
              label: "一系",
              children: [
                {
                  label: "一系xx部"
                }
              ]
            },
            {
              label: "二系"
            },
            {
              label: "院办"
            },
            {
              label: "综合实验室"
            },
            {
              label: "装备处"
            },
            {
              label: "营房处"
            },
            {
              label: "校务处"
            },
            {
              label: "保障处"
            }
          ]
        }
      ],
      // 树形数据列名
      defaultProps: {
        children: "children",
        label: "label"
      },

      // 多选数据源
      SelectionChange: [],
      // 列表数据源
      tableDataPage: [],
      tableData: [
        {
          id: "01",
          a: "张峰",
          b: "新增班级.删除班级",
          c: "201911001",
          d: "师范1911",
          e: "1990608",
          f: "200201",
          g: "在籍",
          year: "2018-08-01",
          date: "2020-09-21"
        },
        {
          id: "02",
          a: "李四",
          b: "新增班级.删除班级",
          c: "201911002",
          d: "师范1912",
          e: "1990608",
          f: "200201",
          g: "在籍",
          year: "2018-08-01",
          date: "2020-09-21"
        },
        {
          id: "03",
          a: "王五",
          b: "新增班级.删除班级",
          c: "201911002",
          d: "师范1912",
          e: "1990608",
          f: "200201",
          g: "在籍",
          year: "2018-08-01",
          date: "2020-09-21"
        },
 
      ],

      // 表格列名
      tableLabel: [
        { label: "名称", prop: "a", width: "" },
        { label: "权限列表", prop: "b", width: "" },
        { label: "最近修改时间", prop: "c", width: "" },  
      ],
      // 分页
      pagination: {
        pageNum: 1,
        pageSize: 10,
        total: 100
      }
    };
  },
  created() {
    // 前端分页用
    this.fetchData();
  },
  methods: {
    // 检索弹出框状态
    handleClose(flag) {
      this.dialogVisible = flag;
    },

    // 多选按钮
    handleSelectionChange(value) {
      console.log(value);
    },

    // 给每一行数据加id记录,才能进行分页多选
    getRowKeys(row) {
      return row.id;
    },

    // 新增学生信息
    addForm() {
      this.$refs.addUpdate.addShow(); 
    },

    // 修改学生信息
    updateForm() {
      this.$refs.addUpdate.updateShow();
    },

    // 删除
    rowDelete(row) {
      this.$confirm('是否确认删除名称为"' + row.a + '"的数据项?', "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(function() {
          console.log(111, row.id);
        })
        .then(() => {
          this.init();
          this.$baseMessage("删除成功", "success");
        })
        .catch(function() {});
    },

    // 树形图点击
    handleNodeClick(data) {
      console.log(data);
    },
    // 右击树形图
    rightClick(data) {
      this.$refs.addUpdate.addShow();
    },

    // 查询学员数据源
    fetchData() {
      this.pagination.total = this.tableData.length;

      // 1 0~9
      // 2 10~19
      // 3 20~29
      this.tableDataPage = [];

      this.tableData.forEach((val, index) => {
        if (
          index <= this.pagination.pageNum * 10 - 1 &&
          index >= (this.pagination.pageNum - 1) * 10
        ) {
          this.tableDataPage.push(val);
        }
      }); 
    },

    // 分页功能
    getCurrentChange(val) {
      this.pagination.pageNum = val;
      this.fetchData();
    },
    getSizeChange(val) {
      this.pagination.pageSize = val;
      this.fetchData();
    }
  }
};
</script>
<style lang="less" scoped>
</style>

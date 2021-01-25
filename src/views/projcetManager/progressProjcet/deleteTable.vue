<template>
  <div >
    <div class="top-menu">
      <span style="font-size: 20px;font-weight:900;">在建项目 删除表</span>
    </div>
    
    <div class="marginTo14 marginLeftAndRight paddingBtm20 my-el-table">
      <el-table :data="tableData3"
                id="el-table"
                @selection-change="handleSelectionChange"
                style="width: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <!-- 动态循环的列表 -->
        <template v-for="(item, index) in tableLabel">
          <el-table-column :key="index"
                           :prop="item.prop"
                           :label="item.label">
          </el-table-column>
        </template>
        <!-- 固定的列：从业人员 -->
        <el-table-column label="操作"
                         width="200px">
          <template slot-scope="scope">
            <el-button type="text"
                       size="small" @click="edit(scope.row)">编辑</el-button>
            <el-button type="text"
                       size="small" @click="rowDelete(scope.row)">删除</el-button>
            <el-button type="text"
                       size="small">上传附件</el-button>
          </template>
        </el-table-column>
      </el-table>
      <Pagination :pagination="pagination" />
    </div>

    <el-dialog title="提示"
               :visible.sync="dialogVisible"
               center
               width="1184px">
      <div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Pagination from '@/components/pagination'

let id = 1000

export default {
  name: 'objectIndex',
  components: { Pagination },
  data() {
    return {
      dialogVisible: false,
      value: '1',
      ruleForm: {
        name: '哈哈哈',
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
      },
      options: [
        {
          value: '1',
          label: '国家',
          children: [{
            value: '2',
            label: '总类'
          }]
        },
        {
          value: '2',
          label: '军委',
        },
        {
          value: '3',
          label: '陆军',
        },
        {
          value: '4',
          label: '学院',
        },
        {
          value: '5',
          label: '学校',
        },
      ],
      tableData3: [
        {
          id: '1',
          number: '112',
          a: '这是个数据',
          b: '这是个数据',
        }
      ],
      tableLabel: [
        { label: '文件标题', prop: 'id' },
        { label: '作者', prop: 'number' },
        { label: '发布时间', prop: 'a' },
        { label: '发布层级', prop: 'b' },
        { label: '发布人', prop: 'b' },
        { label: '分类', prop: 'b' },
        { label: '创建日期', prop: 'b' },
      ],
      pagination: {
        pageNum: 1,
        pageSize: 10,
        total: 200,
      },
    }
  },
  created() {},
  methods: {
    handleSelectionChange(value) {
      console.log(value)
    },
    edit(row) {
      console.log(row)
    },
    rowDelete(row) {
      this.$confirm('是否确认删除名称为"' + row.a + '"的数据项?','警告',{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      })
      .then(function () {
        console.log(111, row.id)
        // return deleteRole(row.id)
      })
      .then(() => {
        this.init()
        this.$baseMessage('删除成功', 'success')
      })
      .catch(function () {})
    },
  },
}
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
.menu-type{
  padding: 24px;
  .type-btn{
    height: 22px;
    width: 59px;
    font-size: 14px;
    display: inline-block;
    text-align: center;
    line-height: 22px;
    cursor: pointer;
  }
  .type-btn-checked{
    background: #1890FF;
    color: #ffffff;
    border-radius: 2px;
  }
}
</style>

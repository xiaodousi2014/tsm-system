<template>
  <div>
    <div class="top-menu">
      <span style="font-size: 20px;font-weight:900;">法规总览</span> 
      <div class="top-menu-but">
        <el-button
          type="primary"
          class="btnWidth"
          @click="dialogVisible = true"
        >检索</el-button>
        <el-button
          type="primary"
          class="btnWidth"
          style="padding:12px 0;"
        >上传附件</el-button>
        <el-button class="btnSty">撤销操作</el-button>
      </div>
    </div>

    <div class="marginTo14 marginLeftAndRight paddingBtm20 my-el-table">
      <el-table
        :data="tableData3"
        border
        id="el-table"
        style="width: 100%"
      >
        <!-- 动态循环的列表 -->
        <template v-for="(item, index) in tableLabel">
          <el-table-column
            :key="index"
            :prop="item.prop"
            :label="item.label"
          >
          </el-table-column>
        </template>
        <!-- 固定的列：从业人员 -->
        <el-table-column
          label="操作"
          width="200px"
        >
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
            >编辑</el-button>
            <el-button
              type="text"
              size="small"
            >删除</el-button>
            <el-button
              type="text"
              size="small"
            >上传附件</el-button>
          </template>
        </el-table-column>
      </el-table>
      <Pagination :pagination="pagination" />
    </div>

    <div>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="1"
        :on-exceed="handleExceed"
        :file-list="fileList"
      >
        <el-button
          size="small"
          type="primary"
        >点击上传</el-button>
        <div
          slot="tip"
          class="el-upload__tip"
        >只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
  </div>
</template>
<script>
import Pagination from "../../components/pagination";

let id = 1000;

export default {
  name: "inStockRecord",
  components: { Pagination },
  data() {
    return {
      tableData3: [
        {
          id: "1",
          number: "112",
          a: "这是个数据",
          b: "这是个数据",
        },
        {
          id: "2",
          number: "113",
          a: "这是个数据",
          b: "这是个数据",
        },
      ],
      tableLabel: [
        { label: "文件标题", prop: "id" },
        { label: "作者", prop: "number" },
        { label: "发布时间", prop: "a" },
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
      fileList: [],
    };
  },
  created() {},
  mounted() {
    console.log("----");
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
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
</style>

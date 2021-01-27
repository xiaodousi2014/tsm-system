<template>
  <div class="ClassifiedDisplay">
    <el-table   id="el-table" style="width: 100%"  :data="tableData"  @selection-change="handleSelectionChange">
      <!-- 动态循环的列表 -->
        <el-table-column
      type="selection"
      width="55">
    </el-table-column>
      <template v-for="(item, index) in tableAllIist">
        
        <el-table-column
          v-if="item.checked&& item.name != 'id'"
          :key="index"
          :prop="item.name"
          :label="item.comment"
          width=""
        >
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>
<script>

export default {
  name: "",
  components: {},
  props: {
    tableAllIist: {//是否可折叠
        type: Array,
        default: []
      },
      tableData: {
        type:Array,
        default: []
      }
  },
  data() {
    return {
      multipleSelection: []
    };
  },
  methods: {
      handleSelectionChange(val) {
        console.log(val)
        this.multipleSelection = val;
        this.$emit('selectTableList', this.multipleSelection)
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
.showIcon i {
  cursor: pointer;
}
</style>

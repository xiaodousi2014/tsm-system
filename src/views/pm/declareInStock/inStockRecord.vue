<template>
  <div>
    <InStockRecordCom tableName="t_project" deleted="deleted"/>
  </div>
</template>
<script>
import InStockRecordCom from '@/components/inStockRecordCom'

let id = 1000;

export default {
  name: "rkRecord",
  components: {
    InStockRecordCom
  },
  data() {
    return {
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {

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

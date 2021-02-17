<template>
  <div >
    <AttributeCom tableName="t_project"/>
  </div>
</template>
<script>
import AttributeCom from '@/components/attributeCom'

let id = 1000

export default {
  name: 'objectIndex',
  components: { AttributeCom },
  data() {
    return {
      dialogVisible: false,
    }
  },
  created() {},
  methods: {
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

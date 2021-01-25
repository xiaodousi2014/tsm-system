<template>
  <div >
    <div class="top-menu">
      <span style="font-size: 20px;font-weight:900;">任务分解</span>
    </div>
    <el-row>
      <el-col span="6" :offset="1" class="task-box"></el-col>
      <el-col span="6" :offset="1" class="task-box"></el-col>
      <el-col span="6" :offset="1" class="task-box"></el-col>
    </el-row>
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
    }
  },
  created() {},
  methods: {
    handleSelectionChange(value) {
      console.log(value)
    },
  },
}
</script>
<style lang="less" scoped>
.task-box{
  border: 2px solid #409eff;
  border-radius: 8px;
  height: 300px;
}
</style>

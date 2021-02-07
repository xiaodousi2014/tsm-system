<template>
  <div class="ClassifiedDisplay" v-if="tableAllIist.length">
    <el-table   id="el-table" style="width: 100%"  :data="tableData"  @selection-change="handleSelectionChange">
      <!-- 动态循环的列表 -->
        <el-table-column
      type="selection"
      width="55">
    </el-table-column>
      <template v-for="(item, index) in tableAllIist">
        <el-table-column
          v-if="item.display&&item.favorate&&item.type != 'attachment'"
          :key="index"
          :prop="item.name"
          :label="item.comment"
          :width="item.comment.length * 24 + 'px'"
        >
        <template slot-scope="scope" >
          {{setArrayName(scope.row, item)}}
        </template>
        </el-table-column>
         <el-table-column
          v-if="item.display&&item.favorate&&item.type == 'attachment'"
          :key="index"
          :prop="item.name"
          :label="item.comment"
          width=""
        >
        <template slot-scope="scope" >
           <!-- {{setAttachment(scope.row, item)}} -->
          <div v-for="(attach, index) in  setAttachment(scope.row, item)" :key="index">
            <a href="javascript:void(0)" @click="getAttachFile(attach, scope.row)">{{attach}}</a>
          </div>
        </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>
<script>
import Http from "@/api/deviceManage";
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
    getAttachFile(file, row) {
      let query ={
        file: file,
        row: row
      }
      this.$emit('getAttachFile',query);
    },
    setAttachment(row, item) {
      // debugger
      if (row[item.name]) {
        if (row[item.name].indexOf('{')<0 && row[item.name].indexOf('[')<0 && typeof row[item.name] == 'string'){
          return row[item.name]
        } else if (typeof JSON.parse(row[item.name]) == 'object'){
          return JSON.parse(row[item.name]).files;
        } else {
          return JSON.parse(row[item.name]).attachment;
        }
      }
    },
    setArrayName(row, item) {
      if(item.type == 'map') {
         let name = '';
           for(let i in JSON.parse(item.itemdata)){
             if(row[item.name] == i) {
             name = JSON.parse(item.itemdata)[i];
            }
           }
           return name;
      }
      return row[item.name]
    },
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

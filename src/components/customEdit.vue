<template>
  <div id="customSearch">
      <el-form
      class="search-from"
      label-position="right"
      label-width="150px"
      :model="form"
    >
      <el-row
        :gutter="10"
        style="margin-top: 20px"
      >
        <el-col :md="8" :sm="12" :xs="24"   v-for=" item in searchList" :key="item.name">
           <el-form-item :label="item.comment" v-if="item.editable">
            <el-input
            v-if="item.type == 'string'"
            size="small"
            v-model="form[item.name]"
            placeholder="请输入"
          ></el-input>

           <el-date-picker
            style="width: 100%"
            v-if="item.type == 'date'"
            v-model="form[item.name]"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
          
           <el-input
            v-if="item.type == 'int'"
            type="number"
            size="small"
            v-model.number="form[item.name]"
            placeholder="请输入"
          ></el-input>

           <el-select placeholder="请选择" v-model.lazy="form[item.name]" size="small" v-if="item.type == 'map'">
            <el-option
              v-for="(list, index) in setSearchList(item)"
              :key="index"
              :label="list.name"
              :value="list.id"
            >
            </el-option>
          </el-select>
           </el-form-item>
        </el-col>
      </el-row>
      <div class="search-button-block" style="margin-top: 20px">
        <el-button size="small" @click="onSumit()">保 存</el-button>
        <el-button size="small" @click="onCancel()">取 消</el-button>
      </div>
   </el-form>
  </div>
</template>

<script>
export default {
  name: "customSearch",
  props: {
    searchList: {
      type: Array,
      default: [],
    },
    form: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
    };
  },
  methods: {
     onCancel() {
     this.$emit('close');
    },
    setSearchList(event) {
      let list = [];
     this.searchList.forEach(item => {
       if(item.name == event.name) {
         Object.entries(JSON.parse(item.itemdata)).forEach(item => {
           let query = {
             id: Number(item[0]),
             name: item[1]
           }
           list.push(query)
         })
       }
     })
     return list
    },
    onSumit() {
      this.$emit('listEdit');
    },
  },
};
</script>

<style lang="less" scoped>
</style>

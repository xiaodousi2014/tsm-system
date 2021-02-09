<template>
  <div id="customSearch">
    <el-form
      class="search-from"
      label-position="right"
      label-width="150px"
      :model="form"
    >
      <el-row :gutter="10" style="margin-top: 20px">
        <el-col
          :md="8"
          :sm="12"
          :xs="24"
          v-for="item in searchList"
          :key="item.name"
        >
          <el-form-item :label="item.comment" v-if="item.editable && (item.type == 'string' || item.type == 'date' || item.type == 'datetime' || item.type == 'int' || item.type == 'map' || item.type == 'list')">
            <el-input
              v-if="item.type == 'string'"
              size="small"
              v-model="form[item.name]"
              placeholder="请输入"
            ></el-input>

            <el-date-picker
              style="width: 100%"
              v-if="item.type == 'date' || item.type == 'datetime'"
              v-model="form[item.name]"
              size="small"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>

            <el-input
              v-if="item.type == 'int'"
              type="number"
              size="small"
              v-model.number="form[item.name]"
              placeholder="请输入"
            ></el-input>

            <el-select
              placeholder="请选择"
              v-model="form[item.name]"
              size="small"
              v-if="item.type == 'map'"
            >
              <el-option
                v-for="(list, index) in setSearchList(item)"
                :key="index"
                :label="list.name"
                :value="list.id"
              >
              </el-option>
            </el-select>

            <el-select
              placeholder="请选择"
              v-model="form[item.name]"
              size="small"
              v-if="item.type == 'list'"
            >
              <el-option
                v-for="(list, index) in setSearchList2(item)"
                :key="index"
                :label="list"
                :value="list"
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
  },
  data() {
    return {
      form: {},
    };
  },
  watch: {},
  methods: {
    onCancel() {
      this.$emit("close");
    },
    setSearchList(event) {
      let list = [];
      this.searchList.forEach((item) => {
        if (item.name == event.name) {
          Object.entries(JSON.parse(item.itemdata)).forEach((item) => {
            let query = {
              id: Number(item[0]),
              name: item[1],
            };
            list.push(query);
          });
        }
      });
      return list;
    },
    setSearchList2(event) {
      let list = [];
      this.searchList.forEach((item) => {
        if (item.name == event.name) {
          if(item.itemdata && item.itemdata.length>0){
            list = item.itemdata.split(',')
          }
        }
      });
      return list;
    },
    onSumit() {
      this.$emit("listCreate", this.form);
    },
    onSearch() {
      console.log(this.checkedSearchList);
      this.$emit("Search", this.checkedSearchList);
    },
    // 删除一个搜索条件
    reduceSearch(index) {
      this.checkedSearchList.splice(index, 1);
    },
    // 添加搜索条件
    addSearch(index) {
      let query = {
        col_type: "",
        col_name: "",
        indexType: 1,
        value: "",
        relation: 1,
      };
      this.checkedSearchList.splice(index + 1, 0, query);
    },
    typeChange(index, event) {
      console.log(event);
      this.searchList.forEach((item) => {
        if (item.name == event) {
          this.checkedSearchList[index].col_type = item.type;
          this.checkedSearchList[index].col_name = event;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>

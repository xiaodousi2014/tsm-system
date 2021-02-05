<template>
  <div id="customSearch">
    <div>
      <el-row
        :gutter="10"
        v-for="(it, index) in checkedSearchList"
        :key="index"
        style="margin-top: 20px"
      >
        <el-col :md="4" :sm="6" :xs="12" >
          <el-select
            size="small"
            v-model="it.col_name"
            placeholder="请选择"
            style="display: block; width: 100%"
            @change="typeChange(index, $event)"
          >
            <el-option
              v-for="item in searchList"
              :key="item.name"
              :label="item.comment"
              :value="item.name"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col :md="2" :sm="3" :xs="6" v-if="it.col_type">
          <el-select placeholder="请选择" v-model="it.indexType"   size="small">
            <el-option
              v-for="(item, index) in oneSelect"
              :key="index"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col :md="4" :sm="6" :xs="12" v-if="it.col_type">
          <el-input
            v-if="it.col_type == 'string'"
            size="small"
            v-model="it.value"
            placeholder="请输入"
          ></el-input>
          <el-date-picker
            style="width: 100%"
            v-if="it.col_type == 'datetime'"
            v-model="it.value"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
           <el-select placeholder="请选择" v-model="it.value"   size="small" v-if="it.col_type == 'map'">
            <el-option
              v-for="(item, index) in setSearchList(it)"
              :key="index"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
          <el-input
            v-if="it.col_type == 'int'"
            type="number"
            size="small"
            v-model.number="it.value"
            placeholder="请输入"
          ></el-input>
        </el-col>
        <el-col :md="2" :sm="3" :xs="6" v-if="it.col_type">
          <el-select placeholder="请选择" v-model="it.relation"   size="small">
            <el-option
              v-for="(item, index) in twoSelect"
              :key="index"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col :md="4" :sm="6" :xs="12" v-if="it.col_type">
          <el-button
            type="primary"
            size="small"
            icon="el-icon-plus"
            @click="addSearch(index)"
          ></el-button>
          <el-button
            type="primary"
            size="small"
            icon="el-icon-minus"
            @click="reduceSearch(index)"
            v-if="index != 0"
          ></el-button>
        </el-col>
      </el-row>
      <div class="search-button-block" style="margin-top: 20px">
        <el-button size="small" @click="onSearch()">查 询</el-button>
        <el-button size="small">重 置</el-button>
      </div>
    </div>
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
      oneSelect: [
        {
          id: 1,
          name: "等于",
        },
        {
          id: 2,
          name: "不等于",
        },
        {
          id: 3,
          name: "大于",
        },
        {
          id: 4,
          name: "大于等于",
        },
        {
          id: 5,
          name: "小于",
        },
        {
          id: 6,
          name: "小于等于",
        },
         {
          id: 7,
          name: "包含",
        },
         {
          id: 8,
          name: "不包含",
        }
      ],
      checkedSearchList: [
        {
          col_type: "",
          col_name: "",
          value: '',
          relation: 1,
          indexType: 1,
        },
      ],
      twoSelect: [
        {
          id: 1,
          name: "并且",
        },
        {
          id: 2,
          name: "或者",
        }
      ],
    };
  },
  watch: {},
  methods: {
    setSearchList(event) {
      let list = [];
     this.searchList.forEach(item => {
       if(item.name == event.col_name) {
         Object.entries(JSON.parse(item.itemdata)).forEach(item => {
           let query = {
             id: item[0],
             name: item[1]
           }
           list.push(query)
         })
       }
     })
     return list
    },
    onSearch() {
     console.log(this.checkedSearchList);
     this.$emit('Search', this.checkedSearchList)
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
          value: '',
          relation: 1
      };
      this.checkedSearchList.splice(index + 1, 0, query);
    },
    typeChange(index, event) {
      console.log(event)
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

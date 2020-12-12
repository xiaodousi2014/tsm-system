<template>
  <div id="customSearch">
    <div>
      <el-row
        :gutter="10"
        v-for="(it, index) in checkedSearchList"
        :key="index"
        style="margin-top: 20px"
      >
        <el-col :md="4" :sm="6" :xs="12">
          <el-select
            v-model="it.code"
            placeholder="请选择"
            style="display: block; width: 100%"
            @change="typeChange(index, $event)"
          >
            <el-option
              v-for="item in searchList"
              :key="item.code"
              :label="item.name"
              :value="item.code"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col :md="2" :sm="3" :xs="6" v-if="it.code">
          <el-select placeholder="请选择" v-model="it.oneSelect">
            <el-option
              v-for="(item, index) in oneSelect"
              :key="index"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col :md="4" :sm="6" :xs="12" v-if="it.code">
          <el-input
            v-if="it.type == 'text'"
            size="small"
            v-model="it.codeValue"
            placeholder="请输入"
          ></el-input>
          <el-date-picker
            style="width: 100%"
            v-if="it.type == 'date'"
            v-model="it.value"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
          <el-input
            v-if="it.type == 'number'"
            type="number"
            size="small"
            v-model.number="it.codeValue"
            placeholder="请输入"
          ></el-input>
        </el-col>
        <el-col :md="2" :sm="3" :xs="6" v-if="it.code">
          <el-select placeholder="请选择" v-model="it.twoSelect">
            <el-option
              v-for="(item, index) in twoSelect"
              :key="index"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col :md="4" :sm="6" :xs="12" v-if="it.code">
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
        <el-button size="small" type="primary">查 询</el-button>
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
          name: "小于",
        },
        {
          id: 5,
          name: "包含",
        },
        {
          id: 6,
          name: "不包含",
        },
      ],
      checkedSearchList: [
        {
          code: "",
          codeValue: "",
          type: "",
          oneSelect: 1,
          oneSelectValue: "",
          twoSelect: 1,
          twoSelectValue: "",
        },
      ],
      twoSelect: [
        {
          id: 1,
          name: "且",
        },
        {
          id: 2,
          name: "或",
        },
        {
          id: 3,
          name: "非",
        },
      ],
    };
  },
  watch: {},
  methods: {
    // 删除一个搜索条件
    reduceSearch(index) {
      this.checkedSearchList.splice(index, 1);
    },
    // 添加搜索条件
    addSearch(index) {
      let query = {
        code: "",
        codeValue: "",
        type: "",
        oneSelect: 1,
        oneSelectValue: "",
        twoSelect: 1,
        twoSelectValue: "",
      };
      this.checkedSearchList.splice(index + 1, 0, query);
      console.log(this.checkedSearchList);
    },
    typeChange(index, event) {
      this.searchList.forEach((item) => {
        if (item.code == event) {
          this.checkedSearchList[index].type = item.type;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>

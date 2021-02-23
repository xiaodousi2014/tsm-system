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
          <el-form-item
            :label="item.comment"
            :prop="item.name"
             :rules="{
                required: true,
                message: `请输入${item.comment}`,
                trigger: 'blur',
              }"
            v-if="
              item.editable &&
              (item.type == 'string' ||
                item.type == 'int')
            "
          >
            <el-input
              v-if="item.type == 'string'"
              size="small"
              v-model="form[item.name]"
              placeholder="请输入"
            >
              ></el-input
            >
            <el-input
              v-if="item.type == 'int'"
              type="number"
              size="small"
              v-model.number="form[item.name]"
              placeholder="请输入"
             
            >
              ></el-input
            >
          </el-form-item>
            <el-form-item
            :label="item.comment"
            :prop="item.name"
              :rules="{
                required: true,
                message: `请选择${item.comment}`,
                trigger: 'change',
              }"
            v-if="item.editable &&item.type == 'map' "
          >
            <el-select
              placeholder="请选择"
              v-model="form[item.name]"
              size="small"
              v-if="item.type == 'map'"
            >
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
            <el-form-item
            :label="item.comment"
            :prop="item.name"
            v-if="
              item.editable &&
                item.type == 'list'
            "
          >

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
             <el-form-item
            :label="item.comment"
            :prop="item.name"
            v-if="
              item.editable &&
              (
                item.type == 'date' ||
                item.type == 'datetime')
            "
          >
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
      default: function () {
        return {};
      },
    },
    url: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      // fileList: [],
      queryName: "",
    };
  },
  methods: {
    onProgress(event) {
      this.queryName = event;
    },
    handleSuccessful(res, file, fileList) {
      if (res.code == "0000") {
        console.log(res);
        fileList[fileList.length - 1].code = this.queryName;
        console.log(fileList);
        console.log(this.form[this.queryName]);
        let query = JSON.parse(this.form[this.queryName]).files.push(file.name);
        console.log(query);
        this.$message.success("上传成功");
      } else {
        // console.log(res)
        this.$message.error(res.msg || "系统异常");
      }
    },
    onCancel() {
      this.$emit("close");
    },
    handleRemove(file) {
      if (!file) {
        return;
      }
      let query = JSON.parse(this.form[file.code]);
      query.files = query.files.filter((item) => {
        return item != file.name;
      });
      this.form[file.code] = JSON.stringify(query);
    },
    setAttachmentList(list, name) {
      if (list) {
        let fileList = [];
        // console.log(JSON.parse(list).files)
        JSON.parse(list).files.forEach((item) => {
          let query = {
            name: item,
            url: item,
            code: name,
          };
          fileList.push(query);
        });
        console.log(fileList);
        return fileList;
        // return JSON.parse(list).files;
      }
      return [];
    },
    setSearchList(event) {
      let list = [];
      this.searchList.forEach((item) => {
        if (item.name == event.name) {
          if (!item.itemdata) {
            return;
          }
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
          if (item.itemdata && item.itemdata.length > 0) {
            list = item.itemdata.split(",");
          }
        }
      });
      return list;
    },
    onSumit() {
        this.$refs["forms"].validate((valid) => {
        if (valid) {
          this.$emit("listCreate", this.form);
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>

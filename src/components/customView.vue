<template>
  <div id="customSearch">
    <el-form
      class="search-from"
      label-position="right"
      label-width="150px"
      :model="form"
      :disabled="true"
    >
      <el-row :gutter="10" style="margin-top: 20px">
        <template v-for="item in searchList">
          <el-col
            :md="8"
            :sm="12"
            :xs="24"
            :key="item.name"
            v-if="item.editable && (item.type != 'attachment' || item.type == 'string' || item.type == 'date' || item.type == 'datetime' || item.type == 'int' || item.type == 'map' || item.type == 'list')"
          >
            <el-form-item :label="item.comment">
              <el-input
                v-if="item.type == 'string'"
                size="small"
                v-model="form[item.name]"
                placeholder="请输入"
              ></el-input>

              <el-date-picker
                style="width: 100%"
                v-if="item.type == 'datetime'"
                v-model="form[item.name]"
                type="date"
                size="small"
                placeholder="选择日期"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                :clearable="false"
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
                v-model.lazy="form[item.name]"
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
          <!-- <el-col
            :md="24"
            :sm="24"
            :xs="24"
            v-if="item.editable && item.type == 'attachment'"
          >
            <el-form-item :label="item.comment">
              <el-upload
                class="upload-demo"
                :action='url'
                :on-remove="handleRemove"
                :on-progress='onProgress(item.name)'
                :on-success='handleSuccessful'
                :file-list='setAttachmentList(form[item.name], item.name)'
              >
                <el-button size="small" type="primary">点击上传</el-button>
              </el-upload>
            </el-form-item>
          </el-col> -->
        </template>
      </el-row>
    </el-form>
    <div class="search-button-block" style="margin-top: 20px">
      <!--        <el-button size="small" @click="onSumit()">保 存</el-button>-->
      <el-button size="small" @click="onCancel()">关 闭</el-button>
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
    form: {
      type: Object,
      default: function() {
        return {}
      }
    },
    url: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      // fileList: [],
      queryName: ''
    };
  },
  methods: {
    onProgress(event) {
      this.queryName = event;
    },
     handleSuccessful(res, file, fileList) {
      if (res.code == '0000') {

         console.log(res);
         fileList[fileList.length-1].code = this.queryName;
          console.log(fileList);
          console.log(this.form[this.queryName])
          let query =JSON.parse(this.form[this.queryName]).files.push(file.name);
          console.log(query)
        this.$message.success("上传成功");
      } else {
        // console.log(res)
        this.$message.error(res.msg|| '系统异常');
      }
    },
    onCancel() {
      this.$emit("close");
    },
    handleRemove(file) {
      if(!file) {
        return
      }
      let query =JSON.parse(this.form[file.code])
       query.files = query.files.filter(item  =>{
     return item != file.name});
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
            code: name
          };
          fileList.push(query);
        });
        console.log(fileList)
        return fileList;
        // return JSON.parse(list).files;
      }
      return [];
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
      this.$emit("listEdit", this.form);
    },
  },
};
</script>

<style lang="less" scoped>
</style>

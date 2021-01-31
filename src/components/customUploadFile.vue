<template>
  <div id="myUploader">
    <el-form
        ref="form"
        label-width="130px"
        style="padding-top: 20px"
      >
        <el-row>
          <el-col :span="8">
           <el-form-item label="文件导入">
              <el-upload
                class="upload-demo"
                :action="url"
                :with-credentials="true"
                name="file"
                multiple
                :limit="1"
                :show-file-list="false"
                acceptType=".xlsx, .xls"
                :on-success="successful"
                :before-upload="beforeAvatarUpload"
                :file-list="fileList"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip" style="width:300px">
                  只能上传xlsx文件，且不超过500kb
                </div>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
          </el-form>
             <div slot="footer" class="dialog-footer" style="text-align: center">
        <el-button @click="closeModal()">关 闭</el-button>
      </div>
  </div>
</template>

<script>
// import utils from '../utils/utils'
export default {
  name: "myUploader",
  props: {
    url: {
      type: String,
      default: "",
    }
  },
  data() {
    return {
      fileList: [],
    };
  },
  watch: {
  },
  methods: {
     successful(res, file, fileList) {
      if (res.code == '0000') {
        // this.$refs.uploadFiles.clear();
        this.fileList = [];
        this.$message.success("上传成功");
        this.closeModal();
      } else {
        this.fileList = [];
        // console.log(res)
        this.$message.error(res.msg|| '系统异常');
      }
    },
    closeModal() {
     this.$emit('close')
    },
    beforeAvatarUpload(file) {
      const isJPG =
        file.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
      const isLt2M = file.size / 1024 < 500;

      // if (!isJPG) {
      //   this.$message.error("上传文件只能是 .xlsx 格式!");
      // }
      if (!isLt2M) {
        this.$message.error("上传文件大小不能超过 500k!");
      }
      return isJPG && isLt2M;
    },
  }

};
</script>

<style scoped>
</style>

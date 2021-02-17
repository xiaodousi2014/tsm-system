<template>
  <div id="myUploader">
    <el-form ref="form" label-width="120px" style="padding-top: 20px">
      <el-row>
        <el-col>
          <el-form-item label="文件导入">
            <el-upload
                ref="upload"
              class="upload-demo"
              :headers="headers"
              action="string"
              :with-credentials="true"
              name="file"
              multiple
              :limit="1"
              :http-request="UploadImage"
              acceptType=".xlsx, .xls"
              :on-success="successful"
              :before-upload="beforeAvatarUpload"
              :file-list="fileList"
              :auto-upload="false"
            >
              <el-button size="small" >选择文件</el-button>
              <div slot="tip" class="el-upload__tip" style="width: 300px">
                只能上传xlsx文件，且不超过500kb
              </div>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer" style="text-align: center">
      <el-button @click="closeModal()">关 闭</el-button>
      <el-button type="primary" @click="submitUpload">上传到服务器</el-button>
    </div>
  </div>
</template>

<script>
// import utils from '../utils/utils'
import Http from "@/api/common";
export default {
  name: "myUploader",
  props: {
    url: {
      type: String,
      default: "",
    },
    id: {
      type: [String, Number],
      default: "",
    },
    up_id: { // 项目id
      type: [String, Number],
      default: "",
    },
    up_name: { // 项目名
      type: [String, Number],
      default: "",
    },
    infoType: {
      type: String,
      default: "",
    },
    field: {
      type: String,
      default: "",
    },
    isMultiFiles: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      fileList: [],
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    };
  },
  watch: {},
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    UploadImage(param) {
      console.log("param", param);
      const formData = new FormData();
      formData.append("file", param.file);
      formData.append("infoType", this.infoType);
      if(this.id){
        formData.append("id", this.id);
      }
      if(this.up_id){
        formData.append("up_id", this.up_id);
      }else{
        formData.append("field", "attachment");
        formData.append("isMultiFiles", this.isMultiFiles);
      }
      if(this.up_name){
        formData.append("up_name", this.up_name);
      }
      formData.append("url", this.url);
      // let query = {
      //   infoType: this.infoType,
      //   id: this.id,
      //   url: this.url,
      //   file: formData,
      //   field: "attachment",
      // };
      // return
      Http.UploadFileFormData(this.url, formData)
        .then((res) => {
          this.$message.success("上传成功");
          this.$refs['upload'].clearFiles()
          this.closeModal();
        })
        .catch((res) => {
          this.$refs['upload'].clearFiles()
          this.$message.error(res.msg || "系统异常");
        });
    },
    successful(res, file, fileList) {
      console.log(res, file, fileList)
      if (res.code == "0000") {
        // this.$refs.uploadFiles.clear();
        this.fileList = [];
        this.$message.success("上传成功");
        this.closeModal();
      } else {
        this.fileList = [];
        // console.log(res)
        this.$message.error(res.msg || "系统异常");
      }
    },
    closeModal() {
      this.$emit("close");
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
  },
};
</script>

<style scoped></style>

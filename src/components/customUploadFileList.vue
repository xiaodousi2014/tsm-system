<template>
  <div id="myUploader">
    <el-form
        ref="form"
        label-width="60px"
      >
        <el-row>
          <el-col :span="24">
           <el-form-item label="附件">
              <el-upload
                class="upload-demo"
                :action="url"
                :with-credentials="true"
                multiple
                :on-remove="handleRemove"
                :on-success="successful"
                :before-upload="beforeAvatarUpload"
                :file-list="setAttachmentList()"
              >
                <el-button size="small" type="primary">点击上传</el-button>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
          </el-form>
             <div slot="footer" class="dialog-footer" style="text-align: center;padding-top:40px">
        <el-button @click="closeModal()">关 闭</el-button>
      </div>
  </div>
</template>

<script>
import Http from "@/api/deviceManage";
// import utils from '../utils/utils'
export default {
  name: "myUploader",
  props: {
    url: {
      type: String,
      default: "",
    },
    fileList: {
      type: Object,
      default: {},
    },
    upLoadQuery: {
      type:Object,
      default: ()=>{ return {} }
    }
  },
  data() {
    return {
    };
  },
  watch: {
  },
  methods: {
    setAttachmentList() {
      console.log(this.fileList)
      if (this.fileList && this.fileList.attachment) {
        let fileList = [];
        JSON.parse(this.fileList.attachment).files.forEach((item) => {
          let query = {
            name: item,
            url: item,
            code: name
          };
          fileList.push(query);
        });
        return fileList;
      } else  if (this.fileList && this.fileList.data_name) {
        let fileList = [];
        JSON.parse(this.fileList.data_name).files.forEach((item) => {
          let query = {
            name: item,
            url: item,
            code: name
          };
          fileList.push(query);
        });
        return fileList;
      }
      return [];
    },
     handleRemove(file, fileList) {
       this.upLoadQuery.file = file.name;
        Http.deleteAttachment(this.upLoadQuery)
      .then((res) => {
        this.$message.success(res.msg);
      })
      .catch((res) => {
        fileList.push(file)
        this.$message.error(res.msg || "系统异常");
      });
    },
     successful(res, file, fileList) {
      if (res.code == '0000') {
        this.$message.success("上传成功");
      } else {
        // console.log(fileList.pop())
        // this.fileList = fileList.pop();
        // console.log(res)
        fileList.pop()
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
      // if (!isLt2M) {
      //   this.$message.error("上传文件大小不能超过 500k!");
      // }
      return true;
    },
  }

};
</script>

<style scoped>
</style>

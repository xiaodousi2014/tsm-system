<template>
    <div id="myUploader">
        <el-form ref="form" label-width="130px">
            <el-form-item label="文件导入">
                <el-upload ref="upload" class="upload-demo" :auto-upload="false" action="string" :with-credentials="true" name="file" multiple :limit="1" :http-request="UploadImage" :show-file-list="true" :on-success="successful" :on-change="beforeAvatarUpload" :file-list="fileList">
                    <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer" style="text-align: center">
            <el-button @click="closeModal()">关 闭</el-button>
        </div>
    </div>
</template>

<script>
import Http from '@/api/siteManagemer'
export default {
    name: 'userPlanUpload',
    data() {
        return {
            sheetIndex: 1,
            fileList: [],
        }
    },
    watch: {},
    methods: {
        UploadImage(param, fileList) {
            const formData = new FormData()
            formData.append('file', param.file)
            let query = {
                file: formData,
            }

            query.url = `/site/schedule/import?sheetIndex=${this.sheetIndex}`
            Http.UploadImage(query)
                .then((res) => {
                    this.$message.success('上传成功')
                    this.fileList = []
                    this.closeModal()
                })
                .catch((res) => {
                    this.$message.error(res.msg || '系统异常')
                    this.fileList = []
                })
        },
        successful(res, file, fileList) {
            if (res.code == '0000') {
                this.fileList = []
                this.$message.success('上传成功')
            } else {
                this.fileList = []
                this.$message.error(res.msg || '系统异常')
            }
        },
        closeModal() {
            this.$emit('close')
        },
        beforeAvatarUpload(file) {
            const isLt2M = file.size / 1024 / 1024 < 5

            if (!isLt2M) {
                this.$message.error('上传文件大小不能超过 2MB!')
                return false
            }

            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            })
                .then(() => {
                    this.$refs.upload.submit()
                })
                .catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除',
                    })
                    this.fileList = []
                })
        },
    },
}
</script>

<style scoped></style>

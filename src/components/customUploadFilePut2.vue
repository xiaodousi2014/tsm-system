<template>
    <div id="myUploader">
        <el-form ref="form" label-width="130px" style="padding-top: 20px">
            <el-row v-for="(item, index) in uploadType" :key="index">
                <el-col :span="24">
                    <el-form-item :label="item.comment" v-if="item.type == 'picture'">
                        <el-upload ref="upload" :before-remove="deleteFileFun" class="upload-demo" action="string" :with-credentials="true" name="file" multiple :limit="1" :http-request="UploadImage1" :show-file-list="true" acceptType="image/*" :on-success="successful" :before-upload="beforeAvatarUpload1" :file-list="fileList[index]">
                            <el-button size="small" type="primary" @click="changeFileFun(item, index)">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip" style="width:300px"></div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item :label="item.comment" v-if="item.type == 'video'">
                        <el-upload ref="upload" :before-remove="deleteFileFun" class="upload-demo" action="string" :with-credentials="true" name="file" multiple :limit="1" :http-request="UploadImage2" :show-file-list="true" acceptType="audio/*,video/*" :on-success="successful" :before-upload="beforeAvatarUpload2" :file-list="fileList[index]">
                            <el-button size="small" type="primary" @click="changeFileFun(item, index)">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip" style="width:300px"></div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item :label="item.comment" v-if="item.type == 'attachment'">
                        <el-upload ref="upload" :before-remove="deleteFileFun" class="upload-demo" action="string" :with-credentials="true" name="file" multiple :limit="1" :http-request="UploadImage3" :show-file-list="true" acceptType="*" :on-success="successful" :file-list="fileList[index]">
                            <el-button size="small" type="primary" @click="changeFileFun(item, index)">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip" style="width:300px"></div>
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
import Http from '@/api/siteManagemer'
export default {
    name: 'myUploader',
    props: {
        url: {
            type: String,
            default: '',
        },
        id: {
            type: Number,
            default: '',
        },
        infoType: {
            type: String,
            default: '',
        },
        isMultiFiles: {
            type: Boolean,
            default: false,
        },
        uploadType: {
            type: Array,
            default: {},
        },
    },
    data() {
        return {
            fileList: [],
            field: '',
            changeFile: '',
            deleteList: {},
            fileName: '',
        }
    },
    watch: {},
    methods: {
        changeFileFun(val, index) {
            this.field = val.name
            this.changeFile = this.fileList[index]
        },
        deleteFileFun(file, fileList) {
            if (!this.deleteList[file.uid]) {
                return
            }
            let query = {
                id: this.id,
                infoType: this.infoType,
                field: this.deleteList[file.uid].name,
                isAttachment: this.deleteList[file.uid].isAttachment,
                isMultiFiles: this.deleteList[file.uid].isMultiFiles,
                file: this.deleteList[file.uid].file,
            }

            Http.deletefile(query)
                .then((res) => {
                    this.$message.success('删除成功')
                })
                .catch((res) => {
                    this.$message.error(res.msg || '系统异常')
                })
        },
        UploadImage1(param, fileList) {
            this.fileName = param.file.name
            this.deleteList[param.file.uid] = {
                name: this.field,
                isAttachment: 0,
                isMultiFiles: false,
                file: param.file.name,
            }

            const formData = new FormData()
            formData.append('file', param.file)
            let query = {
                file: formData,
            }

            query.url = `/common/uploadfile?id=${this.id}&field=${this.field}&infoType=${this.infoType}&isAttachment=0&isMultiFiles=false`
            Http.UploadImage(query)
                .then((res) => {
                    this.$message.success('上传成功')
                })
                .catch((res) => {
                    this.deleteList[param.file.uid] = ''
                    this.$message.error(res.msg || '系统异常')
                })
        },
        UploadImage2(param) {
            this.deleteList[param.file.uid] = {
                name: this.field,
                isAttachment: 0,
                isMultiFiles: true,
                file: param.file.name,
            }
            const formData = new FormData()
            formData.append('file', param.file)
            let query = {
                file: formData,
            }

            query.url = `/common/uploadfile?id=${this.id}&field=${this.field}&infoType=${this.infoType}&isAttachment=0&isMultiFiles=false`
            Http.UploadImage(query)
                .then((res) => {
                    this.$message.success('上传成功')
                })
                .catch((res) => {
                    this.deleteList[param.file.uid] = ''
                    this.$message.error(res.msg || '系统异常')
                })
        },
        UploadImage3(param) {
            this.deleteList[param.file.uid] = {
                name: this.field,
                isAttachment: 1,
                isMultiFiles: true,
                file: param.file.name,
            }
            const formData = new FormData()
            formData.append('file', param.file)
            let query = {
                file: formData,
            }

            query.url = `/common/uploadfile?id=${this.id}&field=${this.field}&infoType=${this.infoType}&isAttachment=1&isMultiFiles=true`
            Http.UploadImage(query)
                .then((res) => {
                    this.$message.success('上传成功')
                })
                .catch((res) => {
                    this.deleteList[param.file.uid] = ''
                    this.$message.error(res.msg || '系统异常')
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
            if (this.$refs.upload && this.$refs.upload.length) {
                this.$refs.upload.forEach((obj) => {
                    obj.clearFiles()
                })
            }
            this.$emit('close')
        },
        beforeAvatarUpload1(file) {
            const isImg = /^image\/(jpeg|png|jpg)$/.test(file.type)
            const isLt2M = file.size / 1024 / 1024 < 5

            if (!isImg) {
                this.$message.error('上传图片格式不对!')
                return
            }
            if (!isLt2M) {
                this.$message.error('上传文件大小不能超过 2MB!')
                return false
            }
        },
        beforeAvatarUpload2(file) {
            const isLt10M = file.size / 1024 / 1024 < 10
            if (['video/mp4', 'video/ogg', 'video/flv', 'video/avi', 'video/wmv', 'video/rmvb'].indexOf(file.type) == -1) {
                this.$message.error('请上传正确的视频格式!')
                return false
            }
            if (!isLt10M) {
                this.$message.error('上传视频大小不能超过 10MB!')
                return false
            }
        },
    },
}
</script>

<style scoped></style>

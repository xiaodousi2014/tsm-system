<template>
    <div id="customSearch">
        <el-form ref="forms" class="search-from" label-position="right" label-width="150px" :model="form">
            <el-row :gutter="10" style="margin-top: 20px">
                <el-col :md="8" :sm="12" :xs="24">
                    <el-form-item label="场地类型">
                        <el-select placeholder="请选择" v-model="form['site_type']" size="small" @change="getName">
                            <el-option v-for="(list, index) in option1" :key="index" :label="list.label" :value="list.value"> </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :md="8" :sm="12" :xs="24">
                    <el-form-item label="场地名">
                        <el-select placeholder="请选择" v-model="form['site_id']" size="small">
                            <el-option v-for="(list, index) in option2" :key="index" :label="list.site_name" :value="list.id"> </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
             <el-col :md="8" :sm="12" :xs="24" v-for="item in searchList" :key="item.name">
                    <el-form-item
                        :label="item.comment"
                        v-if="item.editable && (item.type == 'string' || item.type == 'int')&&!item.nullable"
                        :prop="item.name"
                        :rules="{
                            required: true,
                            message: `请输入${item.comment}`,
                            trigger: 'blur',
                        }"
                    >
                        <el-input size="small" v-model="form[item.name]" placeholder="请输入"></el-input>
                    </el-form-item>
                      <el-form-item
                        :label="item.comment"
                        v-if="item.editable && (item.type == 'string' || item.type == 'int')&&item.nullable"
                        :prop="item.name"
                    
                    >
                        <el-input size="small" v-model="form[item.name]" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item
                        :label="item.comment"
                        v-if="item.editable && (item.type == 'date' || item.type == 'datetime')&&!item.nullable"
                        :rules="{
                            required: true,
                            message: `请选择${item.comment}`,
                            trigger: 'change',
                        }"
                        :prop="item.name"
                    >
                        <el-date-picker style="width: 100%" v-model="form[item.name]" size="small" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"> </el-date-picker>
                    </el-form-item>
                      <el-form-item
                        :label="item.comment"
                        v-if="item.editable && (item.type == 'date' || item.type == 'datetime')&&item.nullable"
                       
                        :prop="item.name"
                    >
                        <el-date-picker style="width: 100%" v-model="form[item.name]" size="small" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"> </el-date-picker>
                    </el-form-item>
                    <el-form-item
                        :label="item.comment"
                        :prop="item.name"
                        :rules="{
                            required: true,
                            message: `请选择${item.comment}`,
                            trigger: 'change',
                        }"
                        v-if="item.editable && item.type == 'map'&&!item.nullable"
                    >
                        <el-select placeholder="请选择" v-model="form[item.name]" size="small">
                            <el-option v-for="(list, index) in setSearchList(item)" :key="index" :label="list.name" :value="list.id"> </el-option>
                        </el-select>
                    </el-form-item>
                      <el-form-item
                        :label="item.comment"
                        :prop="item.name"
                      
                        v-if="item.editable && item.type == 'map'&&item.nullable"
                    >
                        <el-select placeholder="请选择" v-model="form[item.name]" size="small">
                            <el-option v-for="(list, index) in setSearchList(item)" :key="index" :label="list.name" :value="list.id"> </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item
                        :label="item.comment"
                        :prop="item.name"
                      
                        v-if="item.editable && item.type == 'list'&&item.nullable"
                    >
                        <el-select placeholder="请选择" v-model="form[item.name]" size="small">
                            <el-option v-for="(list, index) in setSearchList2(item)" :key="index" :label="list" :value="list"> </el-option>
                        </el-select>
                    </el-form-item>
                      <el-form-item
                        :label="item.comment"
                        :prop="item.name"
                        :rules="{
                            required: true,
                            message: `请选择${item.comment}`,
                            trigger: 'change',
                        }"
                        v-if="item.editable && item.type == 'list'&&!item.nullable"
                    >
                        <el-select placeholder="请选择" v-model="form[item.name]" size="small">
                            <el-option v-for="(list, index) in setSearchList2(item)" :key="index" :label="list" :value="list"> </el-option>
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
            </el-row>
            <div class="search-button-block" style="margin-top: 20px">
                <el-button size="small" @click="onSumit()">保 存</el-button>
                <el-button size="small" @click="onCancel()">取 消</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
import Http from '@/api/siteManagemer'
export default {
    name: 'customSearch',
    props: {
        searchList: {
            type: Array,
            default: [],
        },
        form: {
            type: Object,
            default: function() {
                return {}
            },
        },
        url: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            // fileList: [],
            queryName: '',
            option1: [],
            option2: [],
            sites: [],
        }
    },
    mounted() {
        this.getType()
        this.getName(this.form.site_type)
    },
    methods: {
        getType() {
            Http.scheduleType()
                .then((res) => {
                    if (res.code == '0000') {
                        Object.keys(res.data).map((key) => {
                            this.option1.push({
                                label: res.data[key],
                                value: key,
                            })
                        })
                    }
                })
                .catch((res) => {
                    this.$message.error(res.msg || '系统异常')
                })
        },
        getName(data) {
            Http.scheduleName({
                site_type: data,
            })
                .then((res) => {
                    if (res.code == '0000') {
                        this.sites = res.data
                        this.option2 = res.data
                    }
                })
                .catch((res) => {
                    this.$message.error(res.msg || '系统异常')
                })
        },
        onProgress(event) {
            this.queryName = event
        },
        handleSuccessful(res, file, fileList) {
            if (res.code == '0000') {
                console.log(res)
                fileList[fileList.length - 1].code = this.queryName
                console.log(fileList)
                console.log(this.form[this.queryName])
                let query = JSON.parse(this.form[this.queryName]).files.push(file.name)
                console.log(query)
                this.$message.success('上传成功')
            } else {
                // console.log(res)
                this.$message.error(res.msg || '系统异常')
            }
        },
        onCancel() {
            this.$emit('close')
        },
        handleRemove(file) {
            if (!file) {
                return
            }
            let query = JSON.parse(this.form[file.code])
            query.files = query.files.filter((item) => {
                return item != file.name
            })
            this.form[file.code] = JSON.stringify(query)
        },
        setAttachmentList(list, name) {
            if (list) {
                let fileList = []
                // console.log(JSON.parse(list).files)
                JSON.parse(list).files.forEach((item) => {
                    let query = {
                        name: item,
                        url: item,
                        code: name,
                    }
                    fileList.push(query)
                })
                console.log(fileList)
                return fileList
                // return JSON.parse(list).files;
            }
            return []
        },
        setSearchList(event) {
            let list = []
            this.searchList.forEach((item) => {
                if (item.name == event.name) {
                    if (!item.itemdata) {
                        return
                    }
                    Object.entries(JSON.parse(item.itemdata)).forEach((item) => {
                        let query = {
                            id: Number(item[0]),
                            name: item[1],
                        }
                        list.push(query)
                    })
                }
            })
            return list
        },
        setSearchList2(event) {
            let list = []
            this.searchList.forEach((item) => {
                if (item.name == event.name) {
                    if (item.itemdata && item.itemdata.length > 0) {
                        list = item.itemdata.split(',')
                    }
                }
            })
            return list
        },
        onSumit() {
            this.$refs['forms'].validate((valid) => {
                if (valid) {
                    for (let index = 0; index < this.sites.length; index++) {
                        if (this.sites[index].id == this.form.site_id) {
                            this.form.site_name = this.sites[index].site_name
                        }
                    }

                    this.$emit('listEdit', this.form)
                } else {
                    return false
                }
            })
        },
    },
}
</script>

<style lang="less" scoped></style>

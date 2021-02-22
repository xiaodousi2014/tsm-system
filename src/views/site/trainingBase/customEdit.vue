<template>
    <div id="customSearch">
        <el-form class="search-from" label-position="right" label-width="150px" :model="form">
            <el-row :gutter="10">
                <div v-for="item in searchList" :key="item.name">
                    <el-col :md="8" :sm="12" :xs="24">
                        <el-form-item :label="item.comment" v-if="item.editable && (item.type == 'string' || item.type == 'date' || item.type == 'datetime' || item.type == 'int' || item.type == 'map' || item.type == 'list')">
                            <el-input v-if="item.type == 'string'" size="small" v-model="form[item.name]" placeholder="请输入"></el-input>

                            <el-date-picker style="width: 100%" v-if="item.type == 'date' || item.type == 'datetime'" v-model="form[item.name]" size="small" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"> </el-date-picker>

                            <el-input v-if="item.type == 'int'" type="number" size="small" v-model.number="form[item.name]" placeholder="请输入"></el-input>

                            <el-select placeholder="请选择" v-model="form[item.name]" size="small" v-if="item.type == 'map'">
                                <el-option v-for="(list, index) in setSearchList(item)" :key="index" :label="list.name" :value="list.id"> </el-option>
                            </el-select>

                            <el-select placeholder="请选择" v-model="form[item.name]" size="small" v-if="item.type == 'list'">
                                <el-option v-for="(list, index) in setSearchList2(item)" :key="index" :label="list" :value="list"> </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col v-if="item.type == 'json'">
                        <el-form-item :label="item.comment">
                            <div v-for="(item2, index) in jsonData" :key="index">
                                <el-input size="small" style="width: 21%; margin-right: 20px;" v-model="item2.key" placeholder="请输入"></el-input>
                                <el-input size="small" style="width: 21%; margin-right: 20px;" v-model="item2.value" placeholder="请输入"></el-input>

                                <div style="display: inline-block;" v-if="index + 1 == jsonData.length">
                                    <el-button type="primary" size="small" icon="el-icon-plus" @click="addSearch(index)"></el-button>
                                    <el-button size="small" icon="el-icon-minus" @click="reduceSearch(index)" v-if="index != 0"></el-button>
                                </div>
                            </div>
                        </el-form-item>
                    </el-col>
                </div>
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
            queryName: '',
            jsonData: [
                {
                    key: '',
                    value: '',
                },
            ],
        }
    },
    mounted() {
        let budget = {
            key: '',
            value: '',
        }

        if (this.form.budget) {
            budget = JSON.parse(this.form.budget)

            this.jsonData = []

            Object.keys(budget).map((key) => {
                this.jsonData.push({
                    key: key,
                    value: budget[key]
                })
            })
        }
    },
    methods: {
        // 删除一个搜索条件
        reduceSearch(index) {
            this.jsonData.splice(index, 1)
        },
        // 添加搜索条件
        addSearch(index) {
            let query = {
                key: '',
                value: '',
            }
            this.jsonData.splice(index + 1, 0, query)
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
            this.searchList.forEach((e) => {
                if (this.form[e.name] && e.type == 'init') {
                    this.form[e.name] = 0
                }
            })

            let jsonResult = {}

            for (let index = 0; index < this.jsonData.length; index++) {
                if (this.jsonData[index].key) {
                    jsonResult[this.jsonData[index].key] = this.jsonData[index].value
                }
            }

            this.form.budget = JSON.stringify(jsonResult)
            this.$emit('listEdit')
        },
    },
}
</script>

<style lang="less" scoped></style>

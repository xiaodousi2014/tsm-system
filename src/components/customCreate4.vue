<template>
    <div id="customSearch">
        <el-form ref="forms" class="search-from" label-position="right" label-width="150px" :model="form">
            <el-row :gutter="10">
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
    name: 'customCreate3',
    props: {
        searchList: {
            type: Array,
            default: [],
        },
        infoType: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            form: {},
            option2: [],
            sites: [],
        }
    },
    watch: {},
    mounted() {
        this.form = {}

        this.getName()
    },
    methods: {
        getName() {
            Http.scheduleName({
                site_type: this.infoType,
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
        onCancel() {
            this.$emit('close')
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
            this.$refs['forms'].validate((valid) => {
                if (valid) {
                    this.searchList.forEach((e) => {
                        if (!this.form[e.name] && e.type == 'int') {
                            this.form[e.name] = 0
                        } else if (!this.form[e.name]) {
                            this.form[e.name] = ''
                        }
                    })

                    for (let index = 0; index < this.sites.length; index++) {
                        if (this.sites[index].id == this.form.site_id) {
                            this.form.site_name = this.sites[index].site_name
                        }
                    }

                    this.$emit('listCreate', this.form)
                } else {
                    return false
                }
            })
        },
        onSearch() {
            console.log(this.checkedSearchList)
            this.$emit('Search', this.checkedSearchList)
        },
        // 删除一个搜索条件
        reduceSearch(index) {
            this.checkedSearchList.splice(index, 1)
        },
        // 添加搜索条件
        addSearch(index) {
            let query = {
                col_type: '',
                col_name: '',
                indexType: 1,
                value: '',
                relation: 1,
            }
            this.checkedSearchList.splice(index + 1, 0, query)
        },
        typeChange(index, event) {
            console.log(event)
            this.searchList.forEach((item) => {
                if (item.name == event) {
                    this.checkedSearchList[index].col_type = item.type
                    this.checkedSearchList[index].col_name = event
                }
            })
        },
    },
}
</script>

<style lang="less" scoped></style>

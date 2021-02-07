<!--属性维护组件-->
<template>
    <div class="content_box">
        <el-row>
            <el-col :span="10">
                <el-divider content-position="left">可维护属性字段</el-divider>
                <div v-for="field in field_data" :key="field.name" :class="['field_box', fieldInfo.comment === field.comment && 'field_box_active']" @click="edit(field)">
                    {{ field.comment }}
                </div>
            </el-col>
            <el-col :span="11" :offset="1">
                <el-divider content-position="left">属性 - {{ fieldInfo.comment }}</el-divider>
                <el-input size="small" v-model="value" style="width: 120px; margin-bottom: 8px" :disabled="!fieldInfo || !fieldInfo.name" />
                <el-button size="small" @click="add">添加</el-button><br />
                <div v-for="(field, index) in fieldInfo.itemdata" :key="field" class="field_box">
                    {{ field }}
                    <i class="el-icon-delete delete_icon" @click="deletefie(index)" />
                </div>
                <el-button style="margin-top: 10px" type="primary" size="small" @click="submit()" :disabled="!fieldInfo.itemdata || fieldInfo.itemdata.length == 0">提交</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Common from '@/api/common'

export default {
    components: {},
    props: {
        tableName: {
            type: String, // 表名 表名要用d_xxx这样,如 d_docs
            default: '',
        },
    },
    data() {
        return {
            field_data: [],
            value: '',
            fieldInfo: {},
        }
    },
    computed: {},
    watch: {},
    created() {
        this.init()
    },
    mounted() {},
    methods: {
        init() {
            Common.attrdata(this.tableName).then((res) => {
                if (res.code === '0000' && res.data && res.data.field_data) {
                    this.field_data = res.data.field_data
                }
            })
        },
        edit(field) {
            console.log(field, typeof field.itemdata)
            this.fieldInfo = {}
            let itemdata = []
            if (!Array.isArray(field.itemdata)) {
                itemdata = field.itemdata && field.itemdata.length > 0 ? field.itemdata.split(',') : []
            } else {
                itemdata = field.itemdata
            }
            console.log(field, itemdata)
            this.fieldInfo = field
            this.$set(this.fieldInfo, 'itemdata', itemdata)
        },
        add() {
            if (!this.fieldInfo.itemdata || !this.value) {
                return
            }
            if (this.fieldInfo.itemdata) {
                if (this.fieldInfo.itemdata.indexOf(this.value) > -1) {
                    this.$message.error('已经存在')
                    return
                }
            }
            this.fieldInfo.itemdata.push(this.value)
            this.value = ''
            // this.submit()
        },
        deletefie(key) {
            console.log(key)
            this.fieldInfo.itemdata.splice(key, 1)
            // this.submit()
        },
        submit() {
            let params = {
                infoType: this.tableName,
                field: this.fieldInfo.name,
                data: this.fieldInfo.itemdata.join(','),
            }
            console.log(params)
            Common.puAattrdata(params).then((res) => {
                if (res.code === '0000') {
                    this.init()
                }
            })
        },
    },
}
</script>

<style lang="less" scoped>
.field_box {
    width: 100%;
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    padding: 0 10px;
    position: relative;
    border: 1px solid #eeeeee;

    &_active {
        background: #3d85cc;
        color: #ffffff;
    }

    .delete_icon {
        position: absolute;
        top: 12px;
        right: 10px;
        font-size: 15px;
        cursor: pointer;
    }
}
</style>

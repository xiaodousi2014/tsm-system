<!--属性维护组件-->
<template>
    <div class="content_box">
        <el-row>
            <el-col :span="6">
                <el-divider content-position="left">场地类型</el-divider>
                <el-select v-model="tableName" placeholder="请选择场地类型" @change="init">
                    <el-option v-for="item in tableNameOption" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                </el-select>
            </el-col>
            <el-col :span="8" :offset="1">
                <el-divider content-position="left">可维护属性字段</el-divider>
                <div v-for="field in field_data" :key="field.name" :class="['field_box', fieldInfo.comment === field.comment && 'field_box_active']" @click="edit(field)">
                    {{ field.comment }}
                </div>
            </el-col>
            <el-col :span="8" :offset="1">
                <el-divider content-position="left">属性 - {{ fieldInfo.comment }}</el-divider>
                <el-input size="small" v-model="value" style="width: 120px; margin-bottom: 8px" :disabled="!fieldInfo || !fieldInfo.name" />
                <el-button size="small" @click="add">添加</el-button><br />
                <div v-for="(field, index) in fieldInfo.itemdata" :key="field" class="field_box">
                    {{ field }}
                    <i class="el-icon-delete delete_icon" @click="deletefie(index)" />
                </div>
                <el-button style="margin-top: 10px" type="primary" size="small" @click="submit()" :disabled="!fieldInfo.itemdata || fieldInfo.itemdata.length == 0 || disabledflag">提交</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Common from '@/api/common'
import Utils from '@/utils/utils'

export default {
    components: {},
    data() {
        return {
            tableName: '',
            tableNameOption: [
                {
                    value: 't_training_base',
                    label: '训练基地',
                },
                {
                    value: 't_training_sites',
                    label: '训练场地',
                },
                {
                    value: 't_barracks',
                    label: '保障用房',
                },
                {
                    value: 't_facilities',
                    label: '配置设施',
                },
                {
                    value: 't_bastion',
                    label: '阵地工事',
                },
                {
                    value: 't_roadpipe',
                    label: '道路管网',
                },
                {
                    value: 't_officer_centre',
                    label: '军官训练中心',
                },
                {
                    value: 't_teach_org',
                    label: '教导机构',
                },
                {
                    value: 't_regular_classroom',
                    label: '普通教室',
                },
                {
                    value: 't_profession_centre',
                    label: '专业训练中心',
                },
                {
                    value: 't_library',
                    label: '图书馆',
                },
                {
                    value: 't_military_sports_hall',
                    label: '军体馆',
                },
                {
                    value: 't_studio',
                    label: '演播室',
                },
                {
                    value: 't_labs',
                    label: '实验室',
                },
            ],
            field_data: [],
            value: '',
            fieldInfo: {},
            disabledflag: true,
        }
    },
    computed: {},
    watch: {},
    created() {
        // this.init()
    },
    mounted() {},
    methods: {
        initParam() {
            this.field_data = []
            this.value = ''
            this.fieldInfo = {}
            this.disabledflag = true
        },
        init() {
            this.initParam()
            console.log(this.tableName)
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
                itemdata = Utils.deepClone(field.itemdata)
            }
            console.log(field, itemdata)
            this.fieldInfo = Utils.deepClone(field)
            this.$set(this.fieldInfo, 'itemdata', itemdata)
            this.disabledflag = true
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
            this.disabledflag = false
            // this.submit()
        },
        deletefie(key) {
            console.log(key)
            this.disabledflag = false
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

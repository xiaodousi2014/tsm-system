<template>
    <div id="customSearch">
        <el-form class="search-from" label-position="right" label-width="150px" :model="form">
            <el-row :gutter="10" style="margin-top: 20px" justify="start">
                <div v-for="item in searchList" :key="item.name">
                    <el-col style="margin-top: 20px" :md="8" :sm="12" :xs="24" v-if="item.display">
                        <el-checkbox v-model="form[item.name]">{{ item.comment }}</el-checkbox>
                    </el-col>
                </div>
            </el-row>
            <div class="search-button-block" style="margin-top: 20px">
                <el-button size="small" @click="savePreferences()">保 存</el-button>
                <el-button size="small" @click="close()">取 消</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
import Http from '@/api/common'
export default {
    name: 'customSearch',
    props: {
        infoType: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            form: {},
            checked: false,
            searchList: [],
        }
    },
    watch: {},
    mounted() {
        this.selectPreferences()
    },
    methods: {
        selectPreferences() {
            this.filterData = []
            Http.preferencesSelect(this.infoType)
                .then((res) => {
                    if (res.code == '0000') {
                        this.searchList = res.data.columns
                    } else {
                        this.searchList = []
                    }
                })
                .catch((res) => {
                    this.$message.error(res.msg || '系统异常')
                })
        },
        savePreferences() {
            Object.keys(this.form).map((key) => {
                this.searchList.forEach((e) => {
                    if (key == e.name) {
                        e.display = this.form[key]
                    }
                })
            })

            let query = {
                tbl_name: this.infoType,
                t_data: this.searchList,
            }

            Http.preferencesSave(query)
                .then((res) => {
                    this.$message.success('保存成功')

                    this.closeSave()
                })
                .catch((res) => {
                    this.$message.error(res.msg || '系统异常')
                })
        },

        close() {
            this.searchList = []
            this.$emit('close')
        },

        closeSave() {
            this.searchList = []
            this.$emit('closeSave')
        },
    },
}
</script>

<style lang="less" scoped></style>

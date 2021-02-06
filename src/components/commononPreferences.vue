<template>
    <div id="customSearch">
        <el-form class="search-from" label-position="right" label-width="150px" :model="form">
            <el-row :gutter="10" style="margin-top: 20px">
                <el-col :md="8" :sm="12" :xs="24" v-for="item in searchList" :key="item.name">
                    <el-form-item :label="item.comment" v-if="item.display">
                        <el-checkbox v-model="item.name">备选项</el-checkbox>
                    </el-form-item>
                </el-col>
            </el-row>
            <div class="search-button-block" style="margin-top: 20px">
                <el-button size="small" @click="savePreferences()">保 存</el-button>
                <el-button size="small" @click="closeModal()">取 消</el-button>
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
        infoType: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            form: {},
            checked: false,
        }
    },
    watch: {},
    methods: {
        selectPreferences() {
            Http.preferencesSelect('')
                .then((res) => {})
                .catch((res) => {
                    this.$message.error(res.msg || '系统异常')
                })
        },
        savePreferences() {
            let query = {
                tbl_name: this.infoType,
                t_data: this.infoType,
            }

            Http.preferencesSave(query)
                .then((res) => {
                    this.$message.success('保存成功')

                    this.closeModal()
                })
                .catch((res) => {
                    this.$message.error(res.msg || '系统异常')
                })
        },

        closeModal() {
            this.searchList = []
            this.$emit('close')
        },
    },
}
</script>

<style lang="less" scoped></style>

<template>
    <div class="user_plan">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <div class="user_plan_day" v-if="isList">
                <div style="text-align: right;margin-top: -20px">
                    <el-button class="btnSty" @click="onCreate()">新增</el-button>
                    <el-button class="btnSty" @click="onEdit()">编辑</el-button>
                    <el-button class="btnSty" @click="onDelete()">删除</el-button>
                    <el-button class="btnSty" @click="onTemplateDown()">导入模板下载</el-button>
                    <el-button class="btnSty" @click="onUploadFile()">导入</el-button>
                    <el-button type="primary" @click="dayListTable()">列表显示</el-button>
                    <el-button type="primary" @click="dayListTable('default')">汇总图显示</el-button>
                </div>

                <custom-table-select :list="tableAllIist"></custom-table-select>
                <custom-table :tableAllIist="tableAllIist" :tableData="tableData" @selectTableList="selectTableList" @getAttachFile="getAttachFile"></custom-table>
                <!-- 分页 -->
                <div class="pagination">
                    <Pagination ref="Pagination" @getSizeChange="getSizeChange" @getCurrentChange="getCurrentChange" :pagination="query" :total="total" />
                </div>
            </div>

            <el-tab-pane label="日计划" name="day">
                <div class="user_plan_day">
                    <div class="user_plan_day_default_table" v-if="!isList">
                        <el-table border id="el-table" style="width: 100%" :data="tableDataDefault" :cell-class-name="rowClass">
                            <template v-for="(item, index) in tableDataDefaultColumn">
                                <el-table-column header-align="center" :key="index" :prop="item.code" :label="item.name"> </el-table-column>
                            </template>
                        </el-table>
                    </div>
                    <div class="user_plan_day_total_table">
                        <!-- <custom-table-select :list="tableAllIist"></custom-table-select>
                        <custom-table :tableAllIist="tableAllIist" :tableData="tableData"></custom-table> -->
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="周计划" name="week">
                <div class="user_plan_week">
                    <div class="user_plan_day_default_table" v-if="!isList">
                        <el-table border id="el-table" style="width: 100%" :data="tableDataDefault" :cell-class-name="rowClass" :span-method="objectSpanMethod">
                            <el-table-column prop="a" label="使用场地" width="180"> </el-table-column>
                            <el-table-column prop="b" label="星期一"> </el-table-column>
                            <el-table-column prop="c" label="星期二"> </el-table-column>
                            <el-table-column prop="d" label="星期三"> </el-table-column>
                            <el-table-column prop="e" label="星期四"> </el-table-column>
                            <el-table-column prop="f" label="星期五"> </el-table-column>
                            <el-table-column prop="g" label="星期六"> </el-table-column>
                            <el-table-column prop="h" label="星期日"> </el-table-column>
                            <el-table-column prop="i" label="本周使用时间（H）"> </el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="月计划" name="month">
                <div class="user_plan_month">
                    <div class="user_plan_day_default_table" v-if="!isList">
                        <el-table border id="el-table" style="width: 100%" :data="tableDataDefault" :cell-class-name="rowClass">
                            <el-table-column prop="a" label="使用场地" width="180"> </el-table-column>
                            <el-table-column prop="b" label="第一周"> </el-table-column>
                            <el-table-column prop="c" label="第二周"> </el-table-column>
                            <el-table-column prop="d" label="第三周"> </el-table-column>
                            <el-table-column prop="e" label="第四周"> </el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="学期计划" name="year">
                <div class="user_plan_semester">
                    <div class="user_plan_day_default_table" v-if="!isList">
                        <el-table border id="el-table" style="width: 100%" :data="tableDataDefault" :cell-class-name="rowClass">
                            <el-table-column prop="a" label="使用场地" width="180"> </el-table-column>
                            <el-table-column prop="b" label="第一月"> </el-table-column>
                            <el-table-column prop="c" label="第二月"> </el-table-column>
                            <el-table-column prop="d" label="第三月"> </el-table-column>
                            <el-table-column prop="e" label="第四月"> </el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>

        <el-dialog title="新增" v-if="createModal" :visible.sync="createModal" width="1100px">
            <custom-create @close="close" :searchList="searchList" @listCreate="listCreate"></custom-create>
        </el-dialog>
        <el-dialog title="编辑" v-if="editModal" :visible.sync="editModal" width="1100px">
            <custom-edit @close="close" :searchList="searchList" :form="multipleSelectionInfo" @listEdit="listEdit"></custom-edit>
        </el-dialog>

        <el-dialog title="导入" v-if="userPlanUploadMode" :visible.sync="userPlanUploadMode" width="500px">
            <user-plan-upload @close="close"></user-plan-upload>
        </el-dialog>
    </div>
</template>

<script>
import customTableSelect from '@/components/customTableSelect'
import customTable from '@/components/customTable'
import userPlanUpload from './upload'

import Pagination from '@/components/customPagination'
import Http from '@/api/siteManagemer'
import customCreate from '@/components/customCreate2'
import customEdit from '@/components/customEdit2'

export default {
    name: 'UsePlan',
    components: {
        customTableSelect,
        customTable,
        Pagination,
        customCreate,
        customEdit,
        userPlanUpload,
    },
    data() {
        return {
            infoType: 'd_training_site_schedule',
            userPlanUploadMode: false,
            isList: true,
            activeName: '',
            query: {
                infoType: 'd_training_site_schedule',
                orderField: 'id',
                orderOrient: '2',
                indexArray: [],
                pageNum: 1,
                pageCount: 10,
            },
            total: 0,
            multipleSelection: [],
            multipleSelectionInfo: {},
            exportModal: false,
            createModal: false,
            editModal: false,
            tableDataDefault: [],
            tableDataDefaultColumn: [],
            searchList: [],
            tableData: [],
            tableAllIist: [],
        }
    },
    methods: {
        listCreate(event) {
            event.t_training_base = this.infoType
            event.site_type = this.infoType
            event.base_name = ''
            Http.addData(event)
                .then((res) => {
                    if (res.code == '0000') {
                        this.$message.success('创建成功！')
                        this.close(true)
                    }
                })
                .catch((res) => {
                    this.$message.error(res.msg || '系统异常')
                })
        },
        onCreate() {
            this.createModal = true
        },
        // 编辑
        onEdit() {
            if (!this.multipleSelection.length) {
                this.$message.warning('请选择要编辑的数据列！')
                return
            }
            if (this.multipleSelection.length > 1) {
                this.$message.warning('编辑数据列只能选择一条！')
                return
            }
            this.editModal = true
        },
        listEdit() {
            let params = JSON.parse(JSON.stringify(this.multipleSelectionInfo))

            params.site_type = this.infoType
            Http.modifyPlan(params)
                .then((res) => {
                    if (res.code == '0000') {
                        this.$message.success('编辑成功！')
                        this.close(true)
                    }
                })
                .catch((res) => {
                    this.$message.error(res.msg || '系统异常')
                })
        },
        // 删除
        onDelete() {
            if (!this.multipleSelection.length) {
                this.$message.warning('请选择要删除的数据列！')
                return
            }
            this.$confirm('此操作将删除该记录, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            })
                .then(() => {
                    this.deleteSure()
                })
                .catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除',
                    })
                })
        },
        deleteSure() {
            Http.deleteListPlan({
                ids: this.multipleSelection,
                site_type: this.infoType,
            })
                .then((res) => {
                    if (res.code == '0000') {
                        this.$message.success('删除成功！')
                        this.multipleSelection = []
                        this.getSitCommonData()
                    }
                })
                .catch((res) => {
                    this.$message.error(res.msg || '系统异常')
                })
        },
        rowClass({ row, column, rowIndex, columnIndex }) {
            if (rowIndex === 1 && columnIndex === 4) {
                return 'table_td_color'
            }
        },
        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
                if (rowIndex % 2 === 0) {
                    return {
                        rowspan: 2,
                        colspan: 1,
                    }
                } else {
                    return {
                        rowspan: 0,
                        colspan: 0,
                    }
                }
            }
        },
        dayListTable(val) {
            if (val) {
                this.isList = false
            } else {
                this.activeName = ''
                this.isList = true
            }
            this.query.pageNum = 1
        },
        handleClick(tab, event) {
            console.log(tab, event)
            this.isList = false
        },
        getSitCommonList() {
            Http.getSitCommonList({
                infoType: this.infoType,
            })
                .then((res) => {
                    if (res.code == '0000') {
                        if (res.data.filter.length) {
                            let list = res.data.filter.filter((item) => {
                                return item.display == true
                            })
                            this.searchList = list
                        }
                    }
                })
                .catch((res) => {
                    this.$message.error(res.msg || '系统异常')
                })
        },
        getSitCommonData() {
            Http.getSitCommonData(this.query)
                .then((res) => {
                    if (res.code == '0000') {
                        this.tableData = []
                        this.total = 0
                        this.tableAllIist = res.data.columns
                        if (res.data.searchList.length) {
                            this.tableData = res.data.searchList
                            this.total = res.page.page_total
                        } else {
                            this.tableData = []
                            this.total = 0
                        }
                    }
                })
                .catch((res) => {
                    this.$message.error(res.msg || '系统异常')
                })
        },
        // table选中
        selectTableList(list) {
            let query = []
            list.forEach((item) => {
                query.push(item.id)
            })
            this.multipleSelection = query
            this.multipleSelectionInfo = list[0]
        },
        getAttachFile(query) {
            const link = document.createElement('a')
            Http.getAttachFile({
                id: query.row.id,
                infoType: this.infoType,
                file: query.file,
            })
                .then((res) => {
                    let blob = new Blob([res], { type: 'application/octet-stream' }) // res就是接口返回的文件流了
                    let objectUrl = URL.createObjectURL(blob)
                    link.href = objectUrl
                    link.download = query.file
                    link.click()
                    URL.revokeObjectURL(objectUrl)
                })
                .catch((res) => {
                    this.$message.error(res.msg || '系统异常')
                })
        },
        onUploadFile() {
            this.userPlanUploadMode = true
        },
        onTemplateDown() {
            window.open(`${process.env.VUE_APP_API_URL}/common/attachment/download_TemplateFile?infoType=${this.infoType}`)
        },
        close(flag) {
            this.userPlanUploadMode = false
            this.exportModal = false
            this.createModal = false

            if (flag) {
                this.getSitCommonData();
            }
        },
        getCurrentChange(val) {
            this.query.pageNum = val
            this.getSitCommonData()
        },
        getSizeChange(val) {
            this.query.pageCount = val
            this.getSitCommonData()
        },
    },
    mounted() {
        this.getSitCommonList()

        this.getSitCommonData()
    },
}
</script>
<style>
.table_td_color {
    background: #67c23a;
}
</style>
<style scoped lang="less">
.user_plan {
    padding: 16px;
    margin: 20px;
    background: #fff;

    .el-button {
        margin-top: 20px;
    }

    /deep/ :focus {
        outline: 0;
    }

    /deep/ .el-drawer__body {
        height: 100vh;
        overflow: auto;
    }

    /deep/ .el-drawer__footer {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 20px;
    }

    .user_plan_day_default_table {
        padding: 20px 0;
    }

    .user_plan_day_btn {
        text-align: right;
    }
}
</style>

<template>
    <div class="user_plan">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <div class="user_plan_day">
                <div style="text-align: right;margin-top: -20px">
                    <el-button :type="primary ? 'primary' : ''" @click="dayListTable()">列表显示</el-button>
                    <el-button :type="!primary ? 'primary' : ''" @click="dayListTable('default')">汇总图显示</el-button>

                    <div v-if="isList">
                        <el-button class="btnSty" @click="onCreate()">新增</el-button>
                        <el-button class="btnSty" @click="onEdit()">编辑</el-button>
                        <el-button class="btnSty" @click="onDelete()">删除</el-button>
                        <el-button class="btnSty" @click="onTemplateDown()">导入模板下载</el-button>
                        <el-button class="btnSty" @click="onUploadFile()">导入</el-button>
                    </div>
                </div>

                <div v-if="isList">
                    <custom-table-select :list="tableAllIist"></custom-table-select>
                    <custom-table :tableAllIist="tableAllIist" :tableData="tableData" @selectTableList="selectTableList" @getAttachFile="getAttachFile"></custom-table>
                    <!-- 分页 -->
                    <div class="pagination">
                        <Pagination ref="Pagination" @getSizeChange="getSizeChange" @getCurrentChange="getCurrentChange" :pagination="query" :total="total" />
                    </div>
                </div>
            </div>

            <el-tab-pane label="日计划" name="day" :disabled="isList">
                <div class="user_plan_day">
                    <div class="user_plan_day_default_table" v-if="!isList">
                        <el-table :cell-class-name="cellClassName" border :span-method="arraySpanMethod" class="week_table" style="width: 100%" :data="tableData2">
                            <el-table-column prop="site_name" label="使用场地" width="200px"></el-table-column>
                            <el-table-column label="08：00" prop="1">
                                <template>{{ '' }}</template>
                            </el-table-column>
                            <el-table-column label="09：00">
                                <template>{{ '' }}</template>
                            </el-table-column>
                            <el-table-column label="09：00" prop="2">
                                <template>{{ '' }}</template>
                            </el-table-column>
                            <el-table-column label="10：00">
                                <template>{{ '' }}</template>
                            </el-table-column>
                            <el-table-column label="10：00" prop="3">
                                <template>{{ '' }}</template>
                            </el-table-column>
                            <el-table-column label="11：00"></el-table-column>
                            <el-table-column label="11：00" prop="4">
                                <template>{{ '' }}</template>
                            </el-table-column>
                            <el-table-column label="12：00"></el-table-column>
                            <el-table-column label="14：00" prop="5">
                                <template>{{ '' }}</template>
                            </el-table-column>
                            <el-table-column label="15：00"></el-table-column>
                            <el-table-column label="15：00" prop="6">
                                <template>{{ '' }}</template>
                            </el-table-column>
                            <el-table-column label="16：00"></el-table-column>
                            <el-table-column label="16：00" prop="7">
                                <template>{{ '' }}</template>
                            </el-table-column>
                            <el-table-column label="17：00"></el-table-column>
                            <el-table-column label="17：00" prop="8">
                                <template>{{ '' }}</template>
                            </el-table-column>
                            <el-table-column label="18：00"></el-table-column>
                            <el-table-column label="19：00" prop="9">
                                <template>{{ '' }}</template>
                            </el-table-column>
                            <el-table-column label="20：00"></el-table-column>
                            <el-table-column label="20：00" prop="10">
                                <template>{{ '' }}</template>
                            </el-table-column>
                            <el-table-column label="21：00">
                                <template>{{ '' }}</template>
                            </el-table-column>
                            <el-table-column prop="total_lasttime" label="系统建立起使用时间（h）" width="200px"></el-table-column>
                            <el-table-column prop="year_lasttime" label="今年起场地使用时间（h）" width="200px"></el-table-column>
                            <el-table-column prop="term_lasttime" label="本学期场地使用时间（h）" width="200px"></el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="周计划" name="week" :disabled="isList">
                <div class="user_plan_week">
                    <div class="user_plan_day_default_table" v-if="!isList">
                        <el-table :cell-class-name="cellClassName" class="week_table" style="width: 100%" :data="tableData2">
                            <el-table-column prop="site_name" label="使用场地" width="150px"></el-table-column>
                            <el-table-column label="星期一" width="50px">
                                <template>
                                    <el-table-column prop="1-1" label="上午">
                                        <template>{{ '' }}</template>
                                    </el-table-column>
                                    <el-table-column prop="1-2" label="下午">
                                        <template>{{ '' }}</template>
                                    </el-table-column>
                                </template>
                            </el-table-column>
                            <el-table-column label="星期二">
                                <template>
                                    <el-table-column prop="2-1" label="上午">
                                        <template>{{ '' }}</template>
                                    </el-table-column>
                                    <el-table-column prop="2-2" label="下午">
                                        <template>{{ '' }}</template>
                                    </el-table-column>
                                </template>
                            </el-table-column>
                            <el-table-column label="星期三">
                                <template>
                                    <el-table-column prop="3-1" label="上午">
                                        <template>{{ '' }}</template>
                                    </el-table-column>
                                    <el-table-column prop="3-2" label="下午">
                                        <template>{{ '' }}</template>
                                    </el-table-column>
                                </template>
                            </el-table-column>
                            <el-table-column label="星期四">
                                <template>
                                    <el-table-column prop="4-1" label="上午">
                                        <template>{{ '' }}</template>
                                    </el-table-column>
                                    <el-table-column prop="4-2" label="下午">
                                        <template>{{ '' }}</template>
                                    </el-table-column>
                                </template>
                            </el-table-column>
                            <el-table-column label="星期五">
                                <template>
                                    <el-table-column prop="5-1" label="上午">
                                        <template>{{ '' }}</template>
                                    </el-table-column>
                                    <el-table-column prop="5-2" label="下午">
                                        <template>{{ '' }}</template>
                                    </el-table-column>
                                </template>
                            </el-table-column>
                            <el-table-column label="星期六">
                                <template>
                                    <el-table-column prop="6-1" label="上午">
                                        <template>{{ '' }}</template>
                                    </el-table-column>
                                    <el-table-column prop="7-2" label="下午">
                                        <template>{{ '' }}</template>
                                    </el-table-column>
                                </template>
                            </el-table-column>
                            <el-table-column label="星期日">
                                <template>
                                    <el-table-column prop="7-1" label="上午">
                                        <template>{{ '' }}</template>
                                    </el-table-column>
                                    <el-table-column prop="7-2" label="下午">
                                        <template>{{ '' }}</template>
                                    </el-table-column>
                                </template>
                            </el-table-column>
                            <el-table-column prop="total_lasttime" label="本周使用时间（h）" width="150px"></el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="月计划" name="month" :disabled="isList">
                <div class="user_plan_month">
                    <div class="user_plan_day_default_table" v-if="!isList">
                        <el-table :cell-class-name="cellClassName" border class="week_table" style="width: 100%" :data="tableData2">
                            <el-table-column prop="site_name" label="使用场地" width="200px"></el-table-column>
                            <template v-for="item in 31">
                                <el-table-column :key="item" :label="item + '号'" :prop="item + ''"></el-table-column>
                            </template>
                            <el-table-column prop="total_lasttime" label="系统建立起使用时间（h）" width="200px"></el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="学期计划" name="term" :disabled="isList">
                <div class="user_plan_semester">
                    <div class="user_plan_day_default_table" v-if="!isList">
                        <el-table border class="week_table" style="width: 100%" :data="tableData2" :cell-class-name="cellClassName">
                            <el-table-column prop="site_name" label="使用场地" width="200px"></el-table-column>
                            <template v-for="(item, index) in termData">
                                <el-table-column :key="index" :label="monthOption[item]" :prop="item + ''"></el-table-column>
                            </template>
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
import customCreate from '@/components/customCreate3'
import customEdit from '@/components/customEdit3'

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
            monthOption: {
                1: '第一月',
                2: '第二月',
                3: '第三月',
                4: '第四月',
                5: '第五月',
                6: '第六月',
                7: '第七月',
                8: '第八月',
                9: '第九月',
                10: '第十月',
                11: '第十一月',
                12: '第十二月',
            },
            primary: true,
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
            tableData2: [],
            termData: [],
        }
    },
    methods: {
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            if (columnIndex == 0 || columnIndex == 21 || columnIndex == 22 || columnIndex == 23) {
                return
            }
            if (columnIndex % 2 === 1) {
                return [1, 2]
            }
            return [1, 0]
        },
        cellClassName({ row, column, rowIndex, columnIndex }) {
            if (column.property == 'site_name' || column.property == 'term_lasttime' || column.property == 'total_lasttime' || column.property == 'year_lasttime') {
                return ''
            }

            if (this.tableData2[rowIndex][column.property] > 0) {
                return 'td_back'
            }
        },
        monthOptionFun() {},
        listCreate(event) {
            event.t_training_base = this.infoType
            event.base_name = ''
            Http.usePlanAdd(event)
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
            params.site_id = params.id

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
                this.primary = false
                this.activeName = 'day'

                this.getScheduleList('day')
            } else {
                this.primary = true
                this.activeName = ''
                this.isList = true
            }
            this.query.pageNum = 1
        },
        handleClick(tab, event) {
            console.log(tab, event)
            this.isList = false

            this.getScheduleList(tab.name)
        },
        getScheduleList(type) {
            Http.scheduleList({
                schedule: type,
            })
                .then((res) => {
                    if (res.code != '0000') {
                        this.tableData2 = []
                    }

                    this.tableData2 = res.data.reachList

                    for (let index = 0; index < this.tableData2.length; index++) {
                        Object.keys(this.tableData2[index]).map((key) => {
                            if (!this.tableData2[index][key]) {
                                this.tableData2[index][key] = ''
                            }
                        })
                    }

                    this.termData = res.data.term
                })
                .catch((res) => {
                    this.$message.error(res.msg || '系统异常')
                })
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
                this.getSitCommonData()
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
.week_table th,
.week_table td {
    text-align: center;
}

.week_table .td_back {
    background: #67c23a;
    color: #000;
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

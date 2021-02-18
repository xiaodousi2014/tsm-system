<template>
    <div class="user_plan">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="实验项目" name="d_lab_experiment">
                <div class="user_plan_day">
                    <div style="text-align: right;">
                        <el-button type="primary" @click="searchModal = true">检索</el-button>
                        <el-button class="btnSty" @click="onCreate()">新增</el-button>
                        <el-button class="btnSty" @click="onEdit()">编辑</el-button>
                        <el-button class="btnSty" @click="onDelete()">删除</el-button>
                        <el-button class="btnSty" @click="onTemplateDown()">导入模板下载</el-button>
                        <el-button class="btnSty" @click="onUploadFile()">导入</el-button>
                        <el-button class="btnSty" @click="onPreferences()">偏好设置</el-button>
                    </div>

                    <custom-table-select :list="tableAllIist"></custom-table-select>
                    <custom-table :tableAllIist="tableAllIist" :tableData="tableData" @selectTableList="selectTableList" @getAttachFile="getAttachFile"></custom-table>
                    <!-- 分页 -->
                    <div class="pagination">
                        <Pagination ref="Pagination" @getSizeChange="getSizeChange" @getCurrentChange="getCurrentChange" :pagination="query" :total="total" />
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="实验人员" name="d_lab_tester">
                <div class="user_plan_day">
                    <div style="text-align: right;">
                        <el-button type="primary" @click="searchModal = true">检索</el-button>
                        <el-button class="btnSty" @click="onCreate()">新增</el-button>
                        <el-button class="btnSty" @click="onEdit()">编辑</el-button>
                        <el-button class="btnSty" @click="onDelete()">删除</el-button>
                        <el-button class="btnSty" @click="onTemplateDown()">导入模板下载</el-button>
                        <el-button class="btnSty" @click="onUploadFile()">导入</el-button>
                        <el-button class="btnSty" @click="onPreferences()">偏好设置</el-button>
                    </div>

                    <custom-table-select :list="tableAllIist"></custom-table-select>
                    <custom-table :tableAllIist="tableAllIist" :tableData="tableData" @selectTableList="selectTableList" @getAttachFile="getAttachFile"></custom-table>
                    <!-- 分页 -->
                    <div class="pagination">
                        <Pagination ref="Pagination" @getSizeChange="getSizeChange" @getCurrentChange="getCurrentChange" :pagination="query" :total="total" />
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="实验成果" name="d_lab_result">
                <div class="user_plan_day">
                    <div style="text-align: right;">
                        <el-button type="primary" @click="searchModal = true">检索</el-button>
                        <el-button class="btnSty" @click="onCreate()">新增</el-button>
                        <el-button class="btnSty" @click="onEdit()">编辑</el-button>
                        <el-button class="btnSty" @click="onDelete()">删除</el-button>
                        <el-button class="btnSty" @click="onTemplateDown()">导入模板下载</el-button>
                        <el-button class="btnSty" @click="onUploadFile()">导入</el-button>
                        <el-button class="btnSty" @click="onPreferences()">偏好设置</el-button>
                    </div>

                    <custom-table-select :list="tableAllIist"></custom-table-select>
                    <custom-table :tableAllIist="tableAllIist" :tableData="tableData" @selectTableList="selectTableList" @getAttachFile="getAttachFile"></custom-table>
                    <!-- 分页 -->
                    <div class="pagination">
                        <Pagination ref="Pagination" @getSizeChange="getSizeChange" @getCurrentChange="getCurrentChange" :pagination="query" :total="total" />
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="实验论文" name="d_lab_thesis">
                <div class="user_plan_day">
                    <div style="text-align: right;">
                        <el-button type="primary" @click="searchModal = true">检索</el-button>
                        <el-button class="btnSty" @click="onCreate()">新增</el-button>
                        <el-button class="btnSty" @click="onEdit()">编辑</el-button>
                        <el-button class="btnSty" @click="onDelete()">删除</el-button>
                        <el-button class="btnSty" @click="onTemplateDown()">导入模板下载</el-button>
                        <el-button class="btnSty" @click="onUploadFile()">导入</el-button>
                        <el-button class="btnSty" @click="onPreferences()">偏好设置</el-button>
                    </div>

                    <custom-table-select :list="tableAllIist"></custom-table-select>
                    <custom-table :tableAllIist="tableAllIist" :tableData="tableData" @selectTableList="selectTableList" @getAttachFile="getAttachFile"></custom-table>
                    <!-- 分页 -->
                    <div class="pagination">
                        <Pagination ref="Pagination" @getSizeChange="getSizeChange" @getCurrentChange="getCurrentChange" :pagination="query" :total="total" />
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="实验专利" name="d_lab_patent">
                <div class="user_plan_day">
                    <div style="text-align: right;">
                        <el-button type="primary" @click="searchModal = true">检索</el-button>
                        <el-button class="btnSty" @click="onCreate()">新增</el-button>
                        <el-button class="btnSty" @click="onEdit()">编辑</el-button>
                        <el-button class="btnSty" @click="onDelete()">删除</el-button>
                        <el-button class="btnSty" @click="onTemplateDown()">导入模板下载</el-button>
                        <el-button class="btnSty" @click="onUploadFile()">导入</el-button>
                        <el-button class="btnSty" @click="onPreferences()">偏好设置</el-button>
                    </div>

                    <custom-table-select :list="tableAllIist"></custom-table-select>
                    <custom-table :tableAllIist="tableAllIist" :tableData="tableData" @selectTableList="selectTableList" @getAttachFile="getAttachFile"></custom-table>
                    <!-- 分页 -->
                    <div class="pagination">
                        <Pagination ref="Pagination" @getSizeChange="getSizeChange" @getCurrentChange="getCurrentChange" :pagination="query" :total="total" />
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>

        <el-dialog title="检索" :visible.sync="searchModal" width="1100px">
            <custom-search :searchList="searchList" @Search="Search"></custom-search>
        </el-dialog>

        <el-dialog title="新增" v-if="createModal" :visible.sync="createModal" width="1100px">
            <custom-create @close="close" :searchList="searchList" @listCreate="listCreate"></custom-create>
        </el-dialog>
        <el-dialog title="编辑" v-if="editModal" :visible.sync="editModal" width="1100px">
            <custom-edit @close="close" :searchList="searchList" :form="multipleSelectionInfo" @listEdit="listEdit"></custom-edit>
        </el-dialog>
        <el-dialog title="导入" :visible.sync="exportModal" width="500px">
            <custom-upload-file :url="fileUrl" @close="close"></custom-upload-file>
        </el-dialog>
        <el-dialog title="偏好设置" v-if="preferencesModal" :visible.sync="preferencesModal" width="800px" :close-on-press-escape="false" :close-on-click-modal="false">
            <commonon-preferences @close="close" @closeSave="closeSave" :infoType="infoType"></commonon-preferences>
        </el-dialog>
    </div>
</template>

<script>
import Pagination from '@/components/customPagination'
import customTableSelect from '@/components/customTableSelect'
import customSearch from '@/components/customSearch'
import Http from '@/api/siteManagemer'
import customTable from '@/components/customTable'
import customUploadFile from '@/components/customUploadFile'
import customCreate from '@/components/customCreate2'
import customEdit from '@/components/customEdit2'
import commononPreferences from '@/components/commononPreferences'

export default {
    name: 'training-base',
    components: {
        customTableSelect,
        customSearch,
        customTable,
        Pagination,
        customUploadFile,
        customCreate,
        customEdit,
        commononPreferences,
    },
    data() {
        return {
            lab_id: '',
            activeName: 'd_lab_experiment',
            infoType: 'd_lab_experiment',
            query: {
                infoType: 'd_lab_experiment',
                orderField: 'id',
                orderOrient: '2',
                indexArray: [],
                pageNum: 1,
                pageCount: 10,
            },
            failReason: '',
            total: 0,
            tableData: [],
            tableAllIist: [],
            searchList: [],
            multipleSelection: [],
            preferencesModal: false,
            exportModal: false,
            createModal: false,
            editModal: false,
            exportPutModal: false,
            fileUrl: `${process.env.VUE_APP_API_URL}/common/import?infoType=${this.infoType}`,
            searchModal: false,
            multipleSelectionInfo: {},
            fileType: [],
        }
    },
    mounted() {
        this.lab_id = this.$route.query.id

        this.fileUrl = `${process.env.VUE_APP_API_URL}/common/import?infoType=${this.infoType}`

        this.getSitCommonList()

        this.getSitCommonData()
    },
    methods: {
        handleClick(val) {
            this.infoType = val.name
            this.query.infoType = val.name

            this.getSitCommonList()

            this.getSitCommonData()
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
        Search(event) {
            this.query.indexArray = []
            this.query.indexArray = event
            this.searchModal = false
            this.getSitCommonData()
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
        onPreferences() {
            this.preferencesModal = true
        },
        // 导入
        onUploadFile() {
            this.fileUrl = `${process.env.VUE_APP_API_URL}/common/import?infoType=${this.infoType}`
            this.exportModal = true
        },
        close(flag) {
            this.editModal = false
            this.createModal = false
            this.exportModal = false
            this.exportPutModal = false
            this.preferencesModal = false

            flag && this.getSitCommonData()
        },
        closeSave() {
            this.editModal = false
            this.createModal = false
            this.exportModal = false
            this.exportPutModal = false
            this.preferencesModal = false

            this.getSitCommonData()
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

                            this.fileTypeFun(list)
                        }
                    }
                })
                .catch((res) => {
                    this.$message.error(res.msg || '系统异常')
                })
        },
        fileTypeFun(data) {
            data.map((res) => {
                if (res.type == 'picture' || res.type == 'video' || res.type == 'attachment') {
                    this.fileType.push({
                        type: res.type,
                        name: res.name,
                        comment: res.comment,
                    })
                }
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
        getCurrentChange(val) {
            this.query.pageNum = val
            this.getSitCommonData()
        },
        getSizeChange(val) {
            this.query.pageCount = val
            this.getSitCommonData()
        },
        listCreate(event) {
            event.t_training_base = this.infoType
            event.site_type = this.infoType
            event.base_name = ''
            event.lab_id = this.lab_id
            Http.addDataLab(event)
                .then((res) => {
                    if (res.code == '0000') {
                        this.$message.success('创建成功！')
                        this.closeSave()
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
            params.lab_id = this.lab_id
            Http.editDataLab(params)
                .then((res) => {
                    if (res.code == '0000') {
                        this.$message.success('编辑成功！')
                        this.closeSave()
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
            Http.deleteListLab({
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
        onTemplateDown() {
            window.open(`${process.env.VUE_APP_API_URL}/common/attachment/download_TemplateFile?infoType=${this.activeName}`)
        },
    },
    created() {},
}
</script>
<style>
.table_td_color {
    background: #67c23a;
}
.el-dialog__body {
    padding: 0 30px 30px 30px !important;
}

.dialog-footer {
    padding-top: 20px !important;
}
</style>
<style scoped lang="less">
.user_plan {
    .showIcon {
        text-align: right;
        padding-right: 5px;
        font-size: 25px;
        position: relative;
        .selectList {
            position: absolute;
            height: 400px;
            overflow-y: scroll;
            top: 30px;
            right: 0;
            z-index: 99;
            min-width: 100px;
            text-align: left;
            font-size: 20px;
            padding: 20px 0;
            background: #fdfdfd;
            border: 1px solid rgb(238, 238, 238);
            li {
                padding: 0 10px;
                line-height: 50px;
            }
        }
    }
    .pagination {
        margin-top: 20px;
    }
    .showIcon i {
        cursor: pointer;
    }
    padding: 16px;
    margin: 20px;
    background: #fff;

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

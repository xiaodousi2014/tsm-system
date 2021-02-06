<template>
    <div class="ClassifiedDisplay padding20">
        <!-- 表格 -->
        <!--搜索表单-->
        <div style="text-align: right;">
            <el-button type="primary" @click="searchModal = true">检索</el-button>
            <el-button @click="onCreate()">新增</el-button>
            <el-button @click="onEdit()">编辑</el-button>
            <el-button @click="onDelete()">删除</el-button>
            <el-button @click="onUploadFile()">导入</el-button>
            <el-button @click="onExport()">导出</el-button>
            <el-button @click="onBorrow()">借用</el-button>
            <el-button @click="onRevoke()">撤销附件</el-button>
            <el-button type="primary" @click="onUploadFileOther()">上传附件</el-button>
        </div>

        <custom-table-select :list="tableAllIist"></custom-table-select>
        <custom-table :tableAllIist="tableAllIist" :tableData="tableData" @selectTableList="selectTableList" @getAttachFile="getAttachFile"></custom-table>
        <!-- 分页 -->
        <div class="pagination">
            <Pagination ref="Pagination" @getSizeChange="getSizeChange" @getCurrentChange="getCurrentChange" :pagination="query" :total="total" />
        </div>
        <el-dialog title="检索" :visible.sync="searchModal" width="1100px">
            <custom-search :searchList="searchList" @Search="Search"></custom-search>
        </el-dialog>

        <el-dialog title="新增" :visible.sync="createModal" width="1100px">
            <custom-create @close="close" :searchList="searchList" @listCreate="listCreate" :form="{}"></custom-create>
        </el-dialog>
        <el-dialog title="编辑" :visible.sync="editModal" width="1100px">
            <custom-edit @close="close" :searchList="searchList" :form="multipleSelectionInfo" @listEdit="listEdit"></custom-edit>
        </el-dialog>
        <el-dialog title="导入" :visible.sync="exportModal" width="500px">
            <custom-upload-file :url="fileUrl" @close="close"></custom-upload-file>
        </el-dialog>
        <el-dialog title="导入附件" :visible.sync="exportPutModal" width="500px">
            <custom-upload-file-put :url="fileUrl" @close="close" :uploadType="fileType" :id="multipleSelectionInfo.id" :infoType="infoType"></custom-upload-file-put>
        </el-dialog>

        <el-dialog :title="title" :visible.sync="borrowModal" width="1024px">
            <div v-for="item in borrowList" :key="item.id">
                <el-form ref="forms" :model="item" label-width="130px" style="padding-top: 20px">
                    <el-row>
                        <el-col :span="8">
                            <el-form-item label="地图名称:" prop="manufacturer">
                                <el-input disabled v-model.trim="item.maps_name" maxlength="10"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="借用数量:" prop="mapsModel">
                                <el-input v-model.trim="item.quantity" maxlength="30" @change="borrowChange($event, item)"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="借用人:" prop="costAmount">
                                <el-input disabled v-model.trim="item.borrower" maxlength="10"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="联系方式:" prop="costAmount">
                                <el-input v-model.trim="item.borrower_tel" maxlength="10"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="借用单位:" prop="costAmount">
                                <el-input v-model.trim="item.borrower_org" maxlength="10"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="借用时间:" prop="costAmount">
                                <el-date-picker style="width: 100%" v-model="item.borrower_time" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" :clearable="false"> </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="课程名称:" prop="costAmount">
                                <el-input v-model.trim="item.course_name" maxlength="10"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="归还人:" prop="costAmount">
                                <el-input v-model.trim="item.return_man" maxlength="10"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="归还时间:" prop="costAmount">
                                <el-date-picker style="width: 100%" v-model="item.return_time" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" :clearable="false"> </el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>

            <div slot="footer" class="dialog-footer">
                <el-button @click="borrowModal = false">关 闭</el-button>
                <el-button type="primary" @click="onBorrowSumit()">确 定</el-button>
            </div>
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
import customUploadFilePut from '@/components/customUploadFilePut2'
import customCreate from '@/components/customCreate2'
import customEdit from '@/components/customEdit2'
export default {
    name: 'training-base',
    components: {
        customTableSelect,
        customSearch,
        customTable,
        Pagination,
        customUploadFile,
        customUploadFilePut,
        customCreate,
        customEdit,
    },
    data() {
        return {
            title: '请领',
            borrowModal: false,
            borrowList: [],
            query: {
                infoType: 'd_training_base',
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
            exportModal: false,
            createModal: false,
            editModal: false,
            exportPutModal: false,
            fileUrl: '',
            fileUrl: 'http://27.210.124.225:8190/common/import?infoType=d_training_base',
            searchModal: false,
            multipleSelectionInfo: {},
            fileType: [],
        }
    },
    mounted() {
        this.getSitCommonList()

        this.getSitCommonData()
    },
    methods: {
        getAttachFile(query) {
            const link = document.createElement('a')
            Http.getAttachFile({
                id: query.row.id,
                infoType: 'd_training_base',
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
        // 撤销操作
        onRevoke() {
            if (!this.multipleSelection.length) {
                this.$message.warning('请选择要撤销操作的数据列！')
                return
            }
            Http.revokeOperation({
                ids: this.multipleSelection,
                site_type: 'd_training_base',
            })
                .then((res) => {
                    if (res.code == '0000') {
                        this.$message.success('撤销成功！')
                        this.multipleSelection = []
                        this.getSitCommonData()
                    }
                })
                .catch((res) => {
                    this.$message.error(res.msg || '系统异常')
                })
        },
        // 导入
        onUploadFile() {
            ;(this.fileUrl = 'http://27.210.124.225:8190/common/import?infoType=d_training_base'), (this.exportModal = true)
        },
        close() {
            this.editModal = false
            this.createModal = false
            this.exportModal = false
        },
        getSitCommonList() {
            Http.getSitCommonList({
                infoType: 'd_training_base',
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
            event.t_training_base = 'd_training_base'
            event.site_type = 'd_training_base'
            event.base_name = ''
            Http.addData(event)
                .then((res) => {
                    if (res.code == '0000') {
                        this.$message.success('创建成功！')
                        this.close()
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

            params.site_type = 'd_training_base'
            Http.editData(params)
                .then((res) => {
                    if (res.code == '0000') {
                        this.$message.success('编辑成功！')
                        this.close()
                    }
                })
                .catch((res) => {
                    this.$message.error(res.msg || '系统异常')
                })
        },
        // 借用
        onBorrow() {
            if (!this.multipleSelection.length) {
                this.$message.warning('请选择要借用的数据列！')
                return
            }
            Http.checkedTrue({ ids: this.multipleSelection, type: 2 })
                .then((res) => {
                    if (res.code == '0000') {
                        this.title = '借用'
                        this.borrowModal = true
                    }
                })
                .catch((res) => {
                    this.$message.error(res.msg || '系统异常')
                })
        },
        // 借用提交
        onBorrowSumit() {
            Http.onStorageBorrowSumit(this.borrowList)
                .then((res) => {
                    if (res.code == '0000') {
                        this.$message.success('借用成功！')
                        this.getTableList()
                        this.borrowModal = false
                    }
                })
                .catch((res) => {
                    this.$message.error(res.msg || '系统异常')
                })
        },
        // 上传附件
        onUploadFileOther() {
            if (!this.multipleSelection.length) {
                this.$message.warning('请选择要编辑的数据列！')
                return
            }
            if (this.multipleSelection.length > 1) {
                this.$message.warning('只能选择单个数据列编辑！')
                return
            }

            this.fileUrl = `http://24992uu588.qicp.vip:80/common/uploadfile?infoType=d_training_base&id=${this.multipleSelection[0]}`
            this.exportPutModal = true
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
            Http.deleteList({
                ids: this.multipleSelection,
                site_type: 'd_training_base',
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
        // 导出
        onExport() {
            if (!this.multipleSelection.length) {
                this.$message.warning('请选择要导出的数据列！')
                return
            }
            window.open(`http://24992uu588.qicp.vip:80/common/export?ids=${this.multipleSelection.toString()}&&infoType=d_training_base`)
        },
    },
    created() {},
}
</script>
<style>
.el-dialog__body {
    padding: 0 30px 30px 30px !important;
}
</style>
<style scoped lang="less">
.ClassifiedDisplay {
}
.el-button--primary {
    margin-top: 20px;
}
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
</style>

<template>
    <div class="user_plan">
      

        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="日计划" name="day">
                <div class="user_plan_day">
                    <div class="user_plan_day_btn">
                        <el-button type="primary" size="small" @click="createData">新建</el-button>
                        <el-button type="primary" size="small" @click="editData">编辑</el-button>
                        <el-button type="primary" size="small">删除</el-button>
                        <el-button type="primary" size="small">导出</el-button>
                        <el-button type="primary" size="small" @click="dayListTable()">列表显示</el-button>
                        <el-button type="primary" size="small" @click="dayListTable('default')">汇总图显示</el-button>
                    </div>

                    <div class="user_plan_day_default_table" v-if="defaultTableShow">
                        <el-table  border id="el-table" style="width: 100%" :data="tableDataDefault" :cell-class-name="rowClass">
                            <template v-for="(item, index) in tableDataDefaultColumn">
                                <el-table-column
                                    header-align="center"
                                    :key="index"
                                    :prop="item.code"
                                    :label="item.name"
                                >
                                </el-table-column>
                            </template>
                        </el-table>
                    </div>
                    <div class="user_plan_day_total_table" v-if="!defaultTableShow">
                        <custom-table-select
                            :list="tableAllIist"
                            ></custom-table-select>
                        <custom-table :tableAllIist = tableAllIist :tableData = tableData1></custom-table>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="周计划" name="week">
                <div class="user_plan_week">
                    <div class="user_plan_day_default_table" v-if="defaultTableShow">
                        <el-table  border id="el-table" style="width: 100%" :data="tableDataDefault" :cell-class-name="rowClass" :span-method="objectSpanMethod">
                            <el-table-column
                                prop="a"
                                label="使用场地"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="b"
                                label="星期一">
                            </el-table-column>
                            <el-table-column
                                prop="c"
                                label="星期二">
                            </el-table-column>
                            <el-table-column
                                prop="d"
                                label="星期三">
                            </el-table-column>
                            <el-table-column
                                prop="e"
                                label="星期四">
                            </el-table-column>
                            <el-table-column
                                prop="f"
                                label="星期五">
                            </el-table-column>
                            <el-table-column
                                prop="g"
                                label="星期六">
                            </el-table-column>
                            <el-table-column
                                prop="h"
                                label="星期日">
                            </el-table-column>
                            <el-table-column
                                prop="i"
                                label="本周使用时间（H）">
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="月计划" name="month">
                <div class="user_plan_month">
                    <div class="user_plan_day_default_table" v-if="defaultTableShow">
                        <el-table  border id="el-table" style="width: 100%" :data="tableDataDefault" :cell-class-name="rowClass">
                            <el-table-column
                                prop="a"
                                label="使用场地"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="b"
                                label="第一周">
                            </el-table-column>
                            <el-table-column
                                prop="c"
                                label="第二周">
                            </el-table-column>
                            <el-table-column
                                prop="d"
                                label="第三周">
                            </el-table-column>
                            <el-table-column
                                prop="e"
                                label="第四周">
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="学期计划" name="semester">
                <div class="user_plan_semester">
                    <div class="user_plan_day_default_table" v-if="defaultTableShow">
                        <el-table  border id="el-table" style="width: 100%" :data="tableDataDefault" :cell-class-name="rowClass">
                            <el-table-column
                                prop="a"
                                label="使用场地"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="b"
                                label="第一月">
                            </el-table-column>
                            <el-table-column
                                prop="c"
                                label="第二月">
                            </el-table-column>
                            <el-table-column
                                prop="d"
                                label="第三月">
                            </el-table-column>
                            <el-table-column
                                prop="e"
                                label="第四月">
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
        
        <div class="pagination" >
            <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="query.pageNo"
                :page-sizes="[10, 20, 50, 100]"
                :page-size="query.limit"
                layout="total,prev, pager, next,sizes"
                :total="total"
                border
            ></el-pagination>
        </div>

        <el-drawer
            title="新建"
            size="80%"
            style="height:100vh; overflow: auto;"
            :close-on-press-escape="false"
            :destroy-on-close="true"
            :wrapperClosable="false"
            :visible.sync="createDialogVisible"
            direction="rtl"
            :before-close="handleClose">
                
                <el-form ref="form" :inline="true" :model="form" label-width="150px">
                    <el-form-item :label="item.name" v-for="(item, index) in tableAllIist" :key="index">
                        <el-col :span="24" v-if="item.type == 'number'">
                            <el-input v-model="form[item.code]" type="number" :placeholder="'请输入' + item.name"></el-input>
                        </el-col>
                        <el-col :span="24" v-if="item.type == 'string'">
                            <el-input v-model="form[item.code]" type="number" :placeholder="'请输入' + item.name"></el-input>
                        </el-col>
                        
                        <el-col :span="14" v-if="item.type == 'array'">
                            <el-input v-model="form[item.code]" type="number" :placeholder="'请输入' + item.name"></el-input>
                        </el-col>
                        <el-col :span="8" v-if="item.type == 'array'" style="margin-left: 10px">
                            <el-button
                                type="primary"
                                size="small"
                                icon="el-icon-plus"
                                @click="addInput(index, item.code)"
                            ></el-button>
                            <el-button
                                size="small"
                                icon="el-icon-minus"
                                @click="removeInput(index, item.code)"
                                v-if="index != 0"
                            ></el-button>
                        </el-col>

                        <el-row v-if="item.type == 'time'">
                            <el-col :span="11">
                                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                            </el-col>
                            <el-col style="text-align: center;" class="line" :span="1">-</el-col>
                            <el-col :span="11">
                                <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                            </el-col>
                        </el-row>
                        <el-row v-if="item.type == 'file'">
                            <el-col :span="24"></el-col>
                        </el-row>
                        
                        <el-row v-if="item.type == 'file'">
                            <el-col :span="24">
                            <el-upload
                                action="https://jsonplaceholder.typicode.com/posts/"
                                list-type="picture-card"
                                :on-preview="handlePictureCardPreview"
                                :on-remove="handleRemove">
                                <i class="el-icon-plus"></i>
                                </el-upload>

                            <el-dialog :visible.sync="dialogVisible">
                                <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog>
                            </el-col>
                        </el-row>
                    </el-form-item>
                </el-form>

                <div style="margin: 100px;"></div>
                
                <div class="el-drawer__footer">
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </div>
        </el-drawer>
    </div>
</template>

<script>
import customTableSelect from "@/components/customTableSelect";
import Http from "@/api/api";
import customTable from '@/components/customTable'

export default {
    name: "UsePlan",
    components: { customTableSelect, customTable },
    data() {
        return {
            dialogImageUrl: '',
            dialogVisible: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            createDialogVisible: false,
            activeName: 'day',
            query: {
                limit: 1,
                pageNo: 10
            },
            total: 0,
            defaultTableShow: true,
            tableDataDefault: [],
            tableDataDefaultColumn: [
                {
                    code: 'a',
                    name: '使用场地'
                },
                {
                    code: 'b',
                    name: '08：00'
                },
                {
                    code: 'c',
                    name: '09：00'
                },
                {
                    code: 'd',
                    name: '10：00'
                },
                {
                    code: 'e',
                    name: '11：00'
                },
                {
                    code: 'f',
                    name: '12：00'
                },
                {
                    code: 'g',
                    name: '13：00'
                },
                {
                    code: 'h',
                    name: '14：00'
                },
                {
                    code: 'i',
                    name: '15：00'
                },
                {
                    code: 'j',
                    name: '16：00'
                },
                {
                    code: 'k',
                    name: '17：00'
                },
                {
                    code: 'l',
                    name: '18：00'
                },
                {
                    code: 'm',
                    name: '系统建立起使用时间（H）'
                },
                {
                    code: 'n',
                    name: '今年起场地使用时间（H）'
                },
                {
                    code: 'o',
                    name: '本学期场地使用时间（H）'
                },
            ],
            tableData1: [
                {
                    id: "1",
                    number: "112",
                    a: "这是个数据",
                    b: "这是个数据",
                    c: "这是个数据",
                    d: "这是个数据",
                    e: "这是个数据",
                    f: "这是个数据",
                    g: "这是个数据",
                    h: "这是个数据",
                    j: "这是个数据",
                    k: "这是个数据",
                    l: "这是个数据",
                }
            ],
            tableAllIist: [],
        };
    },
    mounted() {
        this.getAllTableList();
    },
    methods: {
        handleClose() {
            this.createDialogVisible = false
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        addInput(index, code) {
            let query = {
                code: "e",
                name: "俄罗斯",
                checked: false,
                type: 'array'
            };
            this.form[code].splice(index + 1, 0, query);
        },
        removeInput(index) {
            this.form[code].splice(index, 1);
        },
        onSubmit() {
            console.log('submit!');
        },
        createData() {
            this.createDialogVisible = true
        },
        editData() {

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
                        colspan: 1
                    };
                } else {
                    return {
                        rowspan: 0,
                        colspan: 0
                    };
                }
            }
        },
        dayListTable(val) {
            if (val) {
                this.defaultTableShow = true
            } else {
                this.defaultTableShow = false
            }
            this.query.limit = 1
        },
        handleClick(tab, event) {
            console.log(tab, event);
        },
        handleSizeChange() {

        },
        handleCurrentChange() {

        },
        getAllTableList() {
            this.tableDataDefault = [
                {
                    a: 'a',
                    b: 'a',
                    c: 'a',
                    d: 'a',
                    e: 'a',
                    f: 'a',
                    g: 'a',
                    h: 'a',
                    i: 'a',
                    j: 'a',
                    k: 'a',
                    l: 'a',
                    m: 'a',
                    n: 'a',
                    o: 'a'
                },
                {
                    a: 'a',
                    b: 'a',
                    c: 'a',
                    d: 'a',
                    e: 'a',
                    f: 'a',
                    g: 'a',
                    h: 'a',
                    i: 'a',
                    j: 'a',
                    k: 'a',
                    l: 'a',
                    m: 'a',
                    n: 'a',
                    o: 'a'
                },
                {
                    a: 'a',
                    b: 'a',
                    c: 'a',
                    d: 'a',
                    e: 'a',
                    f: 'a',
                    g: 'a',
                    h: 'a',
                    i: 'a',
                    j: 'a',
                    k: 'a',
                    l: 'a',
                    m: 'a',
                    n: 'a',
                    o: 'a'
                },
                {
                    a: 'a',
                    b: 'a',
                    c: 'a',
                    d: 'a',
                    e: 'a',
                    f: 'a',
                    g: 'a',
                    h: 'a',
                    i: 'a',
                    j: 'a',
                    k: 'a',
                    l: 'a',
                    m: 'a',
                    n: 'a',
                    o: 'a'
                },
                {
                    a: 'a',
                    b: 'a',
                    c: 'a',
                    d: 'a',
                    e: 'a',
                    f: 'a',
                    g: 'a',
                    h: 'a',
                    i: 'a',
                    j: 'a',
                    k: 'a',
                    l: 'a',
                    m: 'a',
                    n: 'a',
                    o: 'a'
                },
            ]
            this.tableAllIist = [
                {
                    code: "a",
                    name: "北京",
                    checked: true,
                    type: 'number'
                },
                {
                    code: "b",
                    name: "上海上海上海上海上",
                    checked: true,
                    type: 'string'
                },
                {
                    code: "c",
                    name: "成都",
                    checked: true,
                    type: 'string'
                },
                {
                    code: "d",
                    name: "四川",
                    checked: true,
                    type: 'string'
                },
                {
                    code: "e",
                    name: "俄罗斯",
                    checked: false,
                    type: 'array'
                },
                {
                    code: "f",
                    name: "福建",
                    checked: true,
                    type: 'string'
                },
                {
                    code: "g",
                    name: "广州",
                    checked: true,
                    type: 'number'
                },
                {
                    code: "h",
                    name: "杭州",
                    checked: false,
                    type: 'time'
                },
                {
                    code: "j",
                    name: "济南",
                    checked: true,
                    type: 'file'
                },
                {
                    code: "k",
                    name: "河南",
                    checked: true,
                    type: 'file'
                },
            ];
        }
    },
    created() {
    },
};
</script>
<style>
    .table_td_color{
        background: #67C23A;
    }
</style>
<style scoped lang="less">
.user_plan {
    padding: 16px;

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
}
</style>

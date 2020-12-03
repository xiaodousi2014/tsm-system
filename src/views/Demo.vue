<template>
    <div class="home" style="padding:20px;">
        <el-button type="primary" @click="logout">登出</el-button>
        <iframe src="http://localhost:6001/#/organizationType"></iframe>
        <el-popover
                ref="popover5"
                placement="top"
                width="160"
                v-model="visible2">
            <p><i class="el-icon-warning warning-color"></i>这是一段内容这是一段内容确定删除吗？</p>
            <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
                <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
            </div>
        </el-popover>
        <!--模块标题-->
        <module-title title="模块标题demo" :collapsible="true">
            <div>
                <el-input v-model="aa"></el-input>
                <span>{{aa|formatDate}}</span>
                <p>12312</p>
                <p>12312</p>
                <p>12312</p>
                <p>12312</p>
                <p>12312</p>
            </div>
        </module-title>
        <!--搜索表单-->
        <collapse-transition>
            <el-form :inline="true"  ref="form1" label-position="right" :model="formDataSelect">
                <el-form-item label="退单号：">
                    <el-input size="small" v-model="formDataSelect.refundNo" placeholder="请输入退单号"></el-input>
                </el-form-item>
                <el-form-item label="订单号：">
                    <el-input size="small" v-model="formDataSelect.orderNo" placeholder="请输入订单号"></el-input>
                </el-form-item>
                <el-form-item label="顾客电话：">
                    <el-input size="small" v-model="formDataSelect.mobile" maxlength="15" placeholder="请输入顾客电话"></el-input>
                </el-form-item>
                <el-form-item label="品牌名称：">
                    <el-input size="small" v-model="formDataSelect.brandName" placeholder="请输入品牌名称"></el-input>
                </el-form-item>
                <el-form-item label="退单时间：">
                    <el-date-picker
                            size="small"
                            v-model="formDataSelect.reTime"
                            type="daterange"
                            :default-time="['00:00:00', '23:59:59']"
                            value-format='timestamp'
                            unlink-panels
                            range-separator="~"
                            start-placeholder="请输入开始时间"
                            end-placeholder="结束时间">
                    </el-date-picker>
                </el-form-item>
                <div class="search-button-block">
                    <el-button size="small" type="primary">查 询</el-button>
                    <el-button size="small">重 置</el-button>
                </div>
                <!--<div @click="showMore = !showMore" class="search-show-more">-->
                <!--<span>展开更多</span>-->
                <!--<i class="icon-show-more el-icon-arrow-down" :class="{'arrowRotate':!showMore}"></i>-->
                <!--</div>-->
            </el-form>
        </collapse-transition>
        <!--表格demo-->
        <module-title title="表格demo1"></module-title>
        <el-table class="my-el-table" :data="tableData" border>
            <el-table-column prop="aa" label="aa"></el-table-column>
            <el-table-column prop="aa" label="aa"></el-table-column>
            <el-table-column prop="aa" label="aa"></el-table-column>
            <el-table-column prop="aa" label="aa"></el-table-column>
        </el-table>

        <module-title title="表格demo2"></module-title>
        <table class="detail-table">
            <tr>
                <td>退单号</td>
                <td>11</td>
                <td>申请时间</td>
                <td>11</td>
                <td>退款状态</td>
                <td>11</td>
            </tr>
            <tr>
                <td>服务类型</td>
                <td>11</td>
                <td>退货方式</td>
                <td>11</td>
                <td>退款原因</td>
                <td>11</td>
            </tr>
            <tr>
                <td class="td-key">退单备注</td>
                <td class="td-value" colspan="5">11</td>
            </tr>
        </table>

        <module-title title="富文本编辑器demo"></module-title>
        <Weditor :catchData="catchData" :content="description"></Weditor>
        <el-steps :active="1">
            <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="步骤 3" description="这段就没那么长了"></el-step>
        </el-steps>
        <el-tree
                :data="data2"
                show-checkbox
                node-key="id"
                :default-expanded-keys="[2, 3]"
                :default-checked-keys="[5]"
                :props="defaultProps">
        </el-tree>
        <div>
            <el-button size="small">默认按钮</el-button>
            <el-button size="small" class="main_button">成功按钮</el-button>
            <el-button size="small" type="primary" >主要按钮</el-button>
            <el-button size="small" type="primary" disabled>主要按钮</el-button>
            <el-button size="small" type="success">成功按钮</el-button>
            <el-button size="small" type="info">信息按钮</el-button>
            <el-button size="small" type="warning">警告按钮</el-button>
            <el-button size="small" type="danger">危险按钮</el-button>
        </div>
        <a class="main_font">文字按钮</a>

        <div style="margin-bottom:10px;">
            <el-button type="primary" size="small"  icon="el-icon-plus" style="margin-right:10px;">新 建</el-button>
            <el-dropdown split-button size="small" type="primary" @click="handleClick">
                更多菜单
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item>双皮奶</el-dropdown-item>
                    <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <!--<table-custom class="mg-r-20" size="small" text="自定义表头" :listShowControl="listShowControl" mainFlag="billManage" @change="tabCustomChange" @update="tabCustomUpdate"></table-custom>-->
        </div>
        <el-table
                :data="tableData"
                border
                sortable
                resizable
                show-overflow-tooltip
                style="width: 100%">
            <el-table-column
                    type="selection"
                    width="40"
                    align="center">
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="日期"
                    align="center">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名">
            </el-table-column>
            <el-table-column
                    prop="province"
                    label="省份">
            </el-table-column>
            <el-table-column
                    prop="city"
                    label="市区">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址"
                    width="300">
            </el-table-column>
            <el-table-column
                    prop="zip"
                    label="邮编">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div>
            <Pagination :pagination="pagination" />
        </div>
        <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
        </el-date-picker>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
        <el-card  style="width:100%;">
            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div>
        </el-card>

        <el-input placeholder="请输入内容"></el-input>
        <el-select v-model="value" multiple placeholder="请选择">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>


        <el-checkbox v-model="checked">备选项</el-checkbox>
    </div>
</template>
<script>
    import Http from '../api/api'
    import moduleTitle from '../components/moduleTitle'
    import Weditor from '../components/wangEditor.vue'
    import Pagination from "../components/pagination";
    // import tableCustom from '../components/tableCustom'

    export default {
        name: 'demo',
        components: {Pagination, Weditor, moduleTitle },
        data() {
            return {
                visible2: false,
                checked:true,
                currentPage4: 4,
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '',
                activeName: 'second',
                value1:'',
                description: '<p>123</p>',
                aa: new Date(),
                formDataSelect: {},
                showMore:false,
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                data2: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                pagination: {
                    pageNum: 1,
                    pageSize: 10,
                    total: 200
                },
                listShowControlTemp: [], // 列表显示控制
                listShowControl: [ // 列表显示控制
                    {value: 'costFlowNo', showFlag: true, showName: '流水号', tooltip: true, width: 120},
                    {value: 'paymentBankAcco', showFlag: true, showName: '付款账号', tooltip: true,},
                    {value: 'paymentCompany', showFlag: true, showName: '付款单位名称', tooltip: true,},
                    {value: 'gatheringBankAcco', showFlag: false, showName: '收款账号', tooltip: true,},
                    {value: 'gatheringCompany', showFlag: false, showName: '收款单位名称', tooltip: true,},
                    {value: 'tradeType', showFlag: true, showName: '交易类别', tooltip: false,},
                    {value: 'tradeWayDesc', showFlag: false, showName: '交易方式', tooltip: false,},
                    {value: 'payTime',width: '180', showFlag: true, showName: '入账日期', tooltip: false,},
                    {value: 'tradeAmt', showFlag: true, showName: '交易金额', tooltip: false,},
                    {value: 'workOffAmt', showFlag: true, showName: '已核销金额', tooltip: false,},
                    {value: 'unWorkOffAmt', showFlag: true, showName: '未核销金额', tooltip: false,},
                    {value: 'workOffStatusDes', showFlag: true, showName: '核销状态', tooltip: false,},
                    {value: 'createBy', showFlag: false, showName: '创建人', tooltip: false,},
                    {value: 'createTime', showFlag: false, showName: '创建时间', tooltip: false,},
                    {value: 'remark', showFlag: false, showName: '备注', tooltip: false,},
                ],

            }
        },
        methods: {
            catchData(content) {
                console.log(content)
            },
            jump() {
                this.$openTabSwitch('跳转标题', '/jump')
            },
            logout(){
                Http.logout()
            },
            tabCustomChange(val) { // 自定义表头 - change事件
                this.listShowControl = JSON.parse(JSON.stringify(val));
                sessionStorage.setItem('flowManageListSet', JSON.stringify(val));
            },
            tabCustomUpdate(val) { // 自定义表头 - update事件
                console.log(val);
                sessionStorage.setItem('flowManageListSet', JSON.stringify(val));
            },
        },
        created() {
            //Api.getLastSystemNotice()
            console.log(this.$fixMath(Number(0.1)+this.$fixMath(Number(0.2))))
        }
    }
</script>

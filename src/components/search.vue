<template>
    <div id="search" class="shadow_block" :class="groupList.length>2?'active':''">
        <div class="slideBtn" v-if="groupList.length>2" @click="rowShow = !rowShow">{{rowShow?'缩起':'展开'}} <i
            :class="rowShow?'el-icon-arrow-up':'el-icon-arrow-down'"></i></div>

        <el-form :model="form" ref="form" label-width="100px" class="demo-dynamic">

            <div v-for="(group,gIndex) in groupList" :key="gIndex">
                <collapseTransition>
                    <el-row v-show="gIndex<2 || rowShow">
                        <el-col :span="7" v-for="(item,index) in group" :key="index">

                            <el-form-item
                                :label="item.label"
                                :prop="'list.' + index + '.value'"
                            >
                                <el-input v-if="item.type==1" :placeholder="item.placeholder || '请输入'"
                                          v-model="item.value"></el-input>
                                <el-select v-if="item.type==2" v-model="item.value"
                                           :placeholder="item.placeholder || '请选择'">
                                    <el-option v-for="(data,idx) in item.optionList" :label="data.label"
                                               :value="data.value" :key="idx"></el-option>
                                </el-select>
                                <el-date-picker
                                    v-if="item.type==3"
                                    v-model="item.value"
                                    :type="item.dateType "
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                                    :placeholder="item.placeholder || '选择日期'">
                                </el-date-picker>

                                <el-autocomplete
                                    v-if="item.type==4"
                                    v-model="item.value"
                                    :fetch-suggestions="((query,cb)=>{test(query,cb, item)})"
                                    :placeholder="item.placeholder || '请输入内容'"
                                    @select="handleSelect"
                                ></el-autocomplete>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </collapseTransition>
            </div>

            <el-row>
                <el-form-item>

                    <el-button type="primary" @click="submitForm">搜索</el-button>
                    <el-button @click="resetForm('form')">重置</el-button>
                    <slot></slot>
                </el-form-item>
            </el-row>

        </el-form>

    </div>
</template>

<script>
    import utils from '../utils/utils'
    /*
    type1:普通输入框
          value
          label
          placeholder 默认请输入
    type2:选择框
          value
          label
          placeholder 默认请选择
          optionList 选择数组 也有lable和value 2个参数
    type3:时间选择器
          value
          label
          placeholder 默认选择日期
          dateType  默认是date(单个时间框)  可传daterange（时间区间）
    type4:远程搜索
          value
          label
          placeholder 默认请输入内容
          apiObj 从外部传入对应的apiFunction
          paramName 接口参数名


     父组件v-on:sendForm用来接受表单值

     */
    export default {
        name: "search",
        props: {
            form1: {
                type: Object,
                default: function () {
                    return {
                        list: [
                            {
                                type: 1,
                                value: '',
                                label: '姓名',
                                placeholder: '请输入姓名'
                            },
                            {
                                type: 2,
                                value: '',
                                label: '姓名2',
                                optionList: [
                                    {
                                        label: '选择1',
                                        value: '1'
                                    },
                                    {
                                        label: '选择2',
                                        value: '2'
                                    }
                                ]
                            },
                            {
                                type: 3,
                                value: '',
                                label: '开始时间',
                                dateType:'date'
                            },
                            {
                                type: 4,
                                value: '',
                                label: '搜索',
                                name: 'lyc',
                            },
                        ],

                    }
                }


            },
        },
        data() {
            return {
                groupList: [],
                form: {},
                rowShow: false
            }
        },
        methods: {
            handleSelect(item) {
                console.log(item);
            },
            test(queryString, cb, item) {
                console.log(item);
                const name = item.paramNmae
                let params = {}
                params[name] = queryString
                item.apiObj(params).then(res => {
                    console.log(res);
                    // TODO 得规定后端接口的统一性
                    const list = [{'value': 1, 'label': 'abc'}, {'value': 1, 'label': 'abc'}]
                    cb(list)
                })
                const list = [{'value': 1, 'label': 'abc'}, {'value': 1, 'label': 'abc'}]
                cb(list)

            },
            submitForm() {
                console.log(this.form)
                // TODO 最终以什么样的数据传递合适
                this.$emit('sendForm', this.form)
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },

        },
        created() {
            console.log(this.form1);
            this.form = utils.deepClone(this.form1)
            let list = []
            //处理渲染list ,3个一行
            this.form.list.forEach((item, index) => {
                let num = Math.floor(index / 3)
                if (!list[num]) {
                    list[num] = []
                }
                list[num][index % 3] = item
            })
            this.groupList = list
            console.log(list);
        }

    }
</script>

<style lang="less" scoped>
    #search {
        position: relative;
        .slideBtn {
            position: absolute;
            z-index: 9;
            right: 20px;
            top: 20px;
            cursor: pointer;
        }
        /deep/ .el-input {
            width: 100%;
        }
        //远程搜索
        /deep/ .el-autocomplete {
            width: 100%;
        }
        //选择框
        /deep/ .el-select {
            width: 100%;
        }

    }

</style>

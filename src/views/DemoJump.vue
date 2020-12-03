<template>
    <div class="home">
        <img alt="Vue logo"
             src="../assets/images/logo.png">
        <p>跳转成功</p>
        <el-button @click="$back()">跳转</el-button>

        <div style="margin-top: 100px;">
            <!--<searchForm :form1="form1" v-on:sendForm="acceptForm">-->
                <!--<el-button >其他按钮</el-button>-->
            <!--</searchForm>-->
        </div>
    </div>
</template>

<script>
import api from '../api/api'
export default {
    name: 'DemoJump',
    data(){
        return{
            form1:{
                list: [
                    {
                        type: 1,
                        value: '',
                        label: '姓名',
                        placeholder:'请输入姓名'
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
                        label: '结束时间'
                    },
                    {
                        type: 3,
                        value: '',
                        label: '开始时间',
                        dateType:'daterange'
                    },

                    {

                    },
                    {
                        type: 4,
                        value: '',
                        label: '搜索',
                        name: 'lyc',
                        apiObj: api.getLastSystemNotice,
                        paramNmae:'qwer'
                    },
                    {
                        type: 4,
                        value: '',
                        label: '搜索',
                        name: 'lyc',
                    },
                    {
                        type: 4,
                        value: '',
                        label: '搜索',
                        name: 'lyc',
                        api: 'getLastSystemNotice'
                    },
                    {
                        type: 4,
                        value: '',
                        label: '搜索',
                        name: 'lyc',
                        api: 'getLastSystemNotice'
                    },
                    {
                        type: 4,
                        value: '',
                        label: '搜索',
                        name: 'lyc',
                        api: 'getLastSystemNotice'
                    },

                ],

            }
        }
    },
    methods:{
        acceptForm(val){
            console.log(val);
        }
    }
}
</script>

<style scoped>

</style>

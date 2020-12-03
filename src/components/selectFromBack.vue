<template>
    <el-select
        v-model="currentValue"
        value-key="id"
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading">
        <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.label"
            :value="item">
        </el-option>
    </el-select>
</template>

<script>
    //import Http from '../api/api'
    export default {
        data() {
            return {
                options: [],
                currentValue:this.value,
                list: [],
                loading: false,
                states: []
            }
        },
        props: ["value"],
        mounted() {
            this.getParentOrganization()

        },
        watch:{
            currentValue(val) {
                console.log(val);
                this.$emit('selectModel',val);
            },
            value(val){
                console.log(val);
                this.currentValue = val;
            }
        },
        methods: {
            remoteMethod(query) {
                console.log(query)
                if (query !== '') {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.options = this.list.filter(item => {
                            return item.label.toLowerCase()
                                .indexOf(query.toLowerCase()) > -1;
                        });
                    }, 200);
                } else {
                    this.options = [];
                }
            },
            getParentOrganization() {
                Http.getParentOrganization({
                    'organizationName': '',
                    'organizationCode': ''
                }).then((res) => {
                    this.list = res.data.data.map(item => {
                        return {id:item.organizationCode, value: item.organizationCode, label: item.organizationName};
                    });
                })
            }

        }
    }
</script>

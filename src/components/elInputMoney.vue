<template>
    <el-input v-model="moneyInputData" :size="size" :min="0" @input="moneyInputChange" @blur="moneyInputBlur" @focus="moneyInputFocus" :disabled="disabled" :placeholder="placeholder"></el-input>
</template>

<script>
    export default {
        name: 'elInputMoney.vue',
        props: {
            disabled: {
                default: false,
                type: Boolean
            },
            placeholder: {
                type: String
            },
            intNum: {
                default: 8,
                type: Number
            },
            floatNum: {
                default: 2,
                type: Number
            },
            size: {
                default: '',
                type: String
            },
            value: {}
        },
        data() {
            return {
                dataForm: {
                    moneyInputData: '',
                    moneyInputDataTemp: ''
                }
            }
        },
        watch: {
            // value(val) {
            //     console.log('elInputMoney-watch-Value:', val);
            //     if(val === null) val = '';
            //     val += '';
            //     this.dataForm.moneyInputData = val ? val.replace(/,/g,'') : '';
            //     this.dataForm.moneyInputDataTemp = this.dataForm.moneyInputData;
            // },
            value: {
                handler(val, oldVal) {
                    console.log('elInputMoney-watch-Value:', val);
                    if(!val && val !== 0) val = '';
                    val += '';
                    this.dataForm.moneyInputData = val ? val.replace(/,/g,'') : '';
                    this.dataForm.moneyInputDataTemp = this.dataForm.moneyInputData;
                },
                immediate: true
            }
        },
        computed: {
            moneyInputData: {
                set: function(val) {
                    let moneyInputDataTemp = val ? val.replace(/,/g,'') : '';
                    // let re1 = new RegExp("(^[0-9]{1," + this.intNum + "}$)|(^[0-9]{1," + this.intNum + "}[\.]{1}$)|(^[0-9]{1," + this.intNum + "}[\.]{1}[0-9]{1," + this.floatNum + "}$)");
                    let re1 = new RegExp("(^([-]?)\\d{1," + this.intNum + "}$)|(^([-]?)\\d{1," + this.intNum + "}[\.]{1}$)|(^([-]?)\\d{1," + this.intNum + "}[\.]{1}\\d{1," + this.floatNum + "}$)");
                    let re2 = /(^[0]+$)/;
                    let re3 = /(^[0]+[1-9])/;
                    let re4 = new RegExp("(^[\.]{1}\\d{1," + this.floatNum + "}$)");
                    let re5 = /(^[\.]{1}$)|(^[0]+[\.]{1}$)/;
                    let re6 = /(^[\-]{1}$)/;
                    if(!re1.test(moneyInputDataTemp) && moneyInputDataTemp !== '' && !re4.test(moneyInputDataTemp) && !re5.test(moneyInputDataTemp) && !re6.test(moneyInputDataTemp)) {
                        this.dataForm.moneyInputData = this.dataForm.moneyInputDataTemp;
                    } else if(re2.test(moneyInputDataTemp)) {
                        this.dataForm.moneyInputData = '0';
                        this.dataForm.moneyInputDataTemp = '0';
                    } else if(re3.test(moneyInputDataTemp)) {
                        this.dataForm.moneyInputData = moneyInputDataTemp.replace(/^0+/,"");
                        this.dataForm.moneyInputDataTemp = moneyInputDataTemp.replace(/^0+/,"");
                    } else if(re5.test(moneyInputDataTemp)) {
                        this.dataForm.moneyInputData = '0.';
                        this.dataForm.moneyInputDataTemp = '0.';
                    } else {
                        this.dataForm.moneyInputData = moneyInputDataTemp;
                        this.dataForm.moneyInputDataTemp = moneyInputDataTemp;
                    }
                    // this.dataForm.moneyInputData = val ? val.replace(/,/g,'') : '';
                },
                get: function(val) {
                    let moneyStr = this.dataForm.moneyInputData + '';
                    let x1 = moneyStr.split('.');
                    let x2 = x1[0];
                    let x3 = x1.length > 1 ? '.' + x1[1] : '';
                    let rgx = /(\d+)(\d{3})/;
                    while(rgx.test(x2)) {
                        x2 = x2.replace(rgx, '$1' + ',' + '$2');
                    }
                    return (x2 + x3);
                }
            }
        },
        mounted() {
            console.log('elInputMoney-mounted-Value:', val);
            let val = this.value;
            if(!val && val !== 0) val = '';
            val += '';
            this.dataForm.moneyInputData = val ? val.replace(/,/g,'') : '';
            this.dataForm.moneyInputDataTemp = this.dataForm.moneyInputData;
        },
        methods: {
            moneyInputChange(val) {
                console.log('金额输入框：', val);
                this.$emit('input', this.dataForm.moneyInputData);
                this.$emit('change', this.dataForm.moneyInputData);
            },
            moneyInputBlur(val) {
                this.$emit('blur', val);
            },
            moneyInputFocus(val) {
                this.$emit('focus', val);
            }
        }
    }
</script>

<style scoped lang="less">

</style>
<template>
    <el-dialog
        title="修改密码"
        class="newProduct_block"
        :visible.sync="showPassword"
        :show-close=false
        width="50%"
        top="20vh"
        :before-close="handleClose">
        <div class="">
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="旧密码" prop="oldpass">
                    <el-input type="password" v-model="ruleForm2.oldpass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="newpass">
                    <el-input type="password" v-model="ruleForm2.newpass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认新密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
                </el-form-item>

                <p class="text">1、新密码字符长度为>=8位;</p>

                <p class="text">2、包含以下任意两类字符：英文大小写、数字、非字母字符(如 !、$、#、%);</p>

            </el-form>
        </div>
        <div slot="footer" class="footer_button">
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="hide()">取消</el-button>
        </div>
    </el-dialog>
</template>

<script>
    import Api from  '../api/api'
    import Utils from '../utils/utils'
    import Secret from  '../utils/secret'
    export default {
        name: "changePassword",
        data() {
            var validateoldPass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入旧密码'));
                } else {
                    if (this.ruleForm2.newpass !== '') {
                        this.$refs.ruleForm2.validateField('newpass');
                    }
                    callback();
                }
            };
            var validatenewPass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                }else if(value === this.ruleForm2.oldpass){
                    callback(new Error('新密码不能和旧密码一致'));
                } else if(!/^(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{8,18}$/.test(value)){
                    callback(new Error('请输入符合规则的密码'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatecheckPass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm2.newpass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm2: {
                    oldpass: '',
                    checkPass: '',
                    newpass: ''
                },
                rules2: {
                    oldpass: [
                        { validator: validateoldPass, trigger: 'blur' }
                    ],
                    newpass: [
                        { validator: validatenewPass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatecheckPass, trigger: 'blur' }
                    ],
                }
            };
        },
        props:{
            showPassword:{
                type: Boolean,
                default: false
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.submit()
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            submit(){
                const vm  =this
                let params = {
                    'userCode':Utils.getSession('aegeanUserInfo').userCode,
                    'password':Secret.Encrypt(this.ruleForm2.oldpass),
                    'newPassword':Secret.Encrypt(this.ruleForm2.newpass)
                }
                Api.modifyPwd(params).then(res => {
                    this.$alert('密码更新成功,请重新登陆', '提示', {
                        confirmButtonText: '确定',
                        callback: action => {
                            Utils.delLocalStorage('aegeanUserInfo')
                            // vm.$router.push('/login')
                            top.location.href = top.location.href.split('/#/')[0] + '/#/login'
                        }
                    });
                }).catch(error => {
                    console.log(error)
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            hide(){
                this.$emit('hidePassword',false)
                setTimeout(() => {
                    this.resetForm('ruleForm2')
                })
            },
            handleClose(){}
        }
    }
</script>

<style lang="less" scoped>
    .newProduct_block{
        .text{
            text-align: left;
            margin-bottom: 10px;
            padding-left: 100px;
        }
        .footer_button{
            text-align: center;
        }
    }

</style>

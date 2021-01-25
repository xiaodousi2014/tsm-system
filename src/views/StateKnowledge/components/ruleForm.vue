<template>
  <div>
    <el-form :model="ruleForm"
             :rules="rules"
             :inline="true"
             ref="ruleForm"
             label-position="right"
             label-width="100px"
             class="demo-ruleForm">
      <el-row>
        <el-col :span="8">
          <el-form-item label="场地名称"
                        prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="文件类型"
                        prop="file_type">
            <el-select v-model="ruleForm.file_type"
                      placeholder="请选择活动区域">
              <el-option label="区域一"
                        value="shanghai"></el-option>
              <el-option label="区域二"
                        value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="下发时间"
                        prop="issue_time">
            <el-date-picker
              v-model="ruleForm.issue_time"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="大单位"
                        prop="unit_group">
            <el-input v-model="ruleForm.unit_group"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="文件格式"
                        prop="file_format">
            <el-select v-model="ruleForm.file_format"
                      placeholder="请选择">
              <el-option v-for="item in file_format_list" :key="item.value" :label="item.label"
                        :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="发文字号"
                        prop="dispatch_size">
            <el-input v-model="ruleForm.dispatch_size"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="旅团级单位"
                        prop="unit_brigade">
            <el-input v-model="ruleForm.unit_brigade"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="存放地点"
                        prop="store_site">
            <el-input v-model="ruleForm.store_site"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="发文单位"
                        prop="dispatch_unit">
            <el-input v-model="ruleForm.dispatch_unit"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="文件名称"
                        prop="file_name">
            <el-input v-model="ruleForm.file_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="内容简要"
                        prop="details_summarize">
            <el-input v-model="ruleForm.details_summarize"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="备注"
                        prop="remark">
            <el-input v-model="ruleForm.remark"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="文件类别"
                        prop="file_sort">
            <el-input v-model="ruleForm.file_sort"></el-input>
          </el-form-item>
        </el-col>
        <div v-show="showmoer">
          <el-col :span="8">
            <el-form-item label="主题词1"
                          prop="topic1">
              <el-input v-model="ruleForm.topic1"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="主题词2"
                          prop="topic2">
              <el-input v-model="ruleForm.topic2"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="主题词3"
                          prop="topic3">
              <el-input v-model="ruleForm.topic3"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="附件"
                          prop="attachment">
              <el-input v-model="ruleForm.attachment"></el-input>
            </el-form-item>
          </el-col>
        </div>
        <el-col :span="8"><el-button type="text" @click="showmoer=true" style="margin-left:120px;">更多字段</el-button></el-col>
      </el-row>
      <el-row>
        <el-form-item>
          <el-button type="primary"
                    @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import Api from '@/api/doc/stateKnowledge'
export default {
  props: ['formInfo'],
  data() {
    return {
      showmoer:false,
      file_format_list: [
        {label:'txt',value:0},
        {label:'pdf',value:1},
        {label:'doc',value:2},
        {label:'jpg',value:3},
        {label:'png',value:4},
        {label:'bmp',value:5},
        {label:'gif',value:6},
        {label:'媒体',value:7},
        {label:'其他',value:9},
      ],
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
      }
    }
  },
  created() {
    console.log(this.formInfo)
    // this.ruleForm = this.formInfo
  },
  mounted() {
    this.ruleForm = this.formInfo
    this.$nextTick(()=>{
      this.$refs['ruleForm'].clearValidate()
    })
  },
  destroy() {
    console.log('销毁')
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          Api.addRecord(this.ruleForm)
          // alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
      // this.$emit('handleClose', false)
    }
  }
}
</script>
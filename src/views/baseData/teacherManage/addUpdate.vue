<template>
  <div class="student-manage-dialog">
    <el-dialog
      center
      :title="title"
      :visible.sync="showing"
      width="1000px"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      @close="clearTable"
    >
      <el-form ref="addUpdateForm" :model="addUpdateForm" label-width="100px" :rules="rules">
        <el-row>
          <el-col :span="8">
            <el-form-item label="所属组织">
              <el-input v-model="addUpdateForm.a" placeholder="自动填入组织"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="教员号">
              <el-input v-model="addUpdateForm.a" placeholder="输入教员号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="学院（专业系）代码">
              <el-input v-model="addUpdateForm.a" placeholder="输入学院（专业系）代码"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="姓名">
              <el-input v-model="addUpdateForm.a" placeholder="输入姓名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="出生年月">
              <el-date-picker v-model="addUpdateForm.date" type="date" placeholder="选择出生年月"></el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="教研室代码">
              <el-input v-model="addUpdateForm.a" placeholder="输入教研室代码"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="文化程度">
              <el-select
                v-model="addUpdateForm.b"
                filterable
                placeholder="选择文化程度"
                style="width:100%;"
              >
                <el-option
                  v-for="(item,index) in wenHuaOption"
                  :key="index"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="学位代码">
              <el-input v-model="addUpdateForm.a" placeholder="输入学位代码"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="生源地">
              <el-input v-model="addUpdateForm.a" placeholder="输入生源地"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="政治面貌">
              <el-input v-model="addUpdateForm.a" placeholder="输入政治面貌"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="民族">
              <el-input v-model="addUpdateForm.a" placeholder="输入民族"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="性别">
              <el-select
                v-model="addUpdateForm.c"
                filterable
                placeholder="选择性别"
                style="width:100%;"
              >
                <el-option
                  v-for="(item,index) in genderOption"
                  :key="index"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="出生日期">
              <el-date-picker v-model="addUpdateForm.a" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="邮箱">
              <el-input v-model="addUpdateForm.a" placeholder="输入邮箱"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="手机号码">
              <el-input v-model="addUpdateForm.a" placeholder="输入手机号码"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="籍贯">
              <el-input v-model="addUpdateForm.a" placeholder="输入籍贯"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="户口性质">
              <el-input v-model="addUpdateForm.a" placeholder="输入户口性质"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="户口所在地">
              <el-input v-model="addUpdateForm.a" placeholder="输入户口所在地"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="头像">
              <el-upload action="https://xxx" list-type="picture-card">
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="健康状况">
              <el-input v-model="addUpdateForm.a" placeholder="输入健康状况"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="婚姻状况">
              <el-select
                v-model="addUpdateForm.d"
                filterable
                placeholder="选择婚姻状况"
                style="width:100%;"
              >
                <el-option
                  v-for="(item,index) in marriageOption"
                  :key="index"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="showing=false">取 消</el-button>

        <el-button type="primary" @click="onAddStudentInfo()">保存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "新增教员", //标题名称
      showing: false,
      addUpdate: "", //判断是新增还是修改

      // 学籍状态
      StuStatusOption: [
        { id: "1", name: "在籍" },
        { id: "2", name: "休学" }
      ],

      // 性别
      genderOption: [
        { id: "1", name: "男" },
        { id: "2", name: "女" }
      ],

      // 婚姻
      marriageOption: [
        { id: "1", name: "未婚" },
        { id: "2", name: "已婚" },
        { id: "3", name: "离异" }
      ],

      // 文化程度
      wenHuaOption: [
        { id: "1", name: "高中" },
        { id: "2", name: "本科" },
        { id: "3", name: "研究生" },
        { id: "4", name: "硕士" },
        { id: "5", name: "博士" },
        { id: "6", name: "博士后" }
      ],

      // 表单验证
      rules: {
        orgId: [
          { required: true, message: "请选择二级学院", trigger: "change" }
        ]
      },

      // 表单数据
      addUpdateForm: {
        a: "",
        b: "",
        c: "",
        d: "",
        date: ""
      }
    };
  },
  created() {},
  methods: {
    // 关闭弹出框
    clearTable() {},

    // 新增弹出框
    addShow() {
      this.addUpdate = "add";
      this.title = "新增学员";
      this.showing = true;
    },
    // 修改弹出框
    updateShow() {
      this.addUpdate = "update";
      this.title = "修改学员";
      this.showing = true;
    },

    // 新增学生信息
    onAddStudentInfo() {}
  }
};
</script>

<style lang="less"  >
// 修改弹出框高度用，可进一步调整
.student-manage-dialog {
  .el-dialog {
    margin-top: 5vh !important;
  }
}
</style>




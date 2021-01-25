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
          <el-col :span="24">
            <el-form-item label="登录名：">
              <el-input v-model="addUpdateForm.a"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item label="密码：">
              <el-input v-model="addUpdateForm.a"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="来源">
              <el-select
                v-model="addUpdateForm.b"
                filterable
                placeholder="选择来源"
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
          <el-col :span="12">
            <el-form-item label="关联">
              <el-select
                v-model="addUpdateForm.b"
                filterable
                placeholder="选择关联"
                popper-class="width: 250px;"
                style="width:250px"
              >
                <el-option
                  v-for="(item,index) in glOption"
                  :key="index"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>

              <div style="margin-left:10px;  display:inline-block; float:right;">
                <el-button type="primary">重新选择</el-button>
              </div>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-form-item label="功能列表">
            <el-input type="textarea" :rows="5"></el-input>
          </el-form-item>
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
    const generateData = _ => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        });
      }
      return data;
    };
    return {
      data: generateData(),
      value: [1, 4],
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

      wenHuaOption: [
        { id: "1", name: "参谋" },
        { id: "2", name: "教员" },
        { id: "3", name: "学院" }
      ],

      glOption: [
        { id: "1", name: "参谋" },
        { id: "2", name: "教员" },
        { id: "3", name: "学院" }
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
      this.title = "设置权限";
      this.showing = true;
    },
    // 修改弹出框
    updateShow() {
      this.addUpdate = "update";
      this.title = "修改用户";
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




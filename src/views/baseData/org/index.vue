<template>
  <div>
    <div class="my-el-table content_box">
      <div class="menu-type">
        <div>
          <span>组织架构管理:&nbsp;&nbsp;</span>

          <div
            :class="['type-btn', value == item.id && 'type-btn-checked']"
            v-for="item in file_generate_unit_rank"
            :key="item.id"
            @click="clickType(item.id)"
          >
            {{ item.name }}
          </div>

        </div>
        <div class="top-menu-but">
          <el-button
            type="primary"
            class="btnWidth"
            @click="searchlist"
          >检索</el-button>
          <el-button
            class="btnSty"
            @click="addForm"
          >新增</el-button>
          <el-button
            class="btnSty"
            @click="edit"
          >编辑</el-button>
          <el-button
            class="btnSty"
            @click="delectList"
          >删除</el-button>
        </div>
      </div>

      <el-row>
        <custom-table-select :list="tableAllIist"></custom-table-select>
        <custom-table
          :tableAllIist="tableAllIist"
          :tableData="tableData"
          @selectTableList="selectTableList"
          @getAttachFile="getAttachFile"
          @clickrow="clickrow"
        ></custom-table>
        <Pagination
          :pagination="pagination"
          @getSizeChange="getSizeChange"
          @getCurrentChange="getCurrentChange"
        />
      </el-row>
    </div>

    <el-dialog
      :visible.sync="dialogVisible"
      title="新增"
      width="1100px"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
    >
      <custom-create
        @close="close"
        :searchList="searchList"
        @listCreate="listCreate"
        :form="{}"
      ></custom-create>
    </el-dialog>
    <el-dialog
      v-if="editModal"
      :visible.sync="editModal"
      title="编辑"
      width="1100px"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
    >
      <custom-edit
        @close="close"
        :searchList="searchList"
        :form="multipleSelectionInfo"
        @listEdit="listEdit"
      ></custom-edit>
    </el-dialog>
    <el-dialog
      v-if="searchModal"
      :visible.sync="searchModal"
      title="检索"
      width="1100px"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
    >
      <custom-search
        :searchList="searchList"
        @Search="Search"
      ></custom-search>
    </el-dialog>

    <el-dialog
      title="导入附件"
      :visible.sync="exportPutModal"
      width="500px"
    >
      <custom-upload-file-form-put
        infoType="t_docs"
        :id="multipleSelectionInfo.id"
        :url="fileUrl"
        :isMultiFiles="true"
        @close="close"
      />
    </el-dialog>

    <el-dialog
      title="偏好设置"
      v-if="preferencesModal"
      :visible.sync="preferencesModal"
      width="800px"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
    >
      <commonon-preferences
        @close="close"
        infoType="t_docs"
      ></commonon-preferences>
    </el-dialog>
  </div>
</template>
<script>
// 获取学生接口
import Api from "@/api/baseData/org";
import Utils from "@/utils/utils";
import Pagination from "@/components/pagination"; //分页接口
import customTableSelect from "@/components/customTableSelect";
import customSearch from "@/components/customSearch";
import customTable from "@/components/customTable";
import customUploadFile from "@/components/customUploadFile";
import customCreate from "@/components/customCreate";
import customEdit from "@/components/customEdit";
import customUploadFileFormPut from "@/components/customUploadFileFormPut";
import commononPreferences from "@/components/commononPreferences";

let id = 1000;

export default {
  name: "overview",
  components: {
    Pagination,
    customTableSelect,
    customSearch,
    customTable,
    customUploadFile,
    customCreate,
    customEdit,
    customUploadFileFormPut,
    commononPreferences,
  },
  data() {
    return {
      fileUrl: `${process.env.VUE_APP_API_URL}/common/uploadfile`,
      dialogVisible: false,
      editModal: false,
      searchModal: false,
      exportPutModal: false,
      preferencesModal: false,
      value: undefined,
      tableAllIist: [],
      multipleSelectionInfo: {},
      searchList: [],
      query: {
        orderField: "", //排序字段
        orderOrient: "1", //排序顺序 1正序 2倒序
        // indexArray: "1", //检索参数
      },
      //0-txt,1-pdf,2-doc,3-jpg,4-png,5-bmp,6-gif,7-媒体,9-其他
      file_generate_unit_rank: [], // 文件生成单位级别
      file_sort: [], // 文件类别
      file_type: [], // 文件类型
      tableData: [
        {
          id: "1",
          number: "112",
          a: "这是个数据",
          b: "这是个数据",
        },
      ],
      pagination: {
        pageNum: 1,
        pageSize: 10,
        total: 0,
      },
      field_data: [],
    };
  },
  created() {
    this.getTableList();
  },
  mounted() {
    this.getInfoType();
  },
  methods: {
    getInfoType() {
      // 获取所有字段
      Api.getOrgInfoType()
        .then((res) => {
          if (res.code == "0000") {
            console.log("读取返回的字段");
            console.log(res);
            if (res.data.filter.length) {
              //  this.tableAllIist = res.data.filter;
              let list = res.data.filter.filter((item) => {
                return item.display == true;
              });
              let info = res.data.filter.filter((v) => {
                return v.name == "file_generate_unit_rank";
              })[0];
              let file_generate_unit_rank = [];
              file_generate_unit_rank.push({ id: undefined, name: "全部" });
              if (info) {
                Object.entries(JSON.parse(info.itemdata)).forEach((item) => {
                  let query = {
                    id: Number(item[0]),
                    name: item[1],
                  };
                  file_generate_unit_rank.push(query);
                });
                this.file_generate_unit_rank = file_generate_unit_rank;
                console.log(this.file_generate_unit_rank);
              }
              this.searchList = list;
              // this.getPlanList();
            }
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    getTableList() {
      let params = Object.assign({}, this.query, this.pagination);
      Api.queryOrg(Utils.filterParams(params)).then((res) => {
        if (res.code === "0000") {
          this.tableData = [];
          // this.total = 0;
          console.log("读取循环的数据");
          console.log();
          this.tableAllIist = res.data.columns;
          if (res.data.searchList.length) {
            this.tableData = res.data.searchList;
            this.pagination.total = res.page.page_total;
          } else {
            this.tableData = [];
            this.pagination.total = 0;
          }
        }
      });
    },
    // 分页功能
    getCurrentChange(val) {
      this.pagination.pageNum = val;
      this.getTableList();
    },
    getSizeChange(val) {
      this.pagination.pageSize = val;
      this.getTableList();
    },
    searchlist() {
      this.searchModal = true;
    },
    addForm() {
      this.dialogVisible = true;
    },
    edit() {
      // 编辑按钮
      console.log(
        "multipleSelectionInfo",
        JSON.stringify(this.multipleSelectionInfo),
        this.multipleSelectionInfo
      );

      if (JSON.stringify(this.multipleSelectionInfo) == "{}") {
        this.$message.warning("请先选择数据");
        return;
      }

      if (this.multipleSelection.length > 1) {
        this.$message.warning("您一次只能修改一条数据");
        return;
      }

      this.editModal = true;
      
    },
    delectList() {
      // 删除 
      if (!this.multipleSelection || this.multipleSelection.length === 0) {
        this.$message.warning("请先选择数据");
        return;
      }
      if (this.multipleSelection.length > 1) {
        this.$message.warning("您一次只能删除一条数据");
        return;
      }

      let params = {
        id: this.multipleSelection[0],
      };
      Api.deleteOrg(params)
        .then((res) => {
          if (res.code == "0000") {
            this.$message.success("删除成功");
            this.close();
          }
        })
        .catch(() => {
          this.$message.error("系统繁忙");
        });
    },
    clickType(value) {
      // 法规分类
      this.value = value;
      let arr = [
        {
          col_type: "map",
          col_name: "file_generate_unit_rank",
          value: value,
          relation: 1,
          indexType: 1,
        },
      ];
      if (this.value === undefined) {
        arr = [];
      }
      this.Search(arr);
    },
    listCreate(event) {
      // 创建保存
      console.log("listCreate", event);
      Api.addOrg(event)
        .then((res) => {
          if (res.code == "0000") {
            this.$message.success("操作成功！");
            this.close();
          }
        })
        .catch(() => {
          this.$message.error("系统繁忙");
        });
    },

    listEdit(event) {
      // 修改保存
      Api.putOrg(event)
        .then((res) => {
          if (res.code == "0000") {
            this.$message.success("操作成功！");
            this.close();
          }
        })
        .catch(() => {
          this.$message.error("系统繁忙");
        });
    },

    Search(event) {
      this.query.indexArray = [];
      this.query.indexArray = event;
      this.searchModal = false;
      this.getTableList();
    },
    goDelectPage() {
      // 删除记录页面
      this.$router.push("/doc/in-stock-record-del");
    },
    goPage() {
      console.log(this.multipleSelectionInfo);
      if (!this.multipleSelectionInfo || !this.multipleSelectionInfo.id) {
        this.$message.warning("请先选择数据");
        return;
      }
      this.exportPutModal = true;
    },
    onTemplateDown() {
      window.open(
        `${process.env.VUE_APP_API_URL}/common/attachment/download_TemplateFile?infoType=t_docs`
      );
    },
    close() {
      this.editModal = false;
      this.dialogVisible = false;
      this.searchModal = false;
      this.exportPutModal = false;
      this.preferencesModal = false;
      this.getTableList();
      // this.search();
    },
    getAttachFile(query) {
      // 下载附件
      window.open(
        `${process.env.VUE_APP_API_URL}/common/attachment/download_TemplateFile?infoType=t_docs&id=${query.row.id}&file=${query.file}`
      );
    },
    // table选中
    selectTableList(list) {
      let query = [];
      list.length > 0 &&
        list.forEach((item) => {
          query.push(item.id);
        });
      this.multipleSelection = query;
      this.multipleSelectionInfo = list.length > 0 ? list[0] : {};
      this.form = [];
      list.forEach((item) => {
        let query = {
          device_id: item.id,
          device_name: item.name,
          receiver: sessionStorage.getItem("loginName"),
          quantity: "1",
          locate_site: "",
          receiver_tel: "",
        };
        this.form.push(query);
      });
      this.borrowList = [];
      list.forEach((item) => {
        let query = {
          device_id: item.id,
          device_name: item.name,
          borrower: sessionStorage.getItem("loginName"),
          quantity: "1",
          locate_site: "",
          borrower_org: "",
          borrower_time: "",
          borrower_tel: "",
          course_name: "",
          return_man: "",
          return_time: "",
        };
        this.borrowList.push(query);
      });
      this.repairList = [];
      list.forEach((item) => {
        let query = {
          device_id: item.id,
          device_name: item.name,
          repair_content: "",
        };
        this.repairList.push(query);
      });
    },
    clickrow(row) {
      console.log("====", row);
    },
    onPreferences() {
      this.preferencesModal = true;
    },
  },
};
</script>
<style lang="less" scoped>
.type-sele {
  width: 120px;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.el-mini-input {
  height: 25px;
  line-height: 25px;
  width: 120px;
  /deep/ .el-input__inner {
    height: 25px;
    line-height: 25px;
    padding: 0 10px;
  }
}
.el-mini-btn {
  padding: 5px 12px;
}
.type-btn {
  height: 22px;
  width: 59px;
  font-size: 14px;
  display: inline-block;
  text-align: center;
  line-height: 22px;
  cursor: pointer;
}
.type-btn-checked {
  background: #1890ff;
  color: #ffffff;
  border-radius: 2px;
}
</style>

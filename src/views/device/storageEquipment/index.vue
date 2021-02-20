<template>
  <div class="ClassifiedDisplay padding20">
    <!-- 表格 -->
    <!--搜索表单-->
    <div class="table-button">
      <el-button  type="primary" @click="searchModal = true"
        >检索</el-button
      >
      <el-button class="btnSty" @click="onCreate()"
        >新增</el-button
      >
      <el-button class="btnSty" @click="onEdit()"
        >编辑</el-button
      >
      <el-button class="btnSty" @click="onDelete()"
        >删除</el-button
      >
      <el-button class="btnSty" @click="onRevoke()"
        >删除记录</el-button
      >
      <el-button class="btnSty" @click="onQingLing()"
        >请领</el-button
      >
      <el-button class="btnSty" @click="onBorrow()"
        >借用</el-button
      >
      <el-button class="btnSty" @click="onRepair()"
        >维修</el-button
      >
      <el-button class="btnSty" @click="onScrap()"
        >报废</el-button
      >
      <el-button class="btnSty" @click="onExport()"
        >导出</el-button
      >
      <el-button class="btnSty" @click="onInventory()"
        >盘点</el-button
      >
      <el-button  type="primary" @click="onUploadFile()"
        >上传附件</el-button
      >
      <el-button class="btnSty" @click="onCanBorrow()"
        >设置可借</el-button
      >
       <el-button class="btnSty" @click="onDownewm()"
        >二维码下载</el-button
      >
    <el-button class="btnSty" @click="onPreferences()">偏好设置</el-button>
    </div>
      <el-dialog title="偏好设置" v-if="preferencesModal" :visible.sync="preferencesModal" width="800px" :close-on-press-escape="false" :close-on-click-modal="false">
            <commonon-preferences @close="close" :infoType="infoType" @closeSave='close'></commonon-preferences>
        </el-dialog>
    <custom-table
      :tableAllIist="tableAllIist"
      :tableData="tableData"
      @selectTableList="selectTableList"
       @getAttachFile='getAttachFile'
    ></custom-table>
    <!-- 分页 -->
    <div class="pagination">
      <Pagination
        ref="Pagination"
        @getSizeChange="getSizeChange"
        @getCurrentChange="getCurrentChange"
        :pagination="query"
        :total="total"
      />
    </div>
    <el-dialog :title="title" :visible.sync="addInfoModal" width="1024px">
      <div v-for="item in form" :key="item.id">
        <el-form
          ref="forms"
          :model="item"
          label-width="130px"
          style="padding-top: 20px"
        >
          <el-row>
            <el-col :span="8">
              <el-form-item label="设备名称:" prop="manufacturer">
                <el-input
                  disabled
                  v-model.trim="item.device_name"
                  maxlength="10"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="请领数量:" prop="deviceModel">
                <el-input
                  disabled
                  v-model.trim="item.quantity"
                  maxlength="30"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="申请人:" prop="costAmount">
                <el-input
                  disabled
                  v-model.trim="item.receiver"
                  maxlength="10"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="存放地点:" prop="costAmount">
                <el-input
                  v-model.trim="item.locate_site"
                  maxlength="10"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="联系方式:" prop="costAmount">
                <el-input
                  v-model.trim="item.receiver_tel"
                  maxlength="10"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button @click="addInfoModal = false">关 闭</el-button>
        <el-button type="primary" @click="onQingLingSumit()">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :title="title" :visible.sync="borrowModal" width="1024px">
      <div v-for="item in borrowList" :key="item.id">
        <el-form
          ref="forms"
          :model="item"
          label-width="130px"
          style="padding-top: 20px"
        >
          <el-row>
            <el-col :span="8">
              <el-form-item label="设备名称:" prop="manufacturer">
                <el-input
                  disabled
                  v-model.trim="item.device_name"
                  maxlength="10"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="请领数量:" prop="deviceModel">
                <el-input
                  disabled
                  v-model.trim="item.quantity"
                  maxlength="30"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="申请人:" prop="costAmount">
                <el-input
                  disabled
                  v-model.trim="item.borrower"
                  maxlength="10"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="存放地点:" prop="costAmount">
                <el-input
                  v-model.trim="item.locate_site"
                  maxlength="10"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="联系方式:" prop="costAmount">
                <el-input
                  v-model.trim="item.borrower_tel"
                  maxlength="10"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="领用单位:" prop="costAmount">
                <el-input
                  v-model.trim="item.borrower_org"
                  maxlength="10"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="领用时间:" prop="costAmount">
                <el-date-picker
                  style="width: 100%"
                  v-model="item.borrower_time"
                  type="date"
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                  :clearable="false"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="课程名称:" prop="costAmount">
                <el-input
                  v-model.trim="item.course_name"
                  maxlength="10"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="归还人:" prop="costAmount">
                <el-input
                  v-model.trim="item.return_man"
                  maxlength="10"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="归还时间:" prop="costAmount">
                <el-date-picker
                  style="width: 100%"
                  v-model="item.return_time"
                  type="date"
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                  :clearable="false"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button @click="borrowModal = false">关 闭</el-button>
        <el-button type="primary" @click="onBorrowSumit()">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :title="title" :visible.sync="repairModal" width="1024px">
      <el-form
        v-if="repairList.length"
        ref="forms"
        :model="repairList[0]"
        label-width="130px"
        style="padding-top: 20px"
      >
        <el-row>
          <el-col :span="8">
            <el-form-item label="维修项目名称:" prop="manufacturer">
              <el-input
                disabled
                v-model.trim="repairList[0].device_name"
                maxlength="10"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="维修内容:" prop="costAmount">
              <el-input
                v-model.trim="repairList[0].repair_content"
                maxlength="10"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="repairModal = false">关 闭</el-button>
        <el-button type="primary" @click="onRepairSumit()">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="上传附件" :visible.sync="exportModal" width="500px">
      <custom-upload-file :url="fileUrl" @close="close"></custom-upload-file>
    </el-dialog>
      <el-dialog title="上传附件" :visible.sync="exportListModal" width="500px">
      <custom-upload-file-list :url="fileUrl" @close="close" :fileList='dataList' :upLoadQuery='upLoadQuery'></custom-upload-file-list>
    </el-dialog>
    <el-dialog title="新增" :visible.sync="createModal" width="1100px">
      <custom-create
        @close="close"
        :searchList="searchList"
        @listCreate="listCreate"
        :form="{}"
      ></custom-create>
    </el-dialog>
    <el-dialog title="编辑" :visible.sync="editModal" width="1100px" >
      <custom-edit
        @close="close"
        :searchList="searchList"
        :form="multipleSelectionInfo"
        @listEdit="listEdit"
        :url="fileUrl"
      ></custom-edit>
    </el-dialog>
       <el-dialog title="检索" :visible.sync="searchModal" width="1100px">
      <custom-search :searchList="searchList" @Search="Search"></custom-search>
    </el-dialog>
  </div>
</template>
<script>
import Pagination from "../../../components/customPagination";
import customTableSelect from "../../../components/customTableSelect";
import customSearch from "../../../components/customSearch";
import Http from "@/api/deviceManage";
import customTable from "../../../components/customTable";
import customUploadFile from "@/components/customUploadFile";
import customCreate from "@/components/customCreate";
import customEdit from "@/components/customEdit";
import customUploadFileList from "../../../components/customUploadFileList";
import commononPreferences from '@/components/commononPreferences'
export default {
  name: "declareWarehousing",
  components: {
    customTableSelect,
    customSearch,
    customTable,
    Pagination,
    customUploadFile,
    customCreate,
    customEdit,
    customUploadFileList,
    commononPreferences
  },
  data() {
    return {
      query: {
        orderField: "id",
        orderOrient: "2",
        indexArray: [],
        pageNum: 1,
        pageCount: 10,
      },
      title: "请领",
      total: 0,
      tableData: [],
      tableAllIist: [],
      addInfoModal: false,
      borrowModal: false,
      repairModal: false,
      searchList: [],
      rules: [],
      form: [],
      borrowList: [],
      repairList: [],
      multipleSelection: [],
      exportModal: false,
      createModal: false,
      editModal: false,
       exportListModal: false,
      fileUrl: "",
      multipleSelectionInfo: {},
      searchModal: false,
      dataList: {},
      upLoadQuery: {
        id: '',
        file: '',
        infoType: 't_device',
        field: 'attachment',
        isMultiFiles: true,
      },
       preferencesModal: false,
      infoType: 't_device',
    };
  },
  mounted() {
    this.getAllField();
  },
  methods: {
     onPreferences() {
            this.preferencesModal = true
        },
     getAttachFile(query) {
       const link = document.createElement("a");
      Http.getAttachFile({id:query.row.id, infoType: "t_device" , file: query.file})
      .then((res) => {
        let blob = new Blob([res], { type: "application/octet-stream" }); // res就是接口返回的文件流了
          let objectUrl = URL.createObjectURL(blob);
          link.href = objectUrl;
          link.download = query.file;
          link.click();
          URL.revokeObjectURL(objectUrl);
      })
      .catch((res) => {
        debugger
        this.$message.error(res.msg || "系统异常");
      });
    },
     Search(event) {
      this.query.indexArray = [];
      this.query.indexArray = event;
      this.searchModal = false;
      this.getTableList();
    },
    listCreate(event) {
      Http.onListCreate(event)
        .then((res) => {
          if (res.code == "0000") {
            this.$message.success("创建成功！");
            this.close();
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    onCreate() {
      this.createModal = true;
    },
    onEdit() {
      if (!this.multipleSelection.length) {
        this.$message.warning("请选择要编辑的数据列！");
        return;
      }
      if (this.multipleSelection.length > 1) {
        this.$message.warning("编辑数据列只能选择一条！");
        return;
      }
      this.fileUrl = `${process.env.VUE_APP_API_URL}/common/attachment/import?infoType=t_device&id=${this.multipleSelection[0]}`;
      this.editModal = true;
    },
    listEdit() {
      Http.onListEdit(this.multipleSelectionInfo)
        .then((res) => {
          if (res.code == "0000") {
            this.$message.success("编辑成功！");
            this.close();
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    onCanBorrow() {
      if (!this.multipleSelection.length) {
        this.$message.warning("请选择要操作的数据列！");
        return;
      }
      Http.onCanBorrow({ ids: this.multipleSelection })
        .then((res) => {
          if (res.code == "0000") {
            this.getTableList();
            this.$message.success("设置成功！");
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    // 上传附件
    onUploadFile() {
      if (!this.multipleSelection.length) {
        this.$message.warning("请选择要编辑的数据列！");
        return;
      }
      if (this.multipleSelection.length > 1) {
        this.$message.warning("只能选择单个数据列编辑！");
        return;
      }
      this.fileUrl = `${process.env.VUE_APP_API_URL}/common/attachment/import?infoType=t_device&id=${this.dataList.id}`;
      this.exportListModal = true;
      this.upLoadQuery.id= this.dataList.id;
      this.upLoadQuery.infoType = 't_device';
    },
    close() {
      this.preferencesModal = false;
      this.editModal = false;
      this.createModal = false;
      this.exportModal = false;
      this.exportListModal = false;
      this.getTableList();
      // this.search();
    },
    // 盘点
    onInventory() {
      if (!this.multipleSelection.length) {
        this.$message.warning("请选择要盘点的数据列！");
        return;
      }
      Http.onInventory({ ids: this.multipleSelection })
        .then((res) => {
          if (res.code == "0000") {
            this.$message.success("盘点成功！");
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    // 导出
    onExport() {
         if (!this.multipleSelection.length) {
        this.$message.warning("请选择要导出的数据列！");
        return;
      }
      window.open(`${process.env.VUE_APP_API_URL}/common/attachment/export?ids=${this.multipleSelection.toString()}&&infoType=t_device`)
    },
    onDownewm() {
       if (!this.multipleSelection.length) {
        this.$message.warning("请选择要操作的数据列！");
        return;
      }
       if (this.multipleSelection.length > 1) {
        this.$message.warning("只能选择单个数据列操作！");
        return;
      }
      window.open(`${process.env.VUE_APP_API_URL}/device/qrcode?id=${this.dataList.id}`)
    },
    // 报废
    async onScrap() {
      if (!this.multipleSelection.length) {
        this.$message.warning("请选择要报修的数据列！");
        return;
      }
      Http.checkedTrue({ ids: this.multipleSelection, type: 4 })
        .then((res) => {
          if (res.code == "0000") {
            Http.onStorageScrapSumit(this.multipleSelection)
              .then((res) => {
                if (res.code == "0000") {
                  this.$message.success("报废成功！");
                  this.getTableList();
                }
              })
              .catch((res) => {
                this.$message.error(res.msg || "系统异常");
              });
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    // 报修
    onRepair() {
      if (!this.multipleSelection.length) {
        this.$message.warning("请选择要报修的数据列！");
        return;
      }
      if (this.multipleSelection.length > 1) {
        this.$message.warning("报修数据列只能选择一条！");
        return;
      }
      Http.checkedTrue({ ids: this.multipleSelection, type: 3 })
        .then((res) => {
          if (res.code == "0000") {
            this.title = "报修";
            this.repairModal = true;
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    onRepairSumit() {
      Http.onStorageRepairSumit(this.repairList[0])
        .then((res) => {
          if (res.code == "0000") {
            this.$message.success("操作成功！");
            this.getTableList();
            this.repairModal = false;
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    // 提交
    onQingLingSumit() {
      Http.onStorageQingLingSumit(this.form)
        .then((res) => {
          if (res.code == "0000") {
            this.$message.success("操作成功！");
            this.getTableList();
            this.addInfoModal = false;
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    // 借用
    onBorrow() {
      if (!this.multipleSelection.length) {
        this.$message.warning("请选择要借用的数据列！");
        return;
      }
      Http.checkedTrue({ ids: this.multipleSelection, type: 2 })
        .then((res) => {
          if (res.code == "0000") {
            this.title = "借用";
            this.borrowModal = true;
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    // 借用提交
    onBorrowSumit() {
      Http.onStorageBorrowSumit(this.borrowList)
        .then((res) => {
          if (res.code == "0000") {
            this.$message.success("借用成功！");
            this.getTableList();
            this.borrowModal = false;
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    // 请领
    onQingLing() {
      if (!this.multipleSelection.length) {
        this.$message.warning("请选择要请领的数据列！");
        return;
      }
      Http.checkedTrue({ ids: this.multipleSelection, type: 1 })
        .then((res) => {
          if (res.code == "0000") {
            this.title = "请领";
            this.addInfoModal = true;
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    // 撤销操作
    onRevoke() {
      this.$router.push("delete/list");
    },
    getAllField() {
      Http.getStorageTitle()
        .then((res) => {
          if (res.code == "0000") {
            if (res.data.filter.length) {
              let list = res.data.filter.filter((item) => {
                return item.display == true;
              });
              this.searchList = list;
              this.getTableList();
            }
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    getTableList() {
      Http.getStorageList(this.query)
        .then((res) => {
          if (res.code == "0000") {
            this.form = {};
            this.tableData = [];
            this.total = 0;
            this.tableAllIist = res.data.columns;
            if (res.data.searchList.length) {
              this.tableData = res.data.searchList;
              this.total = res.page.page_total;
            }
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    getCurrentChange(val) {
      this.query.pageNum = val;
      this.getTableList();
    },
    getSizeChange(val) {
      this.query.pageCount = val;
      this.getTableList();
    },
    // 删除
    onDelete() {
      if (!this.multipleSelection.length) {
        this.$message.warning("请选择要删除的数据列！");
        return;
      }
      this.$confirm("此操作将删除该记录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.deleteSure();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    deleteSure() {
      Http.onStorageDelete(this.multipleSelection)
        .then((res) => {
          if (res.code == "0000") {
            this.$message.success("删除成功！");
            this.getTableList();
          }
        })
        .catch((res) => {
          this.$message.error(res.msg || "系统异常");
        });
    },
    // table选中
    selectTableList(list) {
      let query = [];
      list.forEach((item) => {
        query.push(item.id);
      });
       if(list.length) {
         this.dataList = list[0];
      }
      this.multipleSelection = query;
      this.multipleSelectionInfo = list[0];
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
  },
  created() {},
};
</script>
<style scoped lang="less">
.showIcon {
  text-align: right;
  padding-right: 5px;
  font-size: 25px;
  position: relative;
  .selectList {
    position: absolute;
    height: 400px;
    overflow-y: scroll;
    top: 30px;
    right: 0;
    z-index: 99;
    min-width: 100px;
    text-align: left;
    font-size: 20px;
    padding: 20px 0;
    background: #fdfdfd;
    border: 1px solid rgb(238, 238, 238);
    li {
      padding: 0 10px;
      line-height: 50px;
    }
  }
}
.pagination {
  margin-top: 20px;
}
.showIcon i {
  cursor: pointer;
}
</style>

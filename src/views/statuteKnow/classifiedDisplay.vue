<template>
    <div class="ClassifiedDisplay">
    <!-- 页面头部输入框部分 -->
    <el-table :data="ClassifiedDisplay" border style="width: 100%">
      <el-table-column prop="marketNo" label="商场编号"></el-table-column>
      <el-table-column prop="marketName" label="商场名称"></el-table-column>
      <el-table-column prop="createTime" label="申请时间"></el-table-column>
      <el-table-column prop="createBy" label="操作人"></el-table-column>
      <el-table-column prop="applyTypeDesc" label="申请类别"></el-table-column>
      <el-table-column prop="approvalBy" label="审核人"></el-table-column>
      <el-table-column
        prop="applyStatusDesc"
        label="申请状态"
      ></el-table-column>
      <el-table-column
        prop=""
        label="操作"
        width="300px"
        style="text-align: left"
      >
        <template slot-scope="scope">
          <div style="text-align: left">
            <el-button
              size="mini"
              @click="goDetail(scope.row, 'look')"
              :disabled="
                scope.row.applyStatus == 'un_submit' ||
                scope.row.applyStatus == 'return_modify' ||
                scope.row.applyStatus == 'supplement'
              "
              >查看详情</el-button
            >
            <el-button
              size="mini"
              type="primary"
              @click="goDetail(scope.row, 'edit')"
              :disabled="
                !(
                  scope.row.applyStatus != 'un_approve' &&
                  scope.row.applyStatus != 'success' &&
                  scope.row.applyStatus != 'fail'
                )
              "
              >修改</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="pagination" v-if="adjustmentList.length">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="query.pageNo"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="query.limit"
        layout="total,prev, pager, next,sizes"
        :total="total"
        border
      ></el-pagination>
    </div>
    <el-dialog title="选择申请类别" :visible.sync="dialogFormVisible">
      <el-select v-model="selectType" placeholder="请选择" style="width: 100%">
        <el-option
          v-for="item in choseList"
          :value="item.id"
          :label="item.name"
          :key="item.id"
        ></el-option>
      </el-select>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="goNewPage()">确 定</el-button>
      </div>
    </el-dialog>
    <!-- <adjustment-change :show="editFormShow" /> -->
    <!-- <add-input-info :show="addInfoModal" @close="closeModal()"></add-input-info> -->
  </div>
</template>
<script>
    import Http from '../../api/api'
    export default {
        name: 'ClassifiedDisplay',
        components: { },
        data() {
            return {
                ClassifiedDisplay: [],
            }
        },
        methods: {
          
        },
        created() {
        
        }
    }
</script>

<template>
    <div class="ClassifiedDisplay">
  <!-- 表格 -->
    <!--搜索表单-->
        <collapse-transition>
            <el-form :inline="true"  ref="form1" label-position="right" :model="formDataSelect">
                <el-form-item label="品牌名称：">
                    <el-input size="small" v-model="formDataSelect.brandName" placeholder="请输入品牌名称"></el-input>
                </el-form-item>
                <el-form-item label="退单时间：">
                    <el-date-picker
                            size="small"
                            v-model="formDataSelect.reTime"
                            type="daterange"
                            :default-time="['00:00:00', '23:59:59']"
                            value-format='timestamp'
                            unlink-panels
                            range-separator="~"
                            start-placeholder="请输入开始时间"
                            end-placeholder="结束时间">
                    </el-date-picker>
                </el-form-item>
                <div class="search-button-block">
                    <el-button size="small" type="primary">查 询</el-button>
                    <el-button size="small">重 置</el-button>
                </div>
                <!--<div @click="showMore = !showMore" class="search-show-more">-->
                <!--<span>展开更多</span>-->
                <!--<i class="icon-show-more el-icon-arrow-down" :class="{'arrowRotate':!showMore}"></i>-->
                <!--</div>-->
            </el-form>
        </collapse-transition>
      <el-table
        :data="tableData3"
        border
        id="el-table"
        style="width: 100%">
        <!-- 动态循环的列表 -->
        <template  v-for="(item, index) in tableLabel">
          <el-table-column
            :key="index"
            :prop="item.prop"
            :label="item.label"
            width="">
          </el-table-column>
        </template>
        <!-- 固定的列：从业人员 -->
        <el-table-column label="操作" width="200px">
          <template slot-scope="scope">
　　　　　　 <el-button type="text" size="small">编辑</el-button>
 <el-button type="text" size="small">删除</el-button>
  <el-button type="text" size="small">上传附件</el-button>
　　　　</template>
        </el-table-column>        
      </el-table>

    <!-- 分页 -->
    <!-- <div class="pagination" >
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
    </div> -->
    <!-- <el-dialog title="选择申请类别" :visible.sync="dialogFormVisible">
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
    </el-dialog> -->
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
                  formDataSelect: {},
                 tableData3: [
        {
          id: '1',
          number: '112',
          a: '这是个数据',
          b: '这是个数据'
        }, {
          id: '2',
          number: '113',
          a: '这是个数据',
          b: '这是个数据'
        }
      ],
      tableLabel: [
          {label: '文件标题', prop: 'id'},
          {label: '作者', prop: 'number'},
          {label: '发布时间', prop: 'a'},
          {label: '发布层级', prop: 'b'},
           {label: '发布人', prop: 'b'},
            {label: '分类', prop: 'b'},
             {label: '创建日期', prop: 'b'},
      ]
            }
        },
        methods: {
          
        },
        created() {
        
        }
    }
</script>
<style scoped>
.search-from {
  padding: 12px;
  border: 1px solid #e9e9e9;
  margin-bottom: 16px;
  background: #fbfbfb;
  border-radius: 4px;
}
</style>

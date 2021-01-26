<template>
    <el-pagination
        background
        prev-text="上一页"
        next-text="下一页"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagination.pageNum"
        :page-sizes="[10, 50, 100, 200]"
        :page-size="pagination.pageCount"
        layout=" prev, pager, next,total,sizes, jumper"
        :total="total">
    </el-pagination>
</template>

<script>
    export default {
        name: 'Pagination',
        props: ['pagination', 'total'],
        methods: {
            handleSizeChange (val) {
                this.$emit('getSizeChange', val)
            },
            handleCurrentChange (val) {
                this.$emit('getCurrentChange', val)
            }
        }
    }
</script>

<style lang="less">
    // 分页器
    .el-pagination {
        margin-top: 10px;
        text-align: right;
    }
    .el-pagination span:not([class*=suffix]), .el-pagination button{
        padding:0 5px;
    }
    .el-pagination.is-background .btn-prev, .el-pagination.is-background .btn-next, .el-pagination.is-background .el-pager li{
        border-radius:5px;
        background:#fff;
        border: 1px solid #ddd;
        color:#666;
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active{
        background: #FFFFFF;
        color:#666;
        border: 1px solid #595757;
    }
    .el-pagination__jump{
        margin-left:0;
    }
</style>

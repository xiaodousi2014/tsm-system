<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
export default {
    mounted() {

    }
}
</script>
<style src="../public/font/iconfont.css"></style>
<style lang="less">
#app{
    width: 100%;
    height: 100%;

    .pagination {
        text-align: right;
    }
    .el-pagination {
        padding: 0;
    }
    .el-pagination__sizes {
        margin: 0;
    }
    .el-pagination .el-select .el-input {
        margin: 0;
    }
}
</style>

import Http from '../utils/axios'
// const rt = 'http://139.198.188.175:8090/'
// const rt = 'http://218.59.43.155:8190'
const rt = 'http://218.59.43.155:8190'
export default {
    // 删除附件
    deletefile(query) {
        return Http.delete(`${rt}/common/deletefile`, query)
    },
    // 借用
    checkedTrue(query) {
        return Http.post(`${rt}/stationery/handle`, query)
    },
    //借用提交
    onStorageBorrowSumit(params) {
        return Http.post(`${rt}/stationery/lent`, params)
    },
    UploadImage(query) {
        return Http.post(`${rt}${query.url}`, query.file)
    },
    // 新增
    addData(params) {
        return Http.post(`${rt}/site`, params)
    },
    // 编辑
    editData(params) {
        return Http.put(`${rt}/site`, params)
    },
    // 撤销
    revokeOperation(params) {
        return Http.delete(`${rt}/site`, params)
    },
    // 列表数据导入
    uploadList(params) {
        return Http.post(`${rt}/common/import/query`, params)
    },
    // 删除
    deleteList(params) {
        return Http.delete(`${rt}/site`, params)
    },
    // 公用列表
    getSitCommonList(params) {
        return Http.get2(`${rt}/common/query/filter`, params)
    },
    // 公用检索
    getSitCommonData(params) {
        return Http.post(`${rt}/common/query/data`, params)
    },
    // 下载
    downFileCommon(query) {
        return Http.download(`${rt}/common/export`, query)
    },

    
    // 新增
    addDataLab(params) {
        return Http.post(`${rt}/lab`, params)
    },
    // 编辑
    editDataLab(params) {
        return Http.put(`${rt}/lab`, params)
    },
    // 撤销
    revokeOperationLab(params) {
        return Http.delete(`${rt}/lab`, params)
    },
    // 删除
    deleteListLab(params) {
        return Http.delete(`${rt}/lab`, params)
    },
}

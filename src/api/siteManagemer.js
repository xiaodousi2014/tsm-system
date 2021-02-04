import Http from '../utils/axios'
// const rt = 'http://139.198.188.175:8090/'
const rt = 'http://27.210.124.225:8190'
export default {
    UploadImage(query) {
        return Http.post(`${query.url}`, query.file)
       },
    // 列表数据导入
    addData(params) {
        return Http.get(`${rt}/site`, params)
    },
    // 列表数据导入
    editData(params) {
        return Http.put(`${rt}/site`, params)
    },
    // 撤销
    revokeOperation(params) {
        return Http.put(`${rt}/site`, params)
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
}

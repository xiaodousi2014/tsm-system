import Http from '../utils/axios'
// const rt = 'http://139.198.188.175:8090/'
const rt2 = 'http://10.8.145.43:8190'
export default {
    //计划申报
    getPlanTitle() {
        return Http.get(`${rt2}/material/plan/infoType`)
    },
    getPlanList(params) {
        return Http.post(`${rt2}/material/plan/list`, params)
    },
    onPlanRevoke(params) {
        let query = {
            ids: params
        }
        return Http.delete(`${rt2}/material/plan`, query)
    },
    //借用
    getBorrowTitle() {
        return Http.get(`${rt2}/material/lent/infoType`)
    },
    getBorrowList(params) {
        return Http.post(`${rt2}/material/lent/list`, params)
    },
    // 设备登记
    getStockTitle() {
        let query = {
            infoType: 't_import_record'
        }
        return Http.post(`${rt2}/common/query/filter`, query)
    },
    getStockList(params) {
        return Http.post(`${rt2}/common/import/query`, params)
    },
    onStockRevoke(params) {
        let query = {
            ids: params
        }
        return Http.post(`${rt2}/material/import/cancel`, query)
    },

    // 请领
    getReciveTitle() {
        return Http.get(`${rt2}/material/use/infoType`)
    },
    getReciveList(params) {
        return Http.post(`${rt2}/material/use/list`, params)
    },
    // 维修
    getRepairTitle() {
        return Http.get(`${rt2}/material/repair/infoType`)
    },
    getRepairList(params) {
        return Http.post(`${rt2}/material/repair/list`, params)
    },
    //报废
    getScrapTitle() {
        return Http.get(`${rt2}/material/abolish/infoType`)
    },
    getScrapList(params) {
        return Http.post(`${rt2}/material/abolish/list`, params)
    },
    // 库存记录 //
    getStorageTitle() {
        return Http.get(`${rt2}/material/infoType`)
    },
    getStorageList(params) {
        return Http.post(`${rt2}/material/list`, params)
    },
    getDeleteStorageTitle() {
        return Http.get(`${rt2}/material/dirty/infoType`)
    },
    getDeleteStorageList(params) {
        return Http.post(`${rt2}/material/dirty/list`, params)
    },
    putStorageList(params) {
        let query = {
            ids: params
        }
        return Http.put(`${rt2}/material/dirty`, query)
    },
    onStorageDelete(params) {
        let query = {
            ids: params
        }
        return Http.delete(`${rt2}/material`, query)
    },
    //请领提交
    onStorageQingLingSumit(params) {
        return Http.post(`${rt2}/material/use`, params)
    },
    //借用提交
    onStorageBorrowSumit(params) {
        return Http.post(`${rt2}/material/lent`, params)
    },
    //维修提交
    onStorageRepairSumit(params) {
        return Http.post(`${rt2}/material/repair`, params)
    },
    // 报废
    onStorageScrapSumit(params) {
        let query = {
            ids: params
        }
        return Http.post(`${rt2}/material/abolish`, query)
    },
    // 盘点记录
    getInventoryTitle() {
        return Http.get(`${rt2}/material/check/infoType`)
    },
    getInventoryList(params) {
        return Http.post(`${rt2}/material/check/list`, params)
    },
    // 维护管理
    getMaintainTitle() {
        return Http.get(`${rt2}/material/infoType`)
    },
    getMaintainList(params) {
        return Http.post(`${rt2}/material/list`, params)
    },

}

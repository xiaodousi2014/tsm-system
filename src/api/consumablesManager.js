import Http from '../utils/axios'
// const rt = 'http://139.198.188.175:8090/'
const rt2 = 'http://10.8.145.43:8190'
export default {
    //计划申报
    getPlanTitle() {
        return Http.get(`${rt2}/stationery/plan/infoType`)
    },
    getPlanList(params) {
        return Http.post(`${rt2}/stationery/plan/list`, params)
    },
    onPlanRevoke(params) {
        let query = {
            ids: params
        }
        return Http.delete(`${rt2}/stationery/plan`, query)
    },
    //借用
    getBorrowTitle() {
        return Http.get(`${rt2}/stationery/lent/infoType`)
    },
    getBorrowList(params) {
        return Http.post(`${rt2}/stationery/lent/list`, params)
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
        return Http.post(`${rt2}/stationery/import/cancel`, query)
    },

    // 请领
    getReciveTitle() {
        return Http.get(`${rt2}/stationery/use/infoType`)
    },
    getReciveList(params) {
        return Http.post(`${rt2}/stationery/use/list`, params)
    },
    // 维修
    getRepairTitle() {
        return Http.get(`${rt2}/stationery/repair/infoType`)
    },
    getRepairList(params) {
        return Http.post(`${rt2}/stationery/repair/list`, params)
    },
    //报废
    getScrapTitle() {
        return Http.get(`${rt2}/stationery/abolish/infoType`)
    },
    getScrapList(params) {
        return Http.post(`${rt2}/stationery/abolish/list`, params)
    },
    // 库存记录 //
    getStorageTitle() {
        return Http.get(`${rt2}/stationery/infoType`)
    },
    getStorageList(params) {
        return Http.post(`${rt2}/stationery/list`, params)
    },
    getDeleteStorageTitle() {
        return Http.get(`${rt2}/stationery/dirty/infoType`)
    },
    getDeleteStorageList(params) {
        return Http.post(`${rt2}/stationery/dirty/list`, params)
    },
    putStorageList(params) {
        let query = {
            ids: params
        }
        return Http.put(`${rt2}/stationery/dirty`, query)
    },
    onStorageDelete(params) {
        let query = {
            ids: params
        }
        return Http.delete(`${rt2}/stationery`, query)
    },
    //请领提交
    onStorageQingLingSumit(params) {
        return Http.post(`${rt2}/stationery/use`, params)
    },
    //借用提交
    onStorageBorrowSumit(params) {
        return Http.post(`${rt2}/stationery/lent`, params)
    },
    //维修提交
    onStorageRepairSumit(params) {
        return Http.post(`${rt2}/stationery/repair`, params)
    },
    // 报废
    onStorageScrapSumit(params) {
        let query = {
            ids: params
        }
        return Http.post(`${rt2}/stationery/abolish`, query)
    },
    // 盘点记录
    getInventoryTitle() {
        return Http.get(`${rt2}/stationery/check/infoType`)
    },
    getInventoryList(params) {
        return Http.post(`${rt2}/stationery/check/list`, params)
    },
    // 维护管理
    getMaintainTitle() {
        return Http.get(`${rt2}/stationery/infoType`)
    },
    getMaintainList(params) {
        return Http.post(`${rt2}/stationery/list`, params)
    },

}

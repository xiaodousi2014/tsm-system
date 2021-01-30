import Http from '../utils/axios'
// const rt = 'http://139.198.188.175:8090/'
const rt2 = 'http://10.8.145.43:8190'
export default {
    //计划申报
    getPlanTitle() {
        return Http.get(`${rt2}/information/plan/infoType`)
    },
    getPlanList(params) {
        return Http.post(`${rt2}/information/plan/query`, params)
    },
    onPlanRevoke(params) {
        let query = {
            ids: params
        }
        return Http.delete(`${rt2}/information/plan`, query)
    },
    //借用
    getBorrowTitle() {
        return Http.get(`${rt2}/information/lent/infoType`)
    },
    getBorrowAgree(query) {
        return Http.get(`${rt2}/information/lent/audit`, query)
    },
    getBorrowList(params) {
        return Http.post(`${rt2}/information/lent/query`, params)
    },
    // 设备登记
    onListOneCreate(query) {
        return Http.post(`${rt2}/information`, query)
    },
    onListTwoCreate(query) {
        return Http.post(`${rt2}/information/electronic`, query)
    },
    onListThreeCreate(query) {
        return Http.post(`${rt2}/information/system`, query)
    },
    onListOneEdit(query) {
        return Http.put(`${rt2}/information`, query)
    },
    onListTwoEdit(query) {
        return Http.put(`${rt2}/information/electronic`, query)
    },
    onListThreeEdit(query) {
        return Http.put(`${rt2}/information/system`, query)
    },
    onCanOneBorrow(query) {
        return Http.post(`${rt2}/information/toLent`, query)
    },
    onCanTwoBorrow(query) {
        return Http.post(`${rt2}/information/electronic/toLent`, query)
    },
    onCanThreeBorrow(query) {
        return Http.post(`${rt2}/information/system/toLent`, query)
    },
    onOneInventory(query) {
        return Http.post(`${rt2}/information/check`, query)
    },
    onTwoInventory(query) {
        return Http.post(`${rt2}/information/electronic/check`, query)
    },
    onThreeInventory(query) {
        return Http.post(`${rt2}/information/system/check`, query)
    },
    checkedOneTrue(query) {
        return Http.post(`${rt2}/information/handle`, query)
    },
    checkedTwoTrue(query) {
        return Http.post(`${rt2}/information/electronic/handle`, query)
    },
    checkedThreeTrue(query) {
        return Http.post(`${rt2}/information/system/handle`, query)
    },
    getOneStockTitle() {
        let query = {
            infoType: 't_information'
        }
        return Http.post(`${rt2}/common/query/filter`, query)
    },
    getTwoStockTitle() {
        let query = {
            infoType: 't_information_electronic'
        }
        return Http.post(`${rt2}/common/query/filter`, query)
    },
    getThreeStockTitle() {
        let query = {
            infoType: 't_information_system'
        }
        return Http.post(`${rt2}/common/query/filter`, query)
    },
    getOneStockList(params) {
        return Http.post(`${rt2}/common/import/query`, params)
    },
    getTwoStockList(params) {
        return Http.post(`${rt2}/common/import/query`, params)
    },
    getThreeStockList(params) {
        return Http.post(`${rt2}/common/import/query`, params)
    },
    onOneStockRevoke(params) {
        let query = {
            ids: params
        }
        return Http.post(`${rt2}/information/import/cancel`, query)
    },
    onTwoStockRevoke(params) {
        let query = {
            ids: params
        }
        return Http.post(`${rt2}/information/electronic/import/cancel`, query)
    },
    onThreeStockRevoke(params) {
        let query = {
            ids: params
        }
        return Http.post(`${rt2}/information/system/import/cancel`, query)
    },

    // 请领
    getReciveTitle() {
        return Http.get(`${rt2}/information/use/infoType`)
    },
    getReciveList(params) {
        return Http.post(`${rt2}/information/use/query`, params)
    },
    getReciveAgree(query) {
        return Http.get(`${rt2}/information/use/audit`, query)
    },
    getExport(params) {
        return Http.download(`${rt2}/common/export`, params)
    },
    // 维修
    getRepairTitle() {
        return Http.get(`${rt2}/information/repair/infoType`)
    },
    getRepairAgree(query) {
        return Http.get(`${rt2}/information/repair/audit`, query)
    },
    getRepairList(params) {
        return Http.post(`${rt2}/information/repair/query`, params)
    },
    //报废
    getScrapDelete(query) {
        return Http.delete(`${rt2}/information/abolish`, query)
    },
    getScrapTitle() {
        return Http.get(`${rt2}/information/abolish/infoType`)
    },
    getScrapList(params) {
        return Http.post(`${rt2}/information/abolish/query`, params)
    },
    // 库存记录 //
    getStorageTitle() {
        return Http.get(`${rt2}/information/infoType`)
    },
    onListEdit(query) {
        return Http.put(`${rt2}/information`, query) 
      },
      onTwoListEdit(query) {
        return Http.put(`${rt2}/information/electronic`, query) 
      },
      onThreeListEdit(query) {
        return Http.put(`${rt2}/information/system`, query) 
      },
    getTwoStorageTitle() {
        return Http.get(`${rt2}/information/electronic/infoType`)
    },
    getThreeStorageTitle() {
        return Http.get(`${rt2}/information/system/infoType`)
    },
    getStorageList(params) {
        return Http.post(`${rt2}/information/query`, params)
    },
    getTwoStorageList(params) {
        return Http.post(`${rt2}/information/electronic/query`, params)
    },
    getThreeStorageList(params) {
        return Http.post(`${rt2}/information/system/query`, params)
    },
    getDeleteStorageTitle() {
        return Http.get(`${rt2}/information/dirty/infoType`)
    },
    getTwoDeleteStorageTitle() {
        return Http.get(`${rt2}/information/electronic/dirty/infoType`)
    },
    getThreeDeleteStorageTitle() {
        return Http.get(`${rt2}/information/system/dirty/infoType`)
    },
    getDeleteStorageList(params) {
        return Http.post(`${rt2}/information/dirty/query`, params)
    },
    getTwoDeleteStorageList(params) {
        return Http.post(`${rt2}/information/electronic/dirty/query`, params)
    },
    getThreeDeleteStorageList(params) {
        return Http.post(`${rt2}/information/system/dirty/query`, params)
    },
    putStorageList(params) {
        let query = {
            ids: params
        }
        return Http.put(`${rt2}/information/dirty`, query)
    },
    putTwoStorageList(params) {
        let query = {
            ids: params
        }
        return Http.put(`${rt2}/information/electronic/dirty`, query)
    },
    putThreeStorageList(params) {
        let query = {
            ids: params
        }
        return Http.put(`${rt2}/information/system/dirty`, query)
    },
    onStorageDelete(params) {
        let query = {
            ids: params
        }
        return Http.delete(`${rt2}/information`, query)
    },
    onTwoStorageDelete(params) {
        let query = {
            ids: params
        }
        return Http.delete(`${rt2}/information/electronic`, query)
    },
    onThreeStorageDelete(params) {
        let query = {
            ids: params
        }
        return Http.delete(`${rt2}/information/system`, query)
    },
    //请领提交
    onStorageQingLingSumit(params) {
        return Http.post(`${rt2}/information/use`, params)
    },
    //借用提交
    onStorageBorrowSumit(params) {
        return Http.post(`${rt2}/information/lent`, params)
    },
    //维修提交
    onStorageRepairSumit(params) {
        return Http.post(`${rt2}/information/repair`, params)
    },
    // 报废
    onStorageScrapSumit(params) {
        let query = {
            ids: params
        }
        return Http.post(`${rt2}/information/abolish`, query)
    },
    // 盘点记录
    getInventoryExport(params) {
        return Http.download(`${rt2}/information/check/export`, params)
    },
    getInventoryTitle() {
        return Http.get(`${rt2}/information/check/infoType`)
    },
    getInventoryList(params) {
        return Http.post(`${rt2}/information/check/query`, params)
    },
    // 维护管理
    getMaintainTitle() {
        return Http.get(`${rt2}/information/infoType`)
    },
    getMaintainList(params) {
        return Http.post(`${rt2}/information/query`, params)
    },

}

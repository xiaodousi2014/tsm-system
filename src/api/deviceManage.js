import Http from '../utils/axios'
// const rt = 'http://139.198.188.175:8090/'
const rt2 = 'http://10.8.145.43:8190'
export default {
    UploadImage(query) {
     return Http.put(`${query.url}`, query.file)
    },
    getAttachFile(query) {
      return Http.download(`${rt2}/common/showfile`, query)
    },
    onTemplateDown(query) {
        return Http.download(`${rt2}/common/download_TemplateFile`, query)
    },
    //计划申报
    getPlanTitle() {
        return Http.get(`${rt2}/device/plan/infoType`)
    },
    getPlanList(params) {
        return Http.post(`${rt2}/device/plan/query`, params)
    },
    onPlanRevoke(params) {
        let query = {
            ids: params
        }
        return Http.delete(`${rt2}/device/plan`, query)
    },
    //借用
    getBorrowTitle() {
        return Http.get(`${rt2}/device/lent/infoType`)
    },
    getBorrowAgree(query) {
        return Http.get(`${rt2}/device/lent/audit`,query)
    },
    getBorrowList(params) {
        return Http.post(`${rt2}/device/lent/query`, params)
    },
    // 设备登记
    onListCreate(query) {
      return Http.post(`${rt2}/device`, query) 
    },
    onListEdit(query) {
        return Http.put(`${rt2}/device`, query) 
      },
    onCanBorrow(query) {
        return Http.post(`${rt2}/device/toLent`, query)
    },
    onInventory(query) {
        return Http.post(`${rt2}/device/check`, query)
    },
    checkedTrue(query) {
        return Http.post(`${rt2}/device/handle`, query)
    },
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
        return Http.post(`${rt2}/device/import/cancel`, query)
    },

    // 请领
    getReciveTitle() {
        return Http.get(`${rt2}/device/use/infoType`)
    },
    getReciveList(params) {
        return Http.post(`${rt2}/device/use/query`, params)
    },
    getReciveAgree(query) {
        return Http.get(`${rt2}/device/use/audit`,query)
    },
    getExport(params) {
        return Http.download(`${rt2}/common/export`, params)
    },
    // 维修
    getRepairTitle() {
        return Http.get(`${rt2}/device/repair/infoType`)
    },
    getRepairAgree(query) {
        return Http.get(`${rt2}/device/repair/audit`,query)
    },
    getRepairList(params) {
        return Http.post(`${rt2}/device/repair/query`, params)
    },
    //报废
    getScrapDelete(query) {
      return Http.delete(`${rt2}/device/abolish`, query)
    },
    getScrapTitle() {
        return Http.get(`${rt2}/device/abolish/infoType`)
    },
    getScrapList(params) {
        return Http.post(`${rt2}/device/abolish/query`, params)
    },
    // 库存记录 //
    getStorageTitle() {
        return Http.get(`${rt2}/device/infoType`)
    },
    getStorageList(params) {
        return Http.post(`${rt2}/device/query`, params)
    },
    getDeleteStorageTitle() {
        return Http.get(`${rt2}/device/dirty/infoType`)
    },
    getDeleteStorageList(params) {
        return Http.post(`${rt2}/device/dirty/query`, params)
    },
    putStorageList(params) {
        let query = {
            ids: params
        }
        return Http.put(`${rt2}/device/dirty`, query)
    },
    onStorageDelete(params) {
        let query = {
            ids: params
        }
        return Http.delete(`${rt2}/device`, query)
    },
    //请领提交
    onStorageQingLingSumit(params) {
        return Http.post(`${rt2}/device/use`, params)
    },
    //借用提交
    onStorageBorrowSumit(params) {
        return Http.post(`${rt2}/device/lent`, params)
    },
    //维修提交
    onStorageRepairSumit(params) {
        return Http.post(`${rt2}/device/repair`, params)
    },
    // 报废
    onStorageScrapSumit(params) {
        let query = {
            ids: params
        }
        return Http.post(`${rt2}/device/abolish`, query)
    },
    // 盘点记录
    getInventoryExport(params) {
        return Http.download(`${rt2}/device/check/export`, params)
    },
    getInventoryTitle() {
        return Http.get(`${rt2}/device/check/infoType`)
    },
    getInventoryList(params) {
        return Http.post(`${rt2}/device/check/query`, params)
    },
    // 维护管理
    getMaintainTitle() {
        return Http.get(`${rt2}/device/infoType`)
    },
    getMaintainList(params) {
        return Http.post(`${rt2}/device/query`, params)
    },

}

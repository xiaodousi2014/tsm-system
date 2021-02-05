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
        return Http.get(`${rt2}/maps/plan/infoType`)
    },
    getPlanList(params) {
        return Http.post(`${rt2}/maps/plan/query`, params)
    },
    onPlanRevoke(params) {
        let query = {
            ids: params
        }
        return Http.delete(`${rt2}/maps/plan`, query)
    },
    //借用
    getBorrowTitle() {
        return Http.get(`${rt2}/maps/lent/infoType`)
    },
    getBorrowAgree(query) {
        return Http.get(`${rt2}/maps/lent/audit`,query)
    },
    getBorrowList(params) {
        return Http.post(`${rt2}/maps/lent/query`, params)
    },
    // 设备登记
    onListCreate(query) {
      return Http.post(`${rt2}/maps`, query) 
    },
    onListEdit(query) {
        return Http.put(`${rt2}/maps`, query) 
      },
    onCanBorrow(query) {
        return Http.post(`${rt2}/maps/toLent`, query)
    },
    onInventory(query) {
        return Http.post(`${rt2}/maps/check`, query)
    },
    checkedTrue(query) {
        return Http.post(`${rt2}/maps/handle`, query)
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
        return Http.post(`${rt2}/maps/import/cancel`, query)
    },

    // 请领
    getReciveTitle() {
        return Http.get(`${rt2}/maps/use/infoType`)
    },
    getReciveList(params) {
        return Http.post(`${rt2}/maps/use/query`, params)
    },
    getReciveAgree(query) {
        return Http.get(`${rt2}/maps/use/audit`,query)
    },
    getExport(params) {
        return Http.download(`${rt2}/common/export`, params)
    },
    // 维修
    getRepairTitle() {
        return Http.get(`${rt2}/maps/repair/infoType`)
    },
    getRepairAgree(query) {
        return Http.get(`${rt2}/maps/repair/audit`,query)
    },
    getRepairList(params) {
        return Http.post(`${rt2}/maps/repair/query`, params)
    },
    //报废
    getScrapDelete(query) {
      return Http.delete(`${rt2}/maps/abolish`, query)
    },
    getScrapTitle() {
        return Http.get(`${rt2}/maps/abolish/infoType`)
    },
    getScrapList(params) {
        return Http.post(`${rt2}/maps/abolish/query`, params)
    },
    // 库存记录 //
    getStorageTitle() {
        return Http.get(`${rt2}/maps/infoType`)
    },
    getStorageList(params) {
        return Http.post(`${rt2}/maps/query`, params)
    },
    getDeleteStorageTitle() {
        return Http.get(`${rt2}/maps/dirty/infoType`)
    },
    getDeleteStorageList(params) {
        return Http.post(`${rt2}/maps/dirty/query`, params)
    },
    putStorageList(params) {
        let query = {
            ids: params
        }
        return Http.put(`${rt2}/maps/dirty`, query)
    },
    onStorageDelete(params) {
        let query = {
            ids: params
        }
        return Http.delete(`${rt2}/maps`, query)
    },
    //请领提交
    onStorageQingLingSumit(params) {
        return Http.post(`${rt2}/maps/use`, params)
    },
    //借用提交
    onStorageBorrowSumit(params) {
        return Http.post(`${rt2}/maps/lent`, params)
    },
    //维修提交
    onStorageRepairSumit(params) {
        return Http.post(`${rt2}/maps/repair`, params)
    },
    // 报废
    onStorageScrapSumit(params) {
        return Http.post(`${rt2}/maps/abolish`, params)
    },
    // 盘点记录
    getInventoryExport(params) {
        return Http.download(`${rt2}/maps/check/export`, params)
    },
    getInventoryTitle() {
        return Http.get(`${rt2}/maps/check/infoType`)
    },
    getInventoryList(params) {
        return Http.post(`${rt2}/maps/check/query`, params)
    },
    // 维护管理
    getMaintainTitle() {
        return Http.get(`${rt2}/maps/infoType`)
    },
    getMaintainList(params) {
        return Http.post(`${rt2}/maps/query`, params)
    },

}
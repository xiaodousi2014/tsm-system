import Http from '../utils/axios'
// const rt = 'http://139.198.188.175:8090/'
const rt2 = 'http://218.59.43.155:8190'
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
        return Http.get(`${rt2}/stationery/plan/infoType`)
    },
    getPlanList(params) {
        return Http.post(`${rt2}/stationery/plan/query`, params)
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
    getBorrowAgree(query) {
        return Http.get(`${rt2}/stationery/lent/audit`,query)
    },
    getBorrowList(params) {
        return Http.post(`${rt2}/stationery/lent/query`, params)
    },
    // 设备登记
    onListCreate(query) {
      return Http.post(`${rt2}/stationery`, query) 
    },
    onListEdit(query) {
        return Http.put(`${rt2}/stationery`, query) 
      },
    onCanBorrow(query) {
        return Http.post(`${rt2}/stationery/toLent`, query)
    },
    onInventory(query) {
        return Http.post(`${rt2}/stationery/check`, query)
    },
    checkedTrue(query) {
        return Http.post(`${rt2}/stationery/handle`, query)
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
        return Http.post(`${rt2}/stationery/import/cancel`, query)
    },

    // 请领
    getReciveTitle() {
        return Http.get(`${rt2}/stationery/use/infoType`)
    },
    getReciveList(params) {
        return Http.post(`${rt2}/stationery/use/query`, params)
    },
    getReciveAgree(query) {
        return Http.get(`${rt2}/stationery/use/audit`,query)
    },
    getExport(params) {
        return Http.download(`${rt2}/common/export`, params)
    },
    // 维修
    getRepairTitle() {
        return Http.get(`${rt2}/stationery/repair/infoType`)
    },
    getRepairAgree(query) {
        return Http.get(`${rt2}/stationery/repair/audit`,query)
    },
    getRepairList(params) {
        return Http.post(`${rt2}/stationery/repair/query`, params)
    },
    //报废
    getScrapDelete(query) {
      return Http.delete(`${rt2}/stationery/abolish`, query)
    },
    getScrapTitle() {
        return Http.get(`${rt2}/stationery/abolish/infoType`)
    },
    getScrapList(params) {
        return Http.post(`${rt2}/stationery/abolish/query`, params)
    },
    // 库存记录 //
    getStorageTitle() {
        return Http.get(`${rt2}/stationery/infoType`)
    },
    getStorageList(params) {
        return Http.post(`${rt2}/stationery/query`, params)
    },
    getDeleteStorageTitle() {
        return Http.get(`${rt2}/stationery/dirty/infoType`)
    },
    getDeleteStorageList(params) {
        return Http.post(`${rt2}/stationery/dirty/query`, params)
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
        return Http.post(`${rt2}/stationery/abolish`, params)
    },
    // 盘点记录
    getInventoryExport(params) {
        return Http.download(`${rt2}/stationery/check/export`, params)
    },
    getInventoryTitle() {
        return Http.get(`${rt2}/stationery/check/infoType`)
    },
    getInventoryList(params) {
        return Http.post(`${rt2}/stationery/check/query`, params)
    },
    // 维护管理
    getMaintainTitle() {
        return Http.get(`${rt2}/stationery/infoType`)
    },
    getMaintainList(params) {
        return Http.post(`${rt2}/stationery/query`, params)
    },

}

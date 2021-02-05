import Http from '../utils/axios'
// const rt = 'http://139.198.188.175:8090/'
const rt2 = 'http://24992uu588.qicp.vip:80'
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
        return Http.get(`${rt2}/material/plan/infoType`)
    },
    getPlanList(params) {
        return Http.post(`${rt2}/material/plan/query`, params)
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
    getBorrowAgree(query) {
        return Http.get(`${rt2}/material/lent/audit`,query)
    },
    getBorrowList(params) {
        return Http.post(`${rt2}/material/lent/query`, params)
    },
    // 设备登记
    onListCreate(query) {
      return Http.post(`${rt2}/material`, query) 
    },
    onListEdit(query) {
        return Http.put(`${rt2}/material`, query) 
      },
    onCanBorrow(query) {
        return Http.post(`${rt2}/material/toLent`, query)
    },
    onInventory(query) {
        return Http.post(`${rt2}/material/check`, query)
    },
    checkedTrue(query) {
        return Http.post(`${rt2}/material/handle`, query)
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
        return Http.post(`${rt2}/material/import/cancel`, query)
    },

    // 请领
    getReciveTitle() {
        return Http.get(`${rt2}/material/use/infoType`)
    },
    getReciveList(params) {
        return Http.post(`${rt2}/material/use/query`, params)
    },
    getReciveAgree(query) {
        return Http.get(`${rt2}/material/use/audit`,query)
    },
    getExport(params) {
        return Http.download(`${rt2}/common/export`, params)
    },
    // 维修
    getRepairTitle() {
        return Http.get(`${rt2}/material/repair/infoType`)
    },
    getRepairAgree(query) {
        return Http.get(`${rt2}/material/repair/audit`,query)
    },
    getRepairList(params) {
        return Http.post(`${rt2}/material/repair/query`, params)
    },
    //报废
    getScrapDelete(query) {
      return Http.delete(`${rt2}/material/abolish`, query)
    },
    getScrapTitle() {
        return Http.get(`${rt2}/material/abolish/infoType`)
    },
    getScrapList(params) {
        return Http.post(`${rt2}/material/abolish/query`, params)
    },
    // 库存记录 //
    getStorageTitle() {
        return Http.get(`${rt2}/material/infoType`)
    },
    getStorageList(params) {
        return Http.post(`${rt2}/material/query`, params)
    },
    getDeleteStorageTitle() {
        return Http.get(`${rt2}/material/dirty/infoType`)
    },
    getDeleteStorageList(params) {
        return Http.post(`${rt2}/material/dirty/query`, params)
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
        return Http.post(`${rt2}/material/abolish`, params)
    },
    // 盘点记录
    getInventoryExport(params) {
        return Http.download(`${rt2}/material/check/export`, params)
    },
    getInventoryTitle() {
        return Http.get(`${rt2}/material/check/infoType`)
    },
    getInventoryList(params) {
        return Http.post(`${rt2}/material/check/query`, params)
    },
    // 维护管理
    getMaintainTitle() {
        return Http.get(`${rt2}/material/infoType`)
    },
    getMaintainList(params) {
        return Http.post(`${rt2}/material/query`, params)
    },

}
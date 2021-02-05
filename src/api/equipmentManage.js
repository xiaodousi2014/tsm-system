import Http from '../utils/axios'
const rt = 'http://139.198.188.175:8190/'
const rt2 = 'http://24992uu588.qicp.vip:80'
export default {
    deleteAttachment(query) {
        return Http.delete(`${rt2}/common/deletefile`, query)
       },
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
        return Http.get(`${rt2}/equipment/plan/infoType`)
    },
    getPlanList(params) {
        return Http.post(`${rt2}/equipment/plan/query`, params)
    },
    onPlanRevoke(params) {
        let query = {
            ids: params
        }
        return Http.delete(`${rt2}/equipment/plan`, query)
    },
    //借用
    getBorrowTitle() {
        return Http.get(`${rt2}/equipment/lent/infoType`)
    },
    getBorrowAgree(query) {
        return Http.get(`${rt2}/equipment/lent/audit`,query)
    },
    getBorrowList(params) {
        return Http.post(`${rt2}/equipment/lent/query`, params)
    },
    // 设备登记
    onListCreate(query) {
      return Http.post(`${rt2}/equipment`, query) 
    },
    onListEdit(query) {
        return Http.put(`${rt2}/equipment`, query) 
      },
    onCanBorrow(query) {
        return Http.post(`${rt2}/equipment/toLent`, query)
    },
    onInventory(query) {
        return Http.post(`${rt2}/equipment/check`, query)
    },
    checkedTrue(query) {
        return Http.post(`${rt2}/equipment/handle`, query)
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
        return Http.post(`${rt2}/equipment/import/cancel`, query)
    },

    // 请领
    getReciveTitle() {
        return Http.get(`${rt2}/equipment/use/infoType`)
    },
    getReciveList(params) {
        return Http.post(`${rt2}/equipment/use/query`, params)
    },
    getReciveAgree(query) {
        return Http.get(`${rt2}/equipment/use/audit`,query)
    },
    getExport(params) {
        return Http.download(`${rt2}/common/export`, params)
    },
    // 维修
    getRepairTitle() {
        return Http.get(`${rt2}/equipment/repair/infoType`)
    },
    getRepairAgree(query) {
        return Http.get(`${rt2}/equipment/repair/audit`,query)
    },
    getRepairList(params) {
        return Http.post(`${rt2}/equipment/repair/query`, params)
    },
    //报废
    getScrapDelete(query) {
      return Http.delete(`${rt2}/equipment/abolish`, query)
    },
    getScrapTitle() {
        return Http.get(`${rt2}/equipment/abolish/infoType`)
    },
    getScrapList(params) {
        return Http.post(`${rt2}/equipment/abolish/query`, params)
    },
    // 库存记录 //
    getStorageTitle() {
        return Http.get(`${rt2}/equipment/infoType`)
    },
    getStorageList(params) {
        return Http.post(`${rt2}/equipment/query`, params)
    },
    getDeleteStorageTitle() {
        return Http.get(`${rt2}/equipment/dirty/infoType`)
    },
    getDeleteStorageList(params) {
        return Http.post(`${rt2}/equipment/dirty/query`, params)
    },
    putStorageList(params) {
        let query = {
            ids: params
        }
        return Http.put(`${rt2}/equipment/dirty`, query)
    },
    onStorageDelete(params) {
        let query = {
            ids: params
        }
        return Http.delete(`${rt2}/equipment`, query)
    },
    //请领提交
    onStorageQingLingSumit(params) {
        return Http.post(`${rt2}/equipment/use`, params)
    },
    //借用提交
    onStorageBorrowSumit(params) {
        return Http.post(`${rt2}/equipment/lent`, params)
    },
    //维修提交
    onStorageRepairSumit(params) {
        return Http.post(`${rt2}/equipment/repair`, params)
    },
    // 报废
    onStorageScrapSumit(params) {
        let query = {
            ids: params
        }
        return Http.post(`${rt2}/equipment/abolish`, query)
    },
    // 盘点记录
    getInventoryExport(params) {
        return Http.download(`${rt2}/equipment/check/export`, params)
    },
    getInventoryTitle() {
        return Http.get(`${rt2}/equipment/check/infoType`)
    },
    getInventoryList(params) {
        return Http.post(`${rt2}/equipment/check/query`, params)
    },
    // 维护管理
    getMaintainTitle() {
        return Http.get(`${rt2}/equipment/infoType`)
    },
    getMaintainList(params) {
        return Http.post(`${rt2}/equipment/query`, params)
    },

}

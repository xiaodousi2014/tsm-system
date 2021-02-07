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
        return Http.get(`${rt2}/trainingdevice/plan/infoType`)
    },
    getPlanList(params) {
        return Http.post(`${rt2}/trainingdevice/plan/query`, params)
    },
    onPlanRevoke(params) {
        let query = {
            ids: params
        }
        return Http.delete(`${rt2}/trainingdevice/plan`, query)
    },
    //借用
    getBorrowTitle() {
        return Http.get(`${rt2}/trainingdevice/lent/infoType`)
    },
    getBorrowAgree(query) {
        return Http.get(`${rt2}/trainingdevice/lent/audit`,query)
    },
    getBorrowList(params) {
        return Http.post(`${rt2}/trainingdevice/lent/query`, params)
    },
    // 设备登记
    onListCreate(query) {
      return Http.post(`${rt2}/trainingdevice`, query) 
    },
    onListEdit(query) {
        return Http.put(`${rt2}/trainingdevice`, query) 
      },
    onCanBorrow(query) {
        return Http.post(`${rt2}/trainingdevice/toLent`, query)
    },
    onInventory(query) {
        return Http.post(`${rt2}/trainingdevice/check`, query)
    },
    checkedTrue(query) {
        return Http.post(`${rt2}/trainingdevice/handle`, query)
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
        return Http.delete(`${rt2}/common/import`, query)
    },

    // 请领
    getReciveTitle() {
        return Http.get(`${rt2}/trainingdevice/use/infoType`)
    },
    getReciveList(params) {
        return Http.post(`${rt2}/trainingdevice/use/query`, params)
    },
    getReciveAgree(query) {
        return Http.get(`${rt2}/trainingdevice/use/audit`,query)
    },
    getExport(params) {
        return Http.download(`${rt2}/common/export`, params)
    },
    // 维修
    getRepairTitle() {
        return Http.get(`${rt2}/trainingdevice/repair/infoType`)
    },
    getRepairAgree(query) {
        return Http.get(`${rt2}/trainingdevice/repair/audit`,query)
    },
    getRepairList(params) {
        return Http.post(`${rt2}/trainingdevice/repair/query`, params)
    },
    //报废
    getScrapDelete(query) {
      return Http.delete(`${rt2}/trainingdevice/abolish`, query)
    },
    getScrapTitle() {
        return Http.get(`${rt2}/trainingdevice/abolish/infoType`)
    },
    getScrapList(params) {
        return Http.post(`${rt2}/trainingdevice/abolish/query`, params)
    },
    // 库存记录 //
    getStorageTitle() {
        return Http.get(`${rt2}/trainingdevice/infoType`)
    },
    getStorageList(params) {
        return Http.post(`${rt2}/trainingdevice/query`, params)
    },
    getDeleteStorageTitle() {
        return Http.get(`${rt2}/trainingdevice/dirty/infoType`)
    },
    getDeleteStorageList(params) {
        return Http.post(`${rt2}/trainingdevice/dirty/query`, params)
    },
    putStorageList(params) {
        let query = {
            ids: params
        }
        return Http.put(`${rt2}/trainingdevice/dirty`, query)
    },
    onStorageDelete(params) {
        let query = {
            ids: params
        }
        return Http.delete(`${rt2}/trainingdevice`, query)
    },
    //请领提交
    onStorageQingLingSumit(params) {
        return Http.post(`${rt2}/trainingdevice/use`, params)
    },
    //借用提交
    onStorageBorrowSumit(params) {
        return Http.post(`${rt2}/trainingdevice/lent`, params)
    },
    //维修提交
    onStorageRepairSumit(params) {
        return Http.post(`${rt2}/trainingdevice/repair`, params)
    },
    // 报废
    onStorageScrapSumit(params) {
        let query = {
            ids: params
        }
        return Http.post(`${rt2}/trainingdevice/abolish`, query)
    },
    // 盘点记录
    getInventoryExport(params) {
        return Http.download(`${rt2}/trainingdevice/check/export`, params)
    },
    getInventoryTitle() {
        return Http.get(`${rt2}/trainingdevice/check/infoType`)
    },
    getInventoryList(params) {
        return Http.post(`${rt2}/trainingdevice/check/query`, params)
    },
    // 维护管理
    getMaintainTitle() {
        return Http.get(`${rt2}/trainingdevice/infoType`)
    },
    getMaintainList(params) {
        return Http.post(`${rt2}/trainingdevice/query`, params)
    },

}

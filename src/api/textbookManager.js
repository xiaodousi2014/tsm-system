import Http from '../utils/axios'
// const rt = 'http://139.198.188.175:8090/'
const rt2 = 'http://24992uu588.qicp.vip'
import { SERVICE_URL } from '@/api/index'
export default {
    UploadImage(query) {
        return Http.put(`${query.url}`, query.file)
       },
    getAttachFile(query) {
        return Http.download(`${SERVICE_URL}/common/showfile`, query)
      },
      onTemplateDown(query) {
        return Http.download(`${SERVICE_URL}/common/download_TemplateFile`, query)
    },
    //计划申报
    getPlanTitle() {
        return Http.get(`${SERVICE_URL}/material/plan/infoType`)
    },
    getPlanList(params) {
        return Http.post(`${SERVICE_URL}/material/plan/query`, params)
    },
    onPlanRevoke(params) {
        let query = {
            ids: params
        }
        return Http.delete(`${SERVICE_URL}/material/plan`, query)
    },
    //借用
    getBorrowTitle() {
        return Http.get(`${SERVICE_URL}/material/lent/infoType`)
    },
    getBorrowAgree(query) {
        return Http.get(`${SERVICE_URL}/material/lent/audit`,query)
    },
    getBorrowList(params) {
        return Http.post(`${SERVICE_URL}/material/lent/query`, params)
    },
    // 设备登记
    onListCreate(query) {
      return Http.post(`${SERVICE_URL}/material`, query) 
    },
    onListEdit(query) {
        return Http.put(`${SERVICE_URL}/material`, query) 
      },
    onCanBorrow(query) {
        return Http.post(`${SERVICE_URL}/material/toLent`, query)
    },
    onInventory(query) {
        return Http.post(`${SERVICE_URL}/material/check`, query)
    },
    checkedTrue(query) {
        return Http.post(`${SERVICE_URL}/material/handle`, query)
    },
    getStockTitle() {
        let query = {
            infoType: 't_import_record'
        }
        return Http.post(`${SERVICE_URL}/common/query/filter`, query)
    },
    getStockList(params) {
        return Http.post(`${SERVICE_URL}/common/import/query`, params)
    },
    onStockRevoke(params) {
        let query = {
            ids: params
        }
        return Http.post(`${SERVICE_URL}/material/import/cancel`, query)
    },

    // 请领
    getReciveTitle() {
        return Http.get(`${SERVICE_URL}/material/use/infoType`)
    },
    getReciveList(params) {
        return Http.post(`${SERVICE_URL}/material/use/query`, params)
    },
    getReciveAgree(query) {
        return Http.get(`${SERVICE_URL}/material/use/audit`,query)
    },
    getExport(params) {
        return Http.download(`${SERVICE_URL}/common/export`, params)
    },
    // 维修
    getRepairTitle() {
        return Http.get(`${SERVICE_URL}/material/repair/infoType`)
    },
    getRepairAgree(query) {
        return Http.get(`${SERVICE_URL}/material/repair/audit`,query)
    },
    getRepairList(params) {
        return Http.post(`${SERVICE_URL}/material/repair/query`, params)
    },
    //报废
    getScrapDelete(query) {
      return Http.delete(`${SERVICE_URL}/material/abolish`, query)
    },
    getScrapTitle() {
        return Http.get(`${SERVICE_URL}/material/abolish/infoType`)
    },
    getScrapList(params) {
        return Http.post(`${SERVICE_URL}/material/abolish/query`, params)
    },
    // 库存记录 //
    getStorageTitle() {
        return Http.get(`${SERVICE_URL}/material/infoType`)
    },
    getStorageList(params) {
        return Http.post(`${SERVICE_URL}/material/query`, params)
    },
    getDeleteStorageTitle() {
        return Http.get(`${SERVICE_URL}/material/dirty/infoType`)
    },
    getDeleteStorageList(params) {
        return Http.post(`${SERVICE_URL}/material/dirty/query`, params)
    },
    putStorageList(params) {
        let query = {
            ids: params
        }
        return Http.put(`${SERVICE_URL}/material/dirty`, query)
    },
    onStorageDelete(params) {
        let query = {
            ids: params
        }
        return Http.delete(`${SERVICE_URL}/material`, query)
    },
    //请领提交
    onStorageQingLingSumit(params) {
        return Http.post(`${SERVICE_URL}/material/use`, params)
    },
    //借用提交
    onStorageBorrowSumit(params) {
        return Http.post(`${SERVICE_URL}/material/lent`, params)
    },
    //维修提交
    onStorageRepairSumit(params) {
        return Http.post(`${SERVICE_URL}/material/repair`, params)
    },
    // 报废
    onStorageScrapSumit(params) {
        return Http.post(`${SERVICE_URL}/material/abolish`, params)
    },
    // 盘点记录
    getInventoryExport(params) {
        return Http.download(`${SERVICE_URL}/material/check/export`, params)
    },
    getInventoryTitle() {
        return Http.get(`${SERVICE_URL}/material/check/infoType`)
    },
    getInventoryList(params) {
        return Http.post(`${SERVICE_URL}/material/check/query`, params)
    },
    // 维护管理
    getMaintainTitle() {
        return Http.get(`${SERVICE_URL}/material/infoType`)
    },
    getMaintainList(params) {
        return Http.post(`${SERVICE_URL}/material/query`, params)
    },

}
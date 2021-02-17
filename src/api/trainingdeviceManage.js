import Http from '../utils/axios'
const rt = 'http://139.198.188.175:8190/'
const rt2 = 'http://218.59.43.155:8190'

import { SERVICE_URL } from '@/api/index'
export default {
    deleteAttachment(query) {
        return Http.delete(`${SERVICE_URL}/common/deletefile`, query)
       },
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
        return Http.get(`${SERVICE_URL}/trainingdevice/plan/infoType`)
    },
    getPlanList(params) {
        return Http.post(`${SERVICE_URL}/trainingdevice/plan/query`, params)
    },
    onPlanRevoke(params) {
        let query = {
            ids: params
        }
        return Http.delete(`${SERVICE_URL}/trainingdevice/plan`, query)
    },
    //借用
    getBorrowTitle() {
        return Http.get(`${SERVICE_URL}/trainingdevice/lent/infoType`)
    },
    getBorrowAgree(query) {
        return Http.get(`${SERVICE_URL}/trainingdevice/lent/audit`,query)
    },
    getBorrowList(params) {
        return Http.post(`${SERVICE_URL}/trainingdevice/lent/query`, params)
    },
    // 设备登记
    onListCreate(query) {
      return Http.post(`${SERVICE_URL}/trainingdevice`, query) 
    },
    onListEdit(query) {
        return Http.put(`${SERVICE_URL}/trainingdevice`, query) 
      },
    onCanBorrow(query) {
        return Http.post(`${SERVICE_URL}/trainingdevice/toLent`, query)
    },
    onInventory(query) {
        return Http.post(`${SERVICE_URL}/trainingdevice/check`, query)
    },
    checkedTrue(query) {
        return Http.post(`${SERVICE_URL}/trainingdevice/handle`, query)
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
        return Http.delete(`${SERVICE_URL}/common/import`, query)
    },

    // 请领
    getReciveTitle() {
        return Http.get(`${SERVICE_URL}/trainingdevice/use/infoType`)
    },
    getReciveList(params) {
        return Http.post(`${SERVICE_URL}/trainingdevice/use/query`, params)
    },
    getReciveAgree(query) {
        return Http.get(`${SERVICE_URL}/trainingdevice/use/audit`,query)
    },
    getExport(params) {
        return Http.download(`${SERVICE_URL}/common/export`, params)
    },
    // 维修
    getRepairTitle() {
        return Http.get(`${SERVICE_URL}/trainingdevice/repair/infoType`)
    },
    getRepairAgree(query) {
        return Http.get(`${SERVICE_URL}/trainingdevice/repair/audit`,query)
    },
    getRepairList(params) {
        return Http.post(`${SERVICE_URL}/trainingdevice/repair/query`, params)
    },
    //报废
    getScrapDelete(query) {
      return Http.delete(`${SERVICE_URL}/trainingdevice/abolish`, query)
    },
    getScrapTitle() {
        return Http.get(`${SERVICE_URL}/trainingdevice/abolish/infoType`)
    },
    getScrapList(params) {
        return Http.post(`${SERVICE_URL}/trainingdevice/abolish/query`, params)
    },
    // 库存记录 //
    getStorageTitle() {
        return Http.get(`${SERVICE_URL}/trainingdevice/infoType`)
    },
    getStorageList(params) {
        return Http.post(`${SERVICE_URL}/trainingdevice/query`, params)
    },
    getDeleteStorageTitle() {
        return Http.get(`${SERVICE_URL}/trainingdevice/dirty/infoType`)
    },
    getDeleteStorageList(params) {
        return Http.post(`${SERVICE_URL}/trainingdevice/dirty/query`, params)
    },
    putStorageList(params) {
        let query = {
            ids: params
        }
        return Http.put(`${SERVICE_URL}/trainingdevice/dirty`, query)
    },
    onStorageDelete(params) {
        let query = {
            ids: params
        }
        return Http.delete(`${SERVICE_URL}/trainingdevice`, query)
    },
    //请领提交
    onStorageQingLingSumit(params) {
        return Http.post(`${SERVICE_URL}/trainingdevice/use`, params)
    },
    //借用提交
    onStorageBorrowSumit(params) {
        return Http.post(`${SERVICE_URL}/trainingdevice/lent`, params)
    },
    //维修提交
    onStorageRepairSumit(params) {
        return Http.post(`${SERVICE_URL}/trainingdevice/repair`, params)
    },
    // 报废
    onStorageScrapSumit(params) {
        let query = {
            ids: params
        }
        return Http.post(`${SERVICE_URL}/trainingdevice/abolish`, query)
    },
    // 盘点记录
    getInventoryExport(params) {
        return Http.download(`${SERVICE_URL}/trainingdevice/check/export`, params)
    },
    getInventoryTitle() {
        return Http.get(`${SERVICE_URL}/trainingdevice/check/infoType`)
    },
    getInventoryList(params) {
        return Http.post(`${SERVICE_URL}/trainingdevice/check/query`, params)
    },
    // 维护管理
    getMaintainTitle() {
        return Http.get(`${SERVICE_URL}/trainingdevice/infoType`)
    },
    getMaintainList(params) {
        return Http.post(`${SERVICE_URL}/trainingdevice/query`, params)
    },

}

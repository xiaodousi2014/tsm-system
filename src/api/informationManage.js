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
     // 设备登记
     onListCreateOne(query) {
        return Http.post(`${SERVICE_URL}/equipment`, query) 
      },
        // 设备登记
     onListCreateTwo(query) {
        return Http.post(`${SERVICE_URL}/equipment/electronic`, query) 
      },
      onListCreateThree(query) {
        return Http.post(`${SERVICE_URL}/equipment/system`, query) 
      },
    //计划申报
    getPlanTitle() {
        return Http.get(`${SERVICE_URL}/information/plan/infoType`)
    },
    getPlanList(params) {
        return Http.post(`${SERVICE_URL}/information/plan/query`, params)
    },
    onPlanRevoke(params) {
        let query = {
            ids: params
        }
        return Http.delete(`${SERVICE_URL}/information/plan`, query)
    },
    //借用
    getBorrowTitle() {
        return Http.get(`${SERVICE_URL}/information/lent/infoType`)
    },
    getBorrowAgree(query) {
        return Http.get(`${SERVICE_URL}/information/lent/audit`, query)
    },
    getBorrowList(params) {
        return Http.post(`${SERVICE_URL}/information/lent/query`, params)
    },
    // 设备登记
    onListOneCreate(query) {
        return Http.post(`${SERVICE_URL}/information`, query)
    },
    onListTwoCreate(query) {
        return Http.post(`${SERVICE_URL}/information/electronic`, query)
    },
    onListThreeCreate(query) {
        return Http.post(`${SERVICE_URL}/information/system`, query)
    },
    onListOneEdit(query) {
        return Http.put(`${SERVICE_URL}/information`, query)
    },
    onListTwoEdit(query) {
        return Http.put(`${SERVICE_URL}/information/electronic`, query)
    },
    onListThreeEdit(query) {
        return Http.put(`${SERVICE_URL}/information/system`, query)
    },
    onCanOneBorrow(query) {
        return Http.post(`${SERVICE_URL}/information/toLent`, query)
    },
    onCanTwoBorrow(query) {
        return Http.post(`${SERVICE_URL}/information/electronic/toLent`, query)
    },
    onCanThreeBorrow(query) {
        return Http.post(`${SERVICE_URL}/information/system/toLent`, query)
    },
    onOneInventory(query) {
        return Http.post(`${SERVICE_URL}/information/check`, query)
    },
    onTwoInventory(query) {
        return Http.post(`${SERVICE_URL}/information/electronic/check`, query)
    },
    onThreeInventory(query) {
        return Http.post(`${SERVICE_URL}/information/system/check`, query)
    },
    checkedOneTrue(query) {
        return Http.post(`${SERVICE_URL}/information/handle`, query)
    },
    checkedTwoTrue(query) {
        return Http.post(`${SERVICE_URL}/information/electronic/handle`, query)
    },
    checkedThreeTrue(query) {
        return Http.post(`${SERVICE_URL}/information/system/handle`, query)
    },
    getOneStockTitle() {
        let query = {
            infoType: 't_information'
        }
        return Http.post(`${SERVICE_URL}/common/query/filter`, query)
    },
    getTwoStockTitle() {
        let query = {
            infoType: 't_information_electronic'
        }
        return Http.post(`${SERVICE_URL}/common/query/filter`, query)
    },
    getThreeStockTitle() {
        let query = {
            infoType: 't_information_system'
        }
        return Http.post(`${SERVICE_URL}/common/query/filter`, query)
    },
    getOneStockList(params) {
        return Http.post(`${SERVICE_URL}/common/import/query`, params)
    },
    getTwoStockList(params) {
        return Http.post(`${SERVICE_URL}/common/import/query`, params)
    },
    getThreeStockList(params) {
        return Http.post(`${SERVICE_URL}/common/import/query`, params)
    },
    onOneStockRevoke(params) {
        let query = {
            ids: params
        }
        return Http.post(`${SERVICE_URL}/information/import/cancel`, query)
    },
    onTwoStockRevoke(params) {
        let query = {
            ids: params
        }
        return Http.post(`${SERVICE_URL}/information/electronic/import/cancel`, query)
    },
    onThreeStockRevoke(params) {
        let query = {
            ids: params
        }
        return Http.post(`${SERVICE_URL}/information/system/import/cancel`, query)
    },

    // 请领
    getReciveTitle() {
        return Http.get(`${SERVICE_URL}/information/use/infoType`)
    },
    getReciveList(params) {
        return Http.post(`${SERVICE_URL}/information/use/query`, params)
    },
    getReciveAgree(query) {
        return Http.get(`${SERVICE_URL}/information/use/audit`, query)
    },
    getExport(params) {
        return Http.download(`${SERVICE_URL}/common/export`, params)
    },
    // 维修
    getRepairTitle() {
        return Http.get(`${SERVICE_URL}/information/repair/infoType`)
    },
    getRepairAgree(query) {
        return Http.get(`${SERVICE_URL}/information/repair/audit`, query)
    },
    getRepairList(params) {
        return Http.post(`${SERVICE_URL}/information/repair/query`, params)
    },
    //报废
    getScrapDelete(query) {
        return Http.delete(`${SERVICE_URL}/information/abolish`, query)
    },
    getScrapTitle() {
        return Http.get(`${SERVICE_URL}/information/abolish/infoType`)
    },
    getScrapList(params) {
        return Http.post(`${SERVICE_URL}/information/abolish/query`, params)
    },
    // 库存记录 //
    getStorageTitle() {
        return Http.get(`${SERVICE_URL}/information/infoType`)
    },
    onListEdit(query) {
        return Http.put(`${SERVICE_URL}/information`, query) 
      },
      onTwoListEdit(query) {
        return Http.put(`${SERVICE_URL}/information/electronic`, query) 
      },
      onThreeListEdit(query) {
        return Http.put(`${SERVICE_URL}/information/system`, query) 
      },
    getTwoStorageTitle() {
        return Http.get(`${SERVICE_URL}/information/electronic/infoType`)
    },
    getThreeStorageTitle() {
        return Http.get(`${SERVICE_URL}/information/system/infoType`)
    },
    getStorageList(params) {
        return Http.post(`${SERVICE_URL}/information/query`, params)
    },
    getTwoStorageList(params) {
        return Http.post(`${SERVICE_URL}/information/electronic/query`, params)
    },
    getThreeStorageList(params) {
        return Http.post(`${SERVICE_URL}/information/system/query`, params)
    },
    getDeleteStorageTitle() {
        return Http.get(`${SERVICE_URL}/information/dirty/infoType`)
    },
    getTwoDeleteStorageTitle() {
        return Http.get(`${SERVICE_URL}/information/electronic/dirty/infoType`)
    },
    getThreeDeleteStorageTitle() {
        return Http.get(`${SERVICE_URL}/information/system/dirty/infoType`)
    },
    getDeleteStorageList(params) {
        return Http.post(`${SERVICE_URL}/information/dirty/query`, params)
    },
    getTwoDeleteStorageList(params) {
        return Http.post(`${SERVICE_URL}/information/electronic/dirty/query`, params)
    },
    getThreeDeleteStorageList(params) {
        return Http.post(`${SERVICE_URL}/information/system/dirty/query`, params)
    },
    putStorageList(params) {
        let query = {
            ids: params
        }
        return Http.put(`${SERVICE_URL}/information/dirty`, query)
    },
    putTwoStorageList(params) {
        let query = {
            ids: params
        }
        return Http.put(`${SERVICE_URL}/information/electronic/dirty`, query)
    },
    putThreeStorageList(params) {
        let query = {
            ids: params
        }
        return Http.put(`${SERVICE_URL}/information/system/dirty`, query)
    },
    onStorageDelete(params) {
        let query = {
            ids: params
        }
        return Http.delete(`${SERVICE_URL}/information`, query)
    },
    onTwoStorageDelete(params) {
        let query = {
            ids: params
        }
        return Http.delete(`${SERVICE_URL}/information/electronic`, query)
    },
    onThreeStorageDelete(params) {
        let query = {
            ids: params
        }
        return Http.delete(`${SERVICE_URL}/information/system`, query)
    },
    //请领提交
    onStorageQingLingSumit(params) {
        return Http.post(`${SERVICE_URL}/information/use`, params)
    },
    //借用提交
    onStorageBorrowSumit(params) {
        return Http.post(`${SERVICE_URL}/information/lent`, params)
    },
    //维修提交
    onStorageRepairSumit(params) {
        return Http.post(`${SERVICE_URL}/information/repair`, params)
    },
    // 报废
    onStorageScrapSumit(params) {
        let query = {
            ids: params
        }
        return Http.post(`${SERVICE_URL}/information/abolish`, query)
    },
    // 盘点记录
    getInventoryExport(params) {
        return Http.download(`${SERVICE_URL}/information/check/export`, params)
    },
    getInventoryTitle() {
        return Http.get(`${SERVICE_URL}/information/check/infoType`)
    },
    getInventoryList(params) {
        return Http.post(`${SERVICE_URL}/information/check/query`, params)
    },
    // 维护管理
    getMaintainTitle() {
        return Http.get(`${SERVICE_URL}/information/infoType`)
    },
    getMaintainList(params) {
        return Http.post(`${SERVICE_URL}/information/query`, params)
    },

}

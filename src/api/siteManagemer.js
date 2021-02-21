import Http from '../utils/axios'
// const rt = 'http://139.198.188.175:8090/'
// const rt = 'http://24992uu588.qicp.vip'
const rt = 'http://24992uu588.qicp.vip'
import { SERVICE_URL } from '@/api/index'
export default {
    // 场地类型
    scheduleType() {
        return Http.get(`${SERVICE_URL}/site/schedule`, {})
    },
    // 使用计划新增
    usePlanAdd(params) {
        return Http.post(`${SERVICE_URL}/site/schedule`, params)
    },
    // 借用场地申请
    applySite2(params) {
        return Http.post(`${SERVICE_URL}/site/schedule/check`, params)
    },
    // 场地名
    scheduleName(params) {
        return Http.post(`${SERVICE_URL}/site/schedule/sites`, params)
    },
    // 计划图表列表
    scheduleList(params) {
        return Http.post(`${SERVICE_URL}/site/schedule/query`, params)
    },
    // 计划删除
    deleteListPlan(params) {
        return Http.delete(`${SERVICE_URL}/site/schedule`, params)
    },
    // 计划删除
    modifyPlan(params) {
        return Http.put(`${SERVICE_URL}/site/schedule`, params)
    },
    // 预约场地使用
    subscribeSite(params) {
        return Http.post(`${SERVICE_URL}/site/schedule/apply`, params)
    },
    // 申请借用场地使用
    applySite(params) {
        return Http.post(`${SERVICE_URL}/site/schedule/borrow`, params)
    },
    // 借用
    getSitCommonData2(params) {
        return Http.post(`${SERVICE_URL}/site/schedule/check/query`, params)
    },
    // 删除附件
    deletefile(query) {
        return Http.delete(`${SERVICE_URL}/common/deletefile`, query)
    },
    // 借用
    checkedTrue(query) {
        return Http.post(`${SERVICE_URL}/stationery/handle`, query)
    },
    //借用提交
    onStorageBorrowSumit(params) {
        return Http.post(`${SERVICE_URL}/stationery/lent`, params)
    },
    UploadImage(query) {
        return Http.post(`${SERVICE_URL}${query.url}`, query.file)
    },
    // 新增
    addData(params) {
        return Http.post(`${SERVICE_URL}/site`, params)
    },
    // 编辑
    editData(params) {
        return Http.put(`${SERVICE_URL}/site`, params)
    },
    // 撤销
    revokeOperation(params) {
        return Http.delete(`${SERVICE_URL}/site`, params)
    },
    // 列表数据导入
    uploadList(params) {
        return Http.post(`${SERVICE_URL}/common/impoSERVICE_URL/query`, params)
    },
    // 删除
    deleteList(params) {
        return Http.delete(`${SERVICE_URL}/site`, params)
    },
    // 公用列表
    getSitCommonList(params) {
        return Http.get2(`${SERVICE_URL}/common/query/filter`, params)
    },
    // 公用检索
    getSitCommonData(params) {
        return Http.post(`${SERVICE_URL}/common/query/data`, params)
    },
    // 下载
    downFileCommon(query) {
        return Http.download(`${SERVICE_URL}/common/expoSERVICE_URL`, query)
    },

    
    // 新增
    addDataLab(params) {
        return Http.post(`${SERVICE_URL}/lab`, params)
    },
    // 编辑
    editDataLab(params) {
        return Http.put(`${SERVICE_URL}/lab`, params)
    },
    // 撤销
    revokeOperationLab(params) {
        return Http.delete(`${SERVICE_URL}/lab`, params)
    },
    // 删除
    deleteListLab(params) {
        return Http.delete(`${SERVICE_URL}/lab`, params)
    },
}

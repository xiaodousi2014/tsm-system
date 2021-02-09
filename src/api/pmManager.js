import Http from '../utils/axios'
import {SERVICE_URL} from "@/api/index";
const rt = 'http://139.198.188.175:8090'
// const rt2 = 'http://139.198.188.175:8090'
export default {
    getInfoType() {
        return Http.get(`${SERVICE_URL}/pm/project/infoType`)
    },
    /*----项目-----*/
    addRecord(params) {
        return Http.post(`${SERVICE_URL}/pm/project`, params)
    },
    deleteRecord(params) {
        return Http.delete(`${SERVICE_URL}/pm/project`, params)
    },
    putRecord(params) {
        return Http.put(`${SERVICE_URL}/pm/project`, params)
    },
    queryRecord(params) {
        return Http.post(`${SERVICE_URL}/pm/project/query`, params)
    },
    //新增项目类型
    addCategory(data) {
        return Http.post(`${SERVICE_URL}/pm/category`, data)
    },
    //修改项目类型
    deleteCategory(data) {
        return Http.delete(`${SERVICE_URL}/pm/category`, data)
    },
    //修改项目类型
    putCategory(data) {
        return Http.put(`${SERVICE_URL}/pm/category`, data)
    },
    //查询项目类型
    dataCategory(data) {
        return Http.post(`${SERVICE_URL}/pm/category/data`, data)
    },
    /* ----- 项目属性 ----- */
    addAttr(data) {
        return Http.post(`${SERVICE_URL}/pm/attr`, data)
    },
    deleteAttr(data) {
        return Http.delete(`${SERVICE_URL}/pm/attr`, data)
    },
    putAttr(data) {
        return Http.put(`${SERVICE_URL}/pm/attr`, data)
    },
    queryAttr(data) {
        return Http.get(`${SERVICE_URL}/pm/attr/query`, data)
    },
    /* -----项目属性数据维护-----*/
    addAttrdata(data) {
        return Http.post(`${SERVICE_URL}/pm/attrdata`, data)
    },
    deleteAttrdata(data) {
        return Http.delete(`${SERVICE_URL}/pm/attrdata`, data)
    },
    putAttrdata(data) {
        return Http.put(`${SERVICE_URL}/pm/attrdata`, data)
    },
    queryAttrdata(data) {
        return Http.get(`${SERVICE_URL}/pm/attrdata/query`, data)
    },
    //项目结项
    pmClose(data) {
        return Http.post(`${SERVICE_URL}/pm/project/close`, data)
    },
    // 删除列表
    dirtyQuery(params) {
        return Http.post(`${SERVICE_URL}/pm/project/dirty/query`, params)
    },
    // 撤销删除
    recordDirty(params) {
        return Http.put(`${SERVICE_URL}/pm/project/dirty`, params)
    },
    // 项目删除字段
    deleteInfo(params) {
        return Http.get(`${SERVICE_URL}/pm/project/dirty/infoType`,params)
    }
}

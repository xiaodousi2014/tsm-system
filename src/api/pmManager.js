import Http from '../utils/axios'
const rt = 'http://139.198.188.175:8090'
// const rt2 = 'http://139.198.188.175:8090'
export default {
    //新增项目类型
    addCategory(data) {
        return Http.post(`${rt}/pm/category`, data)
    },
    //修改项目类型
    deleteCategory(data) {
        return Http.delete(`${rt}/pm/category`, data)
    },
    //修改项目类型
    putCategory(data) {
        return Http.put(`${rt}/pm/category`, data)
    },
    //查询项目类型
    dataCategory(data) {
        return Http.post(`${rt}/pm/category/data`, data)
    },
    /* ----- 项目属性 ----- */
    addAttr(data) {
        return Http.post(`${rt}/pm/attr`, data)
    },
    deleteAttr(data) {
        return Http.delete(`${rt}/pm/attr`, data)
    },
    putAttr(data) {
        return Http.put(`${rt}/pm/attr`, data)
    },
    queryAttr(data) {
        return Http.get(`${rt}/pm/attr/query`, data)
    },
    /* -----项目属性数据维护-----*/
    addAttrdata(data) {
        return Http.post(`${rt}/pm/attrdata`, data)
    },
    deleteAttrdata(data) {
        return Http.delete(`${rt}/pm/attrdata`, data)
    },
    putAttrdata(data) {
        return Http.put(`${rt}/pm/attrdata`, data)
    },
    queryAttrdata(data) {
        return Http.get(`${rt}/pm/attrdata/query`, data)
    },
}

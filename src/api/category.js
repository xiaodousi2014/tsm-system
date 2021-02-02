import Http from '../utils/axios'
const rt = 'http://139.198.188.175:8090'
// const rt2 = 'http://139.198.188.175:8090'
export default {
    //新增法规知识类别
    addCategory(query) {
        return Http.post(`${rt}/doc/category`, query)
    },
    //修改法规知识类别
    deleteCategory(query) {
        return Http.delete(`${rt}/doc/category`, query)
    },
    //修改法规知识类别
    putCategory(query) {
        return Http.put(`${rt}/doc/category`, query)
    },
    //查询法规知识类别
    queryCategory(query) {
        return Http.post(`${rt}/doc/category/query`, query)
    },
}

import { SERVICE_URL } from "@/api";
import Http from '@/utils/axios';

export default { 
// 获取机构管理字段
getOrgInfoType() {
    return Http.get(`${SERVICE_URL}/org/infoType`)
},

// 新增机构管理
 addOrg(params) {
    return Http.post(`${SERVICE_URL}/org`, params)
},  

// 修改机构管理
 putOrg(params) {
    return Http.put(`${SERVICE_URL}/org`, params)
},

// 查询机构管理
queryOrg(params) {
    return Http.post(`${SERVICE_URL}/org/query`, params)
},

// 删除机构管理
 deleteOrg(params) {
    return Http.delete(`${SERVICE_URL}/org`, params)
},


}
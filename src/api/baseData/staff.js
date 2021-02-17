import { SERVICE_URL } from "@/api";
import Http from '@/utils/axios';

export default { 
// 获取业务参谋字段
getStaffInfoType() {
    return Http.get(`${SERVICE_URL}/staff/infoType`)
},

// 新增业务参谋
 addStaff(params) {
    return Http.post(`${SERVICE_URL}/staff`, params)
},  

// 修改业务参谋
 putStaff(params) {
    return Http.put(`${SERVICE_URL}/staff`, params)
},

// 查询业务参谋
queryStaff(params) {
    return Http.post(`${SERVICE_URL}/staff/query`, params)
},

// 删除业务参谋
 deleteStaff(params) {
    return Http.delete(`${SERVICE_URL}/staff/`, params)
},


}
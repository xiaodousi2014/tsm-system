import { SERVICE_URL } from "@/api";
import Http from '@/utils/axios';

export default { 
// 获取教师字段
getTeacherInfoType() {
    return Http.get(`${SERVICE_URL}/teacher/infoType`)
},

// 新增教师
 addTeacher(params) {
    return Http.post(`${SERVICE_URL}/teacher`, params)
},  

// 修改教师
 putTeacher(params) {
    return Http.put(`${SERVICE_URL}/teacher`, params)
},

// 查询教师
queryTeacher(params) {
    return Http.post(`${SERVICE_URL}/teacher/query`, params)
},

// 删除教师
 deleteTeacher(params) {
    return Http.delete(`${SERVICE_URL}/teacher`, params)
},


}
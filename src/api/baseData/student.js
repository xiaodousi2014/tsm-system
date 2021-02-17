import { SERVICE_URL } from "@/api";
import Http from '@/utils/axios';

export default { 
// 获取学生字段
getStudentInfoType() {
    return Http.get(`${SERVICE_URL}/student/infoType`)
},

// 新增学生
 addStudent(params) {
    return Http.post(`${SERVICE_URL}/student`, params)
},  

// 修改学生
 putStudent(params) {
    return Http.put(`${SERVICE_URL}/student`, params)
},

// 查询学生
queryStudent(params) {
    return Http.post(`${SERVICE_URL}/student/query`, params)
},

// 删除学生
 deleteStudent(params) {
    return Http.delete(`${SERVICE_URL}/student/`, params)
},


}
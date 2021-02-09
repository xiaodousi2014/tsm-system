import { SERVICE_URL } from "@/api"
import Http from '@/utils/axios' 
 
    // 新增学生
    export function  addStudent(params) {
        return Http.post(`${SERVICE_URL}/company/student/`, params)
    };

    // 修改学生
    export function  updateStudent(params) {
        return Http.put(`${SERVICE_URL}/company/student/`, params)
    };
    
    // 查询学生
    export function  queryStudent(params) {
        console.log("传递数据来");
        console.log(params);  
        return Http.get(`${SERVICE_URL}/company/student/`, params)
    };

    // 删除学生
    export function  deleteStudent(params) {
        return Http.delete(`${SERVICE_URL}/company/student/`, params)
    };
 
 

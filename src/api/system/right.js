import { SERVICE_URL } from "@/api";
import Http from '@/utils/axios';

export default {
    // 获取权限管理字段
    getRightInfoType() {
        return Http.get(`${SERVICE_URL}/right/infoType`)
    }, 

    // 新增权限管理
    addRight(params) {
        return Http.post(`${SERVICE_URL}/right`, params)
    }, 
    
    // 修改权限管理
    putRight(params) {
        return Http.put(`${SERVICE_URL}/right`, params)
    }, 

    // 查询权限管理
    queryRight(params) {
        return Http.post(`${SERVICE_URL}/right/query`, params)
    },

    // 删除权限管理
    deleteRight(params) {
        return Http.delete(`${SERVICE_URL}/right`, params)
    }, 

}
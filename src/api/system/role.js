import { SERVICE_URL } from "@/api";
import Http from '@/utils/axios';

export default {
 // 获取用户管理字段
 getRoleInfoType() {
  return Http.get(`${SERVICE_URL}/role/infoType`)
 },

 // 新增用户管理
 addRole(params) {
  return Http.post(`${SERVICE_URL}/role`, params)
 },

 // 修改用户管理
 putRole(params) {
  return Http.put(`${SERVICE_URL}/role`, params)
 },

 // 查询用户管理
 queryRole(params) {
  return Http.post(`${SERVICE_URL}/role/query`, params)
 },

 // 删除用户管理
 deleteRole(params) {
  return Http.delete(`${SERVICE_URL}/role`, params)
 },


}
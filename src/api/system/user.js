import { SERVICE_URL } from "@/api";
import Http from '@/utils/axios';

export default {
 // 获取角色管理字段
 getUserInfoType() {
  return Http.get(`${SERVICE_URL}/user/infoType`)
 },

 // 新增角色管理
 addUser(params) {
  return Http.post(`${SERVICE_URL}/user`, params)
 },

 // 修改角色管理
 putUser(params) {
  return Http.put(`${SERVICE_URL}/user`, params)
 },

 // 查询角色管理
 queryUser(params) {
  return Http.post(`${SERVICE_URL}/user/query`, params)
 },

 // 删除角色管理
 deleteUser(params) {
  return Http.delete(`${SERVICE_URL}/user`, params)
 },


}
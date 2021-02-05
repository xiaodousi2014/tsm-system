import Http from '../utils/axios'
/*const rt = '/trms' */
//  const rt = 'http://localhost:8190'
const rt = 'http://139.198.188.175:8090'
// const rt2 = 'http://121.5.2.69:8190/'
// const rt3 = 'http://24992uu588.qicp.vip:80/'
import {SERVICE_URL} from "@/api/index"
export default {
  getInfoType() {
    return Http.get(`${SERVICE_URL}/doc/infoType`)
  },
  /* ------法规属性 -----*/
  addDocAttr(params) {
    return Http.post(`${SERVICE_URL}/doc/attr`, params)
  },
  deleteDocAttr(params) {
    return Http.delete(`${SERVICE_URL}/doc/attr`, params)
  },
  putDocAttr(params) {
    return Http.put(`${SERVICE_URL}/doc/attr`, params)
  },
  queryDocAttr(params) {
    return Http.post(`${SERVICE_URL}/doc/attr/query`, params)
  },
  /*--------法规知识-----------*/
  addRecord(params) {
    // return Http.post(`/trms/doc/record`,params)
    return Http.post(`${SERVICE_URL}/doc/record`, params)
  },
  deleteRecord(params) {
    // return Http.post(`/trms/doc/record`,params)
    return Http.delete(`${SERVICE_URL}/doc/record`, params)
  },
  putRecord(params) {
    // return Http.post(`/trms/doc/record`,params)
    return Http.put(`${SERVICE_URL}/doc/record`, params)
  },
  queryRecord(params) {
    return Http.post(`${SERVICE_URL}/doc/record/query`, params)
  },
  findRecord(params) {
    return Http.get(`${SERVICE_URL}/doc/find`, params)
  },
  downRecord(params) {
    return Http.download(`${SERVICE_URL}/doc/exportfound`, params)
  },
  /* -------法规知识导入------ */
  // 法规知识导入 /doc/import
  // 撤销法规知识导入
  cancelimport(params) {
    return Http.post(`${SERVICE_URL}/doc/cancelimport`, params)
  },
  // 法规知识导入记录查询
  importRecords(params) {
    return Http.post(`${SERVICE_URL}/doc/import/records`, params)
  },
  //查看法规知识导入记录
  importRecord(params) {
    return Http.post(`${SERVICE_URL}/doc/import/record`, params)
  },
  //查看法规知识导入错误信息
  importRecorderr(params) {
    return Http.post(`${SERVICE_URL}/doc/import/recorderr`, params)
  },
}

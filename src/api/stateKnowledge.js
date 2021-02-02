import Http from '../utils/axios'
/*const rt = '/trms' */
//  const rt = 'http://localhost:8190'
const rt = 'http://139.198.188.175:8090'
// const rt2 = 'http://121.5.2.69:8190/'
// const rt3 = 'http://24992uu588.qicp.vip:80/'
export default {
  /* ------法规属性 -----*/
  addDocAttr(params) {
    return Http.post(`${rt}/doc/attr`, params)
  },
  deleteDocAttr(params) {
    return Http.delete(`${rt}/doc/attr`, params)
  },
  putDocAttr(params) {
    return Http.put(`${rt}/doc/attr`, params)
  },
  queryDocAttr(params) {
    return Http.post(`${rt}/doc/attr/query`, params)
  },
  /*--------法规知识-----------*/
  addRecord(params) {
    // return Http.post(`/trms/doc/record`,params)
    return Http.post(`${rt}/doc/record`, params)
  },
  deleteRecord(params) {
    // return Http.post(`/trms/doc/record`,params)
    return Http.delete(`${rt}/doc/record`, params)
  },
  putRecord(params) {
    // return Http.post(`/trms/doc/record`,params)
    return Http.put(`${rt}/doc/record`, params)
  },
  queryRecord(params) {
    return Http.post(`${rt}/doc/record/query`, params)
  },
  findRecord(params) {
    return Http.get(`${rt}/doc/find`, params)
  },
  downRecord(params) {
    return Http.download(`${rt}/doc/exportfound`, params)
  },
  /* -------法规知识导入------ */
  // 法规知识导入 /doc/import
  // 撤销法规知识导入
  cancelimport(params) {
    return Http.post(`${rt}/doc/cancelimport`, params)
  },
  // 法规知识导入记录查询
  importRecords(params) {
    return Http.post(`${rt}/doc/import/records`, params)
  },
  //查看法规知识导入记录
  importRecord(params) {
    return Http.post(`${rt}/doc/import/record`, params)
  },
  //查看法规知识导入错误信息
  importRecorderr(params) {
    return Http.post(`${rt}/doc/import/recorderr`, params)
  },
}

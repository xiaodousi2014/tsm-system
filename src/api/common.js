import Http from '../utils/axios'
/*const rt = '/trms' */
//  const rt = 'http://localhost:8190'
const rt = 'http://139.198.188.175:8090/'
// const rt = 'http://218.59.43.155:8190/'
const rt2 = 'http://121.5.2.69:8190/'
import { SERVICE_URL } from '@/api/index'
export default {
    /**
     * 查询偏好设置
     * @param {tbl_name} params 值 表名要用d_xxx这样
     */
    preferencesSelect(name) {
        return Http.post(`${SERVICE_URL}/common/favorite/query`, { tbl_name: name })
    },
    /**
     * 偏好设置保存
     * @param {params} params 值
     */
    preferencesSave(params) {
        return Http.post(`${SERVICE_URL}/common/favorite`, params)
    },
    //查询属性数据
    /**
     *
     * @param {infoType} params 值 表名要用d_xxx这样
     */
    attrdata(name) {
        return Http.post(`${SERVICE_URL}/common/attrdata`, { infoType: name })
    },
    // 修改属性
    puAattrdata(params) {
        return Http.put(`${SERVICE_URL}/common/attrdata`, params)
    },
    getAttachFile(query) {
        return Http.download(`${SERVICE_URL}/common/showfile`, query)
    },
    UploadFileFormData(url, query) {
        return Http.formData(`${url}`, query)
    },
    queryInStock(params) {
        return Http.post(`${SERVICE_URL}/common/import/query`, params)
    },
    // 导入撤销 ids=[]
    deleteInStock(params) {
        return Http.delete(`${SERVICE_URL}/common/import`, params)
    },
    //项目导出
    getExport(params) {
        return Http.download(`${SERVICE_URL}/common/export`, params)
    },
}

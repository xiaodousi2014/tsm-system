import Http from '../utils/axios'
/*const rt = '/trms' */
//  const rt = 'http://localhost:8190'
const rt = 'http://139.198.188.175:8090/'
// const rt = 'http://24992uu588.qicp.vip:80/'
const rt2 = 'http://121.5.2.69:8190/'
import {SERVICE_URL} from "@/api/index"
export default {
    //查询属性数据
    /**
     *
     * @param {infoType} params 值 表名要用d_xxx这样
     */
    attrdata(name){
      return Http.post(`${SERVICE_URL}/common/attrdata`, { infoType: name })
    },
    // 修改属性
    puAattrdata(params){
        return Http.put(`${SERVICE_URL}/common/attrdata`, params)
    }
}

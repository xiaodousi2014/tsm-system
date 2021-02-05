import Http from '../utils/axios' 
// 服务器url
import {SERVICE_URL} from "@/api/index" 
 
export default {
    /*--------全局接口-----------*/
    login(params){
      return Http.post(`${SERVICE_URL}/trmslogin`,params
      /*, {emulateJSON:true}*/ )
    },

    logout(){
      return Http.post(`${SERVICE_URL}/trmslogout`)
    }, 
}

import Http from '../utils/axios'
const rt = '/api-gaoli/user'
export default {
    /*--------全局接口-----------*/
    /*-------E端登录------*/
    login(params){
      return Http.post(`${rt}/e/login`,params)
    },
}

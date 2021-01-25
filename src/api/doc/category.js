import Http from '../utils/axios'
/*const rt = '/trms' */
//  const rt = 'http://localhost:8190'
const rt = 'http://139.198.188.175:8090/'
export default {
    /*--------全局接口-----------*/
    login(params){
        return Http.post(`${rt}/trmslogin`,params
            /*, {emulateJSON:true}*/ )
    },
    logout(){
        return Http.post(`${rt}/trmslogout`)
    },
}

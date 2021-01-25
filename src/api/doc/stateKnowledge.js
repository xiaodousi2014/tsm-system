import Http from '../../utils/axios'
/*const rt = '/trms' */
//  const rt = 'http://localhost:8190' 
const rt = 'http://139.198.188.175:8090/'
export default {
    /*--------全局接口-----------*/
    addRecord(params){
      return Http.post(`/trms/doc/record`,params
      /*, {emulateJSON:true}*/ )
    }
}

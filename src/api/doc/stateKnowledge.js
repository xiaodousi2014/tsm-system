import Http from '../../utils/axios'
/*const rt = '/trms' */
//  const rt = 'http://localhost:8190'
const rt = 'http://139.198.188.175:8090/'
const rt2 = 'http://121.5.2.69:8190/'
export default {
    /*--------全局接口-----------*/
    addRecord(params){
      // return Http.post(`/trms/doc/record`,params)
      return Http.post(`${rt}doc/record`,params)
    },
    getRecord(params){
      return Http.get(`${rt}doc/record`,params)
    }
}

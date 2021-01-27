import Http from '../../utils/axios'
// const rt = 'http://139.198.188.175:8090/'
const rt2 = 'http://10.8.145.43:8190'
export default {
    getTableTitle(){
        return Http.get(`${rt2}/device/infoType`)
    },
    getTableList(params){
        return Http.post(`${rt2}/device/list`, params)
    },
    getDeleteTableTitle(){
        return Http.get(`${rt2}/device/dirty/infoType`)
    },
    getDeleteTableList(params){
        return Http.post(`${rt2}/device/dirty/list`, params)
    },
    putList(params) {
        let query = {
            ids: params
        }
        return Http.put(`${rt2}/device/dirty`, query)
    },
    onDelete(params) {
        let query = {
            ids: params
        }
        return Http.delete(`${rt2}/device`, query)
    },
    //请领提交
    onQingLingSumit(params) {
     return Http.post(`${rt2}/device/use`, params)
    },
     //借用提交
     onBorrowSumit(params) {
        return Http.post(`${rt2}/device/lent`, params)
       },
         //维修提交
         onRepairSumit(params) {
        return Http.post(`${rt2}/device/repair`, params)
       },
       // 报废
       onScrapSumit(params) {
        let query = {
            ids: params
        }
        return Http.post(`${rt2}/device/abolish`, query)
       }
    
}

import Http from '../../utils/axios'
// const rt = 'http://139.198.188.175:8090/'
const rt2 = 'http://10.8.145.33:8190'
export default {
    getTableTitle(){
        return Http.get(`${rt2}/material/infoType`)
    },
    getTableList(params){
        return Http.post(`${rt2}/material/list`, params)
    },
}

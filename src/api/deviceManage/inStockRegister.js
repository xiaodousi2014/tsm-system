import Http from '../../utils/axios'
// const rt = 'http://139.198.188.175:8090/'
const rt2 = 'http://10.8.145.43:8190'
export default {
    getTableTitle(){
        let query = {
            infoType: 't_import_record'
        }
        return Http.post(`${rt2}/common/query/filter`, query)
    },
    getTableList(params){
        return Http.post(`${rt2}/common/import/query`, params)
    },
    onRevoke(params){
        let query = {
            ids: params
        }
        return Http.post(`${rt2}/device/import/cancel`, query)
    },
}

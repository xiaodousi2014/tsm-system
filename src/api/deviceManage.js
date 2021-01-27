import Http from '../utils/axios'
// const rt = 'http://139.198.188.175:8090/'
const rt2 = 'http://10.8.145.43:8190'
export default {
    searchAllField(){
        return Http.get(`${rt2}/device/infoType`)
    },
}

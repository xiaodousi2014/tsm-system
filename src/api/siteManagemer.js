import Http from '../utils/axios'
const rt = 'http://139.198.188.175:8090'
export default {
    //计划申报
    getPlanTitle() {
        return Http.get(`${rt}/device/plan/infoType`)
    },
}

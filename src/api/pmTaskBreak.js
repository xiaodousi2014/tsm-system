import Http from '../utils/axios'
import {SERVICE_URL} from "@/api/index";
export default {
    getInfoType() {
        return Http.get(`${SERVICE_URL}/pm/task/infoType`)
    },
    addTask(params) {
        return Http.post(`${SERVICE_URL}/pm/task`, params)
    },
    putTask(params) {
        return Http.put(`${SERVICE_URL}/pm/task`, params)
    },
    delTask(params) {
        return Http.delete(`${SERVICE_URL}/pm/task`, params)
    },
    queryTask(params) {
        return Http.post(`${SERVICE_URL}/pm/task/query`, params)
    },
    nextTask(params) {
        return Http.post(`${SERVICE_URL}/pm/task/underway`, params)
    },
    closeTask(params) {
        return Http.post(`${SERVICE_URL}/pm/task/close`, params)
    },
    // 任务删除字段
    getTaskDelInfo(params) {
        return Http.get(`${SERVICE_URL}/pm/task/dirty/infoType`, params)
    },
    queryTaskDelete(params) {
        return Http.post(`${SERVICE_URL}/pm/task/dirty/query`, params)
    },
    dirtyTaskDel(params) {
        return Http.put(`${SERVICE_URL}/pm/task/dirty`, params)
    },


    /**----经费报销登记---**/
    // 项目经费报销所有字段
    getInfoTypeFun() {
        return Http.get(`${SERVICE_URL}/pm/reimbursement/infoType`)
    },
    querylist(params){
      return Http.post(`${SERVICE_URL}/pm/reimbursement/query`,params)
    },
    // 添加
    addReimbursement(params) {
        return Http.post(`${SERVICE_URL}/pm/reimbursement`,params)
    },
    putReimbursement(params) {
        return Http.put(`${SERVICE_URL}/pm/reimbursement`,params)
    },
    delReimbursement(params) {
        return Http.delete(`${SERVICE_URL}/pm/reimbursement`,params)
    },
    //经费报销删除表
    getInfoTypeFunDelete() {
        return Http.get(`${SERVICE_URL}/pm/reimbursement/dirty/infoType`)
    },
    queryFundDellist(params) {
        return Http.post(`${SERVICE_URL}/pm/reimbursement/dirty/query`,params)
    },
    dirtyFunDel(params) {
        return Http.put(`${SERVICE_URL}/pm/reimbursement/dirty`,params)
    },


    /**项目成果**/
    getInfoTypeOut() {
        return Http.get(`${SERVICE_URL}/pm/outcomes/infoType`)
    },
    queryOutcomeslist(params){
        return Http.post(`${SERVICE_URL}/pm/outcomes/query`,params)
    },
    // 添加
    addOutcomes(params) {
        return Http.post(`${SERVICE_URL}/pm/outcomes`,params)
    },
    putOutcomes(params) {
        return Http.put(`${SERVICE_URL}/pm/outcomes`,params)
    },
    delOutcomes(params) {
        return Http.delete(`${SERVICE_URL}/pm/outcomes`,params)
    },
    //经费报销删除表
    getInfoTypeDelOutcomes() {
        return Http.get(`${SERVICE_URL}/pm/outcomes/dirty/infoType`)
    },
    queryDelOutcomes(params) {
        return Http.post(`${SERVICE_URL}/pm/outcomes/dirty/query`,params)
    },
    dirtyOutcomesDel(params) {
        return Http.put(`${SERVICE_URL}/pm/outcomes/dirty`,params)
    },

}

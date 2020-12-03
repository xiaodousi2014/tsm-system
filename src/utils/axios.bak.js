import axios from 'axios'
import utils from './utils'
import {Message} from 'element-ui'

function loadingShowOrHide(show) {
    if (show) {
        utils.showLoading()
    } else {
        utils.hideLoading()
    }
}

axios.defaults.timeout = 15000
axios.defaults.withCredentials = true
axios.defaults.responseType = 'json'
axios.defaults.headers.common['Cache-Control'] = 'no-cache'
axios.defaults.headers.get['If-Modified-Since'] = '0'
axios.defaults.cache = false
// http response 拦截器
axios.interceptors.response.use(
    response => {
        if (response.data.code === 403 && response.data.type === 'no_login') {
            localStorage.removeItem('aegeanUserInfo')
            top.location.href = top.location.href.split('/#/')[0] + '/#/login'
        }
        return response
    },
    error => {
        return Promise.reject(error.response.data)// 返回接口返回的错误信息
    })

// function checkStatus(response, loading) {
//     if (typeof loading === '' || loading === 'object' || typeof loading === 'undefined') {
//         // 什么都不操作
//     } else {
//         loadingShowOrHide()
//     }
//     const { data } = response
//     const { code, dataMap } = data
//     if (code === 911) {
//         const currentUrl = encodeURIComponent(window.location.href)
//         window.location.href = `${dataMap}${currentUrl}`
//     }
//     if (code === 401) {// 跳转到登录页面
//         window.location.href = data.data
//     } else {
//         if ((code >= 200 && code < 300) || code === 403) {
//             return response
//         }
//     }
//     const error = new Error(response.data.message || response.statusText)
//     error.response = response
//     throw error
// }

/*
loading为true 调用这个api会打开loading，结束关闭
loading为false  调用只会关闭loading ,主要用于首次打开tab页面，关闭loading
loading为''或者不传  什么都不操作
 */
export default class Http {
    static send(config, loading) {
        const currentUrl = encodeURIComponent(window.location.href)
        const configs = Object.assign({
            headers: { 'currentUrl': currentUrl },
            timeout: 30000
        }, config)
        if (loading) {
            loadingShowOrHide(true)
        }
        return axios(configs).then((res) => {
            return res
        }).catch((error,loading) => {
            if (typeof loading === '' || loading === 'object' || typeof loading === 'undefined') {
                // 什么都不操作
            } else {
                loadingShowOrHide()
            }

            const { response } = error
            if (response) {
                if (response.data.status !== 404) {
                    const { data = {}, status } = response
                    const { message = '系统异常！' } = data
                    if (data.code !== 401) {
                        Message.error(message)
                    }
                } else {
                    Message.error(message)
                }
            } else if (error.request) {
                // console.log('error.request', error.request)
            } else {
                // console.log('Error', error.message)
            }
            // console.log(error.config)
            throw error
        })
    }

    static post(url, params = {}, loading) {
        const config = {
            method: 'post',
            url,
            data: params
        }
        return Http.send(config, loading)
    }

    static get(url, params = {}, loading) {
        let urlParams = []
        Object.keys(params).forEach((key) => {
            urlParams.push(`${key}=${encodeURIComponent(params[key])}`)
        })
        if (urlParams.length) {
            urlParams = `${url}?${urlParams.join('&')}`
        } else {
            urlParams = url
        }
        const config = {
            url: urlParams,
            params: {
                randomTime: new Date().getTime() // 防止缓存
            }
        }
        return Http.send(config, loading)
    }

    static form(url, params = {}, loading) {
        const config = {
            method: 'post',
            url,
            data: qs.stringify(params)
        }
        return Http.send(config, loading)
    }
}

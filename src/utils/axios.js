import axios from 'axios'
import {Message} from 'element-ui'
import utils from './utils'

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
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get['If-Modified-Since'] = '0'
axios.defaults.cache = false

// config.headers['token'] = store.getters.userToken

// request 请求之前
axios.interceptors.request.use(
    config => {
      config.headers['loginToken'] =  sessionStorage.getItem("loginToken");
      config.headers['loginName'] =sessionStorage.getItem("loginName");
      return config
    }, 
  )


// http response 拦截器
axios.interceptors.response.use(
    response => {
        
        // 接口拦截，用户未登陆 
        if(Object.getPrototypeOf(response.data) == Blob.prototype) {
            return Promise.resolve(response)
        }
        if (response.data.code !== '0000') {
            Message.error(response.data.msg || '系统异常！');
            return Promise.reject(response.data)
        } else {
            return Promise.resolve(response)
        }
    },
    error => {
        if (error.response && error.response.data) {
            return Promise.reject(error.response.data) // 返回接口返回的错误信息
        } else {
            return Promise.reject(error.message)
        }
    })

/*
loading为true 调用这个api会打开loading，结束关闭
loading为false  调用只会关闭loading ,主要用于首次打开tab页面，关闭loading
loading为''或者不传  什么都不操作
 */
export default class Http {
    static send(config,loading,isBlob) {
        const currentUrl = encodeURIComponent(window.location.href)
        const configs = Object.assign({
            headers: {
                'currentUrl': currentUrl,
                'L-A-Platform':'erp-web'//后端日志埋点渠道
            },
            timeout: 30000
        }, config)
        if (loading) {
            loadingShowOrHide(true)
        }
        return axios(configs).then((res) => {

            if ((loading === '' ||typeof loading == 'object' || loading === undefined)&& !isBlob) {
                // 什么都不操作
            } else if(isBlob) {
             return res
            } else {
                loadingShowOrHide()
            }
            return res.data

        }).catch((error) => {
            if (loading === '' ||typeof loading == 'object' || loading === undefined) {
                // 什么都不操作
            } else {
                loadingShowOrHide()
            }
            if (error) {
                switch (error.code){
                    case 500:
                        Message.error(error.message || '系统异常！');
                        break;
                    case 404:
                        Message.error('网络异常！');
                        break;

                }
            }
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
    static formData(url, params = {}, loading) {
        const config = {
            method: 'post',
            url,
            data: params,
            headers: {'Content-Type':'application/x-www-form-urlencoded'}
        }
        return Http.send(config, loading)
    }
    static delete(url, params = {}, loading) {
        const config = {
            method: 'delete',
            url,
            data: params
        }
        return Http.send(config, loading)
    }
    static put(url, params = {}, loading) {
        const config = {
            method: 'put',
            url,
            data: params
        }
        return Http.send(config, loading)
    }
    static download(url, params = {}, loading) {
        const config = {
            responseType:'blob',
            method: 'post',
            url,
            data: params
        }
        let isBlob = true;
        return Http.send(config, loading, isBlob)
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

    static get2(url, params = {}, loading) {
        const config = {
            method: 'post',
            url,
            data: params,
            params: {
                randomTime: new Date().getTime() // 防止缓存
            }
        }
        return Http.send(config, loading)
    }
}

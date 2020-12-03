function deepClone (obj,b) {
    b = b||{}
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            if (typeof obj[i] === "object") {
                b[i] = (Object.prototype.toString.call(obj[i]) === "[object Array]") ? [] : {};
                deepClone(obj[i], b[i]);
            }
            else {
                b[i] = obj[i];
            }
        }
    }
    return b;
}
let model = ''
if(window.location.href.match(/\/(\w*?)(?=\/#\/)/)){
    model = window.location.href.match(/\/(\w*?)(?=\/#\/)/)[0]
    if(model == '/aegean'){
        model = ''
    }
}
export default {
    /**--------------获取cookies--------------**/
    getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return (arr[2]);
        else
            return null;
    },

    /**--------------设置cookies--------------**/
    setCookie(c_name, value, expiredays) {
        let exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + value + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
    },

    /**--------------删除cookies--------------**/
    delCookie(name) {
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        let cval = getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    },

    /**--------------sessionStorage获取对象--------------**/
    getSession(key, isObj = true) {
        let value = sessionStorage.getItem(key);
        if (isObj) {
            value = JSON.parse(value);
        }
        return value;
    },

    /**--------------sessionStorage设置对象--------------**/
    setSession(key, value) {
        let str = value;
        if (value !== undefined && typeof(value) === 'object') {
            str = JSON.stringify(value);
        }
        sessionStorage.setItem(key, str);
    },

    /**--------------sessionStorage删除对象--------------**/
    delSession(key) {
        sessionStorage.removeItem(key);
    },
    /**--------------localStorage设置对象--------------**/
    setLocalStorage(key, value) {
        let str = value;
        if (value !== undefined && typeof(value) === 'object') {
            str = JSON.stringify(value);
        }
        localStorage.setItem(key, str);
    },

    getLocalStorage(key, isObj = true) {
        let value = localStorage.getItem(key);
        if (isObj) {
            value = JSON.parse(value);
        }
        return value;
    },
    /**--------------sessionStorage删除对象--------------**/
    delLocalStorage(key) {
        localStorage.removeItem(key);
    },
    /**--------------按钮权限--------------**/

    buttonResource(btnNameList) {
        const btnResource = JSON.parse(sessionStorage.getItem('aegeanButtonResource'))
        const obj = {}
        btnNameList.forEach(item => {
            if (btnResource.hasOwnProperty(item)) {
                obj[item] = true
            } else {
                obj[item] = false
            }
        })

        return obj
    },


    /**--------------日期转化--------------**/
    dateFormatter(value, fmt = 'yyyy-MM-dd') {
        if (!value) {
            return ''
        }
        let date = new Date(Number(value));
        let o = {
            "M+": date.getMonth() + 1,                 //月份
            "d+": date.getDate(),                    //日
            "h+": date.getHours(),                   //小时
            "m+": date.getMinutes(),                 //分
            "s+": date.getSeconds(),                 //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds()             //毫秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    },
    /**--------------iframe数据传输--------------**/
    openTab(name, url) {
        let params = {
            type: 'openTab',
            name: name,
            targetUrl:  url,
            currentUrl: window.location.href
        }
        parent.postMessage(params, '*')
    },
    closeTab(refresh = false) {
        let params = {
            type: 'closeTab',
            currentUrl: window.location.href,
            refresh: refresh
        }
        parent.postMessage(params, '*')
    },
    closeOtherTab(url) {
        let params = {
            type: 'closeOtherTab',
            targetUrl:window.location.href.split('/#/')[0] + '/#' + url
        }
        parent.postMessage(params, '*')
    },
    hideLoading() {
        let params
        let url = '/#/' + window.location.href.split('/#/')[1].split('?')[0]
        params = {
            type: 'hideLoading',
            url: model + url,
        }
        console.log('111111111'+model)
        parent.postMessage(params, '*')
    },
    showLoading() {
        let params
        let url = '/#/' + window.location.href.split('/#/')[1].split('?')[0]
        params = {
            type: 'showLoading',
            url: model + url,
        }

        parent.postMessage(params, '*')
    },
    deepClone
}

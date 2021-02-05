import postMessage from './utils'
let model = ''
if(window.location.href.match(/\/(\w*?)(?=\/#\/)/)){
    model = window.location.href.match(/\/(\w*?)(?=\/#\/)/)[0] + '/#'
    if(model == '/aegean/#'){
        model = '/#'
    }
}
function isLocal() {
    let browserURL = window.location.href;
    return browserURL.indexOf("http://localhost") !== -1
}
export default {
    install(Vue) {
        Vue.prototype.$openTabSwitch = function(name, url ) {
            if(isLocal()) {
                // this.$router.push({
                //     path: url
                // });
                postMessage.openTab(name,model + url);
            } else {
                // console.log(postMessage);
                // 根据自己模块路径添加
                postMessage.openTab(name,model + url);
            }
        }
        Vue.prototype.$closeTabSwitch = function(flag) {

            if(isLocal()) {
                if(flag) {
                    history.go(-1);
                    setTimeout(function() {
                        location.reload();
                    }, 500)
                } else {
                    history.go(-1);
                }
            } else {
                // true  关闭 Tab 页面并刷新来源页面
                // false  关闭 Tab 页面并返回来源页面
                postMessage.closeTab(flag);
            }
        }
        Vue.prototype.$showLoading = function() {
            postMessage.showLoading()
        }
        Vue.prototype.$hideLoading = function() {
            postMessage.hideLoading()
        }
    }
}

// 使用方式：
// 打开 Tab 页面
// let that = this;     传递 this 指向
// postMessage.openTabSwitch(that, '测试', '/testDemo01');
// 关闭 Tab 页面
// postMessage.closeTabSwitch();            不带刷新功能
// postMessage.closeTabSwitch(true);        带刷新功能

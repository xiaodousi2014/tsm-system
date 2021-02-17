/***---------------vue全局实例方法-------------***/
import collapseTransition from './transition'
//import searchForm from '../components/search'

export default {
    install(Vue) {
        //注册折叠动画全局组件
        Vue.component('collapseTransition', collapseTransition);
        //Vue.component('searchForm', searchForm);

        //修正浮点数运算的精度问题
        Vue.prototype.$fixMath = function (math) {
            //math为运算式,必须确保是数字类型进行运算
            return parseFloat(Number(math).toPrecision(12))
        };
        //toFixed方法重写
        Vue.prototype.$toFixed = function(s, d) {
            var s=s+"";
            if(!d)d=0;
            if(s.indexOf(".")==-1)s+=".";
            s+=new Array(d+1).join("0");
            if(new RegExp("^(-|\\+)?(\\d+(\\.\\d{0,"+(d+1)+"})?)\\d*$").test(s)){
                var s="0"+RegExp.$2,pm=RegExp.$1,a=RegExp.$3.length,b=true;
                if(a==d+2){
                    a=s.match(/\d/g);
                    if(parseInt(a[a.length-1])>4){
                        for(var i=a.length-2;i>=0;i--){
                            a[i]=parseInt(a[i])+1;
                            if(a[i]==10){
                                a[i]=0;
                                b=i!=1;
                            }else break;
                        }
                    }
                    s=a.join("").replace(new RegExp("(\\d+)(\\d{"+d+"})\\d$"),"$1.$2");

                }if(b)s=s.substr(1);
                return (pm+s).replace(/\.$/,"");
            }return s+"";
        }
    }
}

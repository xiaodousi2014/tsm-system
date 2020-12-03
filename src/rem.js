function getRem(pwidth,prem){
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    document.documentElement.style.fontSize = oWidth/pwidth*prem + "px";
    //10px = 1rem
}
getRem(750,200)
window.onload = function(){
    getRem(750,200)
};
window.onresize = function(){
    getRem(750,200)
};
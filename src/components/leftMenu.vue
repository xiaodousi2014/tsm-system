<template>
    <div>
        <div class="menu" :class="{thin:isCollapse}">
            <el-menu class="el-menu-vertical-demo"  :collapse="true" :class="{thin:isCollapse}" @select="selectItems($event)">
                <div v-for="(item,index) in menu.childResourceVoList" >
                    <el-submenu :index="item.resourceName + '&' + item.resourceUrl" v-if="item.childResourceVoList !== null">
                        <template slot="title">
                            <i class="font_family" v-html="item.iconCode"></i>
                            <span class="title_span" v-show="!isCollapse" :class="{paddingRight:!isCollapse}" slot="title">{{item.resourceName}}</span>
                        </template>
                        <el-menu-item  :index="value.resourceName + '&' +value.resourceUrl" v-for="(value,num) in item.childResourceVoList" :key="num">{{value.resourceName}}</el-menu-item>
                    </el-submenu>
                    <el-menu-item :index="item.resourceName + '&' + item.resourceUrl" v-else :class="{paddingRight:!isCollapse}">
                        <i class="font_family" v-html="item.iconCode"></i>
                        <span class="title_span"  v-show="!isCollapse" :class="{paddingRight:!isCollapse}">{{item.resourceName}}</span>
                    </el-menu-item>
                </div>

            </el-menu>
        </div>
        <!--<div class="menu" :class="{thin:isCollapse}">-->
        <!--<div class="icon" @click="bindCollapse"></div>-->

        <!--</div>-->
    </div>
</template>

<script>
    import Utils from '../utils/utils'
    //import Http from '../api/api'
    export default {
        data() {
            return {
                menu: '',
                isCollapse: false,
                logoImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAyCAMAAADbXS0mAAABelBMVEUAAAD////////////8/Pz8/Pz////////////////////////////+/v7////////////////////////////////////8/Pz////////////////////////////////////////////9/f3////+/v7////////////////////////////////////////19fX////////////////////////////////////////////7+/v////////x8fH////////////////////////////////////////////////////////////////////////+/v7////////i4uL////////////////g4OD////Z2dn6+vrZ2dni4uL////u7u7o6Ojh4eHs7Ozy8vLf39/4+Pjx8fH39/fp6enb29vZ2dnq6urd3d3r6+v////9/f3a2tr4+Pjc3Nzl5eXp6eng4ODz8/P6+vrt7e3r6+vi4uLX19dkClWOAAAAcHRSTlMABfz0ERgH8uz6zZEdFRMKA/nutqGaRw734tTDqFfe27myn2tjYFNPSuajZ0wzMCv+19G7r6qWhG1lQT0uJgz+8O/ox8C9rp2MiX57eHVvXVtJRTkjyKWGdHFjN/rxtm5R9OjeysnAvLeelIFeVyYNxRDLzQAABE9JREFUSMeVVndfE0EQXZJAMAWDJKYYiQhCFCVY6IgKiEhRpChi710vl4btuztv2bd6/o6g809edmffzdudmV21j4ViiT3QEm9V/2vx7fmgE20RNB3NBcL9oJm8v9I7/Y/rbwUdx7kloOOMgNkhpQ6PHnFg3ePqYGvBKue+oFhBQFA+Wzrv0HpCBxJE4XdXwIxeJvGHsgBkOGj9HXiFsW8poC4BI44emwvo397m6xM5OC0LKmn/klIP9LrhTyo+B3CtrSnBWf2xtKCTQJcE3AB49GNLTqcdcK0pwSW4RAWkg0BTshUa1KpV2c0VwPlm60OH4HJZ0G2AHEG26lbfy7l24k+sCcEEHI4BdenDJHjmutXnkpp5/FltQnARDoPIIYQSaDWg84XrNr6vK1XEfGT/9a0BeCNXBuF5gmDhg1utfXsnWTZLif42zp1X14FuE/R/FoLdR1Ido/i7tC/BMUwfZyiZtAHhNrXVqA9XBpSa4t76WgyzwcOoJ6ARxpRU6knje6Wcl4GsSS9fW2UZqDkdOGMqSiS1K5UyuBcxMKb8LYLJszoUHTgBOsOWEJRF3TmMFPzXX9apDm+dcWcEbANc+aJEw64QoBS7MXTOl2AJUyeBLuhQGFPto6D48NeyPuF7GFr0JdD1f5ShXJVQNgHK7mPMvikL7lNqSKe23/ppzBxpYShJAcsAu+5DpFYfCC4KKGBww4dAx3bDhlIUkAOouz93kNwBJHdcqTEW7N/WTQVDDKWkFTRc9zXmT+h+ZKZPJ5TXTONph4Kb3Ez9rWEpxB+t0KArlRom/ZtpyoZyh54vhaDWa3tFTHjp6bHEaQyvC9qggnM6ph0hqL+yLWJVNDBWj03Z0ahWQCmp9EO3Ua9syv9TbAYFE6LHRrW3DoXT2b2YHjekDlZ+9ztzXsm/7qN2nsEkFWyYmHZq9d1KzmpYMtrC3vZ+1CpIUUHU5EWo/k3SuEQN57nNAx6CpPa2oRQhhTG9RR2NWQ1DZnfyf65vu0rvIkuSUuTDFamjgtVwExrYeWgD1jvJDbJSVEemXJYKpoZuaGDvo+Xp3RY2lUwpOolBsEgNKKRF031ph4P0fsoNPsqSZhJnrYaoyfvOtKIdp3A1wl6UJGAhOlOkOp0wOXJK0XoofCajD4i7KkDZQhy1VOvmjLvsldrJFramt1cUDBDwykSWkCplMj/QYeb7bGb18IDzBNriAZ7yxN5xmSwZZIRar93lfu5qv/fSTVqqs6Z2rpOfevuYIMcNoA3aGDXVXZ1n+vqG9Vq9F3mjLQAsCPBoeEoqoU7MAoz/vlLzvFKRYOmMAdbmSW19UvYtEnOodxwgM2OeNcwTRokpUi0g0/jc2bZ6jzFBu7xPSvvhNVIJecsRPncimvyCmGOcOg5588zqnI1E2jPaKxuJBE2H23SsMXB92IdC3he442+batk70MNnzQmfx4ePLaucd+AU9U4or835E+R+ATP8PJrbU4lzAAAAAElFTkSuQmCC'
            }
        },
        methods: {
            bindCollapse(){
                this.isCollapse = !this.isCollapse
            },
            selectItems(index){
                if(index.split('&')[1] !== '' || index.split('&')[1] !== null){
                    this.$emit('jumpUrl',index)
                }
                //按钮选中之后设置当前的index为store里的值。
            },
            getTree(){
                Http.initResourceTree({'resourceType':1}).then(res => {
                    this.menu = res.data.data
                    console.log(this.menu)
                    // this.menu.childResourceVoList.splice(0,0,{
                    //     childResourceVoList: null,
                    //     iconCode: "&#xe632;",
                    //     id: 0,
                    //     resourceName: "首页",
                    //     resourceUrl: '/#/main'
                    // })
                    console.log(this.menu)
                })
            },
            setImg(){
                let img = Utils.getLocalStorage('imgUrl')
                if(img){
                    img.forEach(v => {
                        if (v.imageType === 3) {
                            this.logoImg = v.imageUrl
                        }
                    })
                }
            },
            getButton(){
                Http.getButtonResource().then(res => {
                    Utils.setSession('aegeanButtonResource',res.data.data)
                })
            },
            postMessageListener(e) {
                const vm = this
                if (e.data.type === 'uploadImg') {
                    vm.setImg()
                }
            }
        },
        mounted(){
            window.addEventListener('message', this.postMessageListener)
            this.getTree()
            this.getButton()
            this.setImg()

        }
    }
</script>
<style scoped>
    .fade-in-lefttop-enter-active {
        transition: all .3s;
        opacity: 1;
    }
    .fade-in-lefttop-enter{
        transform: translate(-30%,0);
        opacity: 0;
    }
    .fade-in-lefttop-leave-active{
        transform: translate(-30%,0);
        opacity: 0;
    }
    .hide-enter-active,.hide-leave-active {
        transition: all .3s;
        opacity: 1;
    }
    .hide-enter,.hide-leave{
        opacity: 0;
    }

    .menu{
        width:200px;
        background: #494A4A;
        color:#fff;
        z-index:5;
        height:100%;
        transition:all .1s;
        -moz-user-select: none;
        -khtml-user-select: none;
        user-select: none;
        overflow:auto;
        padding:16px 0;
    }
    .menu.thin{
        width:50px;
    }

    .menu_li{
        height:46px;
        line-height:46px;
        position: static;
    }
    .menu_li:hover{
        background:rgba(255,255,255,0.2);
        cursor:pointer;
        color:#fff;
    }
    .thin .menu_div{
        left:50px;
    }
    .menu_div{
        position: absolute;
        left:200px;
        background:#0f2950;
        width:200px;
        z-index:0;
        margin-top:-46px;
    }
    .menu_sec_li{
        color:rgba(255,255,255,0.6);
    }
    .menu_sec_li:hover{
        background:#031937;
        color:#fff;
    }
    .menu_sec_li.checked{
        background:#5ECEBE;
        color:#fff;
    }
    .menu_li.checked{
        background: #5ECEBE;
        color:#fff;
    }
    .paddingRight{
        padding-right:20px!important;
    }
    .hideIcon{
        position: absolute;
        right:20px;
        top:50%;
        transform:translateY(-50%);
    }
    .showIcon{
        position: absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
    }

    .title_span{
        display:inline-block;
        text-align: left;
        width:60px;
        padding-left:10px;
    }
    >>> .menu .el-menu--collapse{
        width:100%;
    }
    >>> .menu .el-menu--collapse>.el-menu-item span,>>>  .menu .el-menu--collapse>.el-submenu>.el-submenu__title span{
        height: auto;
        width: auto;
        overflow: hidden;
        visibility: visible;
        display: inline-block;
    }
    >>> .el-menu.el-menu--popup.el-menu--popup-right-start .el-menu-item{
        text-align: left;
        padding-left: 30px !important;
    }
    /*>>> .menu .el-submenu__title,>>> .el-menu-item{*/
    /*padding:0!important;*/
    /*font-family: PingFangSC-Regular;*/
    /*}*/

    >>> .menu .el-submenu__title i,.menu .el-submenu__title{
        color:rgba(255,255,255,0.6)!important;
    }
    >>> .is-active .el-submenu__title i{
        color:#fff;
    }
    >>> .el-submenu__title {
        color:#fff;
    }
    >>> .menu .el-menu {
        background: transparent;
        border: 0;
    }
    >>> .el-menu--popup{
        padding:0;
    }
    >>> .thin .el-icon-arrow-right{
        display:none;
    }
    >>> .menu .thin .el-submenu [class^=el-icon-],.menu .thin .el-menu-item [class^=el-icon-]{
        margin-right:0;
    }
    >>> .el-menu--vertical{
        margin-left: -5px;
    }
</style>
<style>
    .el-menu{
        background:#494A4A!important;
        text-align: center!important;
    }
    .el-menu-item{
        -moz-user-select: none;
        -khtml-user-select: none;
        user-select: none;
        color:rgba(255,255,255,1)!important;
        font-family: PingFangSC-Regular;
    }
    .el-menu-item.is-active,.menu .el-submenu.is-active,.menu .is-active .el-submenu__title{
        background-color:#5ECEBE!important;
        color:#fff!important;
    }
    .el-menu-item i{
        color:rgba(255,255,255,0.6)!important;
    }
    .menu .el-submenu__title:hover,.el-menu-item:hover{
        background-color:rgba(255,255,255,0.2)!important;
        color:#fff!important;
    }
</style>

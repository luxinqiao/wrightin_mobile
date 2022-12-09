<template>
    <div id='main'>
        <div id='top'>
            <span class='top-menu' @click='expandMenu()'>
                <img class='menu' v-show='!menu.show' v-lazy='require("@/assets/img/index/menu.png")'>
                <img class='menu-close' v-show='menu.show' v-lazy='require("@/assets/img/index/menu-close.png")'>
            </span>
            <img class='top-logo' v-lazy='require("@/assets/img/index/logo.png")'>
            <span class='top-hotLine'>
                <span class='text' @click='goPhone("400-133-5668")'>服务热线：400-133-5668</span>
                <img class='img' v-lazy='require("@/assets/img/index/hotline.png")' @click='jumpUrl("https://lanting.m.tmall.com")'>
            </span>
        </div>
        <ul id='menuDetail' :style='{top:menu.top+"rem"}'>
            <li :class='menu.active=="/home"?"active":""'>
                <div class='menu-item' @click='checkMenu("/home")'>
                    <span class='text'>首页</span>
                    <img class='arrow right' v-lazy='require("@/assets/img/index/menu-arrow-right.png")'>
                </div>
            </li>
            <li :class='menu.active.indexOf("/product")>-1?"active":""'>
                <div class='menu-item' @click='checkMenu("/product")'>
                    <span class='text'>产品</span>
                    <img class='arrow bottom' v-show='menu.expand=="/product"' v-lazy='require("@/assets/img/index/menu-arrow-bottom.png")'>
                    <img class='arrow right' v-show='menu.expand!="/product"' v-lazy='require("@/assets/img/index/menu-arrow-right.png")'>
                </div>
                <div class='menu-detail product' v-show='menu.expand=="/product"'>
                    <p class='menu-detail-item left-top' @click='checkMenu("/product/wrightinTwo")'>
                        <img class='img' :src='require("@/assets/img/index/menu-product-wrightinTwo.png")'>
                        <span class='title'>盆底肌修复仪</span>
                        <span class='subTitle'>改善盆底健康问题</span>
                    </p>
                    <p class='menu-detail-item right-top' @click='checkMenu("/product/wrightin")'>
                        <img class='img' :src='require("@/assets/img/index/menu-product-wrightin.png")'>
                        <span class='title'>盆底生物刺激反馈仪</span>
                        <span class='subTitle'>治疗盆底肌肉功能障碍</span>
                    </p>
                    <p class='menu-detail-item left-bottom' @click='checkMenu("/product/kegel")'>
                        <img class='img' :src='require("@/assets/img/index/menu-product-kegel.png")'>
                        <span class='title'>盆底肌肉康复器</span>
                        <span class='subTitle'>锻炼阴道肌肉</span>
                    </p>
                    <p class='menu-detail-item right-bottom' @click='checkMenu("/product/wireless")'>
                        <img class='img' :src='require("@/assets/img/index/menu-product-wireless.png")'>
                        <span class='title'>无线产后恢复仪</span>
                        <span class='subTitle'>改善腹直肌分离</span>
                    </p>
                </div>
            </li>
            <li :class='menu.active=="/app"?"active":""'>
                <div class='menu-item' @click='checkMenu("/app")'>
                    <span class='text'>APP</span>
                    <img class='arrow right' v-lazy='require("@/assets/img/index/menu-arrow-right.png")'>
                </div>
            </li>
            <li :class='menu.active=="/technology"?"active":""'>
                <div class='menu-item' @click='checkMenu("/technology")'>
                    <span class='text'>核心技术</span>
                    <img class='arrow right' v-lazy='require("@/assets/img/index/menu-arrow-right.png")'>
                </div>
            </li>
            <li :class='menu.active.indexOf("/about")>-1?"active":""'>
                <div class='menu-item' @click='checkMenu("/about")'>
                    <span class='text'>关于我们</span>
                    <img class='arrow bottom' v-show='menu.expand=="/about"' v-lazy='require("@/assets/img/index/menu-arrow-bottom.png")'>
                    <img class='arrow right' v-show='menu.expand!="/about"' v-lazy='require("@/assets/img/index/menu-arrow-right.png")'>
                </div>
                <div class='menu-detail about' v-show='menu.expand=="/about"'>
                    <p class='menu-detail-item left' @click='checkMenu("/about/info")'>
                        <img class='img' :src='require("@/assets/img/index/menu-about-info.png")'>
                        <span class='title'>公司简介</span>
                    </p>
                    <p class='menu-detail-item center' @click='checkMenu("/about/contact")'>
                        <img class='img' :src='require("@/assets/img/index/menu-about-contact.png")'>
                        <span class='title'>联系我们</span>
                    </p>
                    <p class='menu-detail-item right' @click='checkMenu("/about/join")'>
                        <img class='img' :src='require("@/assets/img/index/menu-about-join.png")'>
                        <span class='title'>加入我们</span>
                    </p>
                </div>
            </li>
        </ul>
        <div id='menuShade' v-show='menu.opacity>0' :style='{opacity: menu.opacity}' @click='hideMenu()'></div>
        <div id='content'>
            <router-view/>
        </div>
        <div id='bottom'>
            <p class='bottom-qrcode wechat'>
                <img class='img' v-lazy='require("@/assets/img/index/qrcode-wechat.png")'>
                <span class='text'>扫描二维码<br/>关注澜渟微信公众号</span>
            </p>
            <p class='bottom-qrcode wrightin'>
                <img class='img' v-lazy='require("@/assets/img/index/qrcode-wrightin.png")'>
                <span class='text'>扫描二维码<br/>下载澜渟App</span>
            </p>
            <p class='bottom-qrcode doctor'>
                <img class='img' v-lazy='require("@/assets/img/index/qrcode-doctor.png")'>
                <span class='text'>扫描二维码<br/>下载澜渟医生App</span>
            </p>
            <p class='bottom-hotline'>
                <span>服务热线：</span>
                <span @click='goPhone("400-133-5668")'>400-133-5668</span>
            </p>
            <p class='bottom-business'>
                <span>商务合作：</span>
                <span @click='goPhone("15805161186")'>15805161186</span>
            </p>
            <p class='bottom-link'>
                <span>友情链接</span>
                <span @click='jumpUrl("http://m.medlander.com/")'>麦澜德</span>
            </p>
            <p class='bottom-card'>互联网药品信息服务资格证书：（苏）-非经营性-2018-0080</p>
            <p class='bottom-copyright' @click='jumpUrl("https://beian.miit.gov.cn/#/Integrated/index")'>Copyright © 2016-2021 南京麦豆健康管理有限公司 版权所有 苏ICP备 17044321 号</p>
            <p class='bottom-phone'>投诉举报电话: 12331</p>
        </div>
        <img id='goTop' v-if='goTopShow' v-lazy='require("@/assets/img/index/goTop.png")' @click='goTop()'>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu: {
                active: '/home',
                expand: '',
                show: false,
                top: -19.9,
                opacity: 0
            },
            goTopShow: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.bindScrollWindow, true)
    },
    methods: {
        /**
            监听页面滚动条
            @param
            @return
         */
        bindScrollWindow() {
            this.goTopShow = window.scrollY > window.screen.availHeight
        },
        /**
            展开/收缩菜单
            @param
            @return
         */
        expandMenu() {
            if (this.menu.show) {
                this.hideMenu()
            } else {
                this.showMenu()
            }
        },
        /**
            展开菜单
            @param
            @return
         */
        showMenu() {
            this.menu.show = true
            clearInterval(this.interval)
            const menuHeight = this.countMenuHeight()
            this.interval = setInterval(()=>{
                if (this.menu.top >= 5.1) {
                    clearInterval(this.interval)
                    this.menu.top = 5.1
                    this.menu.opacity = 0.65
                    return
                }
                this.menu.top += menuHeight/50
                this.menu.opacity += 0.65/50
            }, 4)
        },
        /**
            收缩菜单
            @param
            @return
         */
        hideMenu() {
            this.menu.show = false
            clearInterval(this.interval)
            const menuHeight = this.countMenuHeight()
            this.interval = setInterval(()=>{
                if (this.menu.top <= 5.1 - menuHeight) {
                    clearInterval(this.interval)
                    this.menu.top = 5.1 - menuHeight
                    this.menu.opacity = 0
                    this.menu.expand = ''
                    return
                }
                this.menu.top -= menuHeight/50
                this.menu.opacity -= 0.65/50
            }, 4)
        },
        /**
            统计菜单高度
            @param
            @return {Number} 菜单高度
         */
        countMenuHeight() {
            if (this.menu.expand == '/product') {
                return 37.4
            } else if (this.menu.expand == '/about') {
                return 35.9
            }
            return 25
        },
        /**
            选中菜单
            @param {string} menu 菜单
            @return
         */
        checkMenu(menu) {
            if (menu == '/product' || menu == '/about') {
                if (this.menu.expand == menu) {
                    this.menu.expand = ''
                } else {
                    this.menu.expand = menu
                }
                return
            }
            this.hideMenu()
            if (this.menu.active == menu) {
                this.goTop()
                return
            }
            this.$router.push({path: menu})
        },
        /**
            页面跳转-澜渟旗舰店（天猫商城）
            @param
            @return
         */
        goMall() {
            window.location.href = 'https://lanting.m.tmall.com'
        },
        /**
            页面跳转-工信部官网
            @param
            @return
         */
        goMiit() {
            window.location.href = 'http://www.miit.gov.cn'
        },

        /**
            跳转链接
            @param {string} url 链接
            @return
         */
        jumpUrl(url) {
            window.location.href = url
        },
        /**
            拨打电话
            @param {string} phone 电话号码
            @return
         */
        goPhone(phone) {
            window.location.href = `tel:${phone}`
        },
        /**
            置顶
            @param
            @return
         */
        goTop() {
            window.scrollTo(0, 0)
        }
    },
    watch: {
        $route: {
            handler(newVal, oldVal) {
                this.menu.active = newVal.path
            },
            immediate: true
        }
    }
}
</script>

<style lang="scss" scoped>
    #main {
        position: relative;
        height: 100%;
    }
    #top {
        position: fixed; z-index: 98;
        top: 0; left: 0; right: 0;
        margin: auto;
        height: 5.1rem;
        background-color: #fff;
        >.top-menu {
            position: absolute;
            top: 1.8rem; left: 2.4rem;
            width: 1.6rem; height: 1.5rem;
            >.menu {
                position: absolute;
                top: 0; left: 0;
                width: 1.6rem; height: 1.5rem;
            }
            >.menu-close {
                position: absolute;
                top: 0.1rem; left: 0;
                width: 1.3rem; height: 1.3rem;
            }
        }
        >.top-logo {
            position: absolute;
            top: 1.2rem; left: 5.6rem;
            width: 6rem; height: 2.6rem;
        }
        >.top-hotLine {
            position: absolute;
            top: 1.7rem; left: 11.6rem; right: 2.4rem;
            height: 1.7rem;
            >.text {
                position: absolute;
                top: 0; left: 0; right: 0;
                padding-right: 3rem;
                height: 1.7rem;
                text-align: right; line-height: 1.7rem;
                color: #666;
                font-size: 1.2rem;
            }
            >.img {
                position: absolute;
                top: 0; right: 0;
                width: 1.6rem; height: 1.7rem;
            }
        }
    }
    #menuDetail {
        position: fixed; z-index: 97;
        top: 5.1rem; left: 0; right: 0;
        background: #fff;
        >li {
            >.menu-item {
                position: relative;
                margin: 0 2.4rem;
                height: 5rem;
                border-top: 0.1rem solid #f4f4f4;
                >.text {
                    position: absolute;
                    top: 0; bottom: 0; left: 0;
                    line-height: 5rem;
                }
                >.arrow {
                    position: absolute;
                    top: 2rem; right: 0;
                }
                >.arrow.right {
                    width: 0.7rem; height: 1rem;
                }
                >.arrow.bottom {
                    width: 1rem; height: 0.7rem;
                }
            }
            >.menu-detail {
                position: relative;
                >.menu-detail-item {
                    position: absolute;
                    top: 0;
                    height: 11rem;
                    >.img {
                        position: absolute;
                        top: 0; left: 0; right: 0;
                        margin: auto;
                    }
                    >.title {
                        position: absolute;
                        left: 0; right: 0;
                        text-align: center;
                        white-space: nowrap;
                    }
                    >.subTitle {
                        position: absolute;
                        top: 9.6rem; left: 0; right: 0;
                        text-align: center; line-height: 1.4rem;
                        white-space: nowrap;
                        font-size: 1rem;
                        color: #666;
                    }
                }
                >.menu-detail-item.left {
                    left: 2.4rem;
                }
                >.menu-detail-item.center {
                    left: 0; right: 0;
                    margin: auto;
                }
                >.menu-detail-item.right {
                    right: 2.4rem;
                }
            }
            >.menu-detail.product {
                height: 25.2rem;
                >.menu-detail-item {
                    width: 50%;
                    >.img {
                        width: 10rem; height: 7.2rem;
                    }
                    >.title {
                        top: 7.6rem;
                        line-height: 1.7rem;
                        font-size: 1.2rem;
                    }
                }
                >.left-top {
                    top: 0; left: 0;
                }
                >.right-top {
                    top: 0; right: 0;
                }
                >.left-bottom {
                    top: 12rem; left: 0;
                }
                >.right-bottom {
                    top: 12rem; right: 0;
                }
            }
            >.menu-detail.about {
                height: 10.9rem;
                >.menu-detail-item {
                    width: 10.2rem;
                    >.img {
                        width: 10.2rem; height: 7.3rem;
                    }
                    >.title {
                        top: 7.5rem;
                        line-height: 1.8rem;
                        font-size: 1.3rem;
                    }
                }
            }
        }
        >li:nth-child(1) {
            >.menu-item {
                border-top: none;
            }
        }
        >li.active {
            >.menu-item {
                >.text {
                    color: #ff2c79;
                }
            }
        }
    }
    #menuShade {
        position: fixed; z-index: 96;
        top: 0; bottom: 0; left: 0; right: 0;
        background-color: #000;
        opacity: 0.65;
    }
    #content {
        clear: both;
        position: relative;
        padding-top: 5.1rem;
        min-height: 100%;
    }
    #bottom {
        position: relative;
        height: 38.6rem;
        background-color: #30293d;
        >.bottom-qrcode {
            position: absolute;
            top: 2.7rem;
            width: 11rem; height: 12rem;
            >.img {
                position: absolute;
                top: 0; left: 0; right: 0;
                margin: auto;
                width: 8rem; height: 8.2rem;
            }
            >.text {
                position: absolute;
                bottom: 0; left: 0; right: 0;
                text-align: center; line-height: 1.4rem;
                color: #999;
                font-size: 1rem; letter-spacing: 0.077rem;
            }
        }
        >.bottom-qrcode.wechat {
            left: 1.4rem;
        }
        >.bottom-qrcode.wrightin {
            left: 0; right: 0;
            margin: auto;
        }
        >.bottom-qrcode.doctor {
            right: 1.4rem;
        }
        >.bottom-hotline {
            position: absolute;
            top: 16.8rem; left: 2.4rem;
            height: 1.8rem;
            line-height: 1.8rem;
            font-size: 1.3rem; letter-spacing: 0.1rem;
            >span:nth-child(1) {
                float: left;
                color: #fff;
            }
            >span:nth-child(2) {
                float: left;
                margin: 0.1rem 0 0 -0.5rem;
                color: #ff2c79;
            }
        }
        >.bottom-business {
            position: absolute;
            top: 19.7rem; left: 2.4rem;
            height: 1.8rem;
            line-height: 1.8rem;
            font-size: 1.3rem; letter-spacing: 0.1rem;
            >span:nth-child(1) {
                float: left;
                color: #fff;
            }
            >span:nth-child(2) {
                float: left;
                margin: 0.1rem 0 0 -0.5rem;
                color: #ff2c79;
            }
        }
        >.bottom-link {
            position: absolute;
            top: 22.5rem; left: 2.4rem;
            height: 1.8rem;
            line-height: 1.8rem;
            font-size: 1.3rem; letter-spacing: 0.1rem;
            >span:nth-child(1) {
                float: left;
                color: #fff;
            }
            >span:nth-child(2) {
                float: left;
                margin: 0.1rem 0 0 1.5rem;
                color: #ff2c79;
            }
        }
        >.bottom-card {
            position: absolute;
            top: 28.6rem; left: 0; right: 0;
            height: 1.6rem;
            text-align: center; line-height: 1.6rem;
            font-size: 1.1rem;
            color: #666;
        }
        >.bottom-copyright {
            position: absolute;
            top: 30.7rem; left: 0; right: 0;
            height: 3.2rem;
            text-align: center; line-height: 1.6rem;
            font-size: 1.1rem;
            color: #666;
        }
        >.bottom-phone {
            position: absolute;
            top: 34.5rem; left: 0; right: 0;
            height: 1.6rem;
            text-align: center; line-height: 1.6rem;
            font-size: 1.2rem;
            color: #666;
        }
    }
    #goTop {
        position: fixed; z-index: 97;
        bottom: 4rem; right: 2rem;
        width: 4rem; height: 4rem;
    }
</style>

<style lang='scss'>
@import '@/assets/css/common.scss';
</style>
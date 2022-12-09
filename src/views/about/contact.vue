<template>
    <div id='main'>
        <div id='banner'>
            <img class='banner-bg' v-lazy='require("@/assets/img/about/contact/banner-bg.png")'>
            <img class='banner-center' v-lazy='require("@/assets/img/about/banner-center.png")'>
            <p class='banner-title'>每一次沟通 都有温度</p>
        </div>
        <div id='info'>
            <img class='info-logo' v-lazy='require("@/assets/img/about/contact/logo.png")'>
            <img class='info-qrcode' v-lazy='require("@/assets/img/index/qrcode-wechat.png")'>
            <p class='info-qrcode-desc'>扫描二维码<br/>关注澜渟微信公众号</p>
            <p class='info-qrcode-wetchat'>微信号：WrightinHealth</p>
            <p class='info-title name'>公司名称</p>
            <p class='info-desc name'>南京麦豆健康管理有限公司</p>
            <p class='info-title address'>地址</p>
            <p class='info-desc address'>南京市雨花台区凤展路32号A2北栋7层</p>
            <p class='info-title phone'>电话</p>
            <p class='info-desc phone-hotline' @click='goPhone("400-133-5668")'>服务热线：400-133-5668</p>
            <p class='info-desc phone-business' @click='goPhone("15805161186")'>商务合作：15805161186</p>
            <p class='info-title email'>邮箱</p>
            <p class='info-desc email'>support@medoht.com</p>
        </div>
        <div id='map'>
            <baidu-map class='baiduMap' :center='position' :zoom='15' :scroll-wheel-zoom='true' ak='7sTPX5Pn0xrZpvpXZ6dKG99i8aiK4fG9'>
                <bm-marker :position='position' :icon='markIcon'>
                    <bm-info-window :show='true'>
                        <p class='map-company'>南京麦豆健康管理有限公司</p>
                        <p class='map-address'>南京市雨花台区凤展路32号A2北栋7层</p>
                    </bm-info-window>
                </bm-marker>
            </baidu-map>
        </div>
    </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmMarker from 'vue-baidu-map/components/overlays/Marker.vue'
import BmInfoWindow from 'vue-baidu-map/components/overlays/InfoWindow.vue'

export default {
    data() {
        return {
            position: {
                lng: 118.748334,
                lat: 31.943822
            },
            markIcon: {
                url: require("@/assets/img/about/contact/position.png"),
                size: {
                    width: 18,
                    height: 24
                }
            }
        }
    },
    mounted() {
        window.scrollTo(0, 0)
    },
    methods: {
        /**
            拨打电话
            @param {string} phone 电话号码
            @return
         */
        goPhone(phone) {
            window.location.href = `tel:${phone}`
        }
    },
    components: {
        BaiduMap,
        BmMarker,
        BmInfoWindow
    }
}
</script>

<style lang="scss" scoped>
    #banner {
        position: relative;
        height: 18rem;
        >.banner-bg {
            position: absolute; z-index: 1;
            top: 0; left: 0;
            width: 100%; height: 100%;
        }
        >.banner-center {
            position: absolute; z-index: 2;
            top: 0; bottom: 0; left: 0; right: 0;
            margin: auto;
            width: 26rem; height: 6.9rem;
        }
        >.banner-title {
            position: absolute; z-index: 3;
            top: 0; bottom: 0; left: 0; right: 0;
            margin: auto;
            height: 2.5rem;
            text-align: center; line-height: 2.5rem;
            font-size: 1.8rem; font-weight: bold;
            color: #4a384a;
        }
    }
    #info {
        position: relative;
        height: 49.8rem;
        >.info-logo {
            position: absolute;
            top: 2.4rem; left: 1.2rem;
            width: 17.4rem; height: 16.2rem;
        }
        >.info-qrcode {
            position: absolute;
            top: 2.4rem; right: 4.8rem;
            width: 10.6rem; height: 10.6rem;
        }
        >.info-qrcode-desc {
            position: absolute;
            top: 13.1rem; right: 3.2rem;
            width: 13.7rem;
            text-align: center; line-height: 1.7rem;
            font-size: 1.2rem;
            color: #999;
        }
        >.info-qrcode-wetchat {
            position: absolute;
            top: 17.1rem; right: 1.5rem;
            width: 17.2rem;
            text-align: center; line-height: 2rem;
            font-size: 1.4rem;
        }
        >.info-title {
            position: absolute;
            left: 1.2rem;
            line-height: 2.2rem;
        }
        >.info-desc {
            position: absolute;
            left: 1.2rem;
            line-height: 2rem;
            font-size: 1.4rem;
        }
        >.info-title.name {
            top: 20.6rem;
        }
        >.info-desc.name {
            top: 23.2rem;
        }
        >.info-title.address {
            top: 27.2rem;
        }
        >.info-desc.address {
            top: 29.8rem;
        }
        >.info-title.phone {
            top: 33.8rem;
        }
        >.info-desc.phone-hotline {
            top: 36.6rem;
        }
        >.info-desc.phone-business {
            top: 39.2rem;
        }
        >.info-title.email {
            top: 43.2rem;
        }
        >.info-desc.email {
            top: 46rem;
        }
    }
    #map {
        height: 31.9rem;
        >.baiduMap {
            height: 100%;
            .map-company {
                font-size: 1.4rem; font-weight: bold;
                color: #dd5555;
            }
            .map-address {
                margin-top: 0.5rem;
                font-size: 1.2rem;
            }
            /deep/.anchorBL {
                display: none;
            }
        }
    }
</style>
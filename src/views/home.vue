<template>
    <div id='main'>
        <div id='banner'>
            <swiper ref='swiper' :datas='banner'></swiper>
        </div>
        <div id='product'>
            <div class='product-item wrightin-two'>
                <img class='img' v-lazy='require("@/assets/img/home/product-wrightinTwo.png")'>
                <p class='title'>盆底肌修复仪</p>
                <p class='subTitle'>足不出户唤醒盆底肌肉</p>
                <p class='desc'>盆底抗衰神器  让宝妈重拾少女紧致</p>
                <button class='btn' @click='goPage("/product/wrightinTwo")'>了解更多</button>
            </div>
            <div class='product-item wrightin'>
                <img class='img' v-lazy='require("@/assets/img/home/product-wrightin.png")'>
                <p class='title'>盆底生物刺激反馈仪</p>
                <p class='subTitle'>在家治疗盆底肌肉功能障碍</p>
                <p class='desc'>盆底黑科技 只属于你的贴身盆底康复师</p>
                <button class='btn' @click='goPage("/product/wrightin")'>了解更多</button>
            </div>
            <div class='product-item kegel'>
                <img class='img' v-lazy='require("@/assets/img/home/product-kegel.png")'>
                <p class='title'>盆底肌肉康复器</p>
                <p class='subTitle'>凯格尔球</p>
                <p class='desc'>5球组合出击 感受紧致魅力</p>
                <button class='btn' @click='goPage("/product/kegel")'>了解更多</button>
            </div>
            <div class='product-item wireless'>
                <img class='img' v-lazy='require("@/assets/img/home/product-wireless.png")'>
                <p class='title'>无线产后恢复仪</p>
                <p class='subTitle'>躺着告别大腹婆</p>
                <p class='desc'>健康塑形新主张 让妈妈大胆炫腹</p>
                <button class='btn' @click='goPage("/product/wireless")'>了解更多</button>
            </div>
        </div>
        <div id='app'>
            <p class='app-detail user'>
                <span class='text'>澜渟用户版</span>
                <img class='img' v-lazy='require("@/assets/img/home/app-user.png")'>
            </p>
            <p class='app-detail doctor'>
                <span class='text'>澜渟医生版</span>
                <img class='img' v-lazy='require("@/assets/img/home/app-doctor.png")'>
            </p>
            <p class='app-title'>两大盆底App</p>
            <p class='app-subTitle'>凯格尔训练指导 医生进阶学习</p>
            <p class='app-desc'>澜渟智能服务平台  家用盆底康复软件</p>
            <button class='app-btn' @click='goPage("/app")'>了解更多</button>
        </div>
        <div id='server'>
            <img class='server-bg' v-lazy='require("@/assets/img/home/server-bg.png")'>
            <p class='server-title'>家庭盆底解决<br/>方案服务商</p>
            <p class='server-item percent'>
                <img class='img' v-lazy='require("@/assets/img/home/server-percent.png")'>
                <span class='text'>市场占有率<br/>超过40%</span>
            </p>
            <p class='server-item area'>
                <img class='img' v-lazy='require("@/assets/img/home/server-area.png")'>
                <span class='text'>产品覆盖31个省<br/>直辖市自治区</span>
            </p>
            <p class='server-item appUser'>
                <img class='img' v-lazy='require("@/assets/img/home/server-appUser.png")'>
                <span class='text'>APP终端用户<br/>超100万</span>
            </p>
            <p class='server-item medicalUser'>
                <img class='img' v-lazy='require("@/assets/img/home/server-medicalUser.png")'>
                <span class='text'>全国医疗用户<br/>超过5000家</span>
            </p>
            <p class='server-item org'>
                <img class='img' v-lazy='require("@/assets/img/home/server-org.png")'>
                <span class='text'>院外机构<br/>超过4000家</span>
            </p>
        </div>
        <div id='advantage'>
            <img class='advantage-bg' v-lazy='require("@/assets/img/home/advantage-bg.png")'>
            <p class='advantage-title'>公司优势</p>
            <p class='advantage-item quality'>
                <img class='img' v-lazy='require("@/assets/img/home/advantage-quality.png")'>
                <span class='title'>品质</span>
                <span class='desc'>追求一流的产品和服务，对品质把关严苛，经过100万+用户实际考验，品质不凡</span>
            </p>
            <p class='advantage-item technology'>
                <img class='img' v-lazy='require("@/assets/img/home/advantage-technology.png")'>
                <span class='title'>技术</span>
                <span class='desc'>经验丰富的技术研发团队，强大的自主研发实力，持有多项专利</span>
            </p>
            <p class='advantage-item service'>
                <img class='img' v-lazy='require("@/assets/img/home/advantage-service.png")'>
                <span class='title'>服务</span>
                <span class='desc'>拥有一支盆底领域人才团队，造就优质营销培训体系和服务体系</span>
            </p>
            <p class='advantage-item trust'>
                <img class='img' v-lazy='require("@/assets/img/home/advantage-trust.png")'>
                <span class='title'>信誉</span>
                <span class='desc'>深耕女性盆底市场多年，品牌认知度高，客户信任度高</span>
            </p>
        </div>
        <div id='bottom'></div>
    </div>
</template>

<script>
import {swiper} from '@/components/swiper'

export default {
    data() {
        return {
            banner: [
                require('@/assets/img/home/banner-1.png'),
                require('@/assets/img/home/banner-2.png'),
                require('@/assets/img/home/banner-3.png'),
                require('@/assets/img/home/banner-4.png')
            ]
        }
    },
    mounted() {
        window.scrollTo(0, 0)
    },
    methods: {
        /**
            页面跳转
            @param {String} path 页面路径
            @return
         */
        goPage(path) {
            this.$router.push({path: path})
        }
    },
    components: {
        swiper
    }
}
</script>

<style lang="scss" scoped>
    #main {
        background-color: #fff;
    }
    #banner {
        height: 18rem;
    }
    #product {
        margin-top: 0.4rem;
        >.product-item {
            position: relative;
            height: 40rem;
            background-color: #fafafa;
            >.img {
                position: absolute;
            }
            >.title {
                position: absolute;
                top: 24.2rem; left: 0; right: 0;
                text-align: center; line-height: 2.5rem;
                font-size: 1.8rem; font-weight: bold;
            }
            >.subTitle {
                position: absolute;
                top: 27.1rem; left: 0; right: 0;
                text-align: center; line-height: 1.8rem;
                font-size: 1.3rem;
                color: #666;
            }
            >.desc {
                position: absolute;
                top: 30.7rem; left: 0; right: 0;
                text-align: center; line-height: 2rem;
                font-size: 1.4rem;
            }
            >.btn {
                position: absolute;
                top: 34.3rem; left: 0; right: 0;
                margin: auto;
                width: 14rem; height: 3.6rem;
                text-align: center; line-height: 3.6rem;
                border-radius: 2.15rem;
                font-size: 1.5rem;
                color: #fff;
                background: linear-gradient(to left, #ff7d98, #fe4369);
            }
        }
        >.product-item.wrightin-two {
            >.img {
                top: 3rem; left: 0; right: 0;
                margin: auto;
                width: 31.1rem; height: 19.5rem;
            }
        }
        >.product-item.wrightin {
            margin-top: 0.4rem;
            >.img {
                top: 0.4rem; left: 0;
                width: 36rem; height: 28.1rem;
            }
        }
        >.product-item.kegel {
            margin-top: 0.4rem;
            >.img {
                top: 5.2rem; left: 2.6rem;
                width: 25.6rem; height: 17.1rem;
            }
        }
        >.product-item.wireless {
            margin-top: 0.4rem;
            >.img {
                top: 3rem; left: 0;
                width: 31.9rem; height: 21rem;
            }
        }
    }
    #app {
        position: relative;
        margin-top: 0.4rem;
        height: 40rem;
        background-color: #fafafa;
        >.app-detail {
            position: absolute;
            top: 2.5rem;
            width: 8.8rem; height: 19.3rem;
            >.text {
                position: absolute;
                top: 0; left: 0; right: 0;
                text-align: center; line-height: 1.7rem;
                font-size: 1.2rem;
            }
            >.img {
                position: absolute;
                bottom: 0; left: 0; right: 0;
                height: 17.2rem;
            }
        }
        >.app-detail.user {
            left: 9rem;
        }
        >.app-detail.doctor {
            right: 9rem;
        }
        >.app-title {
            position: absolute;
            top: 23.9rem; left: 0; right: 0;
            text-align: center; line-height: 2.5rem;
            font-size: 1.8rem; font-weight: bold;
        }
        >.app-subTitle {
            position: absolute;
            top: 26.8rem; left: 0; right: 0;
            text-align: center; line-height: 1.8rem;
            font-size: 1.3rem;
            color: #666;
        }
        >.app-desc {
            position: absolute;
            top: 30.4rem; left: 0; right: 0;
            text-align: center; line-height: 2rem;
            font-size: 1.4rem;
        }
        >.app-btn {
            position: absolute;
            top: 34rem; left: 0; right: 0;
            margin: auto;
            width: 14rem; height: 3.6rem;
            text-align: center; line-height: 3.6rem;
            border-radius: 2.15rem;
            font-size: 1.5rem;
            color: #fff;
            background: linear-gradient(to left, #ff7d98, #fe4369);
        }
    }
    #server {
        position: relative;
        margin-top: 0.4rem;
        height: 26.1rem;
        >.server-bg {
            position: absolute; z-index: 1;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
        }
        >.server-title {
            position: absolute; z-index: 2;
            top: 10.2rem; left: 0; right: 0;
            text-align: center; line-height: 2.1rem;
            font-size: 1.5rem;
            color: #ff2c79;
        }
        >.server-item {
            position: absolute; z-index: 2;
            width: 10rem; height: 6.9rem;
            >.img {
                position: absolute;
                left: 0; right: 0;
                margin: auto;
            }
            >.text {
                position: absolute;
                bottom: 0; left: 0; right: 0;
                margin: auto;
                text-align: center; line-height: 1.6rem;
                font-size: 1.1rem;
                color: #adaab2;
            }
        }
        >.server-item.percent {
            top: 1.7rem; left: 0; right: 0;
            margin: auto;
            >.img {
                top: 0.7rem;
                width: 4.4rem; height: 1.9rem;
            }
        }
        >.server-item.area {
            top: 6.8rem; left: 2.2rem;
            >.img {
                top: 0.6rem;
                width: 1.4rem; height: 1.9rem;
            }
        }
        >.server-item.appUser {
            top: 6.7rem; right: 1.9rem;
            >.img {
                top: 0.8rem;
                width: 5.2rem; height: 1.9rem;
            }
        }
        >.server-item.medicalUser {
            top: 16.4rem; left: 7.3rem;
            >.img {
                top: 0.6rem;
                width: 4.8rem; height: 1.9rem;
            }
        }
        >.server-item.org {
            top: 16.4rem; right: 7.3rem;
            >.img {
                top: 0.6rem;
                width: 4.8rem; height: 1.9rem;
            }
        }
    }
    #advantage {
        position: relative;
        margin-top: 0.3rem;
        height: 42.6rem;
        >.advantage-bg {
            position: absolute; z-index: 1;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
        }
        >.advantage-title {
            position: absolute; z-index: 2;
            top: 2.4rem; left: 0; right: 0;
            text-align: center; line-height: 2.1rem;
            font-size: 1.5rem;
        }
        >.advantage-item {
            position: absolute; z-index: 2;
            width: 16.9rem; height: 17.2rem;
            border-radius: 0.4rem;
            box-shadow: 0 0.2rem 1.2rem 0 #ececec;
            background-color: #fff;
            >.img {
                position: absolute;
                top: 1.7rem; left: 0.8rem;
                width: 3.2rem; height: 3.2rem;
            }
            >.title {
                position: absolute;
                top: 2rem; left: 4.1rem;
                line-height: 2.5rem;
                font-size: 1.8rem; font-weight: bold; letter-spacing: 0.075rem;
            }
            >.desc {
                position: absolute;
                top: 5.5rem; left: 1.2rem; right: 1.2rem;
                line-height: 2.4rem;
                font-size: 1.4rem;
                color: #666;
            }
        }
        >.advantage-item.quality {
            top: 6.5rem; left: 1.2rem;
        }
        >.advantage-item.technology {
            top: 6.5rem; right: 1.2rem;
        }
        >.advantage-item.service {
            top: 24.9rem; left: 1.2rem;
        }
        >.advantage-item.trust {
            top: 24.9rem; right: 1.2rem;
        }
    }
    #bottom {
        height: 2.4rem;
        background-color: #fafafa;
    }
</style>
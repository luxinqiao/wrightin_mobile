<template>
    <div id='main'>
        <div id='banner'>
            <img class='banner-bg' v-lazy='require("@/assets/img/app/banner-bg.png")'>
            <p class='banner-title'>家用盆底健康服务平台</p>
            <p class='banner-subTitle'>平台型服务软件</p>
            <img class='banner-wrightin-img' v-lazy='require("@/assets/img/app/banner-wrightin.png")'>
            <span class='banner-wrightin-text'>凯格尔训练免费<br/>指导平台</span>
            <img class='banner-doctor-img' v-lazy='require("@/assets/img/app/banner-doctor.png")'>
            <span class='banner-doctor-text'>盆底康复医生<br/>成长进阶之选</span>
            <button class='banner-btn wrightin' @click='downloadWrightin()'>
                <img class='img' v-lazy='require("@/assets/img/app/banner-download.png")'>
                <span class='text'>澜渟用户版App</span>
            </button>
            <button class='banner-btn doctor' @click='downloadDoctor()'>
                <img class='img' v-lazy='require("@/assets/img/app/banner-download.png")'>
                <span class='text'>澜渟医生版App</span>
            </button>
        </div>
        <div id='detail'>
            <div class='detail-item trainW'>
                <img class='img' v-lazy='require("@/assets/img/app/detail-trainW.png")'>
                <p class='title'>训练</p>
                <p class='subTitle'>
                    <font>澜渟App</font>
                    <span class='w'></span>
                </p>
                <p class='desc'>产后康复训练<br/>塑造产后更美的你</p>
            </div>
            <div class='detail-item friendW'>
                <img class='img' v-lazy='require("@/assets/img/app/detail-friendW.png")'>
                <p class='title'>盆友圈</p>
                <p class='subTitle'>
                    <font>澜渟App</font>
                    <span class='w'></span>
                </p>
                <p class='desc'>盆底肌训练圈子<br/>一起战胜懒癌<br/>见证每一天的进步</p>
            </div>
            <div class='detail-item collegeW'>
                <img class='img' v-lazy='require("@/assets/img/app/detail-collegeW.png")'>
                <p class='title'>极致学院</p>
                <p class='subTitle'>
                    <font>澜渟App</font>
                    <span class='w'></span>
                </p>
                <p class='desc'>科普盆底知识<br/>行业大牛授课</p>
            </div>
            <div class='detail-item meetingD'>
                <img class='img' v-lazy='require("@/assets/img/app/detail-meetingD.png")'>
                <p class='title'>会议吧</p>
                <p class='subTitle'>
                    <font>澜渟医生App</font>
                    <span class='d'></span>
                </p>
                <p class='desc'>妇产医生进修学习<br/>参会考证晋升有道</p>
            </div>
            <div class='detail-item collegeD'>
                <img class='img' v-lazy='require("@/assets/img/app/detail-collegeD.png")'>
                <p class='title'>极致学院</p>
                <p class='subTitle'>
                    <font>澜渟医生App</font>
                    <span class='d'></span>
                </p>
                <p class='desc'>海量盆底干货课程学习<br/>盆底学术大咖直播分享</p>
            </div>
            <div class='detail-item studyD'>
                <img class='img' v-lazy='require("@/assets/img/app/detail-studyD.png")'>
                <p class='title'>学术圈</p>
                <p class='subTitle'>
                    <font>澜渟医生App</font>
                    <span class='d'></span>
                </p>
                <p class='desc'>盆底精英互动交流<br/>了解最新行业新闻动态</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        window.scrollTo(0, 0)
    },
    methods: {
        /**
            页面跳转-下载澜渟
            @param
            @return
         */
        downloadWrightin() {
            window.location.href = 'https://web.wrightin.com/#/inviteApp/downUser'
        },
        /**
            页面跳转-下载澜渟医生
            @param
            @return
         */
        downloadDoctor() {
            window.location.href = 'https://web.wrightin.com/#/inviteApp/downDoc?spm=0210000000'
        }
    }
}
</script>

<style lang="scss" scoped>
    #banner {
        position: relative;
        height: 25rem;
        >.banner-bg {
            position: absolute; z-index: 1;
            top: 0; left: 0;
            width: 100%; height: 100%;
        }
        >.banner-title {
            position: absolute; z-index: 2;
            top: 2.3rem; left: 0; right: 0;
            text-align: center; line-height: 3rem;
            font-size: 2.2rem;
            color: #fff;
        }
        >.banner-subTitle {
            position: absolute; z-index: 2;
            top: 5.7rem; left: 0; right: 0;
            text-align: center; line-height: 2rem;
            font-size: 1.4rem;
            color: #fff;
        }
        >.banner-wrightin-img {
            position: absolute; z-index: 2;
            top: 12.3rem; left: 3.8rem;
            width: 3.2rem; height: 3rem;
        }
        >.banner-wrightin-text {
            position: absolute; z-index: 2;
            top: 12.2rem; left: 7.4rem;
            line-height: 1.7rem;
            font-size: 1.2rem;
            color: #fff;
        }
        >.banner-doctor-img {
            position: absolute; z-index: 2;
            top: 12.3rem; left: 21.8rem;
            width: 3.2rem; height: 3rem;
        }
        >.banner-doctor-text {
            position: absolute; z-index: 2;
            top: 12.2rem; left: 25.4rem;
            line-height: 1.7rem;
            font-size: 1.2rem;
            color: #fff;
        }
        >.banner-btn {
            position: absolute; z-index: 2;
            top: 16.8rem;
            width: 13.6rem; height: 3.8rem;
            border-radius: 2.4rem;
            background-color: #fff;
            >.img {
                position: absolute;
                top: 1rem; left: 1.1rem;
                width: 2.1rem; height: 1.8rem;
            }
            >.text {
                position: absolute;
                top: 0; left: 3.4rem;
                height: 3.8rem;
                line-height: 3.8rem;
                font-size: 1.3rem;
            }
        }
        >.banner-btn.wrightin {
            left: 3rem;
        }
        >.banner-btn.doctor {
            right: 3rem;
        }
    }
    #detail {
        padding-top: 4rem;
        >.detail-item {
            position: relative;
            >.img {
                position: absolute;
                top: 1rem;
            }
            >.title {
                position: absolute;
                top: 4.6rem;
                line-height: 4.2rem;
                font-size: 2.2rem; font-weight: bold;
            }
            >.subTitle {
                position: absolute;
                top: 8.2rem;
                height: 1.7rem;
                >font {
                    height: 1.7rem;
                    line-height: 1.7rem;
                    font-size: 1.2rem;
                }
                >span {
                    position: absolute; z-index: -1;
                    bottom: -0.4rem;
                    height: 0.8rem;
                }
                >span.w {
                    left: 0; right: 0;
                    background-color: #ffd5e4;
                }
                >span.d {
                    left: 0;
                    width: 4.8rem;
                    background-color: #d6f4f4;
                }
            }
            >.desc {
                position: absolute;
                top: 10.9rem;
                line-height: 2.4rem;
                font-size: 1.4rem;
            }
        }
        >.detail-item.trainW {
            height: 26.3rem;
            >.img {
                left: 2.8rem;
                width: auto; height: 20.9rem;
            }
            >.title {
                left: 23.6rem;
            }
            >.subTitle {
                left: 23.6rem;
            }
            >.desc {
                left: 23.6rem;
            }
        }
        >.detail-item.friendW {
            height: 26.7rem;
            >.img {
                left: 16.9rem;
                width: 18.7rem; height: 20.8rem;
            }
            >.title {
                left: 2.8rem;
            }
            >.subTitle {
                left: 2.8rem;
            }
            >.desc {
                left: 2.8rem;
            }
        }
        >.detail-item.collegeW {
            height: 27.6rem;
            >.img {
                left: 2.8rem;
                width: 18.7rem; height: 20.8rem;
            }
            >.title {
                left: 23.6rem;
            }
            >.subTitle {
                left: 23.6rem;
            }
            >.desc {
                left: 23.6rem;
            }
        }
        >.detail-item.meetingD {
            height: 27.6rem;
            >.img {
                left: 16.6rem;
                width: 18.6rem; height: 20.9rem;
            }
            >.title {
                left: 2.8rem;
            }
            >.subTitle {
                left: 2.8rem;
            }
            >.desc {
                left: 2.8rem;
            }
        }
        >.collegeD {
            height: 27.9rem;
            >.img {
                left: 1.6rem;
                width: 18.6rem; height: 20.9rem;
            }
            >.title {
                left: 21.6rem;
            }
            >.subTitle {
                left: 21.6rem;
            }
            >.desc {
                left: 21.6rem;
            }
        }
        >.detail-item.studyD {
            height: 28.4rem;
            >.img {
                left: 17rem;
                width: 18.5rem; height: 20.9rem;
            }
            >.title {
                left: 2.2rem;
            }
            >.subTitle {
                left: 2.2rem;
            }
            >.desc {
                left: 2.2rem;
            }
        }
    }
</style>

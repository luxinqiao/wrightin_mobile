<template>
    <div id='main'>
        <div id='banner'>
            <img class='banner-bg' v-lazy='require("@/assets/img/technology/banner-bg.png")'>
            <p class='banner-title'>感受科技与服务</p>
            <p class='banner-subTitle'>助力女性美丽蝶变</p>
        </div>
        <div id='detail'>
            <div class='detail-item record'>
                <img class='logo' v-lazy='require("@/assets/img/technology/record-logo.png")'>
                <p class='title'>自动生成指数化报告</p>
                <p class='subTitle'>【在家评估 智能报告自动生成】</p>
                <p class='desc'>医疗团队研发，支持在家进行标准评估，轻松自检，评估后自动生成报告</p>
                <img class='img' v-lazy='require("@/assets/img/technology/record-img.png")'>
            </div>
            <div class='detail-item signal'>
                <img class='logo' v-lazy='require("@/assets/img/technology/signal-logo.png")'>
                <p class='title'>实时监测腹肌肌电信号</p>
                <p class='subTitle'>【监测腹肌 精准训练】</p>
                <p class='desc'>训练同时通过监测腹部肌力，了解腹肌参与度，养成盆底肌训练的正确发力技巧</p>
                <img class='img' v-lazy='require("@/assets/img/technology/signal-img.png")'>
            </div>
            <div class='detail-item programme'>
                <img class='logo' v-lazy='require("@/assets/img/technology/programme-logo.png")'>
                <p class='title'>基于大数据的定制方案</p>
                <p class='subTitle'>【千人千面 专属方案】</p>
                <p class='desc'>根据不同的盆底损伤程度，推送定制化方案，在训练中为用户设计好专属的频率，满足每个用户的个性化修复需求</p>
                <img class='img' v-lazy='require("@/assets/img/technology/programme-img.png")'>
            </div>
            <div class='detail-item ota'>
                <img class='logo' v-lazy='require("@/assets/img/technology/ota-logo.png")'>
                <p class='title'>OTA技术</p>
                <p class='subTitle'>【摆脱空间限制 简单高效远程固件升级】</p>
                <p class='desc'>将高端新能源汽车升级技术应用于家用设备，通过OTA远程升级方式（Over-the-Air），实现一键功能进化，提供便捷、实用的智能交互体验</p>
                <img class='img' v-lazy='require("@/assets/img/technology/ota-img.png")'>
            </div>
            <div class='detail-item monitor'>
                <img class='logo' v-lazy='require("@/assets/img/technology/monitor-logo.png")'>
                <p class='title'>电极脱落监测</p>
                <p class='subTitle'>【安全保护机制】</p>
                <p class='desc'>监测YD电极的状态，如有脱落App进行智能示警；如有异常启动安全保护机制，停止运行</p>
                <img class='img' v-lazy='require("@/assets/img/technology/monitor-img.png")'>
            </div>
            
            <div class='detail-item stim'>
                <img class='logo' v-lazy='require("@/assets/img/technology/stim-logo.png")'>
                <p class='title'>神经肌肉电刺激</p>
                <p class='subTitle'>【低频电流 直达神经】</p>
                <p class='desc'>低频电流通过电刺激作用于盆底肌肉，使神经纤维产生兴奋，传导至肌肉引起收缩，达到功能修复的作用</p>
                <img class='img' v-lazy='require("@/assets/img/technology/stim-img.png")'>
            </div>
            <div class='detail-item ets'>
                <img class='logo' v-lazy='require("@/assets/img/technology/ets-logo.png")'>
                <p class='title'>肌电触发电刺激</p>
                <p class='subTitle'>【生电联合 主动训练】</p>
                <p class='desc'>生物反馈联合电刺激，将肌电信号转化为可看见的线条，训练时主动收缩盆底肌，达到设定值方可触发电刺激，形成肌肉记忆</p>
                <img class='img' v-lazy='require("@/assets/img/technology/ets-img.png")'>
            </div>
            <div class='detail-item kegel'>
                <img class='logo' v-lazy='require("@/assets/img/technology/kegel-logo.png")'>
                <p class='title'>凯格尔模板训练</p>
                <p class='subTitle'>【模板工具 可视易学】</p>
                <p class='desc'>设置可视化的凯格尔模板，用户可跟随练习，正确收缩盆底肌，提升盆底机能</p>
                <img class='img' v-lazy='require("@/assets/img/technology/kegel-img.png")'>
            </div>
            <div class='detail-item game'>
                <img class='logo' v-lazy='require("@/assets/img/technology/game-logo.png")'>
                <p class='title'>多媒体游戏训练</p>
                <p class='subTitle'>【肌力游戏 科学有趣】</p>
                <p class='desc'>科学设计的盆底肌力游戏，帮助用户控制盆底力量，富有趣味，让训练不乏味，提高盆底肌肉依从性</p>
                <img class='img' v-lazy='require("@/assets/img/technology/game-img.png")'>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        window.scrollTo(0, 0)
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
            top: 2.3rem; left: 19.3rem;
            line-height: 3rem;
            font-size: 2.2rem;
            color: #fff;
        }
        >.banner-subTitle {
            position: absolute; z-index: 2;
            top: 5.3rem; left: 19.3rem;
            line-height: 2.6rem;
            font-size: 1.9rem;
            color: #fff;
        }
    }
    #detail {
        >.detail-item {
            position: relative;
            overflow: hidden;
            >.logo {
                position: absolute; z-index: 1;
            }
            >.title {
                position: relative; z-index: 2;
                margin-top: 4rem;
                text-align: center; line-height: 2.8rem;
                font-size: 2rem;
            }
            >.subTitle {
                position: relative; z-index: 2;
                margin-top: 0.4rem;
                text-align: center; line-height: 1.7rem;
                font-size: 1.2rem;
                color: #666;
            }
            >.desc {
                margin: 1.2rem 1.2rem 0 1.2rem; padding: 1rem 1.2rem;
                line-height: 2rem;
                border-radius: 0.8rem;
                font-size: 1.4rem;
                color: #fff;
            }
            >.img {
                display: block;
                margin: auto;
            }
        }
        >.detail-item.record {
            height: 37.8rem;
            background-color: #fafafa;
            >.logo {
                top: 2.9rem; left: 10.6rem;
                width: 5.6rem; height: 5.7rem;
            }
            >.desc {
                background-color: #b8c6fa;
            }
            >.img {
                width: 31.5rem; height: 19rem;
            }
        }
        >.detail-item.signal {
            height: 39.1rem;
            background-color: #fff;
            >.logo {
                top: 3.4rem; left: 8.4rem;
                width: 5.6rem; height: 5.2rem;
            }
            >.desc {
                background-color: #8edccd;
            }
            >.img {
                width: 31.9rem; height: 19.4rem;
            }
        }
        >.detail-item.programme {
            height: 39.7rem;
            background-color: #fafafa;
            >.logo {
                top: 3.3rem; left: 8.7rem;
                width: 5.3rem; height: 5.4rem;
            }
            >.desc {
                background-color: #f7beb7;
            }
            >.img {
                width: 31.3rem; height: 18.9rem;
            }
        }
        >.detail-item.ota {
            height: 39.7rem;
            background-color: #fff;
            >.logo {
                top: 3.6rem; left: 9rem;
                width: 3.9rem; height: 4.5rem;
            }
            >.desc {
                background-color: #B8C6FA;
            }
            >.img {
                margin-top: 0.7rem;
                width: 31.7rem; height: 19rem;
            }
        }
        >.detail-item.monitor {
            height: 39.7rem;
            background-color: #fafafa;
            >.logo {
                top: 3.6rem; left: 9rem;
                width: 4.1rem; height: 5rem;
            }
            >.desc {
                background-color: #f7beb7;
            }
            >.img {
                margin-top: 0.5rem;
                width: 31.7rem; height: 19rem;
            }
        }
        >.detail-item.stim {
            height: 37.9rem;
            background-color: #fff;
            >.logo {
                top: 2.6rem; left: 11.2rem;
                width: 5.9rem; height: 5.9rem;
            }
            >.desc {
                background-color: #ffca74;
            }
            >.img {
                width: 31.5rem; height: 18.9rem;
            }
        }
        >.detail-item.ets {
            height: 39.6rem;
            background-color: #fafafa;
            >.logo {
                top: 2.7rem; left: 11rem;
                width: 5.9rem; height: 6rem;
            }
            >.desc {
                background-color: #c7c7be;
            }
            >.img {
                width: 31.5rem; height: 18.9rem;
            }
        }
        >.detail-item.kegel {
            height: 37.8rem;
            background-color: #fff;
            >.logo {
                top: 2.7rem; left: 11rem;
                width: 5.9rem; height: 6rem;
            }
            >.desc {
                background-color: #9eb7b4;
            }
            >.img {
                width: 31.5rem; height: 18.8rem;
            }
        }
        >.detail-item.game {
            height: 38rem;
            background-color: #fafafa;
            >.logo {
                top: 2.7rem; left: 11rem;
                width: 5.9rem; height: 5.9rem;
            }
            >.desc {
                background-color: #efb2c4;
            }
            >.img {
                width: 31.5rem; height: 18.8rem;
            }
        }
    }
</style>
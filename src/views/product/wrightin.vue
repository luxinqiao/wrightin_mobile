<template>
    <div id='main'>
        <div id='banner'>
            <img class='banner-bg' v-lazy='require("@/assets/img/product/banner-bg.png")'>
            <img class='banner-img' v-lazy='require("@/assets/img/product/wrightin/banner-img.png")'>
            <p class='banner-title'>盆底生物刺激反馈仪</p>
            <p class='banner-subTitle'>改善盆底肌松弛和肌肉健康状态</p>
            <p class='banner-desc'>
                南京麦澜德医疗科技股份有限公司
                <br/>
                医疗器械注册证编号：苏械注准20182260869 广告审查批准文号：苏械广审（文）第 230418-01105 号
                <br/>
                请仔细阅读产品说明书或者在医务人员的指导下购买和使用 禁忌内容或者注意事项详见说明书
            </p>
        </div>
        <div id='apply'>
            <p class='apply-title'>盆底生物刺激反馈仪</p>
            <p class='apply-subTitle'>治疗盆底肌肉功能障碍</p>
            <p class='apply-desc'>/ 适用于 /</p>
            <p class='apply-item sick'>
                <img class='img' v-lazy='require("@/assets/img/product/wrightin/apply-sick.png")'>
                <span class='text'>治疗压力性尿失禁</span>
            </p>
            <p class='apply-item birth'>
                <img class='img' v-lazy='require("@/assets/img/product/wrightin/apply-birth.png")'>
                <span class='text'>治疗盆腔器官脱垂</span>
            </p>
            <p class='apply-item normal'>
                <img class='img' v-lazy='require("@/assets/img/product/wrightin/apply-normal.png")'>
                <span class='text'>缓解慢性盆腔痛</span>
            </p>
            <p class='apply-item pfd'>
                <img class='img' v-lazy='require("@/assets/img/product/wrightin/apply-pfd.png")'>
                <span class='text'>增强阴道收缩功能</span>
            </p>
        </div>
        <div id='programme'>
            <img class='programme-img' v-lazy='require("@/assets/img/product/wrightin/programme-bg.png")'>
            <p class='programme-title'>疗程化对症循序治疗方案</p>
            <p class='programme-desc'>针对每个人不同的肌力损伤、不同程度盆底问题和不同使用敏感程度，匹配不同电刺激频率和输出脉冲宽度，对症选择属于你的治疗方案</p>
        </div>
        <div id='mode'>
            <img class='mode-bg' v-lazy='require("@/assets/img/product/wrightin/mode-bg.png")'>
            <img class='mode-img' v-lazy='require("@/assets/img/product/wrightin/mode-img.png")'>
            <p class='mode-item stim'>
                <img class='img' v-lazy='require("@/assets/img/product/wrightin/mode-stim.png")'>
                <span class='text'>神经肌肉电刺激</span>
            <p class='mode-item ets'>
                <img class='img' v-lazy='require("@/assets/img/product/wrightin/mode-ets.png")'>
                <span class='text'>肌电触发电刺激</span>
            </p>
            <p class='mode-item kegel'>
                <img class='img' v-lazy='require("@/assets/img/product/wrightin/mode-kegel.png")'>
                <span class='text'>凯格尔模板训练</span>
            </p>
            <p class='mode-item game'>
                <img class='img' v-lazy='require("@/assets/img/product/wrightin/mode-game.png")'>
                <span class='text'>多媒体游戏训练</span>
            </p>
        </div>
        <div id='design'>
            <img class='design-img' v-lazy='require("@/assets/img/product/wrightin/design-bg.png")'>
            <p class='design-title'>一体化无线设计 小巧精致</p>
            <p class='design-subTitle'>随时随地轻松训练</p>
        </div>
        <div id='app'>
            <img class='app-circle' v-lazy='require("@/assets/img/product/wrightin/app-circle.gif")'>
            <p class='app-title'>智能App 一键掌控</p>
            <p class='app-subTitle'>产品通过蓝牙连接配套App，<br/>所有功能一键操作，让训练简单易用</p>
            <img class='app-img' v-lazy='require("@/assets/img/product/wrightin/app-img.png")'>
        </div>
        <div id='record'>
            <img class='record-bg' v-lazy='require("@/assets/img/product/record-bg.png")'>
            <p class='record-title'>科学有趣 记录每一次提高</p>
            <p class='record-subTitle'>每日跟随不同模式的科学训练，同步记录训练，<br/>助用户坚持达到训练目标</p>
            <p class='record-item person'>
                <img class='img' v-lazy='require("@/assets/img/product/wrightin/record-person.png")'>
                <span class='text'>陪你在一起</span>
            </p>
            <p class='record-item count'>
                <img class='img' v-lazy='require("@/assets/img/product/wrightin/record-count.png")'>
                <span class='text'>坚持的训练</span>
            </p>
            <p class='record-item hour'>
                <img class='img' v-lazy='require("@/assets/img/product/wrightin/record-hour.png")'>
                <span class='text'>做同样的事</span>
            </p>
        </div>
        <div id='authorize'>
            <img class='authorize-bg' v-lazy='require("@/assets/img/product/wrightin/authorize-bg.png")'>
            <p class='authorize-title'>二类医疗器械</p>
            <p class='authorize-subTitle'>匠心研制</p>
        </div>
        <div id='train'>
            <img class='train-bg' v-lazy='require("@/assets/img/product/train-bg.png")'>
            <p class='train-title'>让训练简单又便捷</p>
            <p class='train-subTitle'>不排队、不预约，盆底康复师在线为您服务</p>
            <img class='train-img' v-lazy='require("@/assets/img/product/wrightin/train-img.png")'>
        </div>
        <div id='rule'>
            <p>售后问题请查看</p>
            <p class='red' @click='goRule()'>《盆底生物刺激反馈仪售后管理制度》</p>
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
            页面跳转-管理制度
            @param
            @return
         */
        goRule() {
            this.$router.push({path: 'rule?type=wrightin'})
        }
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
        >.banner-img {
            position: absolute; z-index: 2;
            top: 1.2rem; left: 0.9rem;
            width: 19rem; height: 15rem;
        }
        >.banner-title {
            position: absolute; z-index: 3;
            top: 1.6rem; right: 2.5rem;
            line-height: 3rem;
            font-size: 2.2rem; font-weight: bold;
            color: #bf995b;
        }
        >.banner-subTitle {
            position: absolute; z-index: 3;
            top: 4.6rem; right: 2.5rem;
            line-height: 2rem;
            font-size: 1.4rem;
            color: #666;
        }
        >.banner-desc {
            position: absolute; z-index: 3;
            bottom: 0.8rem; left: 1.2rem; right: 0;
            line-height: 0.9rem;
            font-size: 0.7rem;
            color: #999;
        }
    }
    #apply {
        position: relative;
        margin-top: 0.4rem;
        height: 40rem;
        background-color: #fafafa;
        >.apply-title {
            position: absolute;
            top: 2.4rem; left: 0; right: 0;
            text-align: center; line-height: 2rem;
            font-size: 1.4rem;
        }
        >.apply-subTitle {
            position: absolute;
            top: 4.7rem; left: 0; right: 0;
            text-align: center; line-height: 2.5rem;
            font-size: 1.8rem;
            color: #91730b;
        }
        >.apply-desc {
            position: absolute;
            top: 8rem; left: 0; right: 0;
            text-align: center; line-height: 1.7rem;
            font-size: 1.2rem;
        }
        >.apply-item {
            position: absolute;
            >.img {
                position: absolute;
                top: 0; left: 0; right: 0;
                margin: auto;
            }
            >.text {
                position: absolute;
                bottom: 0; left: 0; right: 0;
                text-align: center; line-height: 2rem;
                font-size: 1.4rem;
                color: #666;
            }
        }
        >.apply-item.sick {
            top: 12.1rem; left: 2rem;
            width: 17.4rem; height: 10.4rem;
            >.img {
                width: 7.4rem; height: 7.6rem;
            }
        }
        >.apply-item.birth {
            top: 12rem; right: 3.7rem;
            width: 12.7rem; height: 10.4rem;
            >.img {
                width: 6.8rem; height: 7.4rem;
            }
        }
        >.apply-item.normal {
            top: 25.3rem; left: 4rem;
            width: 13.2rem; height: 10.4rem;
            >.img {
                width: 7.9rem; height: 7.5rem;
            }
        }
        >.apply-item.pfd {
            top: 25.3rem; right: 2.1rem;
            width: 15.9rem; height: 10.4rem;
            >.img {
                width: 7.1rem; height: 7.5rem;
            }
        }
    }
    #programme {
        position: relative;
        margin-top: 0.4rem;
        height: 40rem;
        >.programme-img {
            position: absolute; z-index: 1;
            top: 0; left: 0;
            width: 100%; height: 100%;
        }
        >.programme-title {
            position: absolute; z-index: 2;
            top: 5.3rem; left: 4.4rem;
            line-height: 4.2rem;
            font-size: 1.8rem; font-weight: bold;
            color: #9b8024;
        }
        >.programme-desc {
            position: absolute; z-index: 2;
            top: 10.3rem; left: 4.4rem;
            width: 19.8rem;
            line-height: 2.5rem;
            font-size: 1.4rem;
        }
    }
    #mode {
        position: relative;
        margin-top: 0.4rem;
        height: 40rem;
        background-color: #dBdaff;
        >.mode-bg {
            position: absolute; z-index: 1;
            top: 0; left: 0;
            width: 100%; height: 100%;
        }
        >.mode-img {
            position: absolute; z-index: 2;
            top: 2.5rem; left: 0; right: 0;
            margin: auto;
            width: 30.5rem; height: 24.8rem;
        }
        >.mode-item {
            position: absolute; z-index: 2;
            width: 16.1rem; height: 2.9rem;
            >.img {
                position: absolute;
                top: 0; left: 0;
                width: 2.8rem; height: 2.9rem;
            }
            >.text {
                position: absolute;
                top: 0; bottom: 0; left: 3.3rem;
                width: 12.8rem;
                line-height: 2.9rem;
                color: #666;
            }
        }
        >.mode-item.stim {
            top: 29.1rem; left: 2.3rem;
        }
        >.mode-item.ets {
            top: 29.1rem; left: 20.6rem;
        }
        >.mode-item.kegel {
            top: 34.2rem; left: 2.3rem;
        }
        >.mode-item.game {
            top: 34.2rem; left: 20.6rem;
        }
    }
    #design {
        position: relative;
        margin-top: 0.4rem;
        height: 40rem;
        >.design-img {
            position: absolute; z-index: 1;
            top: 0; left: 0;
            width: 100%; height: 100%;
        }
        >.design-title {
            position: absolute; z-index: 2;
            top: 4rem; left: 0; right: 0;
            text-align: center; line-height: 2.8rem;
            font-size: 2rem;
        }
        >.design-subTitle {
            position: absolute; z-index: 2;
            top: 7.6rem; left: 0; right: 0;
            text-align: center; line-height: 2rem;
            font-size: 1.4rem; letter-spacing: 0.1rem;
        }
    }
    #app {
        position: relative;
        margin-top: 0.4rem;
        height: 40rem;
        background-color: #fafafa;
        >.app-circle {
            position: absolute; z-index: 1;
            top: 0; left: 0; right: 0;
            margin: auto;
            width: 34rem; height: 17rem;
        }
        >.app-title {
            position: absolute; z-index: 3;
            top: 2.4rem; left: 0; right: 0;
            text-align: center; line-height: 2.8rem;
            font-size: 2rem;
            color: #91730b;
        }
        >.app-subTitle {
            position: absolute; z-index: 3;
            top: 5.9rem; left: 0; right: 0;
            text-align: center; line-height: 1.8rem;
            font-size: 1.2rem;
        }
        >.app-img {
            position: absolute; z-index: 2;
            bottom: 0; left: 0; right: 0;
            margin: auto;
            width: 23.5rem; height: 28rem;
        }
    }
    #record {
        position: relative;
        margin-top: 0.4rem;
        height: 30rem;
        >.record-bg {
            position: absolute; z-index: 1;
            top: 0; left: 0;
            width: 100%; height: 100%;
        }
        >.record-title {
            position: absolute; z-index: 2;
            top: 4rem; left: 0; right: 0;
            text-align: center; line-height: 2.8rem;
            font-size: 2rem;
            color: #fff;
        }
        >.record-subTitle {
            position: absolute; z-index: 2;
            top: 7.5rem; left: 0; right: 0;
            text-align: center; line-height: 1.8rem;
            font-size: 1.2rem;
            color: #999;
        }
        >.record-item {
            position: absolute; z-index: 2;
            top: 17.3rem;
            height: 5.1rem;
            >.img {
                position: absolute;
                top: 0.5rem; left: 0; right: 0;
                margin: auto;
                height: 1.9rem;
            }
            >.text {
                position: absolute;
                bottom: 0; left: 0; right: 0;
                text-align: center; line-height: 1.7rem;
                font-size: 1.2rem;
                color: #fff;
            }
        }
        >.record-item.person {
            left: 2.4rem;
            width: 9.4rem;
            >.img {
                width: 7.2rem;
            }
        }
        >.record-item.count {
            left: 0; right: 0;
            margin: auto;
            width: 10.2rem;
            >.img {
                width: 7.9rem;
            }
        }
        >.record-item.hour {
            right: 2.1rem;
            width: 10.4rem;
            >.img {
                width: 8.2rem;
            }
        }
    }
    #authorize {
        position: relative;
        margin-top: 0.4rem;
        height: 50rem;
        >.authorize-bg {
            position: absolute; z-index: 1;
            top: 0; left: 0;
            width: 100%; height: 100%;
        }
        >.authorize-title {
            position: absolute; z-index: 2;
            top: 4rem; left: 0; right: 0;
            text-align: center; line-height: 2.8rem;
            font-size: 2rem;
        }
        >.authorize-subTitle {
            position: absolute; z-index: 2;
            top: 7.6rem; left: 0; right: 0;
            text-align: center; line-height: 2rem;
            font-size: 1.4rem; letter-spacing: 0.1rem;
        }
    }
    #train {
        position: relative;
        margin-top: 0.4rem;
        height: 50rem;
        >.train-bg {
            position: absolute; z-index: 1;
            top: 0; left: 0;
            width: 100%; height: 100%;
        }
        >.train-title {
            position: absolute; z-index: 2;
            top: 4rem; left: 0; right: 0;
            text-align: center; line-height: 2.8rem;
            font-size: 2rem;
            color: #fff;
        }
        >.train-subTitle {
            position: absolute; z-index: 2;
            top: 7.5rem; left: 0; right: 0;
            text-align: center; line-height: 1.8rem;
            font-size: 1.2rem;
            color: #fff;
        }
        >.train-img {
            position: absolute; z-index: 2;
            bottom: 0; left: 0; right: 0;
            margin: auto;
            width: 24.1rem; height: 38.1rem;
        }
    }
    #rule {
        margin-top: 0.4rem; padding-top: 2.6rem;
        height: 10.4rem;
        >p {
            text-align: center; line-height: 2.4rem;
            font-size: 1.5rem;
        }
        >p.red {
            color: #ff2c79;
        }
    }
</style>
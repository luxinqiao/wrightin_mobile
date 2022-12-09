<template>
    <div id='main'>
        <div id='banner'>
            <img class='banner-bg' v-lazy='require("@/assets/img/product/banner-bg.png")'>
            <img class='banner-img' v-lazy='require("@/assets/img/product/wrightinTwo/banner-img.png")'>
            <p class='banner-title'>盆底肌修复仪</p>
            <p class='banner-subTitle'>居家私密抗衰 轻松打造健康盆底</p>
        </div>
        <div id='apply'>
            <p class='apply-title'>盆底肌修复仪</p>
            <p class='apply-subTitle'>改善盆底松弛 强健盆底肌</p>
            <p class='apply-desc'>/ 适用于 /</p>
            <p class='apply-item one'>
                <img class='img' v-lazy='require("@/assets/img/product/wrightinTwo/apply-one.png")'>
                <span class='title'>盆底功能保健</span>
                <span class='text'>治疗压力性尿失禁</span>
            </p>
            <p class='apply-item two'>
                <img class='img' v-lazy='require("@/assets/img/product/wrightinTwo/apply-two.png")'>
                <span class='title'>秘密健康保养</span>
                <span class='text'>私密紧致、私密放松、私密保养</span>
            </p>
            <p class='apply-item three'>
                <img class='img' v-lazy='require("@/assets/img/product/wrightinTwo/apply-three.png")'>
                <span class='title'>盆底肌力强健</span>
                <span class='text'>改善尿频漏尿、促进排尿排便</span>
            </p>
        </div>
        <div id='programme'>
            <img class='programme-img' v-lazy='require("@/assets/img/product/wrightinTwo/programme-bg.png")'>
            <p class='programme-title'>筛查评估定制个性化疗程训练方案</p>
            <p class='programme-desc'>针对每个人盆底肌整体状况、损伤程度、损伤阶段，匹配不同训练方案参数，个性化定制属于您的训练方案</p>
        </div>
        <div id='mode'>
            <img class='mode-bg' v-lazy='require("@/assets/img/product/wrightinTwo/mode-bg.png")'>
            <p class='mode-item stim'>
                <img class='img' v-lazy='require("@/assets/img/product/wrightinTwo/mode-stim.png")'>
                <span class='text'>神经肌肉电刺激</span>
            <p class='mode-item ets'>
                <img class='img' v-lazy='require("@/assets/img/product/wrightinTwo/mode-ets.png")'>
                <span class='text'>肌电触发电刺激</span>
            </p>
            <p class='mode-item kegel'>
                <img class='img' v-lazy='require("@/assets/img/product/wrightinTwo/mode-kegel.png")'>
                <span class='text'>凯格尔模板训练</span>
            </p>
            <p class='mode-item game'>
                <img class='img' v-lazy='require("@/assets/img/product/wrightinTwo/mode-game.png")'>
                <span class='text'>多媒体游戏训练</span>
            </p>
        </div>
        <div id='watch'>
            <img class='watch-img' v-lazy='require("@/assets/img/product/wrightinTwo/watch.png")'>
            <p class='watch-title'>实时监测腹肌活动<br/>保证数据准确</p>
            <p class='watch-desc'>监测腹肌的用力情况和用力程度，识别腹肌“代偿”的问题</p>
            <p class='watch-subDesc'>*腹肌代偿现象：腹部参与收缩，部分代替盆底肌的收缩，是进行盆底评估或训练时的一种错误发力形式。</p>
        </div>
        <div id='texture'>
            <img class='texture-img' v-lazy='require("@/assets/img/product/wrightinTwo/texture.png")'>
            <p class='texture-title'>食品级硅胶材质 舒适亲肤</p>
            <p class='texture-subTitle'>全身包裹硅胶，柔软舒适，富有弹性给人以舒适触感</p>
        </div>
        <div id='passageway'>
            <img class='passageway-img' v-lazy='require("@/assets/img/product/wrightinTwo/passageway.png")'>
            <p class='passageway-title'>智能双通道+参考电极</p>
            <p class='passageway-subTitle'>三管齐下 肌电采集更准确</p>
        </div>
        <div id='wave'>
            <img class='wave-img' v-lazy='require("@/assets/img/product/wrightinTwo/wave.png")'>
            <p class='wave-title'>Bi-directional square wave<br/>双相方波</p>
            <p class='wave-subTitle'>电刺激输出均衡柔和</p>
        </div>
        <div id='design'>
            <img class='design-img' v-lazy='require("@/assets/img/product/wrightinTwo/design.png")'>
            <p class='design-title'>一体式无线设计  治疗不受“线”</p>
            <p class='design-subTitle'>无线探头技术，将所有电路模块一体集成到探头内部，整机无缝衔接，摆脱线材束缚</p>
        </div>
        <div id='upgrade'>
            <img class='upgrade-img' v-lazy='require("@/assets/img/product/wrightinTwo/upgrade.png")'>
            <p class='upgrade-title'>加宽不锈钢片  体验升级</p>
            <p class='upgrade-subTitle'>加大钢片与盆底表面接触面积，提升舒适度</p>
        </div>
        <div id='charge'>
            <img class='charge-img' v-lazy='require("@/assets/img/product/wrightinTwo/charge.png")'>
            <p class='charge-title'>磁吸充电  一触即充</p>
            <p class='charge-subTitle'>采用磁吸充电方式，充电更方便</p>
        </div>
        <div id='clean'>
            <img class='clean-img' v-lazy='require("@/assets/img/product/wrightinTwo/clean.png")'>
            <p class='clean-title'>全身防水 方便清洁</p>
            <p class='clean-subTitle'>防水材质打造，清洗时保护内部配件，不易损坏</p>
        </div>
        <div id='appearance'>
            <img class='appearance-img' v-lazy='require("@/assets/img/product/wrightinTwo/appearance.png")'>
            <p class='appearance-title'>外形精雕细琢</p>
            <p class='appearance-subTitle'>遵循人体生理学曲线，适合亚洲女性</p>
        </div>
        <div id='app'>
            <img class='app-circle' v-lazy='require("@/assets/img/product/wrightinTwo/app-circle.gif")'>
            <p class='app-title'>蓝牙连接 智能操作</p>
            <p class='app-subTitle'>产品通过蓝牙连接配套APP，手机操控，<br/>让训练轻松又有趣</p>
            <img class='app-img' v-lazy='require("@/assets/img/product/wrightinTwo/app-img.png")'>
        </div>
        <div id='record'>
            <img class='record-bg' v-lazy='require("@/assets/img/product/record-bg.png")'>
            <p class='record-title'>在澜渟  科学锻炼  一起进步</p>
            <p class='record-subTitle'>循序渐进闭环式训练，语音图形双指导，<br/>精准记录您的盆底训练</p>
            <p class='record-item person'>
                <img class='img' v-lazy='require("@/assets/img/product/wrightinTwo/record-person.png")'>
                <span class='text'>陪你在一起</span>
            </p>
            <p class='record-item count'>
                <img class='img' v-lazy='require("@/assets/img/product/wrightinTwo/record-count.png")'>
                <span class='text'>坚持的训练</span>
            </p>
            <p class='record-item hour'>
                <img class='img' v-lazy='require("@/assets/img/product/wrightinTwo/record-hour.png")'>
                <span class='text'>做同样的事</span>
            </p>
        </div>
        <div id='train'>
            <img class='train-bg' v-lazy='require("@/assets/img/product/train-bg.png")'>
            <p class='train-title'>在线1对1指导</p>
            <p class='train-subTitle'>随时随地，快速开启咨询，盆底康复师将根据您的<br/>个人情况提供专属训练指导</p>
            <img class='train-img' v-lazy='require("@/assets/img/product/wrightinTwo/train-img.png")'>
        </div>
        <div id='rule'>
            <p>售后问题请查看</p>
            <p class='red' @click='goRule()'>《盆底肌修复仪售后管理制度》</p>
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
            this.$router.push({path: 'rule?type=wrightinTwo'})
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
            top: 4rem; left: 2rem;
            width: 26.3rem; height: 13.3rem;
        }
        >.banner-title {
            position: absolute; z-index: 3;
            top: 1.6rem; left: 14.9rem;
            line-height: 3rem;
            font-size: 2.2rem; font-weight: bold;
            color: #bf995b;
        }
        >.banner-subTitle {
            position: absolute; z-index: 3;
            top: 4.6rem; left: 14.9rem;
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
        height: 42.2rem;
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
            height: 7.6rem; width: 100%;
            >.img {
                position: absolute;
                top: 0; left: 0;
            }
            >.title {
                position: absolute;
                top: 1.6rem; left: 8.7rem; 
                line-height: 2.1rem;
                font-size: 1.5rem; color: #333; font-weight: bold;
            }
            >.text {
                position: absolute;
                top: 4.1rem; left: 8.7rem; 
                line-height: 2rem;
                font-size: 1.4rem;
                color: #666;
            }
        }
        >.apply-item.one {
            top: 12.3rem; left: 4.1rem;
            >.img {
                width: 7.1rem; height: 7.6rem;
            }
        }
        >.apply-item.two {
            top: 22.5rem; left: 4.1rem;
            >.img {
                width: 7.1rem; height: 7.3rem;
            }
        }
        >.apply-item.three {
            bottom: 2.4rem; left: 4.1rem;
            >.img {
                width: 7rem; height: 6.7rem;
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
            line-height: 6.1rem;
            font-size: 1.8rem; font-weight: bold;
            color: #9b8024;
        }
        >.programme-desc {
            position: absolute; z-index: 2;
            top: 10.3rem; left: 4.4rem;
            width: 19rem;
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
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
        }
        >.mode-item {
            position: absolute; z-index: 2;
            width: 16.1rem; height: 2.9rem;
            >.img {
                position: absolute;
                top: 0; left: 0;
                width: 2.9rem; height: 2.9rem;
            }
            >.text {
                position: absolute;
                top: 0; bottom: 0; left: 3.4rem;
                width: 12.8rem;
                line-height: 2.9rem;
                color: #fff; font-size: 1.5rem;
            }
        }
        >.mode-item.stim {
            top: 30.5rem; left: 2.3rem;
        }
        >.mode-item.ets {
            top: 30.5rem; left: 20.6rem;
        }
        >.mode-item.kegel {
            top: 34.8rem; left: 2.3rem;
        }
        >.mode-item.game {
            top: 34.8rem; left: 20.6rem;
        }
    }
    #watch {
        position: relative;
        margin-top: 0.4rem;
        height: 40rem;
        >.watch-img {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
        }
        >.watch-title {
            position: absolute;
            top: 5.3rem; left: 4.4rem;
            line-height: 2.6rem;
            font-size: 1.8rem; font-weight: bold;
            color: #9b8024;
        }
        >.watch-desc {
            position: absolute;
            top: 11.3rem; left: 4.4rem;
            width: 18.7rem;
            line-height: 2.5rem;
            font-size: 1.4rem;
        }
        >.watch-subDesc {
            position: absolute;
            bottom: 1.6rem; left: 1.6rem; right: 1.6rem;
            margin: auto;
            line-height: 1.8rem;
            font-size: 1.2rem; color: #666;
        }
    }
    #texture {
        position: relative;
        margin-top: 0.4rem;
        height: 50rem;
        >.texture-img {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
        }
        >.texture-title {
            position: absolute;
            top: 4rem; left: 0; right: 0;
            margin: auto;
            line-height: 2.8rem; text-align: center;
            font-size: 2rem;
        }
        >.texture-subTitle {
            position: absolute;
            top: 7.5rem; left: 0; right: 0;
            margin: auto;
            line-height: 1.7rem; text-align: center;
            font-size: 1.2rem;
        }
    }
    #passageway {
        position: relative;
        margin-top: 0.4rem;
        height: 40rem;
        background-color: #fafafa;
        >.passageway-img {
            position: absolute;
            bottom: 0; left: 0; right: 0;
            margin: auto;
            width: 33.8rem; height: 29.3rem;
        }
        >.passageway-title {
            position: absolute;
            top: 2.4rem; left: 0; right: 0;
            margin: auto;
            line-height: 2.8rem; text-align: center;
            font-size: 2rem; color: #91730b;
        }
        >.passageway-subTitle {
            position: absolute;
            top: 5.9rem; left: 0; right: 0;
            margin: auto;
            line-height: 1.8rem; text-align: center;
            font-size: 1.2rem;
        }
    }
    #wave {
        position: relative;
        margin-top: 0.4rem;
        height: 40rem;
        >.wave-img {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
        }
        >.wave-title {
            position: absolute;
            top: 2.4rem; left: 0; right: 0;
            margin: auto;
            line-height: 2.8rem; text-align: center;
            font-size: 2rem; color: #fff;
        }
        >.wave-subTitle {
            position: absolute;
            top: 8.8rem; left: 0; right: 0;
            margin: auto;
            line-height: 1.8rem; text-align: center;
            font-size: 1.2rem; color: #fff;
        }
    }
    #design {
        position: relative;
        margin-top: 0.4rem;
        height: 40rem;
        background-color: #fafafa;
        >.design-img {
            position: absolute; 
            bottom: 0; right: 0;
            width: 35.2rem; height: 28.8rem;
        }
        >.design-title {
            position: absolute;
            top: 2.4rem; left: 0; right: 0;
            margin: auto;
            line-height: 2.8rem; text-align: center;
            font-size: 2rem; color: #91730b;
        }
        >.design-subTitle {
            position: absolute;
            top: 5.9rem; left: 0; right: 0;
            margin: auto;
            width: 29.4rem;
            line-height: 1.8rem; text-align: center;
            font-size: 1.2rem;
        }
    }
    #upgrade {
        position: relative;
        margin-top: 0.4rem;
        height: 40rem;
        background-color: #fafafa;
        >.upgrade-img {
            position: absolute;
            bottom: 0; left: 0; 
            width: 30.8rem; height: 28.3rem;
        }
        >.upgrade-title {
            position: absolute;
            top: 2.4rem; left: 0; right: 0;
            margin: auto;
            line-height: 2.8rem; text-align: center;
            font-size: 2rem; color: #91730b;
        }
        >.upgrade-subTitle {
            position: absolute;
            top: 5.9rem; left: 0; right: 0;
            margin: auto;
            width: 29.4rem;
            line-height: 1.8rem; text-align: center;
            font-size: 1.2rem;
        }
    }
    #charge {
        position: relative;
        margin-top: 0.4rem;
        height: 40rem;
        background-color: #fafafa;
        >.charge-img {
            position: absolute;
            bottom: 0; left: 0; right: 0;
            width: 100%; height: auto;
        }
        >.charge-title {
            position: absolute;
            top: 2.4rem; left: 0; right: 0;
            margin: auto;
            line-height: 2.8rem; text-align: center;
            font-size: 2rem; color: #91730b;
        }
        >.charge-subTitle {
            position: absolute;
            top: 5.9rem; left: 0; right: 0;
            margin: auto;
            width: 29.4rem;
            line-height: 1.8rem; text-align: center;
            font-size: 1.2rem;
        }
    }
    #clean {
        position: relative;
        margin-top: 0.4rem;
        height: 40rem;
        >.clean-img {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
        }
        >.clean-title {
            position: absolute;
            top: 2.4rem; left: 0; right: 0;
            margin: auto;
            line-height: 2.8rem; text-align: center;
            font-size: 2rem; color: #fff;
        }
        >.clean-subTitle {
            position: absolute;
            top: 5.9rem; left: 0; right: 0;
            margin: auto;
            line-height: 1.8rem; text-align: center;
            font-size: 1.2rem; color: #fff;
        }
    }
    #appearance {
        position: relative;
        margin-top: 0.4rem;
        height: 40rem;
        background-color: #fafafa;
        >.appearance-img {
            position: absolute;
            bottom: 0; left: 0; right: 0;
            margin: auto;
            width: 33.6rem; height: 30.2rem;
        }
        >.appearance-title {
            position: absolute;
            top: 2.4rem; left: 0; right: 0;
            margin: auto;
            line-height: 2.8rem; text-align: center;
            font-size: 2rem; color: #91730b;
        }
        >.appearance-subTitle {
            position: absolute;
            top: 5.9rem; left: 0; right: 0;
            margin: auto;
            width: 29.4rem;
            line-height: 1.8rem; text-align: center;
            font-size: 1.2rem;
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
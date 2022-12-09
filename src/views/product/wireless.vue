<template>
    <div id='main'>
        <div id='banner'>
            <img class='banner-bg' v-lazy='require("@/assets/img/product/banner-bg.png")'>
            <img class='banner-img' v-lazy='require("@/assets/img/product/wireless/banner-img.png")'>
            <p class='banner-title'>无线产后恢复仪</p>
            <p class='banner-subTitle'>产后塑形 改善腹直肌分离</p>
        </div>
        <div id='secret'>
            <p class='secret-title'>无线产后恢复仪</p>
            <p class='secret-subTitle'>轻松打造健康私密</p>
            <p class='secret-item fzj'>
                <img class='img' v-lazy='require("@/assets/img/product/wireless/secret-fzj.png")'>
                <span class='text'>修复腹直肌分离</span>
            </p>
            <p class='secret-item slim'>
                <img class='img' v-lazy='require("@/assets/img/product/wireless/secret-slim.png")'>
                <span class='text'>多部位塑形</span>
            </p>
            <p class='secret-item milk'>
                <img class='img' v-lazy='require("@/assets/img/product/wireless/secret-milk.png")'>
                <span class='text'>通乳催乳</span>
            </p>
            <p class='secret-item health'>
                <img class='img' v-lazy='require("@/assets/img/product/wireless/secret-health.png")'>
                <span class='text'>保养子宫/卵巢</span>
            </p>
        </div>
        <div id='stim'>
            <p class='stim-title'>核心科技——低频脉冲电刺激</p>
            <img class='stim-img' v-lazy='require("@/assets/img/product/wireless/stim-img.png")'>
        </div>
        <div id='quality'>
            <p class='quality-title'>匠心铸造品质</p>
            <img class='quality-img' v-lazy='require("@/assets/img/product/wireless/quality-img.png")'>
        </div>
        <div id='auto'>
            <img class='auto-circle' v-lazy='require("@/assets/img/product/circle.gif")'>
            <p class='auto-title'>智能模式 对症部位</p>
            <p class='auto-subTitle'>根据身体不同部位的需求，提供个性化合理的训练方案，<br/>APP内可选择多种模式和智能方案</p>
            <img class='auto-wireless' v-lazy='require("@/assets/img/product/wireless/auto-wireless.png")'>
            <img class='auto-phone' v-lazy='require("@/assets/img/product/wireless/auto-phone.png")'>
        </div>
        <div id='record'>
            <img class='record-bg' v-lazy='require("@/assets/img/product/record-bg.png")'>
            <p class='record-title'>你的努力 自己看得见</p>
            <p class='record-subTitle'>每天进步一点点，你累计的努力，<br/>会成就更好的自己</p>
            <p class='record-item person'>
                <img class='img' v-lazy='require("@/assets/img/product/wireless/record-person.png")'>
                <span class='text'>陪你在一起</span>
            </p>
            <p class='record-item count'>
                <img class='img' v-lazy='require("@/assets/img/product/wireless/record-count.png")'>
                <span class='text'>坚持的训练</span>
            </p>
            <p class='record-item hour'>
                <img class='img' v-lazy='require("@/assets/img/product/wireless/record-hour.png")'>
                <span class='text'>做同样的事</span>
            </p>
        </div>
        <div id='train'>
            <img class='train-bg' v-lazy='require("@/assets/img/product/train-bg.png")'>
            <p class='train-title'>因为服务 所以信赖</p>
            <p class='train-subTitle'>经验丰富的产后康复领域从业人员，用户问题可随时咨询专家，快速为用户进行疑难解答，提升用户体验</p>
            <img class='train-img' v-lazy='require("@/assets/img/product/wireless/train-img.png")'>
        </div>
        <div id='rule'>
            <p>售后问题请查看</p>
            <p class='red' @click='goRule()'>《无线产后恢复仪售后管理制度》</p>
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
            this.$router.push({path: 'rule?type=wireless'})
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
            top: 0; left: 0;
            width: 25.9rem; height: 17.3rem;
        }
        >.banner-title {
            position: absolute; z-index: 3;
            top: 2.3rem; left: 18.7rem;
            line-height: 3rem;
            font-size: 2.2rem; font-weight: bold;
            color: #bf995b;
        }
        >.banner-subTitle {
            position: absolute; z-index: 3;
            top: 5.7rem; left: 18.6rem;
            line-height: 2rem;
            font-size: 1.4rem;
            color: #666;
        }
    }
    #secret {
        position: relative;
        margin-top: 0.4rem;
        height: 40rem;
        background-color: #fafafa;
        >.secret-title {
            position: absolute;
            top: 2.4rem; left: 0; right: 0;
            text-align: center; line-height: 2rem;
            font-size: 1.4rem;
        }
        >.secret-subTitle {
            position: absolute;
            top: 4.7rem; left: 0; right: 0;
            text-align: center; line-height: 2.5rem;
            font-size: 1.8rem;
            color: #91730b;
        }
        >.secret-item {
            position: absolute;
            width: 10rem; height: 10.4rem;
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
        >.secret-item.fzj {
            top: 12.1rem; left: 5.7rem;
            >.img {
                width: 7.4rem; height: 7.6rem;
            }
        }
        >.secret-item.slim {
            top: 12rem; right: 5rem;
            >.img {
                width: 6.8rem; height: 7.4rem;
            }
        }
        >.secret-item.milk {
            top: 26.1rem; left: 5.7rem;
            >.img {
                width: 7.9rem; height: 7.5rem;
            }
        }
        >.secret-item.health {
            top: 26.1rem; right: 5rem;
            >.img {
                width: 7.1rem; height: 7.5rem;
            }
        }
    }
    #stim {
        position: relative;
        margin-top: 0.4rem;
        height: 40rem;
        background-color: #fafafa;
        >.stim-title {
            position: absolute;
            top: 4rem; left: 0; right: 0;
            text-align: center; line-height: 2.8rem;
            font-size: 2rem;
            color: #91730b;
        }
        >.stim-img {
            position: absolute;
            bottom: 4.8rem; left: 0; right: 0;
            margin: auto;
            width: 33.7rem; height: 26.1rem;
        }
    }
    #quality {
        position: relative;
        margin-top: 0.4rem;
        height: 40rem;
        background-color: #fafafa;
        >.quality-title {
            position: absolute;
            top: 4rem; left: 0; right: 0;
            text-align: center; line-height: 2.8rem;
            font-size: 2rem;
            color: #91730b;
        }
        >.quality-img {
            position: absolute;
            bottom: 3.6rem; left: 0; right: 0;
            margin: auto;
            width: 34.3rem; height: 27.2rem;
        }
    }
    #auto {
        position: relative;
        margin-top: 0.4rem;
        height: 40rem;
        background-color: #fafafa;
        >.auto-circle {
            position: absolute; z-index: 1;
            bottom: 0; right: 0;
            width: 37.5rem; height: 28.3rem;
        }
        >.auto-title {
            position: absolute; z-index: 2;
            top: 4rem; left: 0; right: 0;
            text-align: center; line-height: 2.8rem;
            font-size: 2rem;
            color: #91730b;
        }
        >.auto-subTitle {
            position: absolute; z-index: 2;
            top: 7.5rem; left: 0; right: 0;
            text-align: center; line-height: 1.8rem;
            font-size: 1.2rem;
        }
        >.auto-wireless {
            position: absolute; z-index: 3;
            bottom: 0; left: 0;
            width: 16.4rem; height: 12.5rem;
        }
        >.auto-phone {
            position: absolute; z-index: 2;
            bottom: 0; right: 0;
            width: 36rem; height: 24.6rem;
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
            text-align: center; line-height: 2.5rem;
            font-size: 1.8rem;
            color: #fff;
        }
        >.record-subTitle {
            position: absolute; z-index: 2;
            top: 7.3rem; left: 0; right: 0;
            text-align: center; line-height: 1.8rem;
            font-size: 1.2rem;
            color: #999;
        }
        >.record-item {
            position: absolute; z-index: 2;
            top: 16.9rem;
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
            width: 10.1rem;
            >.img {
                width: 7.9rem;
            }
        }
        >.record-item.hour {
            right: 2.1rem;
            width: 11.3rem;
            >.img {
                width: 9.1rem;
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
            text-align: center; line-height: 2.5rem;
            font-size: 1.8rem;
            color: #fff;
        }
        >.train-subTitle {
            position: absolute; z-index: 2;
            top: 7.3rem; left: 0; right: 0;
            margin: auto;
            width: 31.2rem;
            text-align: center; line-height: 1.8rem;
            font-size: 1.2rem;
            color: #fff;
        }
        >.train-img {
            position: absolute; z-index: 2;
            bottom: 0; left: 0; right: 0;
            margin: auto;
            width: 24.1rem; height: 37.1rem;
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
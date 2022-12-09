<template>
    <div id='main'>
        <div id='banner'>
            <img class='banner-bg' v-lazy='require("@/assets/img/product/banner-bg.png")'>
            <img class='banner-img' v-lazy='require("@/assets/img/product/kegel/banner-img.png")'>
            <p class='banner-title'>盆底肌肉康复器</p>
            <p class='banner-subTitle'>阴道哑铃 锻炼阴道肌肉</p>
            <p class='banner-desc'>
                南京麦豆健康管理有限公司
                <br/>
                一类医疗器械备案号：苏宁械备20180019号 广告审查批准文号：苏械广审（文）第 221228-16563 号
                <br/>
                请仔细阅读产品说明书或者在医务人员的指导下购买和使用 禁忌内容或者注意事项详见说明书
            </p>
        </div>
        <div id='ability'>
            <p class='ability-title'>盆底肌肉康复器</p>
            <p class='ability-subTitle'>提高盆底肌肉收缩能力</p>
            <p class='ability-item incontinet'>
                <img class='img' v-lazy='require("@/assets/img/product/kegel/ability-incontinet.png")'>
                <span class='text'>缓解压力性尿失禁</span>
            </p>
            <p class='ability-item down'>
                <img class='img' v-lazy='require("@/assets/img/product/kegel/ability-down.png")'>
                <span class='text'>缓解阴道子宫等器官膨出或脱垂</span>
            </p>
            <p class='ability-item pain'>
                <img class='img' v-lazy='require("@/assets/img/product/kegel/ability-pain.png")'>
                <span class='text'>缓解慢性疼痛</span>
            </p>
            <p class='ability-item shit'>
                <img class='img' v-lazy='require("@/assets/img/product/kegel/ability-shit.png")'>
                <span class='text'>缓解便秘</span>
            </p>
        </div>
        <div id='practice'>
            <img class='practice-bg' v-lazy='require("@/assets/img/product/kegel/practice-bg.png")'>
            <p class='practice-title'>物理锻炼 收缩阴道肌肉</p>
            <p class='practice-desc'>运动时通过放置体内的球体，促使阴道肌肉自动收缩，通过收缩运动锻炼盆底肌肉</p>
        </div>
        <div id='ball'>
            <p class='ball-title'>五球组合 适应需求</p>
            <p class='ball-subTitle'>不同尺寸，配合不同松弛程度的阴道尺寸，<br/>不同时期的训练要求，满足用户需求</p>
            <img class='ball-img' v-lazy='require("@/assets/img/product/kegel/ball-img.png")'>
        </div>
        <div id='guide'>
            <img class='guide-circle' v-lazy='require("@/assets/img/product/circle.gif")'>
            <p class='guide-title'>智能科技 科学指导</p>
            <p class='guide-subTitle'>使用澜渟App辅助训练，从新手到大神，一步到位，<br/>提供完善的盆底肌训练指导</p>
            <img class='guide-kegel' v-lazy='require("@/assets/img/product/kegel/guide-kegel.png")'>
            <img class='guide-phone' v-lazy='require("@/assets/img/product/kegel/guide-phone.png")'>
        </div>
        <div id='record'>
            <img class='record-bg' v-lazy='require("@/assets/img/product/record-bg.png")'>
            <p class='record-title'>在澜渟 你的努力终将美好</p>
            <p class='record-subTitle'>循序渐进的科学课程设计，系统记录训练轨迹，<br/>澜渟每天与你共同前进</p>
            <p class='record-item person'>
                <img class='img' v-lazy='require("@/assets/img/product/kegel/record-person.png")'>
                <span class='text'>陪你在一起</span>
            </p>
            <p class='record-item count'>
                <img class='img' v-lazy='require("@/assets/img/product/kegel/record-count.png")'>
                <span class='text'>坚持的训练</span>
            </p>
            <p class='record-item hour'>
                <img class='img' v-lazy='require("@/assets/img/product/kegel/record-hour.png")'>
                <span class='text'>做同样的事</span>
            </p>
        </div>
        <div id='authorize'>
            <img class='authorize-bg' v-lazy='require("@/assets/img/product/authorize-bg.png")'>
            <p class='authorize-title'>一类医疗器械</p>
            <p class='authorize-subTitle'>诚心 精心 用心</p>
            <img class='authorize-img' v-lazy='require("@/assets/img/product/kegel/authorize-img.png")'>
        </div>
        <div id='train'>
            <img class='train-bg' v-lazy='require("@/assets/img/product/train-bg.png")'>
            <p class='train-title'>澜渟训练顾问 在线服务</p>
            <p class='train-subTitle'>经验丰富的盆底康复领域从业人员，在线解读筛查报告，推送定制化康复方案，定期跟进康复过程，提供优质的服务</p>
            <img class='train-img' v-lazy='require("@/assets/img/product/kegel/train-img.png")'>
        </div>
        <div id='rule'>
            <p>售后问题请查看</p>
            <p class='red' @click='goRule()'>《盆底肌肉康复器售后管理制度》</p>
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
            this.$router.push({path: 'rule?type=kegel'})
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
            top: 1.5rem; left: 1rem;
            width: 22.1rem; height: 15.1rem;
        }
        >.banner-title {
            position: absolute; z-index: 3;
            top: 2.3rem; left: 19.4rem;
            line-height: 3rem;
            font-size: 2.2rem; font-weight: bold;
            color: #bf995b;
        }
        >.banner-subTitle {
            position: absolute; z-index: 3;
            top: 5.7rem; left: 19.4rem;
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
    #ability {
        position: relative;
        margin-top: 0.4rem;
        height: 40rem;
        background-color: #fafafa;
        >.ability-title {
            position: absolute;
            top: 2.4rem; left: 0; right: 0;
            text-align: center; line-height: 2rem;
            font-size: 1.4rem;
        }
        >.ability-subTitle {
            position: absolute;
            top: 4.7rem; left: 0; right: 0;
            text-align: center; line-height: 2.5rem;
            font-size: 1.8rem;
            color: #91730b;
        }
        >.ability-item {
            position: absolute;
            width: 12.5rem;
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
        >.ability-item.incontinet {
            top: 12.1rem; left: 4.5rem;
            height: 10.4rem;
            >.img {
                width: 7.4rem; height: 7.6rem;
            }
        }
        >.ability-item.down {
            top: 12rem; right: 3.8rem;
            height: 12.4rem;
            >.img {
                width: 6.8rem; height: 7.4rem;
            }
        }
        >.ability-item.pain {
            top: 26.1rem; left: 4.4rem;
            height: 10.4rem;
            >.img {
                width: 7.9rem; height: 7.5rem;
            }
        }
        >.ability-item.shit {
            top: 26.1rem; right: 3.8rem;
            height: 10.4rem;
            >.img {
                width: 7.1rem; height: 7.5rem;
            }
        }
    }
    #practice {
        position: relative;
        margin-top: 0.4rem;
        height: 40rem;
        >.practice-bg {
            position: absolute; z-index: 1;
            top: 0; left: 0;
            width: 100%; height: 100%;
        }
        >.practice-title {
            position: absolute; z-index: 2;
            top: 5.3rem; left: 4.4rem;
            width: 19.8rem;
            line-height: 4.2rem;
            font-size: 1.8rem; font-weight: bold;
            color: #9b8024;
        }
        >.practice-desc {
            position: absolute; z-index: 2;
            top: 10.3rem; left: 4.4rem;
            width: 19.8rem;
            line-height: 2.5rem;
            font-size: 1.4rem;
        }
    }
    #ball {
        position: relative;
        margin-top: 0.4rem;
        height: 40rem;
        background-color: #fafafa;
        >.ball-title {
            position: absolute;
            top: 4rem; left: 0; right: 0;
            text-align: center; line-height: 2.8rem;
            font-size: 2rem;
            color: #91730b;
        }
        >.ball-subTitle {
            position: absolute;
            top: 7.5rem; left: 0; right: 0;
            text-align: center; line-height: 1.8rem;
            font-size: 1.2rem;
        }
        >.ball-img {
            position: absolute;
            bottom: 0; left: 0; right: 0;
            margin: auto;
            width: 30.9rem; height: 22rem;
        }
    }
    #guide {
        position: relative;
        margin-top: 0.4rem;
        height: 40rem;
        background-color: #fafafa;
        >.guide-circle {
            position: absolute; z-index: 1;
            bottom: 0; right: 0;
            width: 37.5rem; height: 28.3rem;
        }
        >.guide-title {
            position: absolute; z-index: 2;
            top: 4rem; left: 0; right: 0;
            text-align: center; line-height: 2.8rem;
            font-size: 2rem;
            color: #91730b;
        }
        >.guide-subTitle {
            position: absolute; z-index: 2;
            top: 7.5rem; left: 0; right: 0;
            text-align: center; line-height: 1.8rem;
            font-size: 1.2rem;
        }
        >.guide-kegel {
            position: absolute; z-index: 3;
            bottom: 0; left: 0;
            width: 15.9rem; height: 14.9rem;
        }
        >.guide-phone {
            position: absolute; z-index: 2;
            bottom: 0; right: 0;
            width: 35.8rem; height: 24.7rem;
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
            top: 7.5rem; left: 0; right: 0;
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
            width: 11.1rem;
            >.img {
                width: 8.9rem;
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
        >.authorize-img {
            position: absolute; z-index: 2;
            top: 10.7rem; left: 0; right: 0;
            margin: auto;
            width: 28.7rem; height: 37.1rem;
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
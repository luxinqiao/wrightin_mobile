<template>
    <div id='main'>
        <div id='banner'>
            <img class='banner-bg' v-lazy='require("@/assets/img/about/info/banner-bg.png")'>
            <p class='banner-title'>让女性更健康 更美丽</p>
        </div>
        <div id='info'>
            <p class='info-title'>南京麦豆健康管理有限公司</p>
            <p class='info-desc'>南京麦豆健康管理有限公司成立于2017年，是一家集软件平台、智能硬件、专业服务为一体的健康管理公司。公司总部位于六朝古都南京，5A级办公环境，办公面积近千平。公司通过“设备”+“APP”+“服务”的模式，依托智能医疗设备、平台软件APP、健康咨询服务，以及基于大数据构建的智慧云平台，为女性提供个性化健康管理，维护女性身心健康，提高女性生活质量。</p>
        </div>
        <div id='team'>
            <div class='team-title'>团队简介</div>
            <div class='team-item' style='margin-top: 1.5rem;'>
                <img class='img' v-lazy='require("@/assets/img/about/info/team-technology.png")'>
                <p class='title'>优秀的技术团队</p>
                <p class='desc'>拥有一支专业化分工、高度合作的团队，研发骨干达20人以上，富有强大的软件研发实力和雄厚的技术力量</p>
            </div>
            <div class='team-item'>
                <img class='img' v-lazy='require("@/assets/img/about/info/team-business.png")'>
                <p class='title'>高素质的运营团队</p>
                <p class='desc'>高素质的多维度运营团队，运用数据化运营手段，搭建新媒体矩阵，用实力助推公司发展</p>
            </div>
            <div class='team-item'>
                <img class='img' v-lazy='require("@/assets/img/about/info/team-technology.png")'>
                <p class='title'>完善的服务团队</p>
                <p class='desc'>特聘请一批经验丰富的盆底领域从业人员作为咨询顾问，以“服务至上”的理念，为用户提供优质的服务，赢得了广泛的认可</p>
            </div>
        </div>
        <div id='culture'>
            <p class='culture-title'>企业文化</p>
            <p class='culture-item mission'>
                <img class='img' v-lazy='require("@/assets/img/about/info/culture-mission.png")'>
                <span class='title'>使命</span>
                <span class='desc'>让女性更健康<br/>更美丽</span>
            </p>
            <p class='culture-item vision'>
                <img class='img' v-lazy='require("@/assets/img/about/info/culture-vision.png")'>
                <span class='title'>愿景</span>
                <span class='desc'>家用盆底领域<br/>第一品牌</span>
            </p>
            <p class='culture-item value'>
                <img class='img' v-lazy='require("@/assets/img/about/info/culture-value.png")'>
                <span class='title'>价值观</span>
                <span class='desc'>创新 分享 积极<br/>坦诚 开放 协同</span>
            </p>
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
        height: 18rem;
        >.banner-bg {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
        }
        >.banner-title {
            position: absolute;
            top: 12.2rem; left: 0; right: 0;
            text-align: center; line-height: 3rem;
            font-size: 2.2rem; font-weight: bold;
            color: #fff;
        }
    }
    #info {
        height: 25.7rem;
        background-color: #fafafa;
        overflow: hidden;
        >.info-title {
            margin-top: 2.4rem;
            height: 2.5rem;
            text-align: center; line-height: 2.5rem;
            font-size: 1.8rem;
        }
        >.info-desc {
            margin: 1.6rem 1.2rem 0 1.2rem;
            line-height: 2.4rem;
            font-size: 1.4rem;
        }
    }
    #team {
        padding: 1.6rem 0 2.5rem 0;
        background-color: #fff;
        >.team-title {
            text-align: center; line-height: 2.1rem;
            font-size: 1.5rem; font-weight: bold;
        }
        >.team-item {
            margin-top: 2.5rem;
            >.img {
                display: block;
                width: 11rem; height: 11rem;
                margin: auto;
            }
            >.title {
                margin-top: 1.2rem;
                text-align: center; line-height: 2.5rem;
                font-size: 1.8rem; font-weight: bold;
            }
            >.desc {
                margin: 0.6rem 3.3rem 0 3.3rem;
                text-align: center; line-height: 2.4rem;
                font-size: 1.4rem;
                color: #666;
            }
        }
    }
    #culture {
        position: relative;
        height: 35.1rem;
        background: linear-gradient(to bottom, #fffafa, #fff);
        >.culture-title {
            position: absolute;
            top: 1.6rem; left: 0; right: 0;
            text-align: center; line-height: 2.1rem;
            font-size: 1.5rem; font-weight: bold;
        }
        >.culture-item {
            position: absolute;
            top: 6.1rem;
            width: 11rem; height: 23rem;
            >.img {
                position: absolute; z-index: 1;
                top: 0; left: 0;
                width: 100%; height: 100%;
            }
            >.title {
                position: absolute; z-index: 2;
                top: 14.4rem; left: 0; right: 0;
                text-align: center; line-height: 2.8rem;
                font-size: 2rem;
                color: #fff;
            }
            >.desc {
                position: absolute; z-index: 2;
                top: 17.9rem; left: 0; right: 0;
                text-align: center; line-height: 1.8rem;
                font-size: 1.3rem;
                color: #fff;
            }
        }
        >.culture-item.mission {
            left: 1.2rem;
        }
        >.culture-item.vision {
            left: 0; right: 0;
            margin: auto;
        }
        >.culture-item.value {
            right: 1.2rem;
        }
    }
</style>
<template>
    <div id='main'>
        <div id='banner'>
            <img class='banner-bg' v-lazy='require("@/assets/img/about/join/banner-bg.png")'>
            <img class='banner-img' v-lazy='require("@/assets/img/about/banner-center.png")'>
            <p class='banner-title'>追梦前行 共创未来</p>
        </div>
        <div id='info'>
            <p class='info-title'>薪酬福利</p>
            <p class='info-item environment'>
                <img class='img' v-lazy='require("@/assets/img/about/join/info-environment.png")'>
                <span class='title'>优质的办公环境</span>
                <span class='desc'>位于5A级写字楼，宽敞明亮的办公室，办公面积1000多平方。办公设备一应俱全，装修精致，优雅舒适</span>
            </p>
            <p class='info-item culture'>
                <img class='img' v-lazy='require("@/assets/img/about/join/info-culture.png")'>
                <span class='title'>良好的公司文化</span>
                <span class='desc'>公司将文化理念融入到跑步与读书的活动中，促进公司与个人健康发展，打造幸福企业。日常举办各种丰富的文娱活动，并提供各类培训晋升学习机会</span>
            </p>
            <p class='info-item health'>
                <img class='img' v-lazy='require("@/assets/img/about/join/info-health.png")'>
                <span class='title'>完善的健康保障</span>
                <span class='desc'>除了法定的五险一金，公司额外提供补充商业保险，每年组织一次健康体检，配备室内健身房，设施齐全，私人教练带教，练出健康体魄</span>
            </p>
            <p class='info-item welfare'>
                <img class='img' v-lazy='require("@/assets/img/about/join/info-welfare.png")'>
                <span class='title'>健全的福利制度</span>
                <span class='desc'>公司拥有餐补等各项补贴，上下班有班车接送，定期举办生日会，发放节日福利，每年提供旅游、不定期团建机会</span>
            </p>
        </div>
        <div id='work'>
            <p class='work-title'>热招岗位</p>
            <div class='work-item' v-for='(workItem, i) in work' :key='i'>
                <p class='work-info' @click='expand(workItem)'>
                    <span class='work-name'>{{workItem.title}}</span>
                    <span class='work-require'>{{workItem.require}}</span>
                    <img class='work-expand' v-if='workItem.expand' v-lazy='require("@/assets/img/about/join/arrow-up.png")'>
                    <img class='work-expand' v-else v-lazy='require("@/assets/img/about/join/arrow-down.png")'>
                </p>
                <p class='work-duty' v-if='workItem.expand'>
                    <span>岗位职责：</span>
                    <span v-html='workItem.responsibility'></span>
                </p>
                <p class='work-station' v-if='workItem.expand'>
                    <span>岗位要求：</span>
                    <span v-html='workItem.station'></span>
                </p>
            </div>
        </div>
        <div id='contact'>
            <p class='contact-title'>招聘联系方式</p>
            <p class='contact-man'>联系人：汪女士</p>
            <p class='contact-phone'>联系电话：18115468726</p>
            <p class='contact-email'>简历投递邮箱：wangmeimei@medoht.com</p>
            <p class='contact-desc'>欢迎有意向者在前程无忧、智联招聘、BOSS直聘等网站上关注我们的招聘信息，我们将第一时间与您联系</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            work: []
        }
    },
    mounted() {
        window.scrollTo(0, 0)
        this.initWork()
    },
    methods: {
        /**
            初始化热招岗位
            @param
            @return
         */
        initWork() {
            this.$axios.post(`${this.$request.live}/common/pc/recruit`, {}).then(res => {
                for (let i=0; i<res.data.length; i++) {
                    res.data[i].expand = false
                    res.data[i].responsibility = res.data[i].responsibility.replace(/\n/g, '<br>')
                    res.data[i].station = res.data[i].station.replace(/\n/g, '<br>')
                }
                this.work = res.data
            })
        },
        /**
            展开/收缩
            @param {Object} item 岗位
            @return
         */
        expand(item) {
            if (item.expand) {
                item.expand = false
            } else {
                for (let i=0; i<this.work.length; i++) {
                    this.work[i].expand = false
                }
                item.expand = true
            }
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
            top: 0; bottom: 0; left: 0; right: 0;
            margin: auto;
            width: 26rem; height: 6.9rem;
        }
        >.banner-title {
            position: absolute; z-index: 3;
            top: 0; bottom: 0; left: 0; right: 0;
            margin: auto;
            width: 26rem; height: 2.5rem;
            text-align: center; line-height: 2.5rem;
            font-size: 1.8rem; font-weight: bold;
            color: #4a384a;
        }
    }
    #info {
        position: relative;
        height: 77.8rem;
        background-color: #fff;
        >.info-title {
            position: absolute;
            top: 2.4rem; left: 0; right: 0;
            text-align: center; line-height: 2.1rem;
            font-size: 1.5rem; font-weight: bold;
        }
        >.info-item {
            position: absolute;
            left: 0; right: 0;
            height: 13rem;
            >.img {
                position: absolute;
                top: 0;
            }
            >.title {
                position: absolute;
                height: 3.3rem;
                line-height: 2.5rem;
                border-bottom: 0.1rem solid #cecece;
            }
            >.desc {
                position: absolute;
                top: 4rem;
                line-height: 2.2rem;
                font-size: 1.3rem;
            }
        }
        >.info-item.environment {
            top: 6.5rem;
            >.img {
                left: 2rem;
                width: 10.5rem; height: 12.2rem;
            }
            >.title {
                left: 12.4rem; right: 1.3rem;
                padding-left: 1.2rem;
            }
            >.desc {
                left: 13.5rem; right: 1.3rem;
            }
        }
        >.info-item.culture {
            top: 23.9rem;
            >.img {
                right: 2.2rem;
                width: 10.7rem; height: 12.2rem;
            }
            >.title {
                left: 1.3rem; right: 12.9rem;
            }
            >.desc {
                left: 1.1rem; right: 13.8rem;
            }
        }
        >.info-item.health {
            top: 42.1rem;
            >.img {
                left: 2.1rem;
                width: 10.6rem; height: 12.1rem;
            }
            >.title {
                left: 12.8rem; right: 1.3rem;
                padding-left: 1rem;
            }
            >.desc {
                left: 13.7rem; right: 1.3rem;
            }
        }
        >.info-item.welfare {
            top: 60.4rem;
            >.img {
                right: 2.1rem;
                width: 10.7rem; height: 12.2rem;
            }
            >.title {
                left: 1.2rem; right: 12.8rem;
            }
            >.desc {
                left: 1rem; right: 14rem;
            }
        }
    }
    #work {
        padding: 1.6rem 1.2rem 3.3rem 1.2rem;
        background-color: #fafafa;
        >.work-title {
            height: 2.1rem;
            margin-bottom: 1.6rem;
            text-align: center; line-height: 2.1rem;
            font-size: 1.5rem; font-weight: bold;
        }
        >.work-item {
            margin-top: 1.2rem;
            background-color: #fff;
            border-radius: 0.4rem;
            box-shadow: 0 0.2rem 1.6rem 0 #e7e7e7;
            >.work-info {
                position: relative;
                height: 6.8rem;
                >.work-name {
                    position: absolute;
                    top: 1.4rem; left: 1.6rem;
                    line-height: 2rem;
                    font-size: 1.4rem;
                }
                >.work-require {
                    position: absolute;
                    top: 3.8rem; left: 1.6rem;
                    line-height: 1.7rem;
                    font-size: 1.2rem;
                    color: #999;
                }
                >.work-expand {
                    position: absolute;
                    top: 3rem; right: 1.6rem;
                    width: 1rem; height: 0.8rem;
                }
            }
            >.work-duty {
                margin: 0 1.2rem 0 1.6rem;
                >span {
                    display: block;
                    line-height: 2.2rem;
                    font-size: 1.4rem;
                }
            }
            >.work-station {
                margin: 2rem 1.2rem 0 1.6rem; padding-bottom: 1.6rem;
                >span {
                    display: block;
                    line-height: 2.2rem;
                    font-size: 1.4rem;
                }
            }
        }
    }
    #contact {
        position: relative;
        height: 26.4rem;
        background-color: #fff;
        >.contact-title {
            position: absolute;
            top: 1.6rem; left: 0; right: 0;
            text-align: center; line-height: 2.1rem;
            font-size: 1.5rem; font-weight: bold;
        }
        >.contact-man {
            position: absolute;
            top: 5rem; left: 1.2rem;
            line-height: 2rem;
            font-size: 1.4rem;
        }
        >.contact-phone {
            position: absolute;
            top: 9.4rem; left: 1.2rem;
            line-height: 2rem;
            font-size: 1.4rem;
        }
        >.contact-email {
            position: absolute;
            top: 13.8rem; left: 1.2rem;
            line-height: 2rem;
            font-size: 1.4rem;
        }
        >.contact-desc {
            position: absolute;
            top: 18.2rem; left: 1.2rem; right: 1.2rem;
            line-height: 2rem;
            font-size: 1.4rem;
            color: #999;
        }
    }
</style>
<template>
    <div>
        <DIV class="vue-top-body">
            <div class="index-top">
                <div class="index-top-logo">
                    <div class="logos">
                        <span class="iconfont iconfont2">&#xe601; 满疆阅读</span>
                    </div>
                    <div class="logos-title">首页</div>
                    <!-- <div class="search"><input placeholder="大家都在看：棺天"></div> -->
                </div>
            </div>

            <div class="wrapper-menu">
                <div class="wrapper">
                    <div class="index-top-menu" :style="{width: size + 'px'}">
                        <ul>
                            <LI v-for="i in recommend" :key="i.id" @click="gotoPush('/ch',i.id)">
                                {{i.classname}}
                            </LI>
                        </ul>
                    </div>
                </div>
            </div>
        </DIV>

        <!--列表-->
        <div class="channel-box">

            <div class="box" :key=item.id v-for="(item, index) in recommend">

                <div class="channel-title">{{item.classname}}
                    <span @click="gotoPush('/ch',item.id)" class="iconfont iconfont_a">&#xe63c;</span>
                </div>

                <div :key=items.id v-for="(items, indexs) in item.list">

                    <div v-if="indexs===0" class="channel-title-box">
                        <div class="left">
                            <img @click="gotoPush ('/chapter', items.id)" onerror="this.src='../../static/face/871749.jpg'" :src="`http://www.xingbuluo.net/images/covers/${(items.id.substr(0,2))}/${items.id}.jpg`" />
                        </div>
                        <div class="right">
                            <div @click="gotoPush ('/chapter', items.id)" class="right-title">{{items.title}}<span>{{items.updatetime}}</span>
                            </div>
                            <div class="right-author">
                                <span class="tag">{{items.authorname}}</span>
                                <span class="author">字数：{{items.words}}</span>
                            </div>

                            <DIV class="right-desc">
                                {{items.intro}}
                            </DIV>
                        </div>
                    </div>

                    <template v-else>
                        <div class="channel-list-box">
                            <ul>

                                <LI><a @click="gotoPush ('/chapter', items.id)">{{items.title}}</a>
                                    <span class="words">
                                        <i>字</i>{{items.words}}</span>
                                    <span class="authorname">{{items.authorname}}</span>
                                </LI>

                            </ul>
                        </div>
                    </template>

                </div>
            </div>
            <!--这里结束-->

        </div>

    </div>
</template>
<script>
import { ViewBox, TransferDomDirective as TransferDom } from 'vux'
import BScroll from 'better-scroll'
export default {
  directives: {
    TransferDom
  },
  components: {
    ViewBox
  },
  data () {
    return {
      size: 0.690 * 100 * (window.screen.availWidth / 320) * 7,
      routerAnimate: false,
      recommend: null,
      enterAnimate: '',
      leaveAnimate: ''
    }
  },
  methods: {
    gotoPush (nam, param) {
       /* eslint-disable */
      nativeMethod.toActivity(nam + '/' + param)
      // this.$router.push({name: nam, params: {id: param}})
    }
  },
  mounted () {
    let self = this
    this.$nextTick(function () {
      self.GLOBAL.ajaxPost(self, 'home', {}, function (res) {
          self.recommend = res.text
          console.log(res)
      })
    })
    /* eslint-disable no-new */
    new BScroll(document.querySelector('.wrapper'), {
      scrollX: true,
      bounce: false,
      click: true,
      scrollY: false
    })
  }
}
</script>
<style lang="less" scoped>
div.vue-top-body {
    height: 0.62rem;
    position: fixed;
    background: #fff;
    z-index: 1000;
    top: 0;
    width: 100%;
}

div.index-top {
    height: 0.45rem;
    background-color: #009bf5;
    line-height: 0.001rem;
    padding-top: 0px;
    & div.index-top-logo {
        line-height: 0.001rem;
        margin-top: -0.14rem;
        height: 0.65rem;
        padding-left: 0.05rem;
        width: 100%;
        overflow: hidden;
        & .logos {
            text-align: left;
            height: 0.45rem;
            float: left;
            width: 50%;
            & .iconfont2 {
                color: #fff;
                font-size: 0.18rem;
                margin: 0;
                letter-spacing: 0;
            }
        }
        & .logos-title {
            width: 50%;
            text-align: right;
            height: 0.45rem;
            color: #fff;
            font-size: 0.17rem;
            margin: 0;
            line-height: 0.60rem;
            letter-spacing: 0;
            float: right;
            padding-right: 0.05rem;
        }

        & .search {
            overflow: hidden;
            height: 0.45rem;
            margin-top: -0.013rem;
            display: block;
            float: left;
            & input {
                margin: 0;
                padding: 0;
                width: 2.45rem;
                border: 1px solid #FFF;
                height: 0.22rem;
                border-radius: 0.4rem;
                padding-left: 0.25rem;
                font-size: 0.14rem;
                background: url(../assets/img/search.png) 0.07rem no-repeat;
                background-color: #fff;
                background-size: 0.14rem;
                line-height: 0.22rem;
                padding-top: 0.02rem;
            }
        }
    }
}

div.wrapper-menu {
    width: 100%;
    overflow: hidden;
    & div.index-top-menu {
        height: 0.3rem;
        line-height: 0.3rem;
        width: 100%;
        box-sizing: border-box;
        background: -webkit-linear-gradient(top, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) bottom left no-repeat;
        background: linear-gradient(180deg, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) bottom left no-repeat;
        background-size: 100% 1px;
        overflow: hidden;
        font-size: 0.15rem;
        box-sizing: border-box;
        position: relative;
        & ul {
            margin: 0;
            padding: 0;
            li {
                width: 0.8rem;
                float: left;
                margin: 0;
                padding: 0;
                text-align: center;
                & a.sel {
                    color: #009bf5;
                }
            }
        }
    }
}

.channel-box {
    padding-top: 0.405rem;
    font-size: 0.15rem;
    background: #f0f0f0;
    overflow: hidden;
    & div.box {
        background: #fff;
        overflow: hidden;
        clear: both;
        margin: 0.2rem 0;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
    }
    & .channel-title {
        -webkit-box-align: center;
        padding-left: 0.18rem;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.16rem;
        background: url(data:image/png;base64,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) no-repeat 0 -0.95rem;
        background-size: 1rem auto;
        font-weight: bold;
        padding-top: 0.05rem;
        & span {
            float: right;
            padding-right: 0.12rem;
            font-weight: normal;
            font-size: 0.15rem;
        }
    }
    & .channel-list-box {
        & ul {
            margin: 0 0.1rem;
            & li {
                height: 0.38rem;
                border-bottom: 1px solid #e9e9e9;
                font-size: 0.15rem;
                line-height: 0.38rem;
                width: 100%;
                overflow: hidden;
                & span {
                    float: right;
                    font-size: 0.12rem;
                    color: #a0a0a0;
                    &.words {
                        padding-left: 0.12rem;
                        & i {
                            padding: 0.01rem;
                            background: #eee;
                            border-radius: 0.1rem;
                            font-size: 0.1rem;
                            margin-right: 0.05rem;
                        }
                    }
                }
            }
        } // &:last-child{
        //      & ul li{
        //          border-bottom: 0;
        //   }
        // }
    }
    & .channel-title-box {
        width: 100%;
        overflow: hidden;
        & div.left {
            float: left;
            width: 31%;
            & img {
                padding: 0.1rem;
                width: 1.05rem;
                height: 1.3rem;
                border-radius: 0.15rem;
            }
        }
        & div.right {
            float: left;
            padding-top: 0.1rem;
            width: 67%;
            & .right-title {
                font-weight: bold;
                & span {
                    float: right;
                    font-weight: normal;
                    font-size: 0.11rem;
                    color: #a9a9a9;
                    line-height: 0.25rem;
                    padding-right: 0.1rem;
                }
            }
            & .right-author {
                height: 0.23rem;
                line-height: 0.2rem;
                margin-top: 0.06rem;
                width: 100%;
                clear: both;
                & .tag {
                    display: block;
                    padding: 0 0.07rem;
                    border-radius: 50%;
                    height: 0.2rem;
                    background: #e5e5e5;
                    float: left;
                    margin-right: 0.2rem;
                }
                & .author {
                    display: block;
                    padding: 0 0.07rem;
                    border-radius: 50%;
                    height: 0.2rem;
                    font-size: 0.11rem;
                    float: right;
                    color: #a0a0a0;
                    padding-right: 0.1rem;
                }
            }
            & .right-desc {
                word-wrap: break-word;
                text-align: justify;
                text-overflow: ellipsis;
                height: 0.6rem;
                font-size: 0.12rem;
                overflow: hidden;
                line-height: 0.2rem;
                text-indent: 0.2rem;
                color: #999;
            }
        }
    }
}
</style>

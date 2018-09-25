
<template>
    <div class="__globalChnnelChapter">
        <div class="channel-box-top-ch">
            <!-- <DIV class="channel-box-top-back-ch">
                <span slot="icon" class="iconfont">&#xe62c;</span>
            </DIV> -->
            <DIV class="channel-box-top-back-title">{{classname}}
            </DIV>
        </div>
        <DIV class="lists">
            <ul>
                <li v-for="(item, index) in recommend" @click="gotoPush('/message', item.id , item.resid)"><span  class="serial">{{item.serial}}</span><span class="title">{{item.title}}</span><span class="words">字：{{item.words}}</span></li>
            </ul>
        </DIV>
    </div>
</template>

<script>
import { TransferDomDirective as TransferDom } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
  },
  data () {
    return {
      recommend: null,
      count: 0,
      classname: null,
      height: ((window.screen.availHeight - 0.4 * 20)) + 'px'
    }
  },
  methods: {
    gotoPush (nam, param, resid) {
       /* eslint-disable */
      nativeMethod.toActivity(nam + '/' + param + '/' + resid)
    }
  },
  created () {
    let self = this
    this.$nextTick(() => {
      this.GLOBAL.ajaxPost(self, 'ch2', {rid: this.$route.params.rid}, function (res) {
        self.classname = res.text.title
      })
      this.GLOBAL.ajaxPost(self, 'chartset', {resid: this.$route.params.rid}, function (res) {
        self.recommend = res.text
        self.$nextTick(() => {
        })
      })
    })
  }
}
</script>
<style lang="less">
div.__globalChnnelChapter {
    & .lists {
        margin-top: 0.45rem;
        & ul {
            & li {
                height: 0.25rem;
                margin:  0.15rem 0.15rem;
                font-size: 0.18rem;
                line-height: 0.18rem;
                border-bottom: 1px solid #eee;
                & span{
                  display: inline;      
                    &.serial{
                        padding-left: 0.01rem;
                        width: 10%;
                        float: left;
                        border-right: 1px solid #eee;
                    }
                    &.title{
                        padding-left: 0.04rem;
                    }
                    &.words{
                        padding-right: 0.02rem;
                        width: 14%;
                        float: right;
                        display: block;
                        color: #ccc;
                        font-size: 0.08rem;
                    }
                }

            }
        }
    }
    .wrapper2 {
        margin-top: 0.38rem;
        overflow: hidden;
        width: 100%;
        background: #FFF;
    }
    .channel-box-top-ch {
        height: 0.4rem;
        background-color: #009bf5;
        width: 100%;
        line-height: 0.4rem;
        position: fixed;
        z-index: 1000;
        top: 0;
        color: #fff;
        & .channel-box-top-back-ch {
            float: left;
            width: 0.4rem;
            height: 0.4rem;
            text-align: center;
            font-size: 0.12rem;
        }
        & .channel-box-top-back-title {
            float: left;
            height: 0.4rem;
            width: calc(100% - 40px);
            padding-left: calc((100%-40px)/2);
            font-size: 0.17rem;
        }
    }
    .channel-box {
        clear: both;
        margin: 0 0.2rem;
        padding-top: 0.15rem;
        & .channel-box-ch-line {
            width: 100%;
            border-bottom: 1px solid #ebebeb;
            height: 0.1rem;
            margin-bottom: 0.1rem;
        }
    }
    .channel-box-ch {
        width: 100%;
        font-size: 0.15rem;
        background: #FFF;
        overflow: hidden;
        & .left {
            float: left;
            width: 33%;
            & img {
                width: 0.9rem;
                height: 1.1rem;
                border-radius: 0.08rem;
            }
        }
        & .right {
            float: left;
            width: 65%;
            & ul {
                & li {
                    &:nth-child(1) {
                        font-weight: bold;
                        height: 0.35rem;
                        & span {
                            font-size: 0.1rem;
                            color: #FF6000;
                            float: right;
                            font-weight: normal;
                            margin-top: 0.03rem;
                        }
                    }
                    &:nth-child(2) {
                        height: 0.35rem;
                        & span {
                            font-size: 0.12rem;
                            color: #999;
                            float: right;
                        }
                    }
                    &:nth-child(3) {
                        font-size: 0.125rem;
                        height: 0.35rem;
                        line-height: 0.18rem;
                        overflow: hidden;
                    }
                }
            }
        }
    }
}
</style>

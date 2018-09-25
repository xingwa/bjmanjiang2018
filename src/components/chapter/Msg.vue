
<template>
    <div class="__globalChnnelMsg">
        <div class="channel-box-top-ch">
            <!-- <DIV class="channel-box-top-back-ch">
                <span slot="icon" class="iconfont">&#xe62c;</span>
            </DIV> -->
            <DIV class="channel-box-top-back-title">
                {{classname}}
            </DIV>
        </div>
        <DIV class="msg" v-html="recommend">>
  
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
    gotoPush (nam, param) {
       /* eslint-disable */
      nativeMethod.toActivity(nam + '/' + param)
    }
  },
  created () {
    let self = this
    this.$nextTick(() => {
      this.GLOBAL.ajaxPost(self, 'ch2', {rid: this.$route.params.rid}, function (res) {
        self.classname = res.text.title
      })
      this.GLOBAL.ajaxPost(self, 'msg', {cid: this.$route.params.cid, rid: this.$route.params.rid}, function (res) {
        self.recommend = res.text
        self.$nextTick(() => {
        })
      })
    })
  }
}
</script>
<style lang="less">
div.__globalChnnelMsg {
    & .msg {
        margin-top: 0.45rem;
        font-size: 0.15rem;
        & p{
            text-indent: 0.2rem;
            margin: 0.12rem 0.16rem;
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
            width: calc(100% - 15px);
            padding-left: calc((100%-15px)/2);
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

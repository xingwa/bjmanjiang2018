<template>
    <div class="______paylist">
        <div>
            <div>
                <blur :blur-amount=40 :url="url">
                    <p class="center"><img style="width:100%" :src="url"></p>
                </blur>
            </div>
        </div>

        <div>
            <ul class="ul_plsys">
                <LI>钻石会员
                    <span @click="gotoPush('/pay','20')" class="iconfont">20元
                        <i>&#xe70c;</i>
                    </span>
                </LI>
                <LI>金牌会员
                    <span @click="gotoPush('/pay','15')" class="iconfont">15元
                        <i>&#xe70c;</i>
                    </span>
                </LI>
                <LI>银牌会员
                    <span @click="gotoPush('/pay','10')" class="iconfont">10元
                        <i>&#xe70c;</i>
                    </span>
                </LI>
                <LI>铜牌会员
                    <span @click="gotoPush('/pay','5')" class="iconfont">5元
                        <i>&#xe70c;</i>
                    </span>
                </LI>

            </ul>
        </div>

        <div>

            <P class="info">
               <strong>会员等级说明：</strong>满疆会员目前有五个等级：普通会员（免费注册）、铜牌会员、银牌会员、金牌会员和钻石会员，根据会员等级的不同而享受不同的阅读权限。</P>
        </div>

    </div>
</template>

<script>
import { XButton, Group, Icon, Cell, XInput, Blur, TransferDomDirective as TransferDom } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    Group,
    Icon,
    XInput,
    XButton,
    Blur,
    Cell
  },
  methods: {
    gotoPush (nam, param) {
       /* eslint-disable */
      nativeMethod.toActivity(nam + '/' + param)
    }
  },
  data () {
    return {
      url: '../../static/img/face.png',
      recommend: null,
      count: 0,
      height: ((window.screen.availHeight - 0.4 * 20)) + 'px'
    }
  }
}
</script>

<style lang="less">
div.______paylist {
    & .info {
        font-size: 0.16rem;
        padding-top: 0.3rem;
        padding: 0.1rem 0.2rem;
        overflow: hidden;
        font-size: 0.16rem;
    }
    & .weui-cells {
        font-size: 0.16rem;
    }
    & .ul_plsys {
            margin-top: 0.45rem;
            width: 100%;
            & li {
                height: 0.45rem;
                border-bottom: 1px solid #ededed;
                margin: 0px 15px;
                width: calc(100% - 10px);
                clear: both;
                float: left;
                font-size: 0.16rem;
                line-height: 0.45rem;
                & span {
                    float: right;
                    font-size: 0.15rem;
                    & i{
                        font-style: normal;
                        padding: 0 2px;
                    }
                }
                &:first-child{
                border-top: 1px solid #ededed; 
                }
            }
        }
        & .ul_plsys_line{
            width: 100%; padding-top: 0.01rem;
            overflow: hidden; clear: both;
        }
}
</style>

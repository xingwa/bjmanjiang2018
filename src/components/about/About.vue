<template>
    <div class="______aboutlist">
        <div>
            <blur :blur-amount=40 :url="url">
                <p class="center">
                    <img style="width:100%" :src="url">
                </p>
                <!-- <p class="name">张罗罗</p> -->
            </blur>
        </div>
        <div>
            <ul class="ul_plsys">
              
                <LI>我的等级
                    <span @click="gotoPush ('/paylist')" class="iconfont">
                    {{loginfo && loginfo.levelname}}
                        <i>&#xe70c;</i>
                    </span>
                </LI>
                  <LI>我的账号
                    <span class="iconfont">{{loginfo && loginfo.name}}</span>
                </LI>

            </ul>
        </div>
        <div class="ul_plsys_line">
                  <ul class="ul_plsys">
                <LI @click="gotoPush ('/aboutme')">关于我们
                    <span class="iconfont">
                        <i>&#xe70c;</i>
                    </span>
                </LI>
                <LI @click="gotoPush ('/packbug')">联系我们
                    <span class="iconfont">
                        <i>&#xe70c;</i>
                    </span>
                </LI>

            </ul>
        </div>      
          <div>
            <ul class="ul_plsys">
              
                <LI @click="logout">退出账号
                    <span  class="iconfont">
                     <i>&#xe70c;</i>
                     
                    </span>
                </LI>
               

            </ul>
        </div>

    </div>
</template>

<script>
import { Group, Cell, Blur, TransferDomDirective as TransferDom } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    Group,
    Blur,
    Cell
  },
  data () {
    return {
      url: '../../static/img/face.png'
    }
  },
  computed: {
    loginfo () {
      try {
        if (window.localStorage.getItem('admin') === undefined || window.localStorage.getItem('admin') === null || !window.localStorage.getItem('admin')) {
          return false
        }
        return JSON.parse(window.localStorage.getItem('admin'))
      } catch (error) {
        return false
      }
    }
  },
  mounted () {
  },
  methods: {
    gotoPush (nam) {
       /* eslint-disable */
      nativeMethod.toActivity(nam)
    },
    logout () {
      let self = this
      self.$store.commit('setloginObj',null)
      window.localStorage.setItem('admin', null)
      self.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="less">
.center {
    text-align: center;
    color: #fff;
    font-size: 0.12rem;
}

.name {
    width: 100%;
    text-align: center;
    font-size: 0.18rem;
}

div.______aboutlist {
    & .info {
        font-size: 0.18rem;
        margin-top: 0.15rem;
        padding: 0.08rem 0.1rem;
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

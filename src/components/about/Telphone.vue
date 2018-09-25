<template>
    <div class="______aboutlist">
        <div>
            <blur :blur-amount=40 :url="url">
                <p class="center">
                    <img style="width:100%" :src="url">
                </p>
            </blur>
        </div>
          <div class="ul_plsys_line">
            <ul class="ul_plsys">
             
                  <LI>我的账号
                    <span class="iconfont">{{loginfo && loginfo.name}}</span>
                </LI>

                 
                <LI>天翼特权
                    <span class="iconfont">
                       天翼专区任意 1 本选读
                    </span>
                </LI>

                 <LI @click="gotoPush ('/telList')">阅读权限
                    <span class="iconfont">
                        点击购买<i>&#xe70c;</i>
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
        if (window.localStorage.getItem('admin') === undefined || window.localStorage.getItem('admin') === 'null' || window.localStorage.getItem('admin') === null || !window.localStorage.getItem('admin')) {
          this.$router.push('/login')
          return false
        }
        return JSON.parse(window.localStorage.getItem('admin'))
      } catch (error) {
        return false
      }
    }
  },
  mounted () {
    if (window.localStorage.getItem('admin') === undefined || window.localStorage.getItem('admin') === 'null' || window.localStorage.getItem('admin') === null || !window.localStorage.getItem('admin')) {
      this.$router.push('/login')
      return false
    }
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

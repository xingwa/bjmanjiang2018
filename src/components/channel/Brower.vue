<template>
    <div class="__globalChnnels">
        <div  class="channel-box-top-ch">

  
             <DIV class="channel-box-top-back-title">
                    <span class="iconfont iconfont2">&#xe601;满疆VIP</span>
                <!-- VIP阅读 -->
            </DIV>
        </div>
      <!--列表-->
        <DIV  :style="{height:height}"  ref="wrapper2" class="wrapper2">
            <div>
                <div class="channel-box" v-for="(item, index) in recommend">
               
                    <div class="channel-box-ch" >
                      

                        <div class="left">
                            <img  @click="gotoPush ('/chapter', item.id, item.vip)"  onerror="this.src='../../../static/face/871749.jpg'" :src="`http://www.xingbuluo.net/images/covers/${(item.id.substr(0,2))}/${item.id}.jpg`" />
                        </div>



                        <div class="right">
                            <UL>
                               
                               
                                <LI @click="gotoPush ('/chapter', item.id, item.vip)" >{{item.title}} 
                                    <span>{{item.words}}</span>
                                </LI>


                                <li>{{item.authorname}}
                                    <span>{{item.levelname}}</span>
                                </li>
                                <LI>{{item.intro}}</LI>
                            </UL>
                        </div>
                    </div>
                    <div class="channel-box-ch-line"></div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { TransferDomDirective as TransferDom } from 'vux'
import BScroll from 'better-scroll'
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
      height: ((window.screen.availHeight - 0.4 * 20)) + 'px'
    }
  },
  computed: {
    loginfo () {
      try {
        return JSON.parse(window.localStorage.getItem('admin'))
      } catch (error) {
        return false
      }
    }
  },
  created () {
    let self = this
    this.$nextTick(() => {
      this.GLOBAL.ajaxPost(self, 'vip', {id: this.$route.params.id}, function (res) {
        self.recommend = res.text
        self.$nextTick(() => {
          let BScroll2 = new BScroll(self.$refs.wrapper2, {
            scrollX: false,
            scrollY: true,
            click: true,
            pullDownRefresh: true,
            probeType: 3,
            pullUpLoad: false
          })
          let scrolls = BScroll2
          BScroll2.on('scroll', function (position) {
            if (position.y < (this.maxScrollY + 200)) {
              // let listContent = document.querySelector('.channel-box')
              // let template = "没有数据了"
              self.count = self.count + 1
              self.GLOBAL.ajaxPost(self, 'vip', {id: self.$route.params.id, page: self.count}, function (res) {
                self.$nextTick(() => {
                  res.text.forEach(function (element) {
                    self.recommend.push(element)
                  }, this)
                  scrolls.refresh()
                })
              })
            }
          })
          BScroll2.on('touchEnd', function (position) {
          })
        })
      })
    })
  },
  mounted () {
    this.$nextTick(() => {
    })
  },
  methods: {
    gotoPush (nam, param, nsd) {
       /* eslint-disable */
      let self = this
      let info = false
      try {
        if (window.localStorage.getItem('admin') === undefined || window.localStorage.getItem('admin') === null || !window.localStorage.getItem('admin')) {
          info = false
        }else{
        info =  JSON.parse(window.localStorage.getItem('admin'))
        }
      } catch (error) {
        info =  false
      }
      if(info && parseInt(info.level) >= parseInt(nsd)){
         nativeMethod.toActivity(nam + '/' + param)
        // this.$router.push({name: nam, params: {id: param}})
      }else{
            self.$vux.toast.show({
              position: 'top',
              type: 'text',
              text: '对不起，你的会员等级不能查看此书！'
            })
      }
    }
  }
}
</script>
<style lang="less">
div.__globalChnnels{
    .wrapper2{
         margin-top: 0.38rem;
         overflow: hidden;
         width:100%;
         background: #FFF;
    }
    .channel-box-top-ch {
        height: 0.4rem;
        background-color: #009bf5; 
        width: 100%;
        line-height: 0.4rem;
        position: fixed;
        z-index: 1000;
        top:0;
        color: #fff;
        & .channel-box-top-back-ch{
            float: left;
            width: 0.4rem;
            height: 0.4rem;
            text-align: center;
            font-size: 0.12rem;
        }
        & .channel-box-top-back-title{
            float: left;
            height: 0.4rem;
            padding-left: calc((100%-25px)/2);
            font-size: 0.17rem;
        }
    }
    .channel-box{
        clear: both;
        margin: 0 0.2rem;
        padding-top: 0.15rem;
        & .channel-box-ch-line{
            width: 100%;
            border-bottom: 1px solid #ebebeb;
            height: 0.1rem;
            margin-bottom: 0.1rem;
        }
    }
    .channel-box-ch{
    width: 100%;
    font-size: 0.15rem;
    background: #FFF;
    overflow: hidden;
    & .left{
        float: left;
        width: 33%;
        & img{
            width: 0.9rem;
            height: 1.1rem;
            border-radius: 0.08rem;
        }
    }
    & .right{
        float: left;
        width: 65%;
        & ul{
            & li{
                &:nth-child(1){
                    font-weight: bold;
                    height: 0.35rem;
                    & span{
                        font-size: 0.1rem;
                        color:#FF6000;
                        float: right;
                        font-weight: normal;
                        margin-top: 0.03rem;
                    }
                }
                &:nth-child(2){
                    height: 0.35rem;
                    & span{
                        font-size: 0.12rem;
                        color:#999;
                        float: right;
                    }
                }
                &:nth-child(3){
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

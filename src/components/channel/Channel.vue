<template>
    <div class="__globalChnnel" >
        <div class="channel-box-top-ch">{{classname}}
            <!-- <DIV class="channel-box-top-back-ch">
                <span slot="icon" class="iconfont">&#xe62c;</span>
            </DIV> -->
            <DIV class="channel-box-top-back-title">
            </DIV>
        </div>
        <!--列表-->
        <DIV  :style="{height:height}"  ref="wrapper2" class="wrapper2">
            <div>
                <div class="channel-box" v-for="(item, index) in recommend">
               
                    <div class="channel-box-ch" >
                        <div class="left">
                            <img  @click="gotoPush ('/chapter', item.id)"  onerror="this.src='../../../static/face/871749.jpg'" :src="`http://www.xingbuluo.net/images/covers/${(item.id.substr(0,2))}/${item.id}.jpg`" />
                        </div>
                        <div class="right">
                            <UL>
                                <LI @click="gotoPush ('/chapter', item.id)" >{{item.title}}
                                    <span>{{item.words}}</span>
                                </LI>
                                <li>{{item.authorname}}
                                    <span>{{item.keyword}}</span>
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
      classname: null,
      count: 0,
      height: ((window.screen.availHeight - 0.4 * 20)) + 'px'
    }
  },
  created () {
    let self = this
    this.$nextTick(() => {
      console.log(this.$route.params.id)
      this.GLOBAL.ajaxPost(self, 'ch1', {cid: this.$route.params.id}, function (res) {
        self.classname = res.text.classname
      })
      this.GLOBAL.ajaxPost(self, 'channel', {id: this.$route.params.id}, function (res) {
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
              self.GLOBAL.ajaxPost(self, 'channel', {id: self.$route.params.id, page: self.count}, function (res) {
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
    gotoPush (nam, param) {
       /* eslint-disable */
      nativeMethod.toActivity(nam + '/' + param)
      // this.$router.push({name: nam, params: {id: param}})
    }
  }
}
</script>
<style lang="less">
div.__globalChnnel{
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
        font-size: 0.18rem;
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
            font-size: 0.18rem;
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

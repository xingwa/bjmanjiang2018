<template>
    <div class="__globalChnnels">
        <div  class="channel-box-top-ch">

  
             <DIV class="channel-box-top-back-title">
                    <span v-show="url==1" class="iconfont iconfont2">兴农资讯</span>
                    <span v-show="url==2" class="iconfont iconfont2">农事指导</span>
                    <span v-show="url==3" class="iconfont iconfont2">掌技宝典</span>
                    <span v-show="url==4" class="iconfont iconfont2">种子鉴定</span>
                    <span v-show="url==5" class="iconfont iconfont2">快销助手</span>
                <!-- VIP阅读 -->
            </DIV>
        </div>
      <!--列表-->
        <DIV  ref="wrapper2" class="wrapper2">
            <div>
                <div v-show="url==1" class="channel-box" >
               
                    <div class="channel-box-ch" >
          
                    <DIV><strong>业务名称：</strong>兴农资讯</DIV>
                       <div class="channel-box-ch-line"></div>
                     <DIV><strong>业务资费：</strong>1元1条</DIV>
                        <div class="channel-box-ch-line"></div>
                   <div><strong>业务描述：</strong>在党和国家三农政策指引下，尤其是以习近平为核心的党的十八大以来对精准扶贫等三农工作的高度重视，本着“农民富强、资讯先行”的原则，结合农业资源的授权合作而设计了“兴农资讯”，该产品是一款面向中国移动用户的与农业、农村、农民等相关的短信点播产品，着眼于满足订阅者对农村、农业、农民及城乡相关新资讯的需求。</div>
                   <div class="channel-box-ch-line"></div>     
                   <DIV><strong>使用方法：</strong>手机编辑短信“1”到106690551</DIV>
                      <div class="channel-box-ch-line"></div>
                   <DIV><strong>客服热线：</strong>4001184666</DIV>


                    </div>
                    <div class="channel-box-ch-line"></div>
                    
                </div>


                    <div v-show="url==2" class="channel-box" >
               
                    <div class="channel-box-ch" >
          
                    <DIV><strong>业务名称：</strong>农事指导</DIV>
                       <div class="channel-box-ch-line"></div>
                     <DIV><strong>业务资费：</strong>1元1条</DIV>
                        <div class="channel-box-ch-line"></div>
                   <div><strong>业务描述：</strong>我司根据农业部官方网站的信息栏，每年全国农业技术推广服务中心会根据不同季节对不同的农作物进行生产技术指导和科学用药，强化技术宣传和推广引导，通过多项措施做好相关农作物的顺利生产，确保丰收。广大农民以此业务得知不同季节农作物的各方面指导意见。增产增收，一举两得。</div>
                   <div class="channel-box-ch-line"></div>     
                   <DIV><strong>使用方法：</strong>手机编辑短信“7”到10669055</DIV>
                      <div class="channel-box-ch-line"></div>
                   <DIV><strong>客服热线：</strong>4001184666</DIV>


                    </div>
                    <div class="channel-box-ch-line"></div>
                    
                </div>

        <div v-show="url==3" class="channel-box" >
               
                    <div class="channel-box-ch" >
          
                    <DIV><strong>业务名称：</strong>掌技宝典</DIV>
                       <div class="channel-box-ch-line"></div>
                     <DIV><strong>业务资费：</strong>1元1条</DIV>
                        <div class="channel-box-ch-line"></div>
                   <div><strong>业务描述：</strong>把农业部体系各级各类优良种子鉴定数据、种群鉴定数据形成“掌技宝典”的数据库，全国的各地相关用户在当地购买作物种子（或种猪、种鸡等家畜家禽）前，可从“掌技宝典”中了解良种产品的名称、原产地、生产者等信息，以帮助用户选择。</div>
                   <div class="channel-box-ch-line"></div>     
                   <DIV><strong>使用方法：</strong>手机编辑短信“3”到10669055</DIV>
                      <div class="channel-box-ch-line"></div>
                   <DIV><strong>客服热线：</strong>4001184666</DIV>


                    </div>
                    <div class="channel-box-ch-line"></div>
                    
                </div>



        <div v-show="url==4" class="channel-box" >
               
                    <div class="channel-box-ch" >
          
                    <DIV><strong>业务名称：</strong>种子鉴定</DIV>
                       <div class="channel-box-ch-line"></div>
                     <DIV><strong>业务资费：</strong>1元1条</DIV>
                        <div class="channel-box-ch-line"></div>
                   <div><strong>业务描述：</strong>一粒种，万担粮。种子真假优劣与农业增产和农民增收息息相关，本业务汇集农业部直属单位种子局以及各个研究院、研究所等等机构的知名专家鉴别种子的真假、优质的方法和技巧。通过点播我司业务便于农民识假和相关企业打假。辨别种子真伪和优质，增强农民识假能力和自我保护意识。</div>
                   <div class="channel-box-ch-line"></div>     
                   <DIV><strong>使用方法：</strong>手机编辑短信“9”到10669055</DIV>
                      <div class="channel-box-ch-line"></div>
                   <DIV><strong>客服热线：</strong>4001184666</DIV>


                    </div>
                    <div class="channel-box-ch-line"></div>
                    
                </div>


        <div v-show="url==5" class="channel-box" >
               
                    <div class="channel-box-ch" >
          
                    <DIV><strong>业务名称：</strong>快销助手</DIV>
                       <div class="channel-box-ch-line"></div>
                     <DIV><strong>业务资费：</strong>10元/月</DIV>
                        <div class="channel-box-ch-line"></div>
                   <div><strong>业务描述：</strong>在历年国务院一号文精神指引下，尤其是两会聚集三农发展的政策鼓舞下，结合农业部体系的系统性资源，发挥互联网便捷、快速、高效的优势而设计了快销助手，以帮助农民朋友快销手中产品直接现金回笼。让滞销的农产品尽快得到较好的销路的产品。在促进销售效率的同时进一步提高了农产品投放市场的新鲜度。</div>
                   <div class="channel-box-ch-line"></div>     
                   <DIV><strong>使用方法：</strong>手机编辑短信“2”到106690552</DIV>
                      <div class="channel-box-ch-line"></div>
                   <DIV><strong>客服热线：</strong>4001184666</DIV>


                    </div>
                    <div class="channel-box-ch-line"></div>
                    
                </div>



            </div>
        </div>
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
      url: this.$route.params.url,
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

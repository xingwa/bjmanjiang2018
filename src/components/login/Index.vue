<template>
    <div>
        <div  class="channel-box-top-ch">
            <DIV class="channel-box-top-back-ch">
                <span slot="icon" class="iconfont" >&#xe62c;</span>
            </DIV>
             <DIV class="channel-box-top-back-title">
                都市言情
            </DIV>
        </div>
       <!--列表-->
       <div class="channel-box">
             <div class="channel-box-ch">
                 <div class="left">
                       <img src="../../../static/face/871749.jpg" />
                 </div>
                 <div class="right">
                     <UL>
                         <LI>穿越市井之妃要当家<span>53.3万字</span></LI>
                         <li>冰河时代 <span> 春秋 历史 消化</span></li>
                         <LI> 传说，南陈嫡公主南宫仪乃第一美人，闭月羞花，沉鱼落雁！传说，...</LI>
                     </UL>
                 </div>
             </div>
              <div class="channel-box-ch-line"></div>
             
            <div class="channel-box-ch">
                 <div class="left">
                       <img src="../../../static/face/871749.jpg" />
                 </div>
                 <div class="right">
                     <UL>
                         <LI>穿越市井之妃要当家<span>53.3万字</span></LI>
                         <li>冰河时代 <span> 春秋 历史 消化</span></li>
                         <LI> 传说，南陈嫡公主南宫仪乃第一美人，闭月羞花，沉鱼落雁！传说，...</LI>
                     </UL>
                 </div>
             </div>
                 <div class="channel-box-ch-line"></div>
             
            <div class="channel-box-ch">
                 <div class="left">
                       <img src="../../../static/face/871749.jpg" />
                 </div>
                 <div class="right">
                     <UL>
                         <LI>穿越市井之妃要当家<span>53.3万字</span></LI>
                         <li>冰河时代 <span> 春秋 历史 消化</span></li>
                         <LI> 传说，南陈嫡公主南宫仪乃第一美人，闭月羞花，沉鱼落雁！传说，...</LI>
                     </UL>
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
    }
  }
}
</script>
<style lang="less" scoped>
.channel-box-top-ch {
    height: 0.4rem;
    background-color: #009bf5; 
    width: 100%;
    line-height: 0.4rem;
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
        width: calc(100% - 40px);
        padding-left: calc((100%-40px)/2);
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
</style>

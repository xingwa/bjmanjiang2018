<template>
    <div class="__globalChnnel" >
        <div class="channel-box-top-ch">科技宝典
            <!-- <DIV class="channel-box-top-back-ch">
                <span slot="icon" class="iconfont">&#xe62c;</span>
            </DIV> -->
            <DIV class="channel-box-top-back-title">
            </DIV>
        </div>
        <!--列表-->
        <DIV   ref="wrapper2" class="wrapper2">
            <div>
                <div class="channel-box" >
                   
                    <div @click="gotoPush('/baodian','1')" class="channel-box-ch-line-20171030">
                        <span class="title">1、兴农资讯</span>
                       <span class="money">1元/条</span>
                        <span class="iconfont">
                            <i>&#xe70c;</i>
                        </span>

                    </div>
                 
                        <div class="channel-box-ch-line"></div>

              <div  @click="gotoPush('/baodian','2')" class="channel-box-ch-line-20171030">
                        <span class="title">2、农事指导</span>
                       <span class="money">1元/条</span>
                        <span class="iconfont">
                            <i>&#xe70c;</i>
                        </span>

                    </div>       
                        <div class="channel-box-ch-line"></div>



                      
                      <div  @click="gotoPush('/baodian','3')" class="channel-box-ch-line-20171030">
                        <span class="title">3、掌技宝典</span>
                       <span class="money">1元/条</span>
                        <span class="iconfont">
                            <i>&#xe70c;</i>
                        </span>

                    </div> 
             
                        <div class="channel-box-ch-line"></div>




                   <div @click="gotoPush('/baodian','4')" class="channel-box-ch-line-20171030">
                        <span class="title">4、种子鉴定</span>
                       <span class="money">1元/条</span>
                        <span class="iconfont">
                            <i>&#xe70c;</i>
                        </span>

                    </div>
                 
                        <div class="channel-box-ch-line"></div>


                                           <div @click="gotoPush('/baodian','5')"  class="channel-box-ch-line-20171030">
                        <span class="title">5、快销助手</span>
                       <span class="money">10元/月</span>
                        <span class="iconfont">
                            <i>&#xe70c;</i>
                        </span>

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
      classname: null,
      count: 0,
      height: ((window.screen.availHeight - 0.4 * 20)) + 'px'
    }
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
.channel-box-ch-line-20171030{
    font-size: 0.185rem;
    height: 0.2rem;
    line-height: 0.2rem;
    width: 100%;
    & .iconfont{
        float: right;
        font-size: 0.185rem;
        & i{
          font-style:normal;
        }
    }
    & .money{
        float: left;
        padding-left: 0.25rem;
    }
        & .title{
        float: left;
    }
}
</style>

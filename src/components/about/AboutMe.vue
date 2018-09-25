<template>
    <div class="______aboutlist">
        <div>
            <blur :blur-amount=40 :url="url">
                <p class="center">
                    <img style="width:100%" :src="url">
                </p>
            </blur>
        </div>
        <div>
            <div></div>
            <div class="about_txt">
                <P>北京满疆科技开发有限公司创立于2000年，经过十年时间的不懈努力与发展。现在，公司已成为国内成熟的原创文学创作与阅读平台，优秀的原创文学数字版权运营商之一。</P>

                <P>公司为所有文学爱好者提供涵盖言情、玄幻、网游、武侠、修真等长篇系列和精品短篇、散文、诗歌等体裁的网络原创文学作品的阅读和创作在线服务。现拥有原创文学作品3万余部，为了丰富作品类型，给广大读者提供更多更精彩的原创作品。广泛征集婚姻、家庭、职场、刑侦等各类优秀原创文学作品，为更多网络文学爱好者打造最广阔的发展平台。</P>

                <P>作为老牌文学网站，公司在数字内容版权运营及行业技术方面，一直保持业界领先地位。公司一直致力于为网络文学爱好者创造家园式创作氛围，提供真诚、友好的交流平台。完善的推荐制度，透明、及时的稿酬结算系统，为作者提供无忧的创作环境；优质的服务为读者和作者之间的互动更加的畅通无阻。</P>

                <P>公司致力于繁荣中国文学原创事业。专注于为用户提供涵盖电子付费阅读、无线增值、网络增值、图书出版、影视授权等数字内容版权运营服务。面对欣欣向荣的网络文学行业，公司将一如既往的为广大文学爱好者和合作伙伴提供最优质的服务。</P>

                <P>公司地址：北京市东城区东安门大街55号王府世纪大厦410室，邮编：100006 </P>

                <P>联系电话：010-82658280</P>

                <P>传　　真：010-82658280</P>
            </div>
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
  methods: {
    gotoPush (nam) {
       /* eslint-disable */
      nativeMethod.toActivity(nam)
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
    & .about_txt{
        padding: 0.11rem;
        font-size: 0.16rem;
        & p{
            text-indent: 0.16rem;
            line-height: 0.3rem;
            padding-top: 0.2rem;
        }
    }
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

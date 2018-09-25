<template>
    <div class="______pay">
        <div>
            <div>
                <blur :blur-amount=40 :url="url">
                    <p class="center"><img style="width:100%" :src="url"></p>
                </blur>
            </div>
        </div>
  <group>
        <x-input title="订购套餐："  v-model="user.level"  :readonly="readonly"  ></x-input>

        </group>
        <group>
            <x-input  v-model="user.mobile" ref="mobile"  title="手机号码："></x-input>
        </group>

        <group>
            <x-input  v-model="user.code"  ref="code" title="短信验证码：" class="weui-vcode">
                <x-button slot="right" :disabled="disable" ref="sendCodeBtn" @click.native="getCode" type="primary" mini>
                    {{btn}}</x-button>
            </x-input>
        </group>

        <group>
            <x-button @click.native="submit" type="warn">提交</x-button>
        </group>
        <div>

        <P class="info">
             <icon type="info"></icon>支付说明：支持满疆科技·满疆书城的 <strong>联名快捷</strong>订购（使用之前请预先绑定），输入手机号码和验证码进行套餐订购！</P>
        </div>

    </div>
</template>

<script>
/* eslint-disable */
function xingwa(keys) {
    let users=''
    switch (keys) {
        case "5":
             users = keys + '元（铜牌会员）'

            break;
        case "10":
            users = keys + '元（银牌会员）'
            break;
        case "15":
            users = keys + '元（金牌会员）'
            break;
        case "20":
            users =  keys + '元（钻石会员）'
            break;
    }
    return users 
}
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
  data () {
    return {
      user: {level: xingwa(this.$route.params.level)},
      btn: '点击发送验证码',
      timeOut: 0,
      readonly: true,
      disable: false,
      url: '../../static/img/face.png',
      recommend: null,
      count: 0,
      height: ((window.screen.availHeight - 0.4 * 20)) + 'px'
    }
  },
  methods: {
    submit () {
      let self = this
      let userinfo = false
      try {
        userinfo= JSON.parse(window.localStorage.getItem('admin'))
      } catch (error) {
        userinfo =false
      }
      console.log( userinfo)
      console.log(window.localStorage.getItem('sixnum'))
      if (userinfo && userinfo.uid && this.user.mobile &&  this.user.mobile.length === 11 && this.user.code &&  this.user.code.length === 6  && this.user.code ===  window.localStorage.getItem('sixnum')) {
       this.user.num = this.$route.params.level
       if(this.$route.params.level=='5'){
           this.user.num = 1
       }else if (this.$route.params.level == '10' ){
           this.user.num = 2
       }else if(this.$route.params.level == '15'){
           this.user.num = 3
       }else if(this.$route.params.level == '20'){
           this.user.num = 4
       }
       this.user.uid  = userinfo.uid
       console.log(this.user)
       this.GLOBAL.ajaxPost(self, 'updateLevel', this.user, function (res) {
          if (res.text && res.text.uid) {
            self.$store.commit('setloginObj', JSON.stringify(res.text))
            window.localStorage.setItem('admin', JSON.stringify(res.text))
            self.$router.push('/me')
          } else {
            self.$vux.toast.show({
              position: 'top',
              type: 'text',
              text: '对不起，订购失败！'
            })
          }
        })
      } else {
        this.$vux.toast.show({
          position: 'top',
          type: 'text',
          text: '对不起，手机号码和验证码请填写正确！'
        })
      }
    },
    getCode () {
      let self = this
      this.timeOut = 59
      let sixNum= (new Date).getTime().toString().substr((new Date).getTime().toString().length - 6, 6)
      window.localStorage.setItem('sixnum',sixNum)
      if (this.user.mobile &&  this.user.mobile.length === 11) {
        this.user.yzm = sixNum 
        this.GLOBAL.ajaxPost(self, 'sendMsg', this.user, function (res) {
        let clearInter = setInterval(function () {
            self.disable = true
            self.btn = self.timeOut + '秒后重发'
            self.timeOut = self.timeOut - 1
            if (self.timeOut <= 0) {
                self.btn = '点击发送验证码'
                window.clearInterval(clearInter)
                self.disable = false
            }
        }, 1000)
        })
     }else{
        this.$vux.toast.show({
          position: 'top',
          type: 'text',
          text: '对不起，请确保手机号码正确！'
        })
     }
    }
  }
}
</script>

<style scoped lang="less">
div.______pay {
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
    & .weui-cells {
        font-size: 0.16rem;
    }
    .name {
        width: 100%;
        text-align: center;
        font-size: 0.18rem;
    }
    .info {
        font-size: 0.16rem;
        margin-top: 0.14rem;
        padding: 0.08rem 0.1rem;
    }
    .pay .vux-label {
        font-size: 14px;
    }
}
</style>

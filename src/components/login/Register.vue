<template>
    <div>
        <div>
            <div>
                <blur :blur-amount=40 :url="url">
                    <p class="center"><img  style="width:100%" :src="url"></p>
                </blur>
            </div>
        </div>

        <group>
            <x-input v-model="user.username" ref='user.username' type="tel" placeholder="请输入手机号码" title="手机号码："></x-input>
        </group>
    
        <group>
            <x-input v-model="user.password" type="password" ref='user.password' title="设置密码："></x-input>
            <x-input v-model="user.password2"  type="password" title="重复密码："></x-input>
        </group>
  
 
        <group>
            <x-button @click.native="submit" type="warn">注册</x-button>
        </group>
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
  data () {
    return {
      user: {},
      url: '../../static/img/face.png',
      recommend: null,
      count: 0,
      height: ((window.screen.availHeight - 0.4 * 20)) + 'px'
    }
  },
  methods: {
    submit () {
      let self = this
      if (this.user.username && this.user.password && (this.user.password2 === this.user.password)) {
        this.GLOBAL.ajaxPost(self, 'register', this.user, function (res) {
          if (res.text && res.text.lastid) {
            self.$router.push('/msg')
          } else {
            this.$vux.toast.show({
              position: 'top',
              type: 'text',
              text: '对不起，请确保填写正确！'
            })
          }
        })
      } else {
        this.$vux.toast.show({
          position: 'top',
          type: 'text',
          text: '对不起，请确保填写正确！'
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.name {
    width: 100%;
    text-align: center;
    font-size: 0.18rem;
}
.info{
    font-size : 0.18rem;
    margin-top: 0.15rem;
    padding: 0.08rem 0.1rem;
}
</style>

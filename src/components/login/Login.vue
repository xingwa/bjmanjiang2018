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
            <x-input v-model="user.username" ref='user.username' title="用户账号："></x-input>
        </group>
        <group>
            <x-input  v-model="user.password" type="password" ref='user.password' title="用户密码："></x-input>
        </group>
        <group>
            <x-button @click.native="submit" type="warn">登录</x-button>
        </group>
        <div>

      <group>
            <x-button link="/register" type="default">没有账号请注册</x-button>
        </group>
        </div>

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
      if (this.user.username && this.user.password) {
        this.GLOBAL.ajaxPost(self, 'login', this.user, function (res) {
          if (res.text && res.text.uid) {
            self.$store.commit('setloginObj', JSON.stringify(res.text))
            window.localStorage.setItem('admin', JSON.stringify(res.text))
            // self.$router.push('/me')
            self.$router.push('/telphone')
          } else {
            self.$vux.toast.show({
              position: 'bottom',
              type: 'text',
              text: '对不起，请确保填写正确！'
            })
          }
        })
      } else {
        this.$vux.toast.show({
          position: 'bottom',
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

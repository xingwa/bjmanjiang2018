<template>
  <div class="______packBug">
    <div>
      <div>
        <blur :blur-amount=40 :url="url">
          <p class="center"><img style="width:100%" :src="url"></p>
        </blur>
      </div>
    </div>
    <group>
      <cell title="公司名称" value="北京满疆科技开发有限公司"></cell>
      <cell title="联系电话" value="010-82658280"></cell>
      <cell title="传真号码" value="010-82658280"></cell>
    </group>
    <group>
      <cell title="关于我们"  @click.native="gotoPush ('/aboutme')" is-link></cell>
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
      url: '../../static/img/face.png',
      recommend: null,
      count: 0,
      height: ((window.screen.availHeight - 0.4 * 20)) + 'px'
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
.______packBug {
  .name {
    width: 100%;
    text-align: center;
    font-size: 0.18rem;
  }
  & .weui-cells {
    font-size: 0.14rem;
  }
  .info {
    font-size: 0.18rem;
    margin-top: 0.15rem;
    padding: 0.08rem 0.1rem;
  }
}
</style>

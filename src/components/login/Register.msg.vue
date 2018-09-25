<template>
    <div>
        <div>
            <msg title="恭喜您，注册成功" description=""></msg>
            <group>
                <x-button link="/login" type="default">返回登录</x-button>
            </group>
        </div>
    </div>
</template>

<script>
import { XButton, Group, Icon, Cell, Msg, TransferDomDirective as TransferDom } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    Group,
    Icon,
    XButton,
    Msg,
    Cell
  },
  data () {
    return {
      user: {},
      count: 0,
      height: ((window.screen.availHeight - 0.4 * 20)) + 'px'
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

<template>
  <div id="app" style="height:100%;">
    <view-box ref="viewBox" body-padding-top="0px" body-padding-bottom="53px">
      <transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
         
        
          <!-- <keep-alive>  -->
          <router-view>
        </router-view>  
         <!-- </keep-alive> -->
         
      </transition>
      <tabbar v-if="$route.name!=='login' && $route.name!=='pay' && $route.name!=='register'" class="vux-demo-tabbar"  icon-class="vux-center" slot="bottom">
          
            <tabbar-item selected link="/?_act=_tab">
              <span slot="icon" class="iconfont" >&#xe601;</span>
                <span slot="label">看书</span>
            </tabbar-item>

            <tabbar-item  link="/tel?_act=_tab">  
            <!-- badge="2" -->
              <span slot="icon" class="iconfont" >&#xe645;</span>
              <span slot="label">天翼</span>
            </tabbar-item>

            <tabbar-item link="/packbug?_act=_tab">
                <span slot="icon" class="iconfont" >&#xe632;</span>
                <span slot="label">满疆</span>
            </tabbar-item>
            
            <tabbar-item  :link="login">
            <!-- badge="2" -->
              <span slot="icon" class="iconfont" >&#xe62f;</span>
                <span slot="label" >我的</span>
            </tabbar-item>
          </tabbar> 
    </view-box>
  </div>
</template>
<script>
import { Tabbar, TabbarItem, ViewBox, TransferDomDirective as TransferDom } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    ViewBox,
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      routerAnimate: false,
      enterAnimate: '',
      leaveAnimate: ''
    }
  },
  computed: {
    login () {
      try {
        if (window.localStorage.getItem('admin') === null || !window.localStorage.getItem('admin')) {
          return '/login?_act=_tab'
        }
        let json = JSON.parse(window.localStorage.getItem('admin'))
        if (json.uid) {
          // return '/me?_act=_tab'
          return '/telphone?_act=_tab'
        } else {
          return '/login?_act=_tab'
        }
      } catch (error) {
        return '/login?_act=_tab'
      }
    }
  },
  watch: {
    $route (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.enterAnimate = toDepth >= fromDepth ? 'animated fadeInRight' : 'animated fadeInLeft'
    }
  }
}
</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
@import 'assets/css/public.css';
/*将公用的样式统一在此导入*/

@import "assets/css/base.css";
@import "assets/css/common.css";
/*过渡效果需要的动画库*/
@import "assets/css/lib/animate.css";
/*weui 样式库 非常适合高仿微信*/
@import "assets/css/lib/weui.min.css";
</style>

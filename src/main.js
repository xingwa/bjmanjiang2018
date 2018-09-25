// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import { AlertPlugin, ToastPlugin, ConfirmPlugin } from 'vux'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'
import VueResource from 'vue-resource'
import routes from './router/index.js'
import globals from './config/global.vue'
Vue.use(Vuex)
let store = new Vuex.Store({
  modules: {
    i18n: vuexI18n.store
  },
  state: {
    pageTitle: '',
    loginObj: window.localStorage.getItem('admin')
  },
  mutations: {
    setpageTitle (state, str) {
      state.pageTitle = str
    },
    setloginObj (state, obj) {
      state.loginObj = obj
    }
  }
})
store.registerModule('vux', {
  state: {
    demoScrollTop: 0,
    isLoading: false,
    direction: 'forward'
  },
  mutations: {
    updateDemoPosition (state, payload) {
      state.demoScrollTop = payload.top
    },
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateDirection (state, payload) {
      state.direction = payload.direction
    }
  },
  actions: {
    updateDemoPosition ({commit}, top) {
      commit({type: 'updateDemoPosition', top: top})
    }
  }
})
Vue.use(vuexI18n.plugin, store)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)
Vue.use(VueResource)
Vue.prototype.GLOBAL = globals
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.innerText
    el.remove()
  }
})

// const scrollBehavior = (to, from, savedPosition) => {
//   if (savedPosition) {
//     console.log(3)
//     console.log(savedPosition)
//     return savedPosition
//   } else {
//     const position = {}
//     if (to.hash) {
//       console.log(4)
//       position.selector = to.hash
//     }
//     if (to.matched.some(m => m.meta.scrollToTop)) {
//       console.log(5)
//       position.x = 0
//       position.y = 0
//     }
//     return position
//   }
// }

Vue.use(VueRouter)
const router = new VueRouter({
  // mode: 'hash',
  mode: 'history',
  routes
})
FastClick.attach(document.body)

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')

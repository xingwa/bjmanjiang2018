import Home from '../components/Home'
import Channel from '../components/channel/Channel'
import Historys from '../components/channel/Brower'
import Tel from '../components/channel/Tel'
import About from '../components/about/About'
import Telphone from '../components/about/Telphone'
import Packbug from '../components/about/Packbug'
import PayList from '../components/about/PayList'
import TelList from '../components/about/TelList'
import Pay from '../components/about/Pay'
import Login from '../components/login/Login'
import Register from '../components/login/Register'
import AboutMe from '../components/about/AboutMe'
import Registermsg from '../components/login/Register.msg'
import Chapter from '../components/chapter/Chapter'
import Msg from '../components/chapter/Msg'
/* eslint-disable */
export default [
    { path: '/', component: Home },
    { path: '/history', component: Historys },
    { path: '/tel', component: Tel },
    { name: 'ch1', path: '/ch/:id',component: Channel},
    { name: 'ch2', path: '/ch/:id/:page',component: Channel},
    { name: 'packbug', path: '/packbug',component: Packbug},
    { name: 'login', path: '/login',component: Login},
    { name: 'register', path: '/register',component: Register},
    { name: 'paylist', path: '/paylist',component: PayList},
    { name: 'TelList', path: '/telList', component: TelList },
    { name: 'pay', path: '/pay/:level',component: Pay},
    { name: 'me', path: '/me',component: About},
    { name: 'telphone', path: '/telphone', component: Telphone },
    { name: 'msg', path: '/msg:rid',component: Registermsg},
    { name: 'chapter', path: '/chapter/:rid',component: Chapter},
    { name: 'msgs', path: '/message/:cid/:rid',component: Msg},
    { name: 'aboutme', path: '/aboutme',component: AboutMe}
]

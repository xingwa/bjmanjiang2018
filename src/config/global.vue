<script type="text/javascript">
const ajaxUrl = 'http://121.101.219.112:63001'
const ajaxUrlList = {
  home: '/',
  register: '/register.php',
  login: '/login.php',
  chartset: '/getCharset.php',
  sendMsg: '/sendMsg.php',
  updateLevel: '/updateLevel.php',
  msg: '/getMsg.php',
  vip: '/vip.php',
  ch1: '/getCh1.php',
  ch2: '/getCh2.php',
  channel: '/getChannel.php'
}
function ajaxToast (self, desc) {
  self.$vux.toast.show({
    position: 'top',
    'is-show-mask': true,
    width: '80%',
    type: 'text',
    text: desc || self.$t('The operation failed')
  })
}
function ajaxPost (self, item, obj, callback) {
  obj.hotUpdateVersion = '1'
  self.$http.post(self.GLOBAL.ajaxUrl + ajaxUrlList[item], obj, {emulateJSON: true}).then(function (data) {
    if (data.status === 200) {
      callback({status: 200, text: data.body})
    } else {
      callback({status: data.status, text: data.body})
    }
  })
}
export default{
  ajaxUrl,
  ajaxUrlList,
  ajaxPost,
  ajaxToast
}
</script>

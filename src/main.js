// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
Vue.use(Toast, {
    type: 'center',
    duration: 2000,
    wordWrap: true,
    width: '150px'
});
function refreshRem() {
  var desW=750,
      winW=document.documentElement.clientWidth,
      ratio=winW/desW;
  document.documentElement.style.fontSize=ratio*100+"px";
}
refreshRem();
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'
import '../src/assets/com.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

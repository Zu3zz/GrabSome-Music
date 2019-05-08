import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import VueLazyload from 'vue-lazyload'
// var VConsole = require('../config/vconsole.min.js');
// var vConsole = new VConsole();
// vConsole.setOption('maxLogNumber', 5000);
// console.log('test')

import 'common/stylus/index.styl'

Vue.config.productionTip = false
Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

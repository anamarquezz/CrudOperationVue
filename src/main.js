// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import jQuery from 'jquery'
global.jQuery = jQuery
let Bootstrap =  require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import VueResource from 'vue-resource'

import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper);
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

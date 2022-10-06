import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入打字效果
import VueTypedJs from 'vue-typed-js'
//引入booststrap
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'


Vue.use(VueTypedJs)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

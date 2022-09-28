import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入打字效果
import VueTypedJs from 'vue-typed-js'

Vue.use(VueTypedJs)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

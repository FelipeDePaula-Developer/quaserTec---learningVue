import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResorce from 'vue-resource'
import Buefy from 'buefy'
import App from './App.vue'
import '../src/assets/main.scss'
import router from './router'

Vue.use(VueResorce)
Vue.use(VueRouter)
Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


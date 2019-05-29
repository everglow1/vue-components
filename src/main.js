// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { getRouter } from './routes/router'
import Alert from './components/alert/alert.js'

Vue.config.productionTip = false
Vue.prototype.$alert = Alert

const router = getRouter()
Vue.use(VueRouter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

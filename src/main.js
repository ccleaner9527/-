import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import echarts from 'echarts'
import axios from './api/axios.js'

Vue.use(axios)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(ViewUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

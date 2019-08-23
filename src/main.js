import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ECharts from 'vue-echarts';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './mock'

Vue.config.productionTip = false

// 注册echarts
// Vue.component('vue-chart', ECharts)
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

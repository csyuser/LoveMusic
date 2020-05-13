import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Icons from '@/components/icons.vue';
import './assets/style/media.scss'
import VueResource from 'vue-resource'


Vue.config.productionTip = false
Vue.use(VueResource)

Vue.component('Icons',Icons)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


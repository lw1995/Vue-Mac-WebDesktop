import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css';
 
Vue.prototype.$layer = layer(Vue);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

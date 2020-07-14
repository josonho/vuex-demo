import Vue from 'vue'
import { Button, Input } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/styles/index.scss'
import App from './App.vue'
import store from './plugins/store/index'
import router from './plugins/router/index'

Vue.use(Button);
Vue.use(Input);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')

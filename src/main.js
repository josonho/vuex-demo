import Vue from 'vue'
import Vuex from 'vuex'
import { Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.use(Vuex);
Vue.use(Button)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')

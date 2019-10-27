import Vue from 'vue'
import App from './App.vue'
import _ from 'lodash'
Object.defineProperty(Vue.prototype, '$_', {value:_});
import Vue2TouchEvents from 'vue2-touch-events'
Vue.use(Vue2TouchEvents)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

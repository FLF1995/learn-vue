import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import Router from 'vue-router'

Vue.config.productionTip = false
Vue.use(ElementUI);

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

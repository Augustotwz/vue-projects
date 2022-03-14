import Vue from 'vue'
import App from './App.vue'
import router from './modules/main/router'
import store from './modules/main/store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

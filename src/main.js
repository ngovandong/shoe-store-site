import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = "//b27a-118-69-61-78.ap.ngrok.io/"
axios.defaults.headers.get['Host'] = "b27a-118-69-61-78.ap.ngrok.io"
axios.defaults.headers.post['Host'] = "b27a-118-69-61-78.ap.ngrok.io"
axios.defaults.headers.common['Host'] = "b27a-118-69-61-78.ap.ngrok.io"
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


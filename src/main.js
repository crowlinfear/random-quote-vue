import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter)
library.add(faFacebook)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

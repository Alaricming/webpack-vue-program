import Vue from 'vue'
import Bootstrap from 'bootstrap'
import axios from 'axios'
import router from './router/router.js'
import App from './src/App.vue'

Vue.use(axios)

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");



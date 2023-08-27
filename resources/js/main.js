import { createApp } from 'vue'

import App from '@/App.vue'

import router from '@/router'
import store from '@/store'

import global from '@/@core/global'

import 'bootstrap/scss/bootstrap.scss'

// Vue.config.productionTip = false

const app = createApp(App).use(store).use(router)
app.config.productionTip = false
global(app)
app.mount('#app')

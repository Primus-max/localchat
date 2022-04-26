import {createApp} from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './vuex/store'
import 'material-design-icons-iconfont'
import './assets/styles/styles.scss'

const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')

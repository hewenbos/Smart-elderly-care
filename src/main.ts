import './styles/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import globelCon from '../src/globel'
import App from '../src/App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(globelCon)
app.use(router)

app.mount('#app')

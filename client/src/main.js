import { createApp } from 'vue'
import App from './App.vue'
import router from './VueRouter'
import './scss/index.scss'
import 'swiper/css';
import { store } from './store/store';

createApp(App)
.use(router)
.use(store)
.mount('#app')

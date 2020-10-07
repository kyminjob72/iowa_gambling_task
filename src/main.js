import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //引用./router 中的 router
import store from './vuex' //引用./vuex中的 store


var app = createApp(App)
app.use(router) // 使用 router
app.use(store) // 使用 store

app.mount('#app')

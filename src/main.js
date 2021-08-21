import {createApp} from 'vue'
import App from './App.vue'
import {storeConfig} from './store/store'
import {createStore} from "vuex"

const store = createStore(storeConfig())

createApp(App).use(store).mount('#app')

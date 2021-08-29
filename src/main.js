import {createApp} from 'vue'
import App from './App.vue'
import {storeConfig} from './store/store'
import {createStore} from "vuex"
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import HighchartsMore from 'highcharts/highcharts-more'

HighchartsMore(Highcharts)

const store = createStore(storeConfig())

createApp(App)
	.use(store)
	.use(HighchartsVue)
	.mount('#app')

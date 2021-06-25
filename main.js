import Vue from 'vue'
import App from './App'
import store from './store/index.js'

Vue.config.productionTip = false

// 把App组件注册为小程序的应用
App.mpType = 'app' 
const app = new Vue({
    ...App,
		store
})
app.$mount()

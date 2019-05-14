import Vue from 'vue'
import App from './App.vue'

// 所有的Vue的实例继承
import Mymixin from '../my_mixin'
Vue.mixin(Mymixin)

// 插件：Vue.use(具备install函数)

new Vue({
  el: '#app',
  render: h => h(App)  // h就是createrDom，根据组件创建虚拟DOM（vnode）
})

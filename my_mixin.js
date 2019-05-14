export default {

  created(){
    setTimeout(() =>{
      console.log(`组件：${this.$options.name}的请求发出去了`)
      // this.$options就相当于整个组件
    },1000)
  }
} // 组件的影子

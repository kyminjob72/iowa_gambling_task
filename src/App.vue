<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-view/>
</template>

<script>
import store from './vuex' // 引用 store
export default {
  name: 'App',
  store:store,
  components: {
  },
  methods:{
    test(){
     store.commit('increment') //執行 store中的 increment
      alert('count:' + store.state.count)

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

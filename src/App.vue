<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-view/>
  <!-- <button @click='test'>test</button> -->
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
    //  store.commit('increment') //執行 store中的 increment
    var test = store.state.cardInfo
    console.log(test)
    },
  
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

table{
margin-left:auto; 
margin-right:auto;
}
</style>

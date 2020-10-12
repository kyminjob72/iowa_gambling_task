
<template>
<div>
<table>
    <tbody>
        <tr>
            <th>
                姓名:
            </th>
            <td>
                {{name}}
            </td>
        </tr>
        <tr>
            <th>
                年紀:
            </th>
            <td>
                {{age}}
            </td>
        </tr>
        <tr>
            <th>
                性別:
            </th>
            <td>
                {{sex}}
            </td>
        </tr>
    </tbody>
</table>
</div>
<div>
    <table cellpadding="10px" border="1px">
        <thead>
            <th>編號</th>
            <th>牌組</th>
            <th>積分</th>
            <th>總分</th>
        </thead>
        <tbody>
            <tr v-for="(item, index) in history" :key="index" >
                <td>{{index+1}}</td>
                <td>第{{item.id}}副牌</td>
                <td>{{item.dividend}}</td>
                <td>{{item.point}}</td>
            </tr>
        </tbody>
    </table>

</div>

</template>

<script>
import store from "../vuex"; // 引用 store
export default {
  name: "settlement",
  store:store,
  components: {
  },
  data:function(){
      return{
          name: "",
          sex:"",
          age:0,
          history:[],
      }
  },
  mounted:function(){
      this.name = store.state.userInfo.name
      this.sex = store.state.userInfo.sex
      this.age = store.state.userInfo.age
      this.history = store.state.history
  }
};
</script>

<style>


</style>

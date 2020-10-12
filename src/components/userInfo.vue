<template>
  <div id="infomation">
    <div>姓名:<input type="text" @change="setName" /></div>
    <div>年紀:<input type="text" @change="setAge" /></div>
    <div>
      性別:
      <select v-model="selected" @change="setSex">
        <option selected>女</option>
        <option>男</option>
      </select>
    </div>
  </div>
</template>

<script>
import store from "../vuex"; // 引用 store
export default {
  name: "userInfo",
  store: store,
  data: function () {
    return {
      selected: "女",
    };
  },
  methods: {
    setName(event) {
      var value = event.target.value;
      store.state.userInfo.name = value;
    },
    setAge(event) {
      var value = parseInt(event.target.value);
      store.state.userInfo.age = value;
    },
    setSex() {
      store.state.userInfo.sex = this.selected;
    },
  },
};
</script>

<style>
</style>

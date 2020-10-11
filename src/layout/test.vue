<template>
  <userInfo></userInfo>
  <div id="starting-game">
    <table>
      <thead>
        <tr>
          <th colspan="4">目前積分:{{ getPoint() }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <card :id="1" @getcard="increase"></card>
          </td>
          <td>
            <card :id="2" @getcard="increase"></card>
          </td>
          <td>
            <card :id="3" @getcard="increase"></card>
          </td>
          <td>
            <card :id="4" @getcard="increase"></card>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <table id='op_table' cellpadding="10" border='1'>
      <thead>
        <tr>
          <th>
            <router-link to="/">回首頁</router-link>
          </th>
          <th>
            <!-- 先不設計結算畫面 -->
            <router-link to="/settlement">結算</router-link>
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
import userInfo from "../components/userInfo";
import card from "../components/card";
import store from "../vuex"; // 引用 store

export default {
  name: "test",
  store: store,
  components: {
    userInfo,
    card,
  },
  methods: {
    increase(card) {
      store.state.point = store.state.point + card;
    },
    getPoint() {
      return store.state.point;
    },
  },
};
</script>

<style>
#op_table{
    border:3px #cccccc solid
}
</style>

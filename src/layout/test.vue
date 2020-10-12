<template>
  <userInfo></userInfo>
  <div id="starting-game">
    <table>
      <thead>
        <tr>
          <th colspan="4">剩下遊戲次數:{{ times }}</th>
        </tr>
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
    <table id="op_table" cellpadding="10" border="1">
      <thead>
        <tr>
          <th>
            <router-link to="/">回首頁</router-link>
          </th>
          <th>
            <div v-show="isover">
              <router-link to="/settlement">結算</router-link>
            </div>
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
  data: function () {
    return {
      times: 0,
      isover: false,
    };
  },
  methods: {
    increase(card) {
      if (this.times > 0) {
        store.state.point = store.state.point + card.dividend;
        store.state.gameTimes--;
        this.times = store.state.gameTimes;
        var historyData = {
          point : this.getPoint(),
          id : card.id,
          dividend : card.dividend
        };
        store.state.history[store.state.history.length] = historyData
        if (this.times == 0) {
          this.isover = true;
        }
      } else {
        alert('已完成測驗，請點擊 "結算" 觀看結果');
      }
    },
    getPoint() {
      return store.state.point;
    },
  },
  mounted: function () {
    
    this.times = store.state.gameTimes;
    if(this.times > 0 ){
      this.isover = false;
    }
    else{
      this.isover = true;
    }
  },
};
</script>

<style>
#op_table {
  border: 3px #3e85a1 solid;
}
</style>

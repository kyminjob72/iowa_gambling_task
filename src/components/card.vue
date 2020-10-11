<template>
  <div class="card">
    <div class="title">
      <p>
        <b>{{ title }}</b>
      </p>
    </div>
    <div class="imageblock">
    </div>
    <div class="operational">
      <button class="draw" @click="clickEvent">抽牌</button>
    </div>
  </div>
</template>

<script>
import store from "../vuex"; // 引用 store
export default {
  name: "card",
  store: store,
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  data:function(){
      return{
          cardPoint: 0,
          show:false,
      }
  },
  methods: {
      clickEvent() {
        //取得牌組
      var cards = this.getCards;
      //亂數取得一張牌
      var card = cards[this.getRandomInt(cards.length)]
      console.log(`card: ${card}`);
      //傳到test.vue中觸發
      this.$emit('getcard',card)
    
      
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
  },
  computed: {
    getCards() {
      var cards = []; //牌組
      var reward_count = 0; //獎勵牌數量
      var reward_dividend = 0; //獎勵積分
      var penalty_count = 0; //懲罰牌數量
      var penalty_dividend = 0; //懲罰積分

      //設定獎勵/懲罰 牌的 數量及積分
      switch (this.id) {
        case 1:
          reward_count = store.state.cardInfo.first.reward.count;
          reward_dividend = store.state.cardInfo.first.reward.dividend;
          penalty_count = store.state.cardInfo.first.penalty.count;
          penalty_dividend = store.state.cardInfo.first.penalty.dividend;
          break;
        case 2:
          reward_count = store.state.cardInfo.second.reward.count;
          reward_dividend = store.state.cardInfo.second.reward.dividend;
          penalty_count = store.state.cardInfo.second.penalty.count;
          penalty_dividend = store.state.cardInfo.second.penalty.dividend;
          break;
        case 3:
          reward_count = store.state.cardInfo.third.reward.count;
          reward_dividend = store.state.cardInfo.third.reward.dividend;
          penalty_count = store.state.cardInfo.third.penalty.count;
          penalty_dividend = store.state.cardInfo.third.penalty.dividend;
          break;
        case 4:
          reward_count = store.state.cardInfo.fourth.reward.count;
          reward_dividend = store.state.cardInfo.fourth.reward.dividend;
          penalty_count = store.state.cardInfo.fourth.penalty.count;
          penalty_dividend = store.state.cardInfo.fourth.penalty.dividend;
          break;
        default:
          console.log(`Sorry, we are out of ${this.id}.`);
      }
      //加入獎勵牌
      for (var i = 0; i < reward_count; i++) {
        cards[cards.length] = reward_dividend;
      }
      //加入懲罰牌
      for (var j = 0; j < penalty_count; j++) {
        cards[cards.length] = penalty_dividend;
      }
      //可有可無的洗牌
      cards.sort(() => Math.random() - 0.5);
      return cards;
    },

    title() {
      return `第${this.id}組牌`;
    },
  },
};
</script>

<style>
.draw {
  width: 6em;
  height: 6em;
  border-radius: 50%;
  border-color: red orange yellow greenyellow;
  border-width: 0.7em;
  border-style: solid;
  padding: 0em;
}
.imageblock {
  width: 15em;
  height: 20em;
  background: #394057;
  background-image: radial-gradient(
      closest-side,
      transparent 98%,
      rgba(0, 0, 0, 1) 99%
    ),
    radial-gradient(closest-side, transparent 98%, rgba(0, 0, 0, 1) 99%);
  /*上下兩個圓錯開相交*/
  background-position: 0 0em, 1em 1em;
  background-size: 2em 2em;
}
.operational {
  /* background-color: darkmagenta; */
}


</style>

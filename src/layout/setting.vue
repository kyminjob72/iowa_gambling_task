<template>
  <!-- 遊戲流程區塊 -->
  <div id="game-flow">遊戲執行次數: <input id='game_times' type="text" @change="setValue" /></div>
  <div id="card-setting">
    <table>
      <thead>
        <tr>
          <th>項目</th>
          <th>數量</th>
          <th>積分</th>
        </tr>
      </thead>
      <tbody>
        <!-- 第一副牌 -->
        <tr>
          <td colspan="3">第一副牌</td>
        </tr>
        <tr>
          <td>獎勵</td>
          <td>
            <input id="first_reward_count" type="text" @change="setValue" />
          </td>
          <td>
            <input id="first_reward_dividend" type="text" @change="setValue" />
          </td>
        </tr>
        <tr>
          <td>懲罰</td>
          <td>
            <input id="first_penalty_count" type="text" @change="setValue" />
          </td>
          <td>
            <input id="first_penalty_dividend" type="text" @change="setValue" />
          </td>
        </tr>
        <!-- 第二副牌 -->
        <tr>
          <td colspan="3">第二副牌</td>
        </tr>
        <tr>
          <td>獎勵</td>
          <td>
            <input id="second_reward_count" type="text" @change="setValue" />
          </td>
          <td>
            <input id="second_reward_dividend" type="text" @change="setValue" />
          </td>
        </tr>
        <tr>
          <td>懲罰</td>
          <td>
            <input id="second_penalty_count" type="text" @change="setValue" />
          </td>
          <td>
            <input
              id="second_penalty_dividend"
              type="text"
              @change="setValue"
            />
          </td>
        </tr>
        <!-- 第三副牌 -->
        <tr>
          <td colspan="3">第三副牌</td>
        </tr>
        <tr>
          <td>獎勵</td>
          <td>
            <input id="third_reward_count" type="text" @change="setValue" />
          </td>
          <td>
            <input id="third_reward_dividend" type="text" @change="setValue" />
          </td>
        </tr>
        <tr>
          <td>懲罰</td>
          <td>
            <input id="third_penalty_count" type="text" @change="setValue" />
          </td>
          <td>
            <input id="third_penalty_dividend" type="text" @change="setValue" />
          </td>
        </tr>
        <!-- 第四副牌 -->
        <tr>
          <td colspan="3">第四副牌</td>
        </tr>
        <tr>
          <td>獎勵</td>
          <td>
            <input id="fourth_reward_count" type="text" @change="setValue" />
          </td>
          <td>
            <input id="fourth_reward_dividend" type="text" @change="setValue" />
          </td>
        </tr>
        <tr>
          <td>懲罰</td>
          <td>
            <input id="fourth_penalty_count" type="text" @change="setValue" />
          </td>
          <td>
            <input id="fourth_penalty_dividend" type="text" @change="setValue" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <router-link to="/test">確定</router-link>
  </div>
  <div>
    <router-link to="/">回首頁</router-link>
  </div>
</template>

<script>
import store from '../vuex' // 引用 store
export default {
  name: "setting",
  store:store,
  components: {},
  methods: {
    setValue(event) {
      var value =  parseInt(event.target.value) 
      switch (event.target.id) {
        //遊戲次數
        case "game_times":
          store.state.gameTimes = value
          break;
        //第一副牌
        case "first_reward_count":
          store.state.cardInfo.first.reward.count = value
          break;
        case "first_reward_dividend":
          store.state.cardInfo.first.reward.dividend = value
          break;
        case "first_penalty_count":
          store.state.cardInfo.first.penalty.count = value
          break;
        case "first_penalty_dividend":
          store.state.cardInfo.first.penalty.dividend = value
          break;
          //第二副牌
        case "second_reward_count":
          store.state.cardInfo.second.reward.count = value
          break;
        case "second_reward_dividend":
          store.state.cardInfo.second.reward.dividend = value
          break;
        case "second_penalty_count":
          store.state.cardInfo.second.penalty.count = value
          break;
        case "second_penalty_dividend":
          store.state.cardInfo.second.penalty.count = value
          break;
          //第三副牌
        case "third_reward_count":
          store.state.cardInfo.third.reward.count = value
          break;
        case "third_reward_dividend":
          store.state.cardInfo.third.reward.dividend = value
          break;
        case "third_penalty_count":
          store.state.cardInfo.third.penalty.count = value
          break;
        case "third_penalty_dividend":
          store.state.cardInfo.third.penalty.dividend = value
          break;
          //第四副牌
        case "fourth_reward_count":
          store.state.cardInfo.fourth.reward.count = value
          break;
        case "fourth_reward_dividend":
          store.state.cardInfo.fourth.reward.dividend = value
          break;
        case "fourth_penalty_count":
          store.state.cardInfo.fourth.penalty.count = value
          break;
        case "fourth_penalty_dividend":
          store.state.cardInfo.fourth.penalty.dividend = value
          break;
        
        default:
          console.log(`Sorry, we are out of ${event.target.id}.`);
      }
    },
  },
};
</script>

<style>
</style>

<template>
  <!-- 遊戲流程區塊 -->
  <div id="game-flow">遊戲執行次數: <input type="text" /></div>
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
          <td><input type="text" /></td>
          <td><input type="text" /></td>
        </tr>
        <tr>
          <td>懲罰</td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
        </tr>
        <!-- 第二副牌 -->
        <tr>
          <td colspan="3">第二副牌</td>
        </tr>
        <tr>
          <td>獎勵</td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
        </tr>
        <tr>
          <td>懲罰</td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
        </tr>
        <!-- 第三副牌 -->
        <tr>
          <td colspan="3">第三副牌</td>
        </tr>
        <tr>
          <td>獎勵</td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
        </tr>
        <tr>
          <td>懲罰</td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
        </tr>
        <!-- 第四副牌 -->
        <tr>
          <td colspan="3">第四副牌</td>
        </tr>
        <tr>
          <td>獎勵</td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
        </tr>
        <tr>
          <td>懲罰</td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <router-link to='/test'>確定</router-link>
  </div>
  <div>
    <router-link to='/'>回首頁</router-link>
  </div>
</template>

<script>
export default {
  name: "setting",
  components: {},
};
</script>

<style>
</style>

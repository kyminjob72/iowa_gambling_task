<template>
  <table>
    <thead>
      <tr>
        <th colspan="2">是否要進入設定畫面?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <router-link to="/test">直接開始</router-link>
        </td>
        <td>
          <router-link to="/setting">設定</router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "index",
  components: {},
};
</script>

<style>
</style>

<template>
<div id='begin-game'>
    <div>
        姓名:<input type='text'/>
    </div>
    <div>
        年紀:<input type='text'/>
    </div>
    <div>
        <!-- 這部分有一些問題 -->
        性別:<input type='text'/>
    </div>
</div>
<div id='starting-game'>
<table>
    <thead>
        <tr>
        <!-- 這部分有一些問題 -->
        <th>目前積分:</th>
    </tr>
    <tr>
        <th>第一副牌</th>
        <th>第二副牌</th>
        <th>第三副牌</th>
        <th>第四副牌</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <button>抽牌</button>
            </td>
            <td>
                <button>抽牌</button>
            </td>
            <td>
                <button>抽牌</button>
            </td>
            <td>
                <button>抽牌</button>
            </td>
        </tr>
    </tbody>
</table>
</div>
</template>

<script>

export default {
  name: 'test',
  components: {
  }
}
</script>

<style>

</style>

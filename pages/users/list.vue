<template>
  <h1>User Listページ</h1>
  <p>Count={{ counter }}</p>
</template>

<script setup>
// Aboutページで定義したものを使う
// const counter = useState('counterSatou')
// pageファイルでuseStateを使わず、composablesで定義する
const counter = useCounter2()
</script>
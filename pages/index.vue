<template>
  <h1>Main Page</h1>
  <div>
    <img src="~/assets/icon.png" alt="Nuxt3 Icon" />
  </div>
  <div>Count:{{ count }}</div>
  <div>
    <button @click="()=>inc()"
      class="bg-red-700 hover:bg-red-600 text-white rounded px-4 py-2"  
    >inc</button>
    <button @click="()=>dec()"
      class="ml-2 bg-red-700 hover:bg-red-600 text-white rounded px-4 py-2"
    >dec</button>
  </div>
  <!-- プラグインファイル -->
  <h2>{{ $hello('World') }}</h2>
  <!-- api -->
  <h2>{{ data }}</h2>
  <h2>{{ hello2 }}</h2>
</template>

<script setup>
// composables
const {count, inc, dec} = useCounter(100)
// プラグイン: アプケーションの起動時に自動で登録を行ってくれる
const { $hello } = useNuxtApp();
// server/api
const { data } = await useFetch('/api/hello1')
const { data: hello2 } = await useFetch('/api/hello2')
</script>
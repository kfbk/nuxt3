<template>
  <h1>Main Page</h1>
  <div>
    <img src="~/assets/icon.png" alt="Nuxt3 Icon" />
  </div>
  <div>Count:{{ count }}</div>
  <div>
    <button @click="()=>inc()">inc</button>
    <button @click="()=>dec()">dec</button>
  </div>
  <h2>{{ $hello('World') }}</h2>
</template>

<script setup>
const {count, inc, dec} = useCounter(100)
const { $hello } = useNuxtApp();
</script>
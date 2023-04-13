<script setup>
// const response = await useFetch('https://jsonplaceholder.typicode.com/posts/');
// console.log("response=",response);
// dataを別名にする
const {data:satougets, error} = await useFetch('https://jsonplaceholder.typicode.com/posts/');
</script>

<template>
  <div>
    <h1>Posts一覧</h1>
    <p v-if="error">{{ error }}</p>
    <ul>
      <li v-for="satouget in satougets" :key="satouget.id">
        <!-- {{ satouget.title }} -->
        <NuxtLink :to="`/posts/${satouget.id}`">{{ satouget.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
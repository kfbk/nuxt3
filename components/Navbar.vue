<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>　
    <NuxtLink to="/about">About</NuxtLink>　
    <NuxtLink :to="{ name: 'users-list' }">User List</NuxtLink>　
    <NuxtLink to="/posts">Post List</NuxtLink>　
    <NuxtLink to="/_tailwind/">tailwind</NuxtLink>　
    <NuxtLink to="https://google.com" target="_blank">Google</NuxtLink>
  </nav>
</template>
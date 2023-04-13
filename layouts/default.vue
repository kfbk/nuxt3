<template>
  <div>
    <Html lang="ja" />
    <!-- <nav>ここにナビゲーションバーを入れる</nav> -->
    <Navbar />
    <slot />
  </div>
</template>

<script setup>
useHead({
  titleTemplate: '%s - Nuxt 3 basic',
});
</script>
<script setup lang="ts">
import { Post } from '../types/blog'

type Props = {
    posts: Post[];
}

const { posts } = defineProps<Props>()
</script>

<template>
  <!-- <article v-for="post in posts.contents" :key="post.id"> -->
  <article v-for="post in posts" :key="post.id">
    <div v-if="post">
    <span>
      <!-- 次を日付用プラグインを呼び出すように変更（ここだけの変更で済む）
         {{ post.publishedAt }} -->
         {{ $formatDate(String(post.publishedAt)) }}
    </span>
    <NuxtLink :to="`/${post.id}`">
      <h1>{{ post.title }}</h1>
    </NuxtLink>
    </div>
  </article>
</template>
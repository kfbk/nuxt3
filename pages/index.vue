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
  <div>-- プラグインファイル --</div>
  <h2>{{ $hello('World') }}</h2>
  <h2>{{ $hello3('World') }}</h2>
  <div>-- api --</div>
  <h2>{{ data }}</h2>
  <h2>{{ hello2 }}</h2>
  <div>-- 記事一覧 --</div>
  <!-- 次はcomponentsに移動する -->
  <article v-for="post in posts.contents" :key="post.id">
    <span>
      {{ post.publishedAt }}
    </span>
    <NuxtLink :to="`/${post.id}`">
      <h1>{{ post.title }}</h1>
    </NuxtLink>
  </article>
  
   <!-- あえて先頭を小文字にしてみた（ファイル名の通り）
        これで動いた。
        別記事で、「コンポーネントを呼び出すときには先頭は大文字になることに注意」
        とあったので、大文字にする
  -->
   <!-- <PostList :posts="posts.contents" /> -->
</template>

<script setup>
// composables
const {count, inc, dec} = useCounter(100)
// プラグイン: アプケーションの起動時に自動で登録を行ってくれる
const { $hello } = useNuxtApp();
const { $hello3 } = useNuxtApp();
// server/api
const { data } = await useFetch('/api/hello1')
const { data: hello2 } = await useFetch('/api/hello2')
const { data: posts } = await useFetch('/api/postList') //postListはファイル名
console.log("posts=", posts)
</script>
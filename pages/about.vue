<template>
  <Head>
    <Title>AboutPage</Title>
    <Meta name="description" content="AboutPage"></Meta>
  </Head>
  <h1>About Page</h1>
  <h2>Count</h2>
  <p>Count={{ counter }}</p>
  <div>
    <button @click="counter++"
      class="bg-red-700 hover:bg-red-600 text-white rounded px-4 py-2"
    >+</button>
  </div>
</template>

<script setup>
// 他ページから本ページに来たり、更新したりすると、次が実行される
// const counter = ref(0);
// ページを移動してもcountの値を保持したい場合（ただし更新した場合は保持されない）
// const counter = useState('counterSatou', ()=>0)
// pageファイルでuseStateを使わず、composablesで定義する
const counter = useCounter2()
// const title = ref('Aboutページ');
// const description = ref('Aboutページ');
// useHead({
//   title,
//   meta: [
//     {
//       name: 'description',
//       content: description,
//     },
//   ],
// });
// definePageMeta({
//   // middleware: 'auth',
// });
</script>
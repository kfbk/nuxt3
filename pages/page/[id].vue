<!-- /pages/page/[id].vue
      試しにidをpageに変えた
-->
<script setup lang="ts">
import { MicroCMSQueries } from 'microcms-js-sdk';

const route = useRoute()
const page = Number(route.params.id || 1)
const limit = 2
const queries: MicroCMSQueries = {
    limit: limit,
    offset: (page - 1) * limit,
}

const { data: posts } = await useFetch('/api/postList', { params: queries })

const numPages = Math.ceil(posts.value.totalCount / limit)

</script>

<template>
    <div>
        <div class="divider">
            <section class="container">
                <!-- 記事一覧 -->
                <PostList :posts="posts.contents" />
            </section>
            <aside class="aside">
                <!-- キーワード検索、タグ一覧 -->
            </aside>
        </div>
    </div>
</template>
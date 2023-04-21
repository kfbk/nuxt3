// /server/api/postDetail.ts
import client from './client'
import { Post } from '../../types/blog'

// 例えばクライアント側でhttp://localhost:3000/my-pretty-slugにアクセスしたら、
// my-pretty-slugというパラメータを付与して、APIを呼びます。
export default defineEventHandler(async (event) => {
    // 次の2行で動的に記事のID,つまりslugを取得する
    const params = getQuery(event)
    const slug = params.slug
    const data = client.getListDetail<Post>({
        endpoint: 'post',
        contentId: String(slug),
    })
    return data
})
// /server/api/postList.ts
import client from './client'
import { Post } from '../../types/blog'

/*
  「http://localhost:3000/api/postList」とした場合
  次の様に、microCMSからデータが取れ表示された。
  "contents": [
    {
      "id": "rz7nbsfw3y",
      "createdAt": "2023-04-17T06:23:53.213Z",
      "updatedAt": "2023-04-17T06:23:53.213Z",
      "publishedAt": "2023-04-17T06:23:53.213Z",
      "revisedAt": "2023-04-17T06:23:53.213Z",
      "title": "4月例会：袈裟丸山",
      "body": "<p>4月例会で袈裟丸山...</p>"
    },
*/
export default defineEventHandler(async (event) => {
    const data = await client
        .getList<Post>({
          endpoint: 'post',
          // endpoint: 'blog',    // smalltip
        })
    return data
})
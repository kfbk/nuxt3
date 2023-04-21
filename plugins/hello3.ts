// アプケーションの起動時に自動で登録を行ってくれるため
// 登録作業を行う必要がありません
export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello3(msg: string) {
        return `Hello3 ${msg}!`;
      },
    },
  };
});
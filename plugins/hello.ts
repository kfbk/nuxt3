// アプケーションの起動時に自動で登録を行ってくれるため
// 登録作業を行う必要がありません
export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello(msg: string) {
        return `Hello ${msg}!`;
      },
    },
  };
});
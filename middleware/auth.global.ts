// ページが表示される前に事前に設定していた処理を
// 行うことができます。
// 例えばある特定のページには管理者権限を
// 持っているユーザしかアクセスさせたくない
// といった場合にページを表示する前に認証チェックを行う
export default defineNuxtRouteMiddleware((to, from) => {
  // console.log('from', from);
  // console.log('to', to);
  // if (from.fullPath === '/') {
  //   // return navigateTo('/');
  //   return abortNavigation(); // ページ移動を中止したい場合
  // }
  // if (isAdmin() === false) {
  //   return navigateTo('/login')
  // }
});
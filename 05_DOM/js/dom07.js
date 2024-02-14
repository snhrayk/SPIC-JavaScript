// 下記フォームのデータを使って、入力されたデータをorderlistIDに表示しましょう。
// 表示する内容：入力した内容に合わせて「Xサイズ：XXXX」となるように設定しましょう。
const item_name = document.querySelector("#item_name");
const size = document.querySelector("#size");
const btn = document.querySelector("#btn");
const orderlist = document.querySelector("#orderlist");

btn.addEventListener("click", () => {
  orderlist.innerHTML += `<li>${size.value}サイズ:${item_name.value}</li>`;
});

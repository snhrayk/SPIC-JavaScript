// 下記の商品リストの価格の合計をtotalIDに出力しましょう。
// このフェーズでは、forEach/map/filter/find/reduceと行ってきましたが
// 特に方法はこだわらなくて構いません。
// ただし、くだもの情報のテーブルに追加や削除、変更があった場合でも
// きちんと結果が反映されるように作りましょう。

const fName = document.querySelectorAll(".name");
const price = document.querySelectorAll(".price");
const total = document.querySelector("#total");
// console.log(price);

// let fruit = [];
// let result = 0;
// price.forEach((n) => {
//   result += Number(n.innerText);
// });
// console.log(result);
// total.innerText = `${result}円`;

let fruit = [];
// price.forEach((n) => {
//   fruit.push(Number(n.innerText));
// });
price.forEach((n) => fruit.push(Number(n.innerText)));

const result = fruit.reduce((prev, current) => prev + current);
console.log(result);
total.innerText = `${result}円`;

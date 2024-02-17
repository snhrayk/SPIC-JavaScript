// nameIDに下記
// apple / banana / lemon / peach / kiwi / mango から検索
// 「くだもの名：価格はxxxです」とfindを使って表示させましょう。

const fruit = [
  { name: "apple", price: 180 },
  { name: "banana", price: 230 },
  { name: "lemon", price: 200 },
  { name: "peach", price: 480 },
  { name: "kiwi", price: 80 },
  { name: "mango", price: 680 },
];
const fName = document.querySelector("#name");
const btn = document.querySelector("#btn");
const out = document.querySelector("#out");

// const fruitName = fruit.map((f) => {
//   console.log(f);
//   return f;
// });
//くだものの名前を入れて、検索(btn)をクリック

btn.addEventListener("click", () => {
  const found = fruit.find((fruit) => fruit.name === fName.value);
  // const found = fruit.find(({ name }) => name === fName.value);
  console.log(found.name);
  // もし入力したものとfruitの中にある果物の名前(name)と一致したとき
  // fruit.priceを`くだもの名:価格は〇〇です`と入れてoutに表示
  out.innerText = `${found.name}:価格は${found.price}円です`;
});

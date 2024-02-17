// 用意された配列のデータを、li要素に1つづつ追加しましょう。
// setIntervalの間隔は3000ミリ秒とします。
// 配列の要素全て表示したらsetIntervalが動かない様に設定しておくこと。

// 用意された配列のデータ
const arr = ["HTML", "CSS", "JavaScript", "Pug", "Sass", "TypeScript"];
// 表示させる場所
const skill = document.querySelector("#skill");
let count = 0;

// 繰り返す
// 配列の中から1つ取って来る
for (let i = 0; i < arr.length; i++) {
  // 一文字ずつバラバラの配列にいれる
  const arrSplit = arr[i].split("");
  console.log(arrSplit);
  // 一文字ずつ３秒かけて表示
  //   setInterval(() => {
  //     if (count < arrSplit.length) {
  //       console.log(arrSplit);
  //       //   skill.innerHTML += `<li>${arrSplit}</li>`;
  //       count++;
  //     }
  //     // else {
  //     //   return false;
  //     // }
  //   }, 3000);
}

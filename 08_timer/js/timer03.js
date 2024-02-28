// 用意された配列のデータを、li要素に1つづつ追加しましょう。
// setIntervalの間隔は3000ミリ秒とします。
// 配列の要素全て表示したらsetIntervalが動かない様に設定しておくこと。

// 用意された配列のデータ
const arr = ["HTML", "CSS", "JavaScript", "Pug", "Sass", "TypeScript"];
// 表示させる場所
const skill = document.getElementById("skill");
let count = 0;

function addSkill() {
  const arrItems = document.createElement("li");
  arrItems.textContent = arr[count];
  skill.appendChild(arrItems);
  count++;
  if (count >= arr.length) {
    clearInterval(timer);
  }
}

for (let i = 0; i < arr.length; i++) {
  setTimeout(addSkill, i * 3000);
}

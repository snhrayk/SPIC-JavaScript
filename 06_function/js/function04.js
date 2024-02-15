// 入力した数値にpxを追加する関数 setpx を設定し、
// 下記input / relustIDに
// データを入力しましょう。

const num = document.querySelector("#num");
const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const result = document.querySelector("#result");
// num.value = Number(num.value);
// let numV = num.value;

// px値を追加
function setpx(set) {
  return `${set}px`;
}

btn.addEventListener("click", () => {
  input.innerText = num.value;
  result.innerText = setpx(num.value);
});

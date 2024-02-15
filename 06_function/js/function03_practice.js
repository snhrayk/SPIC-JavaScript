//text
const msg = document.getElementById("text");
const btn = document.getElementById("btn");
const out = document.getElementById("out");

// 下記textIDのテキストフィールドに文字を入力し、
// ボタンを押すとoutIDに文字を出力する様に書いてみましょう。
// 出力例：「あたなの入力した文字は{入力した文字}です。」

// 1.msgに文字を入力
// 2.入力完了(btn)をクリックしたあと
function message(val) {
  out.innerText = `あなたの入力した文字は${val}です`;
}
btn.onclick = () => {
  message(msg.value);
};

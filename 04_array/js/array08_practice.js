// 配列 omikuji に下記内容をいれましょう
// 大吉 / 中吉 / 小吉 / 吉 / 凶 / 大凶
let omikuji = ["大吉", "中吉", "小吉", "吉", "凶", "大凶"];

// 画面を更新する度に0-5までのランダムな値が入る
const no = Math.floor(Math.random() * 6);

switch (no) {
  case 0:
    console.log("大吉ですおめでとう！");
    break;
  case 1:
    console.log("中吉ですラッキー！");
    break;
  case 2:
    console.log("コメントに困る吉です");
    break;
  case 3:
    console.log("小吉です");
    break;
  case 4:
    console.log("凶ですアンラッキー");
    break;
  default:
    console.log("大凶です残念・・・");
    break;
}

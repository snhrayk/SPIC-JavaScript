// 配列 omikuji に下記内容をいれましょう
// 大吉 / 中吉 / 小吉 / 吉 / 凶 / 大凶
let omikuji = ["大吉", "中吉", "小吉", "吉", "凶", "大凶"];

// 画面を更新する度に0-5までのランダムな値が入る
const no = Math.floor(Math.random() * 6);

switch (no) {
  case 0:
    console.log(`${omikuji[0]}ですおめでとう！`);
    break;
  case 1:
    console.log(`${omikuji[1]}ですラッキー！`);
    break;
  case 2:
    console.log(`コメントに困る${omikuji[2]}です`);
    break;
  case 3:
    console.log(`${omikuji[3]}です`);
    break;
  case 4:
    console.log(`${omikuji[4]}ですアンラッキー`);
    break;
  default:
    console.log(`${omikuji[5]}です残念・・・`);
    break;
}

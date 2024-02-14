// 標準の文字サイズは16pxのwrapID内のテキストがある。
// 大小のボタンを押すと、１段階（2px) 大きくまたは小さくなるボタンを作成しましょう。

// 一段回小さくボタン(btnS)
const btnS = document.querySelector("#btn-small");

// 一段回大きくボタン(btnL)
const btnL = document.querySelector("#btn-large");

//　wrap
const wrap = document.querySelector("#wrap");

// wrapのfont-sizeを選択
let fontSize = wrap.style.fontSize;
console.log(fontSize);

// font-sizeの数値だけを取ってきて文字列から数値に変更
let fontSizeNum = parseFloat(fontSize);
console.log(fontSizeNum);

// 一段回小さくボタン(btnS)をクリックしたとき

btnS.addEventListener("click", () => {
  // font-sizeを2px減らす
  console.log(fontSizeNum);
  if (fontSizeNum >= 8) {
    fontSizeNum -= 2;
    wrap.style.fontSize = `${fontSizeNum}px`;
  }
});

// 一段回大きくボタン(btnL)をクリックしたとき
btnL.addEventListener("click", () => {
  // font-sizeを2px増やす
  if (fontSizeNum <= 30) {
    fontSizeNum += 2;
    wrap.style.fontSize = `${fontSizeNum}px`;
  }
});

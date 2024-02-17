// 一秒に一度数値がカウントアップ
// counterに表示
const counter = document.getElementById("counter");
let count = 0;
const duration = 1000;

function setTimer() {
  count++;
  if (count < 15) {
    counter.innerText = count;
    setTimeout(setTimer, duration);
  }
}

setTimeout(setTimer, 1000);

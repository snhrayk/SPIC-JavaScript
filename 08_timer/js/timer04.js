const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");
const out = document.querySelector("#out");
let timerId;
let num = 0;

startBtn.addEventListener("click", () => {
  //   console.log(startBtn);
  if (!timerId) {
    timerId = setInterval(() => {
      num++;
      out.innerText = num;
    }, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
  out.innerText = num;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerId);
  num = 0;
  out.innerText = num;
});

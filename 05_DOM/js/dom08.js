const btnL = document.querySelector("#btnL");
const btnS = document.querySelector("#btnS");
const text = document.querySelector("#text");

btnL.addEventListener("click", () => {
  text.style.fontSize = "80px";
});

btnS.addEventListener("click", () => {
  text.style.fontSize = "20px";
});

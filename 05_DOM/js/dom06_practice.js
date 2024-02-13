const btn = document.querySelector("#submit");
const menu = document.querySelector("#menu");

btn.addEventListener("click", () => {
  const main = document.querySelector("#main").value;
  const sub = document.querySelector("#sub").value;
  const soup = document.querySelector("#soup").value;
  const side = document.querySelector("#side").value;
  menu.innerText = `注文内容は${main},${sub},${soup},${side}です。`;
});

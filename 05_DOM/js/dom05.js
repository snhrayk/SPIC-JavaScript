const size = document.querySelector("#size");
const text = document.querySelector("#text");

size.addEventListener("change", () => {
  text.innerText = `選択したサイズ:${size.value}サイズ`;
});

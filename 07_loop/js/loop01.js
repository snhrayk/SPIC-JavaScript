const menu = [
  "唐揚げ定食",
  "焼き魚定食",
  "酢豚定食",
  "ステーキ定食",
  "カツカレー定食",
];
const menuList = document.querySelector("#menu");

menu.forEach((e) => {
  console.log(e);
  menuList.innerHTML += `<li>${e}</li>`;
});

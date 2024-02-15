const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");
const btnC = document.getElementById("btnC");
// const btn = [btnA, btnB, btnC];
const btn = document.getElementsByClassName("btn");
console.log(btn);
const result = document.getElementById("result");

function output(id) {
  result.innerText = `${id}が押された`;
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", (evt) => {
    output(evt.target.id);
    // console.dir(btn[i].id);
  });
}

// evt.target.idをidへ送っている
// function output(id, str = "aaa") {
//   result.innerText = `${id}が押された`;
//   console.log(str);
// }

// for (let i = 0; i < btn.length; i++) {
//   console.log(btn[i]);
//   btn[i].addEventListener("click", (evt) => {
//     output(evt.target.id, "bbb");
//     // console.dir(btn[i].id);
//   });
// }

// 元々
// btnA.onclick = () => {
//   result.innerText = "btnAが押された";
// };

// btnB.onclick = () => {
//   result.innerText = "btnBが押された";
// };

// btnC.onclick = () => {
//   result.innerText = "btnCが押された";
// };

// function btn(abc) {
//   result.innerText = `btn${abc}が押された`;
// }

// btn().onclick = () => {
//   btn();
// };

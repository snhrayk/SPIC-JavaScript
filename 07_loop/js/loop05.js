const fruit = [
  { name: "apple", price: 180 },
  { name: "banana", price: 230 },
  { name: "lemon", price: 200 },
  { name: "peach", price: 480 },
  { name: "kiwi", price: 80 },
  { name: "mango", price: 680 },
];
const out = document.querySelector("#out");
const fPrice = fruit.map((f) => {
  // console.log(f);
  return f.price;
});

const result = fPrice.reduce((prev, current) => prev + current);
// console.log(result);
out.innerText = `合計${result}円`;

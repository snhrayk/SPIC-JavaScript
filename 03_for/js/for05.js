let num = prompt();
num = Number(num);

// for (let i = 1; i <= num; i++) {
//   console.log(`${i}回目`);
// }

if (num >= 1 && num <= 50) {
  for (let i = 1; i <= num; i++) {
    console.log(`${i}回目`);
  }
} else {
  console.log("1から50の数値を入れてください");
}

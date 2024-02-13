let Photoshop = prompt("Photoshopの点数は?");
Photoshop = Number(Photoshop);

let Illustrator = prompt("Illustratorの点数は?");
Illustrator = Number(Illustrator);

console.log(
  `Photoshopは${Photoshop}点ね、Illustratorは${Illustrator}点ね、平均${
    (Photoshop + Illustrator) / 2
  }点ね`
);

let average = (Photoshop + Illustrator) / 2;

if (average >= 0 && average <= 30) {
  console.log("がんばりなさい");
} else if (average >= 31 && average <= 60) {
  console.log("まずまずね");
} else if (average >= 61 && average <= 100) {
  console.log("頑張ったね");
} else {
  console.log("嘘つくんじゃない");
}

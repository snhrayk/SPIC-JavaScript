let cities = [
  { name: "大阪市", population: 2756034 },
  { name: "堺市", population: 822671 },
  { name: "東大阪市", population: 489151 },
  { name: "豊中市", population: 401233 },
  { name: "枚方市", population: 398287 },
  { name: "吹田市", population: 378171 },
  { name: "高槻市", population: 350642 },
  { name: "茨木市", population: 283155 },
  { name: "八尾市", population: 264203 },
  { name: "寝屋川市", population: 229286 },
];
const result = document.querySelector("#result");

// citiesのpopulationを取ってくる
// const topC = cities.map((c) => {
//   console.log(c);
//   return c;
// });

// citiesのpopulationを降順に並べる
// cities.sort((a, b) => b.population - a.population);
// console.log(cities);

const topC = cities.map((c) => {
  console.log(c);
  return c;
});

// citiesのnameをresultに<li></li>として表示
for (let i = 0; i < topC.length; i++) {
  result.innerHTML += `<li>${topC[i].name}</li>`;
}

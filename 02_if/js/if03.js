const wallet = 3000;
let item = prompt();
item = Number(item);

if (wallet > item) {
  console.log("購入することが出来ます");
} else if (wallet === item) {
  console.log("ピッタリです");
} else {
  console.log("購入することが出来ません");
}

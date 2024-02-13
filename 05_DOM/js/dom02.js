// ここに書いている文字をコンソール画面に表示してみましょう。

// コンソール画面に表示することができたら、
// id名textに対して ECCComp. とh1要素で上書き表示を行いましょう。

const text = document.querySelector("#text");
console.log(text);
text.innerHTML = "<h1>ECCComp.</h1>";

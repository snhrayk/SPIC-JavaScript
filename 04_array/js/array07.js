// 配列名 menu を作成し、下記内容を入れる
// Aランチ / Bランチ / モーニング定食 / パスタセット
// モーニング定食を要素から削除し、コンソール画面に出力しましょう。

let menu = ["Aランチ", "Bランチ", "モーニング定食", "パスタセット"];
console.log(menu);

menu.splice(2, 1);
console.log(menu);
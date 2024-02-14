//問題文
// K子の財布には、12800円入っている。
// 今日は、特売日のため鶏もも肉980円を買えるだけ買いたい。
// 特売価格はお1人様1名までとあったため、1回づつ買っては
// 家に帰り変装して、またお店で買うのを繰り返す作戦を考えた

// 「私頭は悪いけど、だいたい20回は買い物できそうだわ」

// 買い物を繰り返すうちに、5回目の買い物から値引きシールが貼られて750円に割引された。
// 所持金で買えるだけ買う場合、何回買い物できるだろうか。
// コンソール画面に買い物が出来た時は、「x回目の買い物成功。残金はxxxx円」と表示し
// 所持金が足りなくなったら、「買い物終了x個買えた」と表示すること
// 変数は予め入っているものを使うか、必要に応じて作成すること

// K子の財布には、12800円入っている。
//残金
let wallet = 12800;

// 今日は、特売日のため鶏もも肉980円を買えるだけ買いたい。
//価格
let price = 980;

// iは買い物回数
// i=0でi<20以外にする
for (let i = 1; i < 20; i++) {
  if (wallet >= price) {
    if (i >= 5) {
      price = 750;
    }
    wallet = wallet - price;
    console.log(`${i}回目の買い物成功。残金は${wallet}円`);
  } else {
    console.log(`買い物終了${i - 1}個買えた`);
    break;
  }
}

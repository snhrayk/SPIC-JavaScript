// 変数 code を作成し、HTMLを代入します
let code = "HTML";
// switch文を用いて下記の通りコンソール画面に表示しましょう
switch (code) {
  // HTMLの時は、「拡張子は.htmlです」と表示する。
  case "HTML":
    console.log("拡張子は.htmlです");
    break;
  // CSSの時は、「拡張子は.cssです」と表示する。
  case "CSS":
    console.log("拡張子は.cssです");
    break;
  // JavaScriptの時は、「拡張子は.jsです」と表示する。
  case "JavaScript":
    console.log("拡張子は.jsです");
    break;
  // それ以外の値の場合は、「分からないファイルです」と表示する
  default:
    console.log("分からないファイルです");
    break;
}
// ※それぞれうまく動作するか、codeの中身を変えながら確認してください

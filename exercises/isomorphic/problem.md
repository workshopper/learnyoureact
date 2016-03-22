フロントエンド側でもReactを利用してみましょう。

今回からはサーバーサイドだけでなく、フロントエンド側でもReactを使用していきます。
フロントエンド側でイベントを発生させ、その動作を見ていきましょう。
今までのエクササイズの中で1箇所、イベントを発生させていますが上手く動作していなかった箇所があります。それはどこでしょうか。
`State` で記述した、 `checkbox` のチェックイベントです。
`State` では実は、どんな記述をしても無視され、チェックができていました。正しく記述できていたか確認してみましょう。
少し修正する箇所が多いですが、頑張っていきましょう！

# 問題
---

まずはモジュールをインストールしましょう。

```
$ npm install browserify babelify babel-preset-react babel-preset-es2015
```

次に `program.js` と同じディレクトリに `app.js` を作成してください。 `app.js` には以下のように記述してください。

```
import React from 'react';
import ReactDOM from 'react-dom';
import TodoBox from './views/index.jsx';

let data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
ReactDOM.render(<TodoBox data={data} />, document.getElementById("app"));
```

これが、フロントエンド側でReactを使用するためのコードです。 `app` というIDを持つ要素に、  `index.jsx` から読み込んだ `TodoBox` と、 `initial-data` というIDで渡される、サーバーからのデータを渡しています。

次に `program.js` を修正しましょう。
新しくファイルを作成しても構いません。

まず、以下の `require` を追加してください。

```
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var DOM = React.DOM;
var body = DOM.body;
var div = DOM.div;
var script = DOM.script;

var browserify = require('browserify');
var babelify = require("babelify");
```

次に `babel/register` を `require` している文の下に以下のように `index.jsx` を読み込む処理を1行追加してください。

```
require('babel/register')({
    ignore: false
});

var TodoBox = require('./views/index.jsx');
```

最後に `/bundle.js` と `/` にアクセスが来た際の動作を以下のように修正してください。
`/bundle.js` にアクセスが来た際には、上記の `app.js` をフロントエンドでも動作するような形に変換してレスポンスを返します。

`/` にアクセスが来た際には、 `index.jsx` を読み込んだものと、サーバーから渡すデータ、そして `bundle.js` をHTMLの形にして、レスポンスを返します。

```
app.use('/bundle.js', function (req, res) {
    res.setHeader('content-type', 'application/javascript');

    browserify({ debug: true })
        .transform(babelify.configure({
            presets: ["react", "es2015"],
            compact: false
        }))
        .require("./app.js", { entry: true })
        .bundle()
        .pipe(res);
});

app.use('/', function (req, res) {
    var initialData = JSON.stringify(data);
    var markup = ReactDOMServer.renderToString(React.createElement(TodoBox, {data: data}));

    res.setHeader('Content-Type', 'text/html');

    var html = ReactDOMServer.renderToStaticMarkup(body(null,
        div({id: 'app', dangerouslySetInnerHTML: {__html: markup}}),
        script({
            id: 'initial-data',
            type: 'text/plain',
            'data-json': initialData
        }),
        script({src: '/bundle.js'})
    ));

    res.end(html);
});
```

それができたら、 `node program.js 3000 Milk 13:00` を実行し、 `http://localhost:3000` にアクセスして、実際にhtmlが出力されていることを確認してください。
チェックボックスを何度かクリックしてみて、正しくチェックされることを確認してください。
その後、 `learnyoureact verify program.js` を実行してください。

※ `verify` を行った際に出力されるHTMLが、 `http://localhost:3000` にアクセスした時に表示されていたHTMLと異なっていることに気づいた方もいらっしゃると思います。
DOMを一意に識別するための `data-react-checksum` や `data-reactid` はその性質上、正答とあなたが記述したファイルを比較する際にも異なる値を持つので、比較ができません。
そのため、 `verify` の際にはそれ以外の部分を用いて比較を行っています。

余裕があったら、 `handleChange` の `setState` で `true` や `false` といった固定の変数を指定して、正しくチェックボックスが使えないことも確認してみてください。

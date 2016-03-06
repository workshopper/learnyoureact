まずは `Hello World` を出力してみましょう！

前準備として、今回作業を行うフォルダを作成し、その中に移動しましょう。
そのフォルダには[package.json](https://docs.npmjs.com/getting-started/using-a-package.json)を作成しましょう。
package.jsonによって、npmはどのフォルダにパッケージをインストールするか判断します。
`learnyoureact` をお好きなフォルダ名に変更してください。

`$ mkdir learnyoureact; cd learnyoureact; npm init -y;`

それができたら、そのフォルダの中にモジュールをインストールしましょう。
以下のコマンドを実行してください。

`$ npm install --save react react-dom express body-parser express-react-views@0.9.0 babel@5.8.23`

`node_modules` というフォルダが作成されたかと思います。その中にモジュールのフォルダがあります。

次に `program.js` を作成します。
フォルダ構成は以下のようになります。

```
learnyoureact
├── node_modules/
├── package.json
└── program.js
```

`program.js` には以下のように記述してください。

```
var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel/register')({
    ignore: false
});

app.use('/', function(req, res) {
  res.render('index', '');
});

app.listen(app.get('port'), function() {});
```
以上がレンダリングを行うサーバー側のコードです。 `express-react-views` というモジュールを使用して、 `/` にアクセスが来た際に `views/index.jsx` を読み込むようになっています。


次に、 `program.js` と同じディレクトリに `views` ディレクトリを作成し、その中に `index.jsx` を作成してください。
`index.jsx` には以下のように記述してください。

```
import React from 'react';

export default class TodoBox extends React.Component{
  render() {
    return <div className="todoBox">
        Hello, world!
      </div>
  }
}
```

以上の、JavaScriptの中にXMLを記述しているようなソースがReactのJSXと呼ばれる記法です。
他の記法で書くこともできますが、このワークショッパーの中では、全てJSXを使用して記述します。

Reactのドキュメントに関しては、こちらを参照してください。: https://facebook.github.io/react/docs/getting-started-ja-JP.html
JSXシンタックスに関しての詳細については、こちらを参照してください。: https://facebook.github.io/react/docs/jsx-in-depth-ja-JP.html


それができたら、 `node program.js` を実行し、 `http://localhost:3000` にアクセスして、実際にhtmlが出力されていることを確認してください。
その後、 `learnyoureact verify program.js` を実行してください。

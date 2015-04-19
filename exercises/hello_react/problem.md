まずは `Hello World` を出力してみましょう！

はじめに、モジュールをインストールしましょう。
以下のコマンドを実行してください。

`$ npm install -g express`

`$ npm install -g body-parser`

`$ npm install -g express-react-views`

次に `app.js` を作成し、以下のように記述してください。

```
var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/', function(req, res) {
        res.render('index', '');
});

app.listen(app.get('port'), function() {});
```


また、 `app.js` と同じディレクトリに `views` ディレクトリを作成し、その中に `index.jsx` を作成してください。
`index.jsx` には以下のように記述してください。

```
var React = require('react');

var TextBox = React.createClass({
  render: function() {
      return (
            <div className="textBox">
              Hello, world!
            </div>
      );
  }
});

module.exports = TextBox;
```


それができたら、 `node app.js` を実行し、 `http://localhost:3000` にアクセスして、実際にhtmlが出力されていることを確認してください。
その後、 `learnyoureact verify app.js` を実行してください。

サーバーからComponentに値を渡してみましょう。

jsxにベタ書きしていたデータをサーバーから渡すよう変更しましょう。
今回はビュー側と、サーバー側の両方のソースを変更します。

# 問題
---

`index.jsx` の `TodoBox` 、 `TodoList` を以下のように修正してください。
新しくファイルを作成しても構いません。

`TodoBox` が今回の最も上位のComponentなので、 `TodoList` の `{this.props.data}` にサーバー側から値が渡されてきます。
それを下位の `TodoList` で `Todo` タグに変換します。


```
var React = require('react');

var TodoBox = React.createClass({
  render: function() {
      return (
        <div className="todoBox">
          <h1>Todos</h1>
          <TodoList data = {this.props.data} />
          <TodoForm />
        </div>
      );
  }
});

var TodoList = React.createClass({
  render: function() {
    var todo = this.props.data.map(function(obj) { return <Todo title={obj.title}>{obj.detail}</Todo>});
    return (
      <div className = "todoList">
        {todo}
      </div>    
    );
  }
});

var Todo = React.createClass({
  // 省略
});

var TodoForm = React.createClass({
  // 省略
});

module.exports = TodoBox;
```

次に、サーバー側のコードを変更しましょう。
`app.use()` のコールバック関数を変更しましょう。
また、 `data` という変数を作成し、その中で `title` が「買い物」で `detail` が3つ目のコマンドライン引数、 `title` が「散髪」で `detail` が5つ目のコマンドライン引数であるJSONを記述してください。
※2つ目のコマンドライン引数はport番号になっています。ソースのどこかに記述してあるので、それを参考にしてみてください。


```
var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views'); 
app.engine('jsx', require('express-react-views').createEngine());

// ↓に記述
var data = [];

app.use('/', function(req, res) {
        res.render('index', {data: data});
});

app.listen(app.get('port'), function() {});

```

それができたら、 `node program.js 3000 牛乳 13:00〜` を実行し、 `http://localhost:3000` にアクセスして、実際にhtmlが出力されていることを確認してください。
その後、 `learnyoureact verify program.js` を実行してください。

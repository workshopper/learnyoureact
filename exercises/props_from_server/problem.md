サーバーからComponentに値を渡してみましょう。

jsxにベタ書きしていたデータをサーバーから渡すよう変更しましょう。
今回はビュー側と、サーバー側の両方のソースを変更します。

# 問題
---

`index.jsx` の `TodoBox` 、 `TodoList` を以下のように修正してください。
新しくファイルを作成しても構いません。

`TodoBox` が今回の最も上位のComponentなので、 `TodoList` の `{this.props.data}` にサーバー側から値が渡されてきます。
それを下位の `TodoList` で `Todo` タグに変換します。
`Todo` タグの中に記述してある `key` はVirtualDOMのdiffから実際のDOMに反映させるときに変更を最小限にするために使われます。
`key` を指定していないと、 `Warning` が出力されます。


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
    var todo = this.props.data.map(function(obj) { return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>});
    return (
      <div className = "todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
            {todo}
          </tbody>
        </table>
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

var style = {
  // 省略
};

module.exports = TodoBox;
```

次に、サーバー側のコードを変更しましょう。
`app.use()` のコールバック関数を変更しましょう。
また、 `data` という変数を作成し、その中で `title` が「Shopping」で `detail` が3つ目のコマンドライン引数、 `title` が「Hair cut」で `detail` が4つ目のコマンドライン引数であるJSONを記述してください。
※2つ目のコマンドライン引数はport番号になっています。ソースのどこかに記述してあるので、それを参考にしてみてください。


```
var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views'); 
app.engine('jsx', require('express-react-views').createEngine());

require('node-jsx').install();

// ↓に記述
var data = [];

app.use('/', function(req, res) {
  res.render('index', {data: data});
});

app.listen(app.get('port'), function() {});

```

それができたら、 `node program.js 3000 Milk 13:00` を実行し、 `http://localhost:3000` にアクセスして、実際にhtmlが出力されていることを確認してください。
その後、 `learnyoureact verify program.js` を実行してください。
余裕があったら、上記の `key` を指定していなかった際に `Warning` が出力されることも確認してみてください。

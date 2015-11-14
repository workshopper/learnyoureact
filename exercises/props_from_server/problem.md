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
import React from 'react';

export default class TodoBox extends React.Component {
    render() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList data = {this.props.data} />
        <TodoForm />
      </div>
    );
  }
}

class TodoList extends React.Component {
    render() {
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
}

class Todo extends React.Component {
  // 省略
}
Todo.propTypes = {
  // 省略
};

class TodoForm extends React.Component {
  // 省略
}

let style = {
  // 省略
};
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
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel/register')({
    ignore: false
});

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

Componentを複数組み合わせてみましょう。

React.jsではComponentを組み合わせてアプリケーションを作ります。
また、HTMLのタグとJSXを組み合わせることもできます。


# 問題
---

`index.jsx` を以下のように修正してください。
新しくファイルを作成しても構いません。


```
var React = require('react');

var TodoBox = React.createClass({
  render: function() {
      return (
        <div className="todoBox">
          <h1>Todos</h1>
          <TodoList />
          <TodoForm />
        </div>
      );
  }
});

var TodoList = React.createClass({
  // ここに記述
});

var TodoForm = React.createClass({
  // ここに記述
});

module.exports = TodoBox;
```

上記の「ここに記述」と書いてある2箇所に、以下のようなHTMLをそれぞれ出力するようにJSXを記述してください。
サーバー側のコードは変更する必要はありません。

```
<div class = "todoList">
  I am a TodoList.
</div>
```
```
<div class = "todoForm">
  I am a TodoForm.
</div>
```

それができたら、 `node program.js` を実行し、 `http://localhost:3000` にアクセスして、実際にhtmlが出力されていることを確認してください。
その後、 `learnyoureact verify program.js` を実行してください。

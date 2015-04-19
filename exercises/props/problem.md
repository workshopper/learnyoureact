親Componentから子Componentに値を渡してみましょう。

親Componentでattributeとして定義したものや、ネストしている要素を子Componentから取得できます。

# 問題
---

`index.jsx` の `TodoList` を以下のように修正してください。
また、 `Todo` を新しく追加してください。
新しくファイルを作成しても構いません。


```
var React = require('react');

var TodoBox = React.createClass({
  // 省略
});

var TodoList = React.createClass({
  render: function() {
    return (
      <div className = "todoList">
        <Todo title="買い物">牛乳</Todo>
        <Todo title="散髪">13:00〜</Todo>
      </div>    
    );
  }
});

var Todo = React.createClass({
  // ここに記述
});

var TodoForm = React.createClass({
  // 省略
});

module.exports = TodoBox;
```

上記の「ここに記述」と書いてある箇所に、以下のようなHTMLを出力するようにJSXを記述してください。
親要素である `TodoList` の中に記述してある、
`Todo` タグの `title` は `{this.props.title}` で取得できます。
ネストしている `牛乳` 、 `13:00〜` は `{this.props.children}` で取得できます。
こちらも、サーバー側のコードは変更する必要はありません。

```
<div class="todoList">
  <div class="todo">
    <h2 class="todoTitle">
      買い物
    </h2>
    牛乳
  </div>
  <div class="todo">
    <h2 class="todoTitle">
      散髪
    </h2>
    13:00〜
  </div>
</div>
```

それができたら、 `node program.js` を実行し、 `http://localhost:3000` にアクセスして、実際にhtmlが出力されていることを確認してください。
その後、 `learnyoureact verify program.js` を実行してください。

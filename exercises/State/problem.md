渡した値の型の制約を指定しましょう

`React.createClass()` の中で、

```
propTypes: {
  name:   React.PropTypes.string.isRequired,
  id:     React.PropTypes.number.isRequired,
  width:  React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  alt:    React.PropTypes.string
}
```
というように記述することで、渡されてきたpropsに制約を指定することができます。
もしそれに違反するような値が渡された際には、 `Warning` が出力されます。


# 問題
---

`index.jsx` の `Todo` を以下のように修正してください。
新しくファイルを作成しても構いません。


```
var React = require('react');

var TodoBox = React.createClass({
  // 省略
});

var TodoList = React.createClass({
  // 省略
});

var Todo = React.createClass({
  propTypes: {
    title: React.PropTypes.number.isRequired         
  },
  render: function() {  
    return (
      <tr>
        <td style={{border: "1px solid black"}}>{this.props.title}</td>
        <td style={{border: "1px solid black"}}>{this.props.children}</td>
      </tr>
    );   
  }});




var TodoForm = React.createClass({
  // 省略
});

module.exports = TodoBox;
```

その後、 `learnyoureact run program.js` を実行してみてください。
標準出力に、 `Warning` が出力されたと思います。
その内容を読み、 `Warning` が出なくなるように `Todo` を修正してください。
`propTypes` は必ず使用してください。


それができたら、 `node program.js` を実行し、 `http://localhost:3000` にアクセスして、実際にhtmlが出力されていることを確認してください。
その後、 `learnyoureact verify program.js` を実行してください。

イベントの実装を親要素に委譲してみましょう。

Todoを削除するボタンを作成しましょう。
削除ボタン自体は個々のTodoごとに1つあるべきです。
では、Todoを削除する処理はどこに実装すべきでしょうか？

# 問題
---

`index.jsx` の `Todo` を以下のように修正してください。
新しくファイルを作成しても構いません。

```
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      TodoStyle: style.notCheckedTodo
    };
    this.handleChange = this.handleChange.bind(this);
    this._onDelete = this._onDelete.bind(this);
  }
  handleChange(e) {
    // 省略
  }
  _onDelete() {
    this.props.onDelete(this.props.title);
  }
  render() {
    return (
      <tr style={this.state.TodoStyle}>
        <td style={style.tableContent}><button onClick={this._onDelete}>X</button></td>
        <td style={style.tableContent}><input type="checkbox" checked={this.state.checked} onChange={this.handleChange} /></td>
        <td style={style.tableContent}>{this.props.title}</td>
        <td style={style.tableContent}>{this.props.children}</td>
      </tr>
    );
  }
}
```

これで、個々の `Todo` に削除ボタンができました。
では、 `TodoList` にTodoを削除する処理を実装してください。

それができたら、 `node program.js 3000 Milk 13:00` を実行し、 `http://localhost:3000` にアクセスして、実際にhtmlが出力されていることを確認してください。
削除ボタンを押してみて、正しく動作することを確認してください。
その後、 `learnyoureact verify program.js` を実行してください。
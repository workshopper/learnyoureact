データの値を変更するイベントを実装してみましょう。

入力欄を作成し、Todoを追加できるようにしてみましょう。

# 問題
---

`index.jsx` の `TodoList ` を以下のように修正してください。
新しくファイルを作成しても構いません。

```
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            titleValue: "",
            detailValue: ""
        };
        this.changeTitle = this.changeTitle.bind(this);
        this.changeDetail = this.changeDetail.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    changeTitle(e) {
      // ここに実装
    }

    changeDetail(e) {
      // ここに実装
    }

    addTodo() {
      // ここに実装
    }

    render() {
      let todo = this.state.data.map(function(obj) {
        return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>;
      });
      return (
        <div className = "todoList">
          <div>
            Title:<input type="text" value={this.state.titleValue} onChange={this.changeTitle} />
            Detail:<input type="text" value={this.state.detailValue} onChange={this.changeDetail} />
            <button onClick={this.addTodo}>Add</button>
          </div>
          <table style={{border: "2px solid black"}}>
            <tbody>
              {todo}
            </tbody>
          </table>
        </div>
      );
  }
}
```

`// ここに実装` と記述してある3箇所に、入力欄に入力した `Todo` を `table` に追加するような処理を実装してください。
`setState` をどのように行えばよいか、考えながらやってみてください。

それができたら、 `node program.js 3000 Milk 13:00` を実行し、 `http://localhost:3000` にアクセスして、実際にhtmlが出力されていることを確認してください。
Todoを入力し、追加ボタンを押してみて、正しく動作することを確認してください。
その後、 `learnyoureact verify program.js` を実行してください。
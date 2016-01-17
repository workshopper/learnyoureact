渡した値の型の制約を指定する方法を勉強しましょう

componentが渡された値を正しく利用していることを保証することは、アプリケーションを作成する上での助けになります。

`React.createClass()` の中で、

```
class MyComponent extends React.Component {
  /* ... */
}
MyComponent.propTypes = {
    name:   React.PropTypes.string.isRequired,
    id:     React.PropTypes.number.isRequired,
    width:  React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    alt:    React.PropTypes.string
};
```

というように記述することで、渡されてきたpropsに制約を指定することができます。
もしそれに違反するような値が渡された際には、 `Warning` がブラウザのJavaScriptコンソールに出力されます。


# 問題
---

`index.jsx` の `Todo` を以下のように修正してください。
新しくファイルを作成しても構いません。


```
import React from 'react';

export default class TodoBox extends React.Component {
  // 省略
}

class TodoList extends React.Component {
    render() {
        return (
            <div className="todoList">
                <table style={{border: "2px solid black"}}>
                  <tbody>
                    <Todo title="Shopping">Milk</Todo>
                    <Todo title="Hair cut">13:00</Todo>
                    <Todo>15:00</Todo>
                  </tbody>
                </table>
            </div>
        );
    }
}

class Todo extends React.Component {
    render() {
        return (
            <tr>
                <td style={{border: "1px solid black"}}>{this.props.title}</td>
                <td style={{border: "1px solid black"}}>{this.props.children}</td>
            </tr>
        );
    }
}
Todo.propTypes = {
    title: React.PropTypes.number.isRequired
};

class TodoForm extends React.Component {
  // 省略
}
```

その後、 `learnyoureact run program.js` を実行してみてください。
コンソールに、 `Warning` が出力されたと思います。
その内容を読み、 `Warning` が出なくなるように `Todo` を修正してください。
最後の `Todo` に `Learn React` というタイトルを追加してください。
`propTypes` は必ず使用してください。

再利用可能なコンポーネントに関しては、こちらのドキュメントを参照してください。 : https://facebook.github.io/react/docs/reusable-components-ja-JP.html


それができたら、 `node program.js` を実行し、 `http://localhost:3000` にアクセスして、実際にhtmlが出力されていることを確認してください。
その後、 `learnyoureact verify program.js` を実行してください。

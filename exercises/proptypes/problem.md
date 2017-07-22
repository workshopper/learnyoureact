一般的なコンポーネント（ボタン、フォームフィールドなど）を構築し、それに依存すると、
コンポーネントが正しく使用されていることを確認するのに役立ちます。 これを行うには `propTypes`を指定します。

まず、次のコマンドを実行して `prop-types`パッケージをインストールする必要があります：

`$ npm install --save prop-types`

次に、下記のように `index.jsx`を変更して新しい` import`文をインクルードします：

```
import React from 'react';
import PropTypes from 'prop-types';

export default class TodoBox extends React.Component {
   //省略された
}
```

今度は、 `prop-types`パッケージをインストールし、そのパッケージから` PropTypes`メソッドをインポートした後で、あなたのコンポーネントに渡されたデータに対して一連のバリデータを使うことができます。

```
class MyComponent extends React.Component {
  /* ... */
}
MyComponent.propTypes = {
    name:   PropTypes.string.isRequired,
    id:     PropTypes.number.isRequired,
    width:  PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    alt:    PropTypes.string
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
import PropTypes from 'prop-types';

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
                    <Todo title="Learn React">15:00</Todo>
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
    title: PropTypes.string.isRequired
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

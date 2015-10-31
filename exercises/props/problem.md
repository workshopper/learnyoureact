親Componentから子Componentに値を渡す方法を勉強しましょう。

親Componentでattributeとして定義したものや、ネストしている要素を子Componentから取得できます。

```
<ChildComponent some-attribute="this gets passed">So does this</ChildComponent>
```

# 問題
---

`index.jsx` の `TodoList` を以下のように修正してください。
また、 `Todo` を新しく追加してください。
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
                    </tbody>
                </table>
            </div>
        );
    }
}

class Todo extends React.Component {
  // ここに記述
}

class TodoForm extends React.Component {
  // 省略
}
```

上記の「ここに記述」と書いてある箇所に、以下のようなHTMLを出力するようにJSXを記述してください。
親要素である `TodoList` の中に記述してある、
`Todo` タグの `title` は `{this.props.title}` で取得できます。
ネストしている `Milk` 、 `13:00` は `{this.props.children}` で取得できます。
こちらも、サーバー側のコードは変更する必要はありません。


```
<div class="todoList">
  <table style="border:2px solid black;">
    <tbody>
      <tr>
        <td style="border:1px solid black;">Shopping</td>
        <td style="border:1px solid black;">Milk</td>
      </tr>
      <tr>
        <td style="border:1px solid black;">Hair cut</td>
        <td style="border:1px solid black;">13:00</td>
      </tr>
    </tbody>
  </table>
</div>
```


それができたら、 `node program.js` を実行し、 `http://localhost:3000` にアクセスして、実際にhtmlが出力されていることを確認してください。
その後、 `learnyoureact verify program.js` を実行してください。

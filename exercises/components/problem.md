Componentを複数組み合わせてみましょう。

React.jsではComponentを組み合わせてアプリケーションを作ります。
また、HTMLのタグとJSXを組み合わせることもできます。

Reactのコンポーネントをレンダリングするためには、大文字で始まるローカル変数を作成します。
HTMLのタグを記述する際には、小文字で始まるローカル変数を作成してください。
ReactのJSXではローカルのコンポーネントのクラスとHTMLのタグを識別するために大文字と小文字の変数を使い分けています。

例:

```
export default class MyComponent extends React.Component {/*...*/};
let myElement = <MyComponent someProperty={true} />;
ReactDOM.render(myElement, document.getElementById('example'));
```

# 問題
---

`index.jsx` を以下のように修正してください。
新しくファイルを作成しても構いません。


```
import React from 'react';

export default class TodoBox extends React.Component {
    render() {
        return (
            <div className="todoBox">
                <h1>Todos</h1>
                <TodoList />
                <TodoForm />
            </div>
        );
    }
}

class TodoList extends React.Component {
  // ここに記述
}

class TodoForm extends React.Component {
  // ここに記述
}
```

上記の「ここに記述」と書いてある2箇所に、以下のようなHTMLをそれぞれ出力するようにJSXシンタックスを記述してください。
サーバー側のコードは変更する必要はありません。
`render` と `return` を記述するのを忘れないようにしてください( ´ ▽ ` )ﾉ

```
<div class="todoList">
  I am a TodoList.
</div>
```
```
<div class="todoForm">
  I am a TodoForm.
</div>
```

JSXのドキュメントに関しては、こちらを参照してください。 : https://facebook.github.io/react/docs/getting-started-ja-JP.html

それができたら、 `node program.js` を実行し、 `http://localhost:3000` にアクセスして、実際にhtmlが出力されていることを確認してください。
その後、 `learnyoureact verify program.js` を実行してください。

スタイルを変数として指定しましょう！

今のソースでは、同じスタイルを複数の箇所に指定している部分があるかと思います。
その指定を、変数として切り出し、使いまわすことで記述をスマートにしましょう！

# 問題
---

`index.jsx` に以下のように `style` を追加してください。
新しくファイルを作成しても構いません。


```
import React from 'react';

export default class TodoBox extends React.Component {
  // 省略
}

class TodoList extends React.Component {
  // 省略
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
    tableContent: {
        border: "1px solid black"
    }
};
```

同じスタイルを複数の箇所に指定している部分を、追加した `style` を使用するように変更してください。
※似たスタイルではありますが、少し違うスタイルを指定している箇所があるので注意してください。

インラインスタイルに関してはこちらのドキュメントを参照してください(英語) : https://facebook.github.io/react/tips/inline-styles.html

それができたら、 `node program.js` を実行し、 `http://localhost:3000` にアクセスして、実際にHTMLが出力されていることを確認してください。
見た目上の変化はないかと思います。
その後、 `learnyoureact verify program.js` を実行してください。

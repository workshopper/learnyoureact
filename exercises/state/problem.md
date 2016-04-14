変更可能な値を定義しましょう！

今まで、 `this.props` を使って値を変更不可能なコンポーネントを作成してきました。
コンポーネントを更新したい場合はどうしたらよいでしょうか？

動的に変更可能な値を利用する際には `state` を使用します。
`checkbox` がチェックされているかどうかの初期値を指定し、チェックされた際やチェックが外された際の動作を実装しましょう。

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
  // 省略
}

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td style={{border: "1px solid black"}}>
                    <input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)}/>
                </td>
                <td style={{border: "1px solid black"}}>{this.props.title}</td>
                <td style={{border: "1px solid black"}}>{this.props.children}</td>
            </tr>
        );
    }
}
Todo.propTypes = {
    title: React.PropTypes.string.isRequired
};

class TodoForm extends React.Component {
  // 省略
}
```

`Todo` の中に、 `checked` の初期値を指定する箇所と、チェックされた際やチェックが外された際の動作を記述してください。
データに変更があった場合には `handleChange` 関数を作成し、その中で `this.setState` を行うことで更新ができます。

以下のドキュメントが参考になるでしょう。
コンポーネントAPI : https://facebook.github.io/react/docs/component-api-ja-JP.html
コンポーネントのスペックとライフサイクル : https://facebook.github.io/react/docs/component-specs-ja-JP.html

それができたら、 `node program.js` を実行し、 `http://localhost:3000` にアクセスして、実際にhtmlが出力されていることを確認してください。
その後、 `learnyoureact verify program.js` を実行してください。

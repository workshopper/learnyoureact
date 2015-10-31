イベントによって、CSSを切り替えてみましょう。

チェックボックスがチェックされた際にTodoに打ち消し線をつけてみましょう。

# 問題
---

`index.jsx` の `style` を以下のように修正してください。
新しくファイルを作成しても構いません。

```
let style = {
    checkedTodo: {
        textDecoration: "line-through"
    },
    notCheckedTodo: {
        textDecoration: "none"
    },
    tableContent: {
        border: "1px solid black"
    }
};
```

`Todo` を修正して、チェックボックスがチェックされたら `tr` に打ち消し線をつけ、チェックが外れたら打ち消し線も消えるようにしてください。

それができたら、 `node program.js 3000 Milk 13:00` を実行し、 `http://localhost:3000` にアクセスして、実際にhtmlが出力されていることを確認してください。
チェックボックスを何度かクリックしてみて、正しく動作することを確認してください。
その後、 `learnyoureact verify program.js` を実行してください。
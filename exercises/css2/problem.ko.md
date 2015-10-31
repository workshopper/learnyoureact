체크박스가 체크될 때 Todo에 취소선을 넣으면 멋있지 않을까요? 한번 해봅시다!

# 문제
---

`index.jsx`의 `style`을 다음과 같이 수정하세요.

시작하기 전에, 현재 `index.jsx`를 커밋하거나 이 도전과제를 위한 새로운 파일을
작성하셔도 됩니다.

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

`Todo`를 수정해, 체크박스가 체크되면 `tr`에 취소선을 넣고, 체크를 풀면 취소선을
지우도록 하세요.

다 되었으면, `node program.js 3000 Milk 13:00`를 실행해,
`http://localhost:3000`으로 들어가, 실제로 HTML이 출력되는 것을 확인하세요.

체크박스를 몇 번 클릭해, 바르게 동작하는지 확인하세요.

확인 후에, `learnyoureact verify program.js`를 실행하세요.

여러 컴포넌트를 조합해 봅시다.

React.js에서는 컴포넌트를 조합해 애플리케이션을 만듭니다.
또, HTML의 태그와 JSX를 조합할 수도 있습니다.


# 문제
---

`index.jsx`를 다음과 같이 수정합니다.
새로운 파일을 작성하셔도 됩니다.


```
var React = require('react');

var TodoBox = React.createClass({
  render: function() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
});

var TodoList = React.createClass({
  // 여기에 작성
});

var TodoForm = React.createClass({
  // 여기에 작성
});

module.exports = TodoBox;
```

위의 "여기에 작성"이라 적혀있는 두 곳에, 다음과 같은 HTML을 각각 출력하는 JSX를
작성해 보세요.
서버 측의 코드는 변경할 필요가 없습니다. HTML뿐만 아니라 `render`와 `return`도
작성하실 필요가 있습니다.

```
<div class = "todoList">
  I am a TodoList.
</div>
```
```
<div class = "todoForm">
  I am a TodoForm.
</div>
```

그런 다음, `node program.js`를 실행해 `http://localhost:3000`으로 들어가, 실제로 HTML이 출력되는 것을 확인하세요.
그런 다음, `learnyoureact verify program.js`를 실행하세요.

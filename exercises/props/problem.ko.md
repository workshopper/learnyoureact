부모 컴포넌트에서 자식 컴포넌트에 값을 넘깁시다.

부모 컴포넌트에서 속성으로 정의된 것이나, 중첩된 요소를 자식 컴포넌트에서 뽑아 봅시다.

# 문제
---

`index.jsx`의 `TodoList`를 다음과 같이 수정합니다.
그런 다음, `Todo`를 새로 추가해 주세요.
새로운 파일을 작성하셔도 됩니다.


```
var React = require('react');

var TodoBox = React.createClass({
  // 생략
});

var TodoList = React.createClass({
  render: function() {
    return (
      <div className = "todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
            <Todo title="Shopping">Milk</Todo>
            <Todo title="Hair cut">13:00</Todo>
          </tbody>
        </table>
      </div>
    );
  }
});

var Todo = React.createClass({
  // 여기에 작성
});

var TodoForm = React.createClass({
  // 생략
});

module.exports = TodoBox;
```

위의 "여기에 작성"이라 적혀있는 곳에, 다음과 같은 HTML을 출력하도록 JSX를 넣어주세요.
부모 요소인 `TodoList`의 안에 적혀있는 `Todo` 태그의 `title`은 `{this.props.title}`로 뽑을 수 있습니다.
중첩되어있는 `Milk`, `13:00`는 `{this.props.children}`으로 뽑을 수 있습니다.
여기에도 서버 쪽의 코드를 수정할 필요는 없습니다.


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


준비가 되면, `node program.js`를 실행해 `http://localhost:3000`으로 들어가, 실제로 HTML이 출력되는 것을 확인하세요.
그런 다음, `learnyoureact verify program.js`를 실행하세요.

넘긴 값의 타입을 제약해 봅시다.

`React.createClass()` 안에서

```
propTypes: {
  name:   React.PropTypes.string.isRequired,
  id:     React.PropTypes.number.isRequired,
  width:  React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  alt:    React.PropTypes.string
}
```
라고 작성해, 넘겨진 props에 제약을 거는 것이 가능합니다.
여기에 위반되는 값이 들어온 경우에는, `Warning`이 출력됩니다.


# 문제
---

`index.jsx`의 `Todo`를 다음과 같이 수정해주세요.
새로운 파일을 작성하셔도 됩니다.


```
var React = require('react');

var TodoBox = React.createClass({
  // 생략
});

var TodoList = React.createClass({
  // 생략
});

var Todo = React.createClass({
  propTypes: {
    title: React.PropTypes.number.isRequired
  },
  render: function() {
    return (
      <tr>
        <td style={{border: "1px solid black"}}>{this.props.title}</td>
        <td style={{border: "1px solid black"}}>{this.props.children}</td>
      </tr>
    );
  }});




var TodoForm = React.createClass({
  // 생략
});

module.exports = TodoBox;
```

그런 다음, `learnyoureact run program.js`를 실행해 주세요.
표준 출력에 `Warning`이 출력될 것입니다.
그 내용을 읽어, `Warning`이 나오지 않도록 `Todo`를 수정해 주세요.
`propTypes`는 반드시 사용하세요.


그런 다음, `node program.js`를 실행해 `http://localhost:3000`으로 들어가, 실제로 HTML이 출력되는 것을 확인하세요.
그런 다음, `learnyoureact verify program.js`를 실행하세요.

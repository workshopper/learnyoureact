변경 가능한 값을 정의합시다!

동적인 변경 가능한 값을 사용할 때는 `state`를 씁니다.
`checkbox`가 체크되어 있는지를 나타내는 초기값을 지정해, 체크될 때나 체크를 해제할 때의 동작을 구현합시다.

# 문제
---

`index.jsx`에 `Todo`를 다음과 같이 정의해 주세요.
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
    title: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <tr>
        <td style={{border: "1px solid black"}}><input type="checkbox" checked={this.state.checked} onChange={this.handleChange} /></td>
        <td style={{border: "1px solid black"}}>{this.props.title}</td>
        <td style={{border: "1px solid black"}}>{this.props.children}</td>
      </tr>
    );
  }
});



var TodoForm = React.createClass({
  // 생략
});

module.exports = TodoBox;
```

`Todo` 안에 `checked`의 초기값을 지정하는 곳과 체크했을 때나 체크를 해제할 때의 동작을 구현하세요.
초기값은 `getInitialState`로 설정할 수 있습니다.
또, 데이터의 변경이 있을 경우엔 `handleChange` 함수를 만들어, 그 안에서 `this.setState`를 해서 업데이트 할 수 있습니다.


그런 다음, `node program.js`를 실행해 `http://localhost:3000`으로 들어가, 실제로 HTML이 출력되는 것을 확인하세요.
그런 다음, `learnyoureact verify program.js`를 실행하세요.

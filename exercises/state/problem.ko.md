변경 가능한 값을 정의합시다!

여태까지는 컴포넌트를 렌더하는데 변경불가능한 프로퍼티 `this.props`를 사용했습니다.
하지만 컴포넌트를 업데이트하고 싶을때는 어떻게 해야할까요?
`this.state`를 사용해 각 컴포넌트에 종속되는 변경가능한 값을 정의할 수 있습니다.
`checkbox`가 체크되어 있는지를 나타내는 초기값을 false로 지정하고 체크될 때나 체크를 해제할 때의 동작을 구현합시다.

# 도전과제
---

`index.jsx`에 `Todo`를 다음과 같이 정의해 주세요.

시작하기 전에, 현재 `index.jsx`를 커밋하거나 이 도전과제를 위한 새로운 파일을
작성하셔도 됩니다.


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

`Todo` 안에 `checked`의 초기값을 지정하는 곳과 `handleChange`을 정의하세요.
`checked`의 초기값은 `getInitialState`로 설정할 수 있습니다.
`handleChange` 안에서 `this.setState`를 사용해 컴포넌트의 `state`를 변경할 수 있습니다.

자료를 찾아보는 것도 좋습니다. 특히 이문서가 도움이 될 것 같습니다.
컴포넌트 API: https://facebook.github.io/react/docs/component-api-ko-KR.html
컴포넌트 명세와 생명주기: https://facebook.github.io/react/docs/component-specs-ko-KR.html

코드를 고쳤으면, `node program.js`를 실행해 브라우저에서 `http://localhost:3000`으로 들어가 확인해보세요.
확인 후에, `learnyoureact verify program.js`를 실행하세요.

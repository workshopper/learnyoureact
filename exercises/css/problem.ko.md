스타일을 변수로 지정합시다!

변수를 사용하면 코드의 여러 곳의 변경을 깔끔하게 관리할 수 있습니다.
스타일을 변수로 지정해 어떤 부분을 교체할 수 있는 지 확인하세요.


# 문제
---

`index.jsx`에 아래와 같은 `style`을 추가해 주세요.
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
  // 생략
});

var TodoForm = React.createClass({
  // 생략
});

var style = {
  tableContent: {
    border: "1px solid black"
  }
};

module.exports = TodoBox;
```

추가한 `style`을 사용하도록 코드를 변경하세요.
*주의* 비슷한 스타일이긴 하지만, 다른 곳이 있으니 주의하셔야 합니다.

인라인 스타일: https://facebook.github.io/react/tips/inline-styles-ko-KR.html

준비가 되면, `node program.js`를 실행해 `http://localhost:3000`으로 들어가 학인하세요. 예상한 대로의 HTML이어야 합니다.

그런 다음, `learnyoureact verify program.js`를 실행하세요.

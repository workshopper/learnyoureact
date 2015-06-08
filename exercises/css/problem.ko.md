스타일을 변수로 지정합시다!

지금 소스에서는, 같은 스타일을 여러 곳에서 지정하는 경우가 있을 거라 생각합니다.
그 지정을, 변수로 뽑아, 깔끔하고 재사용 가능하게 합시다!


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

같은 스타일을 여러 곳에서 지정하는 부분을, 추가한 `style`을 사용하도록 변경하세요.
*비슷한 스타일이긴 하지만, 조금 다른 스타일인 곳이 있으니 주의하세요.

준비가 되면, `node program.js`를 실행해 `http://localhost:3000`으로 들어가, 실제로 HTML이 출력되는 것을 확인하세요.
겉으로 보기엔 차이가 없을 거라 생각합니다.
그런 다음, `learnyoureact verify program.js`를 실행하세요.

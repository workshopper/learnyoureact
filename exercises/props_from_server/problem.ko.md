서버에서 컴포넌트에 값을 넘겨 봅시다.

jsx에 하드 코딩한 데이터를 서버에서 넘기도록 고쳐봅시다.
이번엔 뷰와 서버 양쪽의 소스를 수정합니다.

# 문제
---

`index.jsx`의 `TodoBox`, `TodoList`를 다음과 같이 수정합니다.
새로운 파일을 작성하셔도 됩니다.

`TodoBox`가 이번엔 최상위 컴포넌트이므로, `TodoList`의 `{this.props.data}`에 서버 쪽에서 값을 넘깁니다.
그것을 밑에 있는 `TodoList`에서 `Todo` 태그로 변환합니다.
`Todo` 태그의 안에 있는 `key`는 VirtualDOM의 diff에서 실제 DOM에 반영할 때 변경을 최소화하기 위해 사용합니다.
`key`를 지정하지 않으면, `Warning`이 출력됩니다.


```
var React = require('react');

var TodoBox = React.createClass({
  render: function() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList data = {this.props.data} />
        <TodoForm />
      </div>
    );
  }
});

var TodoList = React.createClass({
  render: function() {
    var todo = this.props.data.map(function(obj) { return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>});
    return (
      <div className = "todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
            {todo}
          </tbody>
        </table>
      </div>
    );
  }
});

var Todo = React.createClass({
  // 생략
});

var TodoForm = React.createClass({
  // 생략
});

var style = {
  // 생략
};

module.exports = TodoBox;
```

그런 다음, 서버 쪽의 코드를 변경합시다.
`app.use()`의 콜백 함수를 변경합시다.
또, `data`라는 변수를 만들어, 그 안에 `title`이 "Shopping"이고 `detail`에 3번째의 커맨드라인 인자, `title`이 "Hair cut", `detail`이 4번째의 커맨드라인 인자인 JSON을 넣으세요.
* 2번째 커맨드라인 인자는 포트 번호입니다. 소스의 어딘가에 있으니 참고하세요.


```
var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views'); 
app.engine('jsx', require('express-react-views').createEngine());

// 여기에 추가
var data = [];

app.use('/', function(req, res) {
  res.render('index', {data: data});
});

app.listen(app.get('port'), function() {});

```

다 되었으면, `node program.js 3000 Milk 13:00`를 실행해, `http://localhost:3000`으로 들어가, 실제로 HTML이 출력되는 것을 확인하세요.
그런 다음, `learnyoureact verify program.js`를 실행하세요.
여유가 있다면, 위에 있는 `key`를 지정하지 않았을 때 `Warning`이 나오는 것을 확인해 보세요.

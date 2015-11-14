서버에서 컴포넌트에 데이터를 넘겨 봅시다!

JSX에 하드 코딩한 데이터를 제거하고 대신 서버에서 넘기도록 고쳐봅시다.
이번엔 서버 쪽의 코드(`program.js`)를 수정해야 합니다.

# 도전과제
---

`index.jsx`의 `TodoBox`, `TodoList`를 다음과 같이 수정합니다.

시작하기 전에, 현재 `index.jsx`를 커밋하거나 이 도전과제를 위한 새로운 파일을
작성하셔도 됩니다.

이번엔 `TodoBox`가 최상위 컴포넌트이므로, 서버 쪽에서 이 컴포넌트로 `{this.props.data}` 값을 넘기고 `TodoList`에 전달됩니다.

`TodoList`에서는 정적인 값을 `Todo`로 넘기지 않아야합니다. 대신 전달된 모든 값을
반복해 각각 `Todo` 컴포넌트를 만들어야합니다. 이렇게 동적인 컴포넌트를 만들 때,
React는 가상 DOM의 각 컴포넌트를 추적하기위해 `key` 속성을 만듭니다. 이는 실제
DOM에의 반영이 최소한도로 일어나도록 합니다. `key`를 지정하지 않으면,
`Warning`이 출력됩니다.


```
import React from 'react';

export default class TodoBox extends React.Component {
  render() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList data = {this.props.data} />
        <TodoForm />
      </div>
    );
  }
}

class TodoList extends React.Component {
    render() {
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
}

class Todo extends React.Component {
  // 생략
}
Todo.propTypes = {
  // 생략
};

class TodoForm extends React.Component {
  // 생략
}

let style = {
  // 생략
};
```

그런 다음, 서버 쪽의 코드 `program.js`를 변경합시다. 특히, `app.use()`의 콜백
함수를 변경해 `data`값을 넘겨보도록 하겠습니다.

```
var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel/register')({
    ignore: false
});

// 여기에 추가
var data = [];

app.use('/', function(req, res) {
  res.render('index', {data: data});
});

app.listen(app.get('port'), function() {});

```

또, 두 객체를 가지는 `data`라는 변수를 만듭니다. 각각의 객체는 `title` 속성으로
"Shopping", "Hair cut"을 가져야 합니다. 객체에는 `detail` 속성도 필요합니다.
이는 좀더 동적으로 만들어 봅시다.

`program.js`안에서 포트번호를 지정하는 부분을 확인하세요. 그게 Node.js에서
커맨드라인에서 프로그램으로 값을 넘기는 방법입니다. 3번째 커맨드라인 인자는 포트
번호고 존재하지 않으면 기본 값으로 `3000`을 지정합니다.

첫번째 객체의 `detail`을 값을 4번째 커맨드라인 인자와 같게 하고 두번째 객체의
`detail`을 값을 5번째 커맨드라인 인자와 같게합니다.

`node program.js 3000 Milk 13:00`를 실행해, `http://localhost:3000`으로 들어가, 코드를 확인하세요.
확인 후에, `learnyoureact verify program.js`를 실행하세요.
여유가 있다면, 위에 있는 `key`를 지정하지 않았을 때 `Warning`이 나오는 것을 확인해 보세요.

넘긴 값의 타입을 제약하는 법을 배워봅시다.

컴포넌트에 넘겨진 데이터는 일반 컴포넌트(버튼, 폼 필드 등)에서 만들고 의존하는 `this.props`를 통해 `render()`에서 접근할 수 있습니다.

이는 컴포넌트가 재대로 사용되고 있는지 확인하는데 도움이 됩니다.

제약은 `propTypes`을 지정해 할 수 있습니다. 개발 모드에서 `React.PropTypes`는 재대로된 데이터를 받았는지 확인하는 벨리데이터를 범위를 명시합니다.

```
class MyComponent extends React.Component {
  /* ... */
}
MyComponent.propTypes = {
    name:   React.PropTypes.string.isRequired,
    id:     React.PropTypes.number.isRequired,
    width:  React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    alt:    React.PropTypes.string
};
```

개발 모드에서 props에 잘못된 값이 들어온 경우에는 브라우저의 JavaScript 콘솔에 경고가 출력됩니다.


# 도전과제
---

`index.jsx`의 `Todo`를 다음과 같이 수정해주세요.

시작하기 전에, 현재 `index.jsx`를 커밋하거나 이 도전과제를 위한 새로운 파일을
작성하셔도 됩니다.


```
import React from 'react';

export default class TodoBox extends React.Component {
  // 생략
}

class TodoList extends React.Component {
    render() {
        return (
            <div className="todoList">
                <table style={{border: "2px solid black"}}>
                  <tbody>
                    <Todo title="Shopping">Milk</Todo>
                    <Todo title="Hair cut">13:00</Todo>
                    <Todo>15:00</Todo>
                  </tbody>
                </table>
            </div>
        );
    }
}

class Todo extends React.Component {
    render() {
        return (
            <tr>
                <td style={{border: "1px solid black"}}>{this.props.title}</td>
                <td style={{border: "1px solid black"}}>{this.props.children}</td>
            </tr>
        );
    }
}
Todo.propTypes = {
    title: React.PropTypes.number.isRequired
};

class TodoForm extends React.Component {
  // 생략
}
```

`index.jsx`를 수정한 다음, `learnyoureact run program.js`를 실행해 주세요.
React.js가 콘솔에 `Warning`을 출력하는 것을 볼 수 있습니다.
그 내용을 읽어, `Warning`이 나오지 않도록 `Todo`를 수정해 주세요.
마지막 ` Todo` 에 ` Learn React` 라는 타이틀을 추가 하십시오.

재사용가능한 컴포넌트: https://facebook.github.io/react/docs/reusable-components-ko-KR.html

코드를 고쳤으면, `node program.js`를 실행해 브라우저에서 `http://localhost:3000`으로 들어가 확인해보세요.

확인 후에, `learnyoureact verify program.js`를 실행하세요.

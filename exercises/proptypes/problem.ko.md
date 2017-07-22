넘긴 값의 타입을 제약하는 법을 배워봅시다.

공통 구성 요소 (버튼, 양식 필드 등)를 빌드하고 사용함에 따라
구성 요소가 올바르게 사용되는지 확인하는 데 도움이됩니다. `propTypes`를 지정하면됩니다.

먼저 다음 명령을 실행하여`prop-types` 패키지를 설치해야합니다 :

`$ npm install --save prop-types`

그런 다음 아래와 같이`index.jsx`를 수정하여 새로운`import` 문을 포함 시키십시오 :

```
import React from 'react';
import PropTypes from 'prop-types';

export default class TodoBox extends React.Component {
  // 생략 됨
}
```

이제`prop-types` 패키지를 설치하고, 패키지에서`PropTypes` 메소드를 가져온 후에, 컴포넌트에 전달 된 데이터에 대해 유효성 검사기 범위를 사용할 수 있습니다.

```
class MyComponent extends React.Component {
  /* ... */
}
MyComponent.propTypes = {
    name:   PropTypes.string.isRequired,
    id:     PropTypes.number.isRequired,
    width:  PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    alt:    PropTypes.string
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
import PropTypes from 'prop-types';

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
                    <Todo title="Learn React">15:00</Todo>
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
    title: PropTypes.string.isRequired
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

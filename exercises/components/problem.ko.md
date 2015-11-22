여러 컴포넌트를 조합해 봅시다.

React.js에서는 컴포넌트를 조합해 애플리케이션을 만듭니다.
또, HTML의 태그와 JSX를 조합할 수도 있습니다.

React 컴포넌트를 렌더하려면, 대문자로 시작하는 지역 변수를 만들면 됩니다.
HTML 태그를 작성할 때는 소문자로 시작하는 지역 변수를 작성하세요.
React JSX는 지역 컴포넌트 클래스와 HTML 태그를 대문자와 소문자로 구별합니다.

```
export default class MyComponent extends React.Component {/*...*/};
let myElement = <MyComponent someProperty={true} />;
ReactDOM.render(myElement, document.getElementById('example'));
```

# 문제
---

`index.jsx`를 다음과 같이 수정합니다.
새로운 파일을 작성하셔도 됩니다.


```
import React from 'react';

export default class TodoBox extends React.Component {
    render() {
        return (
            <div className="todoBox">
                <h1>Todos</h1>
                <TodoList />
                <TodoForm />
            </div>
        );
    }
}

class TodoList extends React.Component {
  // 여기에 작성
}

class TodoForm extends React.Component {
  // 여기에 작성
}
```

위의 "여기에 작성"이라 적혀있는 두 곳에, 다음과 같은 HTML을 각각 출력하는 JSX를
작성해 보세요.
서버 측의 코드(`program.js`)는 변경할 필요가 없습니다.
`render`와 `return`도 잊지마세요. 'ㅁ'/

```
<div class="todoList">
  I am a TodoList.
</div>

<div class="todoForm">
  I am a TodoForm.
</div>
```

JSX 문서: https://facebook.github.io/react/docs/getting-started-ko-KR.html

준비가 되면, `node program.js`를 실행해 `http://localhost:3000`으로 들어가, 실제로 HTML이 출력되는 것을 확인하세요.
그런 다음, `learnyoureact verify program.js`를 실행하세요.

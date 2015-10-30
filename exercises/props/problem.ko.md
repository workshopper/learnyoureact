부모 컴포넌트에서 자식 컴포넌트에 값을 넘겨 봅시다.

부모 컴포넌트에서 속성으로 정의된 것이나, 중첩된 요소를 자식 컴포넌트에서 뽑아 봅시다.

`<ChildComponent some-attribute="this gets passed">So does this</ChildComponent>`

# 도전 과제
---

`index.jsx`의 `TodoList`를 다음과 같이 수정해 `Todo`를 새로 추가해 주세요.

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
                    </tbody>
                </table>
            </div>
        );
    }
}

class Todo extends React.Component {
  // 여기에 작성
}

class TodoForm extends React.Component {
  // 생략
}
```

위의 "여기에 작성"이라 적혀있는 곳에, 다음과 같은 HTML을 출력하도록 JSX를 넣어주세요.

`Todo`에서 부모 요소인 `TodoList`의 안에 적혀있는 `title`을 `{this.props.title}`로 뽑을 수 있습니다.
이런 방식으로 중첩되어있는 `Milk`, `13:00`는 `{this.props.children}`으로 뽑을 수 있습니다.

주의: 서버 쪽의 코드(`program.js`)를 수정할 필요는 없습니다.


```
<div class="todoList">
  <table style="border:2px solid black;">
    <tbody>
      <tr>
        <td style="border:1px solid black;">Shopping</td>
        <td style="border:1px solid black;">Milk</td>
      </tr>
      <tr>
        <td style="border:1px solid black;">Hair cut</td>
        <td style="border:1px solid black;">13:00</td>
      </tr>
    </tbody>
  </table>
</div>
```


준비가 되면, `node program.js`를 실행해 `http://localhost:3000`으로 들어가, 실제로 HTML이 출력되는 것을 확인하세요.
확인 후에, `learnyoureact verify program.js`를 실행하세요.

스타일을 변수로 지정합시다!

변수를 사용하면 코드의 여러 곳의 변경을 깔끔하게 관리할 수 있습니다.
스타일을 변수로 지정해 어떤 부분이 간단해지는 지 확인하세요.


# 도전과제
---

`index.jsx`에 아래와 같은 `style`을 추가해 주세요.

시작하기 전에, 현재 `index.jsx`를 커밋하거나 이 도전과제를 위한 새로운 파일을
작성하셔도 됩니다.


```
import React from 'react';

export default class TodoBox extends React.Component {
  // 생략
}

class TodoList extends React.Component {
  // 생략
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
    tableContent: {
        border: "1px solid black"
    }
};
```

추가한 `style`을 사용하도록 코드를 변경하세요.
*주의* 비슷한 스타일이긴 하지만, 다른 곳이 있으니 주의하셔야 합니다!

인라인 스타일: https://facebook.github.io/react/tips/inline-styles-ko-KR.html

준비가 되면, `node program.js`를 실행해 `http://localhost:3000`으로 들어가
확인하세요.

확인 후에, `learnyoureact verify program.js`를 실행하세요.

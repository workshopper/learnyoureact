Todo가 너무 많네요! 이제 오래된 Todo를 지울 수 있도록 해봅시다.

이것을 하려면, 부모 컴포넌트에서 자식 컴포넌트의 이벤트를 다루어야 합니다.

# 도전과제
---

`index.jsx`의 `Todo`를 다음과 같이 수정하세요.
새로운 파일을 작성하셔도 됩니다.

```
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      TodoStyle: style.notCheckedTodo
    };
    this.handleChange = this.handleChange.bind(this);
    this._onDelete = this._onDelete.bind(this);
  }
  handleChange(e) {
    // 생략
  }
  _onDelete() {
    this.props.onDelete(this.props.title);
  }
  render() {
    return (
      <tr style={this.state.TodoStyle}>
        <td style={style.tableContent}><button onClick={this._onDelete}>X</button></td>
        <td style={style.tableContent}><input type="checkbox" checked={this.state.checked} onChange={this.handleChange} /></td>
        <td style={style.tableContent}>{this.props.title}</td>
        <td style={style.tableContent}>{this.props.children}</td>
      </tr>
    );
  }
}
```

이것으로 모든 `Todo`에 삭제 버튼이 만들어졌습니다.

이제, Todo를 삭제하는 코드를 작성해 봅시다. `TodoList`에 구현하세요.

다 되었으면, `node program.js 3000 Milk 13:00`를 실행해, `http://localhost:3000`으로 들어가, 실제로 HTML이 출력되는 것을 확인하세요.
Todo를 조금 만들고 삭제해, 올바르게 동작하는 것을 확인하세요.
확인 후에, `learnyoureact verify program.js`를 실행하세요.

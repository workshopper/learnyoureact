부모 객체에 이벤트의 구현을 넘겨봅시다.

Todo를 삭제하는 버튼을 만들어 봅시다.
삭제 버튼은 각 Todo마다 1개씩 있어야 합니다.
그러면, Todo를 삭제하는 처리는 어디에서 구현해야 할까요?

# 문제
---

`index.jsx`의 `Todo`를 다음과 같이 수정하세요.
새로운 파일을 작성하셔도 됩니다.

```
var Todo = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    onDelete: React.PropTypes.func.isRequired
  },
  getInitialState: function () {
    // 생략
  },
  handleChange: function (e) {
    // 생략
  },
  _onDelete: function () {
    this.props.onDelete(this.props.title);
  },
  render: function () {
    return (
      <tr style={this.state.TodoStyle}>
        <td style={style.tableContent}><button onClick={this._onDelete}>X</button></td>
        <td style={style.tableContent}><input type="checkbox" checked={this.state.checked} onChange={this.handleChange} /></td>
        <td style={style.tableContent}>{this.props.title}</td>
        <td style={style.tableContent}>{this.props.children}</td>
      </tr>
    );
  }
});
```

이것으로 `Todo`별 삭제 버튼이 만들어졌습니다.
그런 다음, `TodoList`의 Todo를 삭제하는 처리를 구현하세요.

다 되었으면, `node program.js 3000 Milk 13:00`를 실행해, `http://localhost:3000`으로 들어가, 실제로 HTML이 출력되는 것을 확인하세요.
삭제 버튼을 눌러, 올바르게 동작하는 것을 확인하세요.
그런 다음, `learnyoureact verify program.js`를 실행하세요.

데이터의 값을 변경하는 이벤트를 구현해 봅시다.

입력란을 만들어, Todo를 추가할 수 있도록 해봅시다.

# 문제
---

`index.jsx`의 `TodoList`를 다음과 같이 수정하세요.
새로운 파일을 작성하셔도 됩니다.

```
var TodoList = React.createClass({
  getInitialState: function() {
    return {
      data: this.props.data,
      titleValue: "",
      detailValue: ""
    };
  },
  changeTitle: function(e) {
    // 여기에 구현
  },
  changeDetail: function(e) {
    // 여기에 구현
  },
  addTodo: function() {
    // 여기에 구현
  },
  render: function() {
    var todo = this.state.data.map(function(obj) {
      return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>;
    });
    return (
      <div className = "todoList">
        <div>
          Title:<input type="text" value={this.state.titleValue} onChange={this.changeTitle} />
          Detail:<input type="text" value={this.state.detailValue} onChange={this.changeDetail} />
          <button onClick={this.addTodo}>Add</button>
        </div>
        <table style={{border: "2px solid black"}}>
          <tbody>
            {todo}
          </tbody>
        </table>
      </div>
    );
  }
});
```

`// 여기에 구현`이라 적힌 3곳에 입력란에 입력한 `Todo`를 `table`에 추가하는 처리를 구현하세요.
`setState`를 어떻게 사용하면 좋을까 생각하며 해보세요.

다 되었으면, `node program.js 3000 Milk 13:00`를 실행해, `http://localhost:3000`으로 들어가, 실제로 HTML이 출력되는 것을 확인하세요.
Todo를 입력한 다음 추가 버튼을 눌러, 올바르게 동작하는지 확인하세요.
그런 다음, `learnyoureact verify program.js`를 실행하세요.


새로운 Todo를 추가할 때입니다! 추가하기 위해 폼을 만들어 봅시다!


# 도전과제
---

`index.jsx`의 `TodoList`를 다음과 같이 수정하세요.
새로운 파일을 작성하셔도 됩니다.

```
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            titleValue: "",
            detailValue: ""
        };
        this.changeTitle = this.changeTitle.bind(this);
        this.changeDetail = this.changeDetail.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    changeTitle(e) {
        // 여기에 구현
    }

    changeDetail(e) {
        // 여기에 구현
    }

    addTodo() {
        // 여기에 구현
    }

    render() {
        let todo = this.state.data.map(function(obj) {
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
}
```

`여기에 구현`이라 적힌 3곳에 진짜 코드를 구현하세요.
각각 `setState`를 사용하셔야 할 겁니다.

다 되었으면, `node program.js 3000 Milk 13:00`를 실행해, `http://localhost:3000`으로 들어가, 실제로 HTML이 출력되는 것을 확인하세요.

새 Todo 몇 개 만들어, 모든게 예상대로 동작하는지 확인하세요.

확인 후에, `learnyoureact verify program.js`를 실행하세요.

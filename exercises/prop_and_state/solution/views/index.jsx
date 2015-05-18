var React = require('react');

var TodoBox = React.createClass({
  render: function() {
      return (
        <div className="todoBox">
          <h1>Todos</h1>
	        <TodoList data = {this.props.data} />
	        <TodoForm />
        </div>
      );
  }
});

var TodoList = React.createClass({
  getInitialState: function() {
    return {
      data: this.props.data,
      titleValue: "",
      detailValue: ""
    };
  },
  changeTitle: function(e) {
    this.setState({titleValue: e.target.value});
  },
  changeDetail: function(e) {
    this.setState({detailValue: e.target.value});
  },
  addTodo: function() {
    var newData = this.state.data;
    newData.push({
        title: this.state.titleValue,
        detail: this.state.detailValue
    });
    this.setState({data: newData}); 
    this.setState({titleValue: ""});
    this.setState({detailValue: ""});
  },
  deleteTodo: function (title) {
    var newData = this.state.data;
    newData.filter(function (todo) {
      return todo.title !== title;
    })
    this.setState({data: newData});
  },
  render: function() {
    var todo = this.state.data.map(function(obj) {
      return <Todo title={obj.title} key={obj.title} onDelete={this.deleteTodo}>{obj.detail}</Todo>;
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

var Todo = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    onDelete: React.PropTypes.func.isRequired
  },
  getInitialState: function () {
    return {
      checked: false,
      TodoStyle: style.notCheckedTodo
    };
  },
  handleChange: function (e) {
    this.setState({
      checked: e.target.checked
    });
    if (e.target.checked) {
      this.setState({
        TodoStyle: style.checkedTodo
      });
    } else {
      this.setState({
        TodoStyle: style.notCheckedTodo
      });
    }
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

var TodoForm = React.createClass({
  render: function() {
    return (
      <div className = "todoForm">
        I am a TodoForm.
      </div>	
    );
  }
});

var style = {
  checkedTodo: {
    textDecoration: "line-through"
  },
  notCheckedTodo: {
    textDecoration: "none"
  },
  tableContent: {
    border: "1px solid black"
  }
};

module.exports = TodoBox;

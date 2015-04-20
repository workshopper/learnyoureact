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
  render: function() {
    var todo = this.props.data.map(function(obj) { return <Todo title={obj.title}>{obj.detail}</Todo>});
    return (
      <div className = "todoList">
        {todo}
      </div>	
    );
  }
});

var Todo = React.createClass({
  render: function() {
    return (
      <div className="todo">
        <h2 className="todoTitle">
          {this.props.title}
        </h2>
	{this.props.children}
      </div>      
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

module.exports = TodoBox;

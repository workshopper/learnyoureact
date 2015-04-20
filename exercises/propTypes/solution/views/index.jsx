var React = require('react');

var TodoBox = React.createClass({
  render: function() {
      return (
        <div className="todoBox">
          <h1>Todos</h1>
	  <TodoList />
	  <TodoForm />
        </div>
      );
  }
});

var TodoList = React.createClass({
  render: function() {
    return (
      <div className = "todoList">
        <Todo title="買い物">牛乳</Todo>
	<Todo title="散髪">13:00〜</Todo>
      </div>	
    );
  }
});

var Todo = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired	 
  },
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

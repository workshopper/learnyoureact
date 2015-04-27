Let's pass values from server to Component!

Change your code which define data in jsx to pass data from server.
We will change code both view and server.

# Question
---

Fix `TodoBox` and `TodoList` of `index.jsx` like below. 
You can also make new `index.jsx` file and write code in that.

In this code, `TodoBox` is the highest-rank Component, so server pass the value to `{this.props.data}` int `TodoList`.
We should change the values to `Todo` tag in `TodoList` which is the child of `TodoBox`.
You can use `key` in `Todo` tag to minimize the change from diff of VirtualDOM to real DOM.
If you do not use `key`, React.js print `Warning` in console.


```
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
    var todo = this.props.data.map(function(obj) { return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>});
    return (
      <div className = "todoList">
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
  // Omitted
});

var TodoForm = React.createClass({
  // Omitted
});

var style = {
  // Omitted
};

module.exports = TodoBox;
```

Next, change code of server.
Change callback function of `app.use()`.
After that, make variable `data`, and define JSON which `title` is "Shopping", and `detail` is the third command line argument and which `title` is "Hair cut", and `detail` is the fifth command line argument in the variable.

*NOTE* the second command line argument is port number.
You can use the usage of command line argument, which is written in somewhere of the code.


```
var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views'); 
app.engine('jsx', require('express-react-views').createEngine());

// write below
var data = [];

app.use('/', function(req, res) {
        res.render('index', {data: data});
});

app.listen(app.get('port'), function() {});

```

After writing codes, do `node program.js 3000 Milk 13:00` and access `http://localhost:3000` , check the real HTML is outputted.

After that, do `learnyoureact verify program.js`.
If you have time, check print of `Warning` in console when you do not define `key`.

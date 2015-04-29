Let's pass values from parent Component to child Component.

Child Component can get values which is defined as attribute in parent Component, or element which is nested by parent Component

# Question 
---

Fix `TodoList` of `index.jsx` like below, and add `Todo`. 
You can also make new `index.jsx` file and write code in that.


```
var React = require('react');

var TodoBox = React.createClass({
  // Omitted
});

var TodoList = React.createClass({
  render: function() {
    return (
      <div className = "todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
            <Todo title="Shopping">Milk</Todo>
            <Todo title="Hair cut">13:00</Todo>
          </tbody>
        </table>
      </div>
    );
  }
});

var Todo = React.createClass({
  // Write code here
});

var TodoForm = React.createClass({
  // Omitted
});

module.exports = TodoBox;
```

Write JSX syntax what outputs HTML below at two commentouts "Write code here" of the above code. 
You can get value of `title` in `Todo` tag which is written in `TodoList` (parent Component) by `{this.props.title}`. 
Also, You can get value of `Milk`, `13:00` which is nested by  `{this.props.children}` 
You don't have to change server-side code too.


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

After writing codes, do `node program.js` and access `http://localhost:3000` , check the real HTML is outputted.

After that, do `learnyoureact verify program.js`.

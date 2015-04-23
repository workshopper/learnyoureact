Let's define mutable values!

You can use `state` to define mutable values.
Let's set initial value of `checkbox`, and define behavior of check event.

# Question
---

Fix `Todo` of `index.jsx` like below. 
You can also make new `index.jsx` file and write code in that.


```
var React = require('react');

var TodoBox = React.createClass({
  // Omitted
});

var TodoList = React.createClass({
  // Omitted
});

var Todo = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired     
  },
  render: function() {
    return (
      <tr>
        <td style={{border: "1px solid black"}}><input type="checkbox" checked={this.state.checked} onChange={this.handleChange} /></td>
        <td style={{border: "1px solid black"}}>{this.props.title}</td>
        <td style={{border: "1px solid black"}}>{this.props.children}</td>
      </tr>
    );   
  }
});



var TodoForm = React.createClass({
  // Omitted
});

module.exports = TodoBox;
```

Write code to set initial value of `checked` and behavior of check event in `Todo`.
You can set initial value by `getIntialState `.
You can update the data by writing `handleChange` function and writing `this.setState` in the function.

After writing codes, do `node program.js` and access `http://localhost:3000` , check the real HTML is outputted.

After that, do `learnyoureact verify program.js`.

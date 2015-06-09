Let's define mutable values!

So far we've rendered components with imutable properties using `this.props`.
But what about if we want to update components?
`this.state` is private to each component and allows us to define mutable values.
Let's set the initial value of `checkbox` to false and define a function to control the behavior of check events.

# Question
---

Fix `Todo` of `index.jsx` like the example below.
You can also write your code into a new `index.jsx` file.


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

Write code to set the initial value of `checked` and behavior of the check event in `Todo`.
You can set initial value of `checked` by defining `getInitialState`.
You can update a components `state` by creating a function that makes use of `this.setState`.

Component API: https://facebook.github.io/react/docs/component-api.html
Component Specs and Lifecycle: https://facebook.github.io/react/docs/component-specs.html

After fixing your code, test it locally by running `node program.js` and then access `http://localhost:3000` in your browser. You should see the HTML you expect.

After that, do `learnyoureact verify program.js`.

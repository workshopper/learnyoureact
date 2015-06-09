Let's add validation to passed values.

Input data that is passed into the component can be accessed by `render()` via `this.props`

As you build and rely on your common components (buttons, form fields etc.) it's helpful to ensure the components are being used correctly.

You can do this by specifying `propTypes`. While in development mode `React.PropTypes` exports a range of validators that can be used to make sure the data you receive is valid.

```
React.createClass({
  propTypes: {
    name:   React.PropTypes.string.isRequired,
    id:     React.PropTypes.number.isRequired,
    width:  React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    alt:    React.PropTypes.string
  },
  /* ... */
```

When an invalid value is provided for a prop, a warning will be shown in the JavaScript console.


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
    title: React.PropTypes.number.isRequired
  },
  render: function() {
    return (
      <tr>
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

After editing the `index.jsx` file, run your code with `learnyoureact run program.js.`
You can see that React.js prints `Warning` in the console.
Read the error and fix Todo so that React.js doesn't print `Warning` in the console any more.
You must use `propTypes`.

After fixing your code, test it locally by running `node program.js` and then access `http://localhost:3000` in your browser. You should see the HTML you expect.

Reusable Components: https://facebook.github.io/react/docs/reusable-components.html

After that, do `learnyoureact verify program.js`.

Let's learn to validate that our components get passed all needed properties.

As you build and rely on common components (buttons, form fields etc.), it's
helpful to ensure the components are being used correctly.

You can do this by specifying `propTypes`. `React.PropTypes` contains a range
of validators that can be used to make sure the passed-in data is valid.

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

In development mode, when an invalid value is provided for a prop, a warning
will be shown in your browser's JavaScript console.


# Challenge
---

Modify `TodoList` in `index.jsx` like below. 

Before you start, you may want to check your current `index.jsx` into source
control, or create a new `index.jsx` for this exercise.


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

After editing the `index.jsx` file, run your code with `learnyoureact run program.js`.
You can see that React.js prints a `Warning` in the console.
Read the warning and modify `Todo` to fix it.

Reusable Components: https://facebook.github.io/react/docs/reusable-components.html

After fixing your code, test it locally by running `node program.js` and
visiting `http://localhost:3000` in your browser.

Once you're confident, run `learnyoureact verify program.js`.

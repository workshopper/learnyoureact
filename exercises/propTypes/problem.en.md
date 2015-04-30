Let's add validation to passed values.

In `React.createClass()` ,

```
propTypes: {
  name:   React.PropTypes.string.isRequired,
  id:     React.PropTypes.number.isRequired,
  width:  React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  alt:    React.PropTypes.string
}
```

You can add validations to props which is passed from parent Component by writting like above. 
If unexpected values is passed, React.js prints `Warning` in console.


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

After writing codes, try to do `learnyoureact run program.js.` 
You can see that React.js print `Warning` in console. 
Read the sentence and fix Todo that React.js doesn't print `Warning` in console 
You must use `propTypes`.

After fixing codes, do `node program.js` and access `http://localhost:3000` , check the real HTML is outputted.

After that, do `learnyoureact verify program.js`.

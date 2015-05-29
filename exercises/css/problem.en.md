Let's define styles as variables!

Now, we define same styles at multi parts of code.
Make code smart with cutting the styles down as variables.

# Question
---

Add `index.jsx` `style` like below.
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
  // Omitted
});

var TodoForm = React.createClass({
  // Omitted
});

var style = {
  tableContent: {
    border: "1px solid black"
  }
};

module.exports = TodoBox;
```

Change the code to use the `style` you added.
*NOTE* Some code is a little different from this style, so you should pay attention.


After improving the code, do `node program.js` and access `http://localhost:3000` , check the real HTML is outputted.
The HTML should not have changed.

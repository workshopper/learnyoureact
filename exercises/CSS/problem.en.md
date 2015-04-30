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

Change the parts of code where define same styles to use `style` you added.
*NOTE* There are code which is a little different from the style you added, so you should pay attention.


After fixing codes, do `node program.js` and access `http://localhost:3000` , check the real HTML is outputted.
I think you cannot see the HTML has changed.

After that, do `learnyoureact verify program.js`.

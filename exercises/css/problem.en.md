Let's define styles as variables!

Variables are a smart way to make changes to multiple places in our code.
Lets assign some styles to a variable and see which parts of our code we can replace.

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

Inline Styles: https://facebook.github.io/react/tips/inline-styles.html

After fixing your code, test it locally by running `node program.js` and then access `http://localhost:3000` in your browser. You should see the HTML you expect.

After that, do `learnyoureact verify program.js`.

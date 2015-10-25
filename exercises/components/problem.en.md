Let's start using React components!

You can make web applications with React.js by combining several components.
These use HTML tags together with JSX notation.

To render a React Component, create a local variable that starts with an
upper-case letter.

JSX allows you to write near-HTML inline in your JavaScript, rather than writing
JavaScript code that creates and modifies DOM nodes.

React's JSX uses the upper vs. lower case convention to distinguish between
local component classes and HTML tags.

```
var MyComponent = React.createClass({/*...*/});
var myElement = <MyComponent someProperty={true} />;
React.render(myElement, document.getElementById('example'));
```

# Challenge
---

Update `views/index.jsx` as shown below.

```
var React = require('react');

var TodoBox = React.createClass({
  render: function() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
});

var TodoList = React.createClass({
  // Write code here
});

var TodoForm = React.createClass({
  // Write code here
});

module.exports = TodoBox;
```

Implement the missing code above using JSX notation to output the HTML below.
Note: you don't have to change server-side code (`program.js`).
Don't forget `render` and `return`! :-)

```
<div class = "todoList">
  I am a TodoList.
</div>

<div class = "todoForm">
  I am a TodoForm.
</div>
```

JSX Docs: https://facebook.github.io/react/docs/getting-started.html

When you are ready run `node program.js` and access `http://localhost:3000` to
see the HTML output in the browser.

Finally, run `learnyoureact verify program.js` to check your solution.

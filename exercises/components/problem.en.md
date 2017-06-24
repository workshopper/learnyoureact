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
export default class MyComponent extends React.Component {/*...*/};
let myElement = <MyComponent someProperty={true} />;
ReactDOM.render(myElement, document.getElementById('example'));
```

# Challenge
---

Update `views/index.jsx` as shown below.

```
import React from 'react';

export default class TodoBox extends React.Component {
    render() {
        return (
            <div className="todoBox">
                <h1>Todos</h1>
                <TodoList />
                <TodoForm />
            </div>
        );
    }
}

class TodoList extends React.Component {
  // Write code here
}

class TodoForm extends React.Component {
  // Write code here
}
```

Implement the missing code above using JSX notation to output the HTML below.
Note: you don't have to change server-side code (`program.js`).
Don't forget `render` and `return`! :-)

```
<div className="todoList">
  I am a TodoList.
</div>

<div className="todoForm">
  I am a TodoForm.
</div>
```

JSX Docs: https://facebook.github.io/react/docs/getting-started.html

When you are ready run `node program.js` and access `http://localhost:3000` to
see the HTML output in the browser.

Finally, run `learnyoureact verify program.js` to check your solution.

Let's learn to validate that our components get passed all the necessary properties.

As you build and rely on common components (buttons, form fields etc.), it's
helpful to ensure the components are being used correctly.

You can do this by specifying `propTypes`. `React.PropTypes` contains a range
of validators that can be used to make sure the passed-in data is valid.

```
class MyComponent extends React.Component {
  /* ... */
}
MyComponent.propTypes = {
    name:   React.PropTypes.string.isRequired,
    id:     React.PropTypes.number.isRequired,
    width:  React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    alt:    React.PropTypes.string
};
```

In development mode, when an invalid value is provided for a prop, a warning
will be shown in your browser's JavaScript console.


# Challenge
---

Modify `Todo` in `index.jsx` like below.

Before you start, you may want to check your current `index.jsx` into source
control, or create a new `index.jsx` for this exercise.


```
import React from 'react';

export default class TodoBox extends React.Component {
  // Omitted
}

class TodoList extends React.Component {
    render() {
        return (
            <div className="todoList">
                <table style={{border: "2px solid black"}}>
                  <tbody>
                    <Todo title="Shopping">Milk</Todo>
                    <Todo title="Hair cut">13:00</Todo>
                    <Todo>15:00</Todo>
                  </tbody>
                </table>
            </div>
        );
    }
}

class Todo extends React.Component {
    render() {
        return (
            <tr>
                <td style={{border: "1px solid black"}}>{this.props.title}</td>
                <td style={{border: "1px solid black"}}>{this.props.children}</td>
            </tr>
        );
    }
}
Todo.propTypes = {
    title: React.PropTypes.number.isRequired
};

class TodoForm extends React.Component {
  // Omitted
}
```

After editing the `index.jsx` file, run your code with `learnyoureact run program.js`.
You can see that React.js prints a `Warning` in the console.
Read the warning and modify the `propTypes` property of `Todo` to fix it.
Also, add the title `Learn React` to the last `Todo`.

Reusable Components: https://facebook.github.io/react/docs/reusable-components.html

After fixing your code, test it locally by running `node program.js` and
visiting `http://localhost:3000` in your browser.

Once you're confident, run `learnyoureact verify program.js`.

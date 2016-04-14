Let's define mutable values!

So far we've rendered components with immutable properties using `this.props`.
But what if we want to update components?

`this.state` is private to each component and allows us to define mutable
values. Let's set the initial value of `checkbox` to `false` and define
a function to control the behavior of check events.

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
  // Omitted
}

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td style={{border: "1px solid black"}}>
                    <input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)}/>
                </td>
                <td style={{border: "1px solid black"}}>{this.props.title}</td>
                <td style={{border: "1px solid black"}}>{this.props.children}</td>
            </tr>
        );
    }
}
Todo.propTypes = {
    title: React.PropTypes.string.isRequired
};

class TodoForm extends React.Component {
  // Omitted
}
```

Write code to set the initial value of `checked` and define `handleChange`.
Within `handleChange`, you should update the component's `state` by using `this.setState`.

The resources are always recommended, but may be especially helpful here:
Component API: https://facebook.github.io/react/docs/component-api.html
Component Specs and Lifecycle: https://facebook.github.io/react/docs/component-specs.html

After fixing your code, test it locally by running `node program.js` and
visiting `http://localhost:3000` in your browser.

Once you're confident, run `learnyoureact verify program.js`.

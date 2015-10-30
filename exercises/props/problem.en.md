Now let's learn to pass values from a parent component to a child component.

A child component can have values handed to it either through attributes, or
through nested content.

`<ChildComponent some-attribute="this gets passed">So does this</ChildComponent>`

# Challenge 
---

Modify `TodoList` in `index.jsx` like below, adding `Todo`. 

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
                    </tbody>
                </table>
            </div>
        );
    }
}

class Todo extends React.Component {
  // Write code here
}

class TodoForm extends React.Component {
  // Omitted
}
```

Now at each of the "Write code here" comments, write some JSX that results in
the following HTML.

Within `Todo`, you can get the value of the `title` attribute set in `TodoList`
(the parent component) by using `{this.props.title}`. Likewise, you can get the
values `Milk` and `13:00` by using `{this.props.children}`.

Note: you don't have to change server-side code (`program.js`).

```
<div class="todoList">
  <table style="border:2px solid black;">
    <tbody>
      <tr>
        <td style="border:1px solid black;">Shopping</td>
        <td style="border:1px solid black;">Milk</td>
      </tr>
      <tr>
        <td style="border:1px solid black;">Hair cut</td>
        <td style="border:1px solid black;">13:00</td>
      </tr>
    </tbody>
  </table>
</div>
```

After writing code, run `node program.js` and visit `http://localhost:3000` to
make sure it looks right.

Once you're confident, run `learnyoureact verify program.js`.

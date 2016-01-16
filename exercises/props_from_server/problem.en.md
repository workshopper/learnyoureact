Let's pass data from the server into a component!

We're going to remove the data from our JSX, and pass it from the server instead.
This will require changing code on the server (`program.js`).

# Challenge
---

Modify `TodoBox` and `TodoList` in `index.jsx` like below.

Before you start, you may want to check your current `index.jsx` into source
control, or create a new `index.jsx` for this exercise.

In this code, `TodoBox` is the parent of all other components, so the server
will pass data into it, which it can access as `{this.props.data}`, and then
pass on down to `TodoList`.

In `TodoList`, we'll need to stop passing static values into our `Todo`
components. Instead, we'll loop through all of the values we're passed and
dynamically create `Todo` components for each. When dynamically creating
components like this, React makes use of a `key` attribute to keep track of
each component in the VirtualDOM. This allows it to update the real DOM as
sensibly and infrequently as possible. If you do not use `key`, React will
print a `Warning` in the console.


```
import React from 'react';

export default class TodoBox extends React.Component {
    render() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList data = {this.props.data} />
        <TodoForm />
      </div>
    );
  }
}

class TodoList extends React.Component {
    render() {
    var todo = this.props.data.map(function(obj) { return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>});
    return (
      <div className = "todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
            {todo}
          </tbody>
        </table>
      </div>
    );
  }
}

class Todo extends React.Component {
  // Omitted
}
Todo.propTypes = {
  // Omitted
};

class TodoForm extends React.Component {
  // Omitted
}

let style = {
  // Omitted
};
```

Next, we'll change the code on our server, `program.js`. Specifically, we'll change the
callback function of `app.use()` and pass it a `data` variable.


```
var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel/register')({
    ignore: false
});

// write below
var data = [];

app.use('/', function(req, res) {
  res.render('index', {data: data});
});

app.listen(app.get('port'), function() {});

```

Now modify `data` to contain two objects. Each should have a `title` attribute,
defined as "Shopping" and "Hair cut" respectively. Each should also have
a `detail` attribute. These we want to make more dynamic.

See in `program.js` where we define which port to use? That's some Node.js that
allows passing values into your program from the command line. Specifically, it
says that the third command line argument is the port, and if it doesn't exist,
it defaults to `3000`.

Make the value of `detail` for the first object equal to the fourth command line
argument, and `detail` for the second object equal to the fifth command line
argument.

Verify your code by running `node program.js 3000 Milk 13:00` and visiting
`http://localhost:3000`.

Once you're confident, run `learnyoureact verify program.js`.

Bonus challenge: try removing the `key` attribute, and observe the `Warning`
printed to the console.

Let's define styles as variables!

Variables are a smart way to make changes to multiple places in our code.
Lets assign some styles to a variable and see which parts of our code we can simplify.

# Challenge
---

Add `style` to `index.jsx` like below.

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
  // Omitted
}
Todo.propTypes = {
  // Omitted
};

class TodoForm extends React.Component {
  // Omitted
}

let style = {
    tableContent: {
        border: "1px solid black"
    }
};
```

Now change the code to use the `style` variable you added.
*NOTE* Some code is a little different from this style - be careful!

Inline Styles: https://facebook.github.io/react/tips/inline-styles.html

After fixing your code, test it locally by running `node program.js` and
visiting `http://localhost:3000` in your browser.

Once you're confident, run `learnyoureact verify program.js`.

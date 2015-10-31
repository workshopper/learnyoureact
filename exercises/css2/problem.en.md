Hey, wouldn't it be nice if todos got crossed out when we checked them off? Let's add that!

# Challenge
---

Update `style` in `index.jsx` as shown below.

Before you start, you may want to check your current `index.jsx` into source
control, or create a new `index.jsx` for this exercise.

```
let style = {
    checkedTodo: {
        textDecoration: "line-through"
    },
    notCheckedTodo: {
        textDecoration: "none"
    },
    tableContent: {
        border: "1px solid black"
    }
};
```

Now modify `Todo` to add line-through to `tr` if the checkbox is checked. And
if the checkbox is unchecked, remove line-through.

When you are ready, run `node program.js 3000 Milk 13:00` and visit
`http://localhost:3000` to see the HTML output in the browser.

Click the checkbox on and off, and confirm whether the line-through is added correctly.

When you feel confident, run `learnyoureact verify program.js` to check your solution.

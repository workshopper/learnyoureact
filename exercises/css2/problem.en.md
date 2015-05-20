Let's change CSS by the event.

Let's add line-through to Todo if the checkbox is checked.

# Challenge
---

Update `style` in `index.jsx` as shown below.

``` 
var style = { 
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

Let's fix `Todo` to add line-through to `tr` if the checkbox is checked. 
And If the checkbox is unchecked, remove line-through.

When you are ready run `node program.js 3000 Milk 13:00` and access `http://localhost:3000` to see the HTML output in the browser.

Click the checkbox some times, and confirm whether the line-through is added rightly.

Finally, run `learnyoureact verify program.js` to check your solution.
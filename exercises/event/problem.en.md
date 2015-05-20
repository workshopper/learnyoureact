Let's make the event which change the value of data.

Let's make an input form, and we can add Todo.

# Challenge 
---

Update `TodoList` in `index.jsx` as shown below.

``` 
var TodoList = React.createClass({ 
  getInitialState: function() { 
    return { 
      data: this.props.data, 
      titleValue: "", 
      detailValue: "" 
    }; 
  }, 
  changeTitle: function(e) { 
    // Write code here. 
  }, 
  changeDetail: function(e) { 
    // Write code here. 
  }, 
  addTodo: function() { 
    // Write code here. 
  }, 
  render: function() { 
    var todo = this.state.data.map(function(obj) { 
      return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>; 
    }); 
    return ( 
      <div className = "todoList"> 
        <div> 
          Title:<input type="text" value={this.state.titleValue} onChange={this.changeTitle} /> 
          Detail:<input type="text" value={this.state.detailValue} onChange={this.changeDetail} /> 
          <button onClick={this.addTodo}>Add</button> 
        </div> 
        <table style={{border: "2px solid black"}}> 
          <tbody> 
            {todo} 
          </tbody> 
        </table> 
      </div> 
    ); 
  } 
}); 
```

Let's write codes to add `Todo` to `table` in three  `// Write code here.`s. 
You should write code thinking of how to do `setState`.

When you are ready run `node program.js 3000 Milk 13:00` and access `http://localhost:3000` to see the HTML output in the browser.

Write a Todo and click the button for add Todo some times, and confirm whether the Todo is added rightly.

Finally, run `learnyoureact verify program.js` to check your solution.
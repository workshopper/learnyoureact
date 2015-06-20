It's time to add new todos! Let's make a form for adding new ones.

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

Now change the three `Write code here` comments into some real code. You'll
want to make each of them use `setState`.

When you are ready, run `node program.js 3000 Milk 13:00` and visit
`http://localhost:3000` to see the HTML output in the browser.

Create a few new `Todo`s and verify that everything works as expected.

Once you're confident, run `learnyoureact verify program.js` to check your solution.

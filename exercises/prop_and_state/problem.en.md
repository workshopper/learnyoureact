Let’s transfer the implementation of event to the parent element.

Let's make buttons to delete Todo. 
Every Todo should have a delete button. 
So, where should we write the code to delete Todos?

# Challenge 
---
Update `Todo` in `index.jsx` as shown below.

``` 
var Todo = React.createClass({ 
  propTypes: { 
    title: React.PropTypes.string.isRequired, 
    onDelete: React.PropTypes.func.isRequired 
  }, 
  getInitialState: function () { 
    // Omitted 
  }, 
  handleChange: function (e) { 
    // Omitted 
  }, 
  _onDelete: function () { 
    this.props.onDelete(this.props.title); 
  }, 
  render: function () { 
    return ( 
      <tr style={this.state.TodoStyle}> 
        <td style={style.tableContent}><button onClick={this._onDelete}>X</button></td> 
        <td style={style.tableContent}><input type="checkbox" checked={this.state.checked} onChange={this.handleChange} /></td> 
        <td style={style.tableContent}>{this.props.title}</td> 
        <td style={style.tableContent}>{this.props.children}</td> 
      </tr> 
    ); 
  } 
}); 
```

Now, we made delete button to every `Todo`. 
Next, Let's write codes to delete Todo in `TodoList`.

When you are ready run `node program.js 3000 Milk 13:00` and access `http://localhost:3000` to see the HTML output in the browser.

Click the delete button some times, and confirm whether the Todo is deleted rightly.

Finally, run `learnyoureact verify program.js` to check your solution.
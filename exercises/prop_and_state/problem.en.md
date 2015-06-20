Too many todos! Let's allow ourselves to delete old ones.

To do that, we'll need to deal with a child component's event from within its
parent component.

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

This adds a delete button to every `Todo`. 

Now, write some code to do the actual deleting. It will live in `TodoList`.

To check your work, run `node program.js 3000 Milk 13:00` and visit
`http://localhost:3000`.

Add and delete some todos, and make sure it all works as expected.

When you're confident, run `learnyoureact verify program.js` to check your solution.

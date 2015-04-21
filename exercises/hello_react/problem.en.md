First of all, print `Hello World` !

Starting from installing required modules. 
Do three commands below.

`$ npm install express`

`$ npm install body-parser`

`$ npm install express-react-views`

Next, make `program.js` and write codes below into the JS file.

```
var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views'); 
app.engine('jsx', require('express-react-views').createEngine());

app.use('/', function(req, res) {
        res.render('index', '');
});

app.listen(app.get('port'), function() {});
```

The above codes are server-side codes what does rendering. 
This program uses `express-react-views` module and if someone access to `/`, reads `view/index.jsx`. 

Next, make `views` directory at same directory as `program.js`. 
After that, make `index.jsx` in the directory. 
Please write below codes in `index.jsx`

```
var React = require('react');

var TodoBox = React.createClass({
  render: function() {
      return (
            <div className="todoBox">
              Hello, world!
            </div>
      );
  }
});

module.exports = TodoBox;
```

These codes which is like writing XML in JavaScript called React.js JSX syntax. 
You can write codes in other syntax, but use JSX syntax in this workshopper.

After writing codes, do `node program.js` and access `http://localhost:3000` , check the real HTML is outputted.

After that, do `learnyoureact verify program.js`.

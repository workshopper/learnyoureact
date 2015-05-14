First things first, let's print `Hello World` !

Start by installing the required modules. 
Run the three commands below.

`$ npm install express`

`$ npm install body-parser`

`$ npm install express-react-views`

Next, create `program.js` and copy the code below into the file.

```
var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views'); 
app.engine('jsx', require('express-react-views').createEngine());

require('node-jsx').install();

app.use('/', function(req, res) {
  res.render('index', '');
});

app.listen(app.get('port'), function() {});
```

The above code is a small Express server that renders our React components. 
This program uses the `express-react-views` module.  

Next, create a `views` directory in the same directory as `program.js`. 
After that, create `index.jsx` in the 'views' directory.
If someone navigates to `/`, `views/index.jsx` will be rendered.

Please copy the code below into `index.jsx`

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

This code, which is like writing HTML in JavaScript, is called React.js JSX syntax. 
You can create your views without JSX syntax, but use the JSX syntax in this workshop.

After copying all of the code, run `node program.js` and access `http://localhost:3000`, check out the real HTML that is outputted!

After that, run `learnyoureact verify program.js`.

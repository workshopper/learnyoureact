First things first, let's print `Hello World`!

Start by installing the required modules. Run this command:

    $ npm install express body-parser express-react-views node-jsx

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

The code above creates a small Express server that renders our React
components. If someone navigates to `/`, `views/index.jsx` will be rendered. This program uses the `express-react-views` module.

Next, create a `views` directory in the same directory as `program.js`.
After that, create `index.jsx` in the 'views' directory.

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

This code uses the optional React.js JSX syntax to create our views, which we
shall use throughout the rest of this workshop.

You can find the React.js docs here: https://facebook.github.io/react/docs/getting-started.html

Read more about the JSX syntax here: https://facebook.github.io/react/docs/jsx-in-depth.html

When you are ready run `node program.js` and access `http://localhost:3000` to see the HTML output in the browser.

Finally, run `learnyoureact verify program.js` to check your solution.

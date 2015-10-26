Let's use React on the front-end too!

From this excercise on, we'll use React not only on the server side but also on the front-end.
Let's raise the event on the front-end, and see what will happen.
In the past exercises, there was code that raised the front-end event, but did nothing. Do you know what it was?

It was interactions with the `checkbox` you wrote in the `State` lesson.
In the `State` lesson, to be honest, checking the `checkbox` doesn't actually update the state.

In this excercise, let's make it run on the front-end too.

There is a lot of code to change ! Let's try it!

# Question
---

Start by installing the required modules. Run the command below:

```
$ npm install browserify reactify
```

Next, create `app.js` in the same directory as `program.js` and copy the code below into it:

```
var React = require('react');
var ReactDOM = require('react-dom');
var TodoBox = require('./views/index.jsx');

var data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
ReactDOM.render(<TodoBox data={data} />, document.getElementById("app"));
```

The above code is to use React on the front-end. This code assumes that there will be some data attached to a DOM element with the id `initial-data`, and passes it into a `TodoBox` from `index.jsx`, and renders the whole component in the element with id `app`.

Next, let's fix `program.js`. You can change your existing one, or make a new `program.js` file and write all the code there.

First of all, let's add these `require` statements at the top:

```
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var DOM = React.DOM;
var body = DOM.body;
var div = DOM.div;
var script = DOM.script;

var browserify = require('browserify');
```

Next, add a line that `require`s `index.jsx` under the line that `require`s `node-jsx`:

```
require('node-jsx').install();
var TodoBox = require('./views/index.jsx');
```

Finally, fix the routes for `/bundle.js` and `/` as shown below.
When `/bundle.js` is requested, you want to respond with the browserified version of `app.js`, which will work on the front-end.
When `/` is requested, you want to respond with a combination of `index.jsx` and the server-side data, and `bundle.js`. This renders the initial state of the application on the server, but allows React to run in the client to continue support state changes.

```
app.use('/bundle.js', function(req, res) {
  res.setHeader('content-type', 'application/javascript');
  browserify('./app.js')
    .transform('reactify')
    .bundle()
    .pipe(res);
});

app.use('/', function(req, res) {
  var initialData = JSON.stringify(data);
  var markup = ReactDOMServer.renderToString(React.createElement(TodoBox, {data: data}));

  res.setHeader('Content-Type', 'text/html');

  var html = ReactDOMServer.renderToStaticMarkup(body(null,
      div({id: 'app', dangerouslySetInnerHTML: {__html: markup}}),
      script({id: 'initial-data',
              type: 'text/plain',
              'data-json': initialData
            }),
      script({src: '/bundle.js'})
  ));

  res.end(html);
});
```

After writing the necessary code, run `node program.js 3000 Milk 13:00` and access `http://localhost:3000` , and check the real HTML that is outputted.

Click the checkbox some times, and confirm whether you can check the checkbox correctly.

After that, run `learnyoureact verify program.js`.

NOTE: I think some of you might notice  the difference of HTML in which by running `verify` and accessing `http://localhost:3000`.
`data-react-checksum` or  `data-reactid` that keep the DOM unique make the compare of right answer and the code you write fail in the quality.
So if you run `verify`, this code compares the code at other part of HTML.

If you have time, confirm that the checkbox does not work when you set `true` or `false` in `setState` in `handleChange`.

Let's use React on the front-end too!

From this exercise on, we'll use React not only on the server side but also on the front-end.
Let's raise the event on the front-end, and see what will happen.
In the past exercises, there was some code that raised a front-end event, but it did not work. Where is that?

The code is the check of the `checkbox` event you wrote in `State`.
At `State`, to tell the truth, you can check the `checkbox` no matter what code you write.
In this exercise, let's confirm if you can write the right code or not.
There is a lot of code to change !
Let's try it!

# Question
---

Start by installing the required modules. Run the four commands below.

```
$ npm install browserify babelify babel-preset-react babel-preset-es2015
```

Next, let's create `app.js` at the same directory as `program.js` and copy the code below into the file.

```
import React from 'react';
import ReactDOM from 'react-dom';
import TodoBox from './views/index.jsx';

let data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
ReactDOM.render(<TodoBox data={data} />, document.getElementById("app"));
```

The above code is to use React at front-end. This code passes `TodoBox`  from `index.jsx`, and data from server that are passed in the id of `initial-data` to the element that has the id of `app`.

Next, let's fix `program.js`.
You can also make a new `program.js` file and write all the code there.

First of all, let's add these `require` statements - like this:

```
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var DOM = React.DOM;
var body = DOM.body;
var div = DOM.div;
var script = DOM.script;

var browserify = require('browserify');
var babelify = require("babelify");
```

Next, add a line that reads `index.jsx` under the sentence that `require` s `babel/register`.

```
require('babel/register')({
    ignore: false
});

var TodoBox = require('./views/index.jsx');
```

Finally, fix the router of `/bundle.js` and `/` like below.
If you have an access to `/bundle.js`, you change `app.js` that can work on the front-end and response.
If you have an access to `/`, you response HTML that consists of reading `index.jsx`, and data from server, and `bundle.js`.

```
app.use('/bundle.js', function (req, res) {
    res.setHeader('content-type', 'application/javascript');

    browserify({ debug: true })
        .transform(babelify.configure({
            presets: ["react", "es2015"],
            compact: false
        }))
        .require("./app.js", { entry: true })
        .bundle()
        .pipe(res);
});

app.use('/', function (req, res) {
    var initialData = JSON.stringify(data);
    var markup = ReactDOMServer.renderToString(React.createElement(TodoBox, {data: data}));

    res.setHeader('Content-Type', 'text/html');

    var html = ReactDOMServer.renderToStaticMarkup(body(null,
        div({id: 'app', dangerouslySetInnerHTML: {__html: markup}}),
        script({
            id: 'initial-data',
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

프론트엔드 쪽에서도 React를 사용해 봅시다.

이제 서버사이드 뿐만 아니라, 프론트엔드 측에서도 React를 사용해 보겠습니다.
프론트엔드 측에서 이벤트를 발생해 어떤일이 일어나는지 살펴봅시다.
여태까지 푼 연습 문제 중에, 이벤트를 발생시키고 있지만 잘 동작하지 않았던 곳이 있습니다. 어디일까요?

`State`로 작성한 `checkbox`의 체크 이벤트입니다.
사실 `State`로 어떻게 작성하든 무시되어 체크가 되고 있었습니다. 올바르게 작성되었는지 확인해 봅시다.
조금 수정할 곳이 많습니다만, 해봅시다!

# 문제
---

우선 모듈을 설치합시다.

```
$ npm install browserify babelify babel-preset-react babel-preset-es2015
```

그런 다음 `program.js`와 같은 디렉터리에 `app.js`를 작성해 주세요. `app.js`는 다음과 같이 작성합니다.

```
import React from 'react';
import ReactDOM from 'react-dom';
import TodoBox from './views/index.jsx';

let data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
ReactDOM.render(<TodoBox data={data} />, document.getElementById("app"));
```
이것이 프론트엔드 측에서 React를 사용하기 위한 코드입니다. `app`라는 ID를 가지는 HTML 요소에, `index.jsx`에서 읽은 `TodoBox`와 서버측에서 넘긴 `initial-data`라는 ID를 가지는 데이터를 넘기고 있습니다.

다음으로 `program.js`를 수정해 봅시다.
새로 파일을 작성해도 됩니다.

우선, 밑의 `require`를 추가하세요.

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

그런 다음 `babel/register`를 `require`하고 있는 구문 밑에 다음과 같이 `index.jsx`를 불러 오도록 추가해 주세요.

```
require('babel/register')({
    ignore: false
});

var TodoBox = require('./views/index.jsx');
```

마지막으로 `/bundle.js`와 `/`에 액세스가 왔을 때의 처리를 다음과 같이 수정해 주세요.
`/bundle.js`에 액세스가 왔을 때는, 위의 `app.js`를 프론트엔드에서 동작하는 형태로 변환해 응답을 합니다.

`/`에 액세스가 왔을 때, `index.jsx`를 읽은 것과, 서버에서 넘긴 데이터, `bundle.js`를 HTML 형식의 응답으로 반환합니다.

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

여기까지 되었으면, `node program.js 3000 Milk 13:00`를 실행해, `http://localhost:3000`에 액세스해, 실재로 html이 출력하는 것을 확인해 보세요.
체크박스를 몇 번 클릭해, 올바르게 체크되는지 확인해주세요.
그런 다음, `learnyoureact verify program.js`를 실행해 주세요.

※ `verify`를 했을때 출력되는 HTML이 `http://localhost:3000`에 액세스했을 때 표시되는 HTML과 다르다는 것을 눈치챈 분도 있을 것 같습니다.
DOM을 한 번에 식별하기 위한 `data-react-checksum`, `data-reactid`의 특성 상, 정답과 당신이 작성한 파일을 비교할 때 다른 값을 가지므로, 비교할 수 없습니다.
그래서 `verify`를 할 때는 다른 방법으로 비교를 하고 있습니다.

여유가 있으면, `handleChange`의 `setState`로 `true`나 `false` 같은 고정 변수를 지정해, 정확하게 체크박스를 사용할 수 없는 것을 확인해 보세요.

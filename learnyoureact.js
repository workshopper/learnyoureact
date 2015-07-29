#!/usr/bin/env node

const workshopper = require('workshopper-adventure'),
      path        = require('path')

function fpath (f) {
    return path.join(__dirname, f)
}

workshopper({
    name        : 'learnyoureact',
    title       : 'Learn React.js',
    subtitle    : 'React.jsとサーバーサイドレンダリングを勉強しよう！',
    appDir      : __dirname,
    menuItems   : [],
    languages   : ['en', 'ja', 'ko'],
    defaultLang : 'en',
    exerciseDir : fpath('./exercises/')
})

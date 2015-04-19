#!/usr/bin/env node

const workshopper = require('workshopper-adventure'),
      path        = require('path')

function fpath (f) {
    return path.join(__dirname, f)
}

workshopper({
    name        : 'learnyoureact',
    title       : 'Learn React.js',
    subtitle    : 'Learn React.js and server side rendering',
    appDir      : __dirname,
    menuItems   : [],
    languages   : ['ja', 'en'],
    defaultLang : 'ja',
    exerciseDir : fpath('./exercises/')
})

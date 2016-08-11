# query-parser
[![travis-ci](https://travis-ci.org/xuhong/query-parser.svg?branch=master)](https://travis-ci.org/xuhong/query-parser)
[![Dependency Status](https://dependencyci.com/github/xuhong/query-parser/badge)](https://dependencyci.com/github/xuhong/query-parser)
[![npmjs](https://nodei.co/npm/smart-query-parser.png?mini=true)](https://www.npmjs.com/package/smart-query-parser)

A smarter query string parser that will convert value in right format(support `number`, `boolean` and `array`), write in ES6.

## Install
```
npm install smart-query-parser
```

## Usage
```
import parser from 'smart-query-parser'

const link = 'https://google.com/search?q=hello+world&a=1&a=2'
let obj = parser(link)
console.log(obj) // {q: 'hello world', a: [1,2]}
```

## Author
[xuhong](https://github.com/xuhong)

## License
MIT

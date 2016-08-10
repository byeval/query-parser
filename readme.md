# query-parser
A smarter query string parser that will convert value in right format(support `number`, `boolean` and `array`), write in ES6.

## Install
```
npm install smart-query-parser
```

## Usage
```
import { parser } from 'smart-query-parser'

const link = 'https://google.com/search?q=hello+world&a=1&a=2'
let obj = parser(link)
console.log(obj) // {q: 'hello world', a: [1,2]}
```

## Author
[xuhong](https://github.com/xuhong)

## License
MIT

'https://www.google.com/search?q=%5B1%2C2%5D'
'http://stackoverflow.com/questions/6243051/how-to-pass-an-array-within-a-query-string'
'http://stackoverflow.com/questions/2407284/how-to-get-multiple-selected-values-of-select-box-in-php'
'https://github.com/angular/angular.js/commit/807394095b991357225a03d5fed81fea5c9a1abe'
'https://unspecified.wordpress.com/2012/02/12/how-do-you-escape-a-complete-uri/'
'http://stackoverflow.com/questions/1303646/check-whether-variable-is-number-or-string-in-javascript'
# query-parser
A smarter query string parser that will convert value in right format(support `number`, `boolean` and `array`), write in ES6.

## Install
```
npm install query-parser
```

## Usage
```
import { parser } from 'query-parser'

const link = 'https://google.com/search?q=hello+world&a=1&a=2'
let obj = parser(link)
console.log(obj) // {q: 'hello world', a: [1,2]}
```

## Author
xuhong

## License
MIT
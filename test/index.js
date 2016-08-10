import test from 'ava'
import parser from '../src/parser'

const google = 'https://google.com/search'

test('parse a query string', t => {
  t.deepEqual(parser(`${google}?q=ava`), { q: 'ava' })
})

test('parse multiple query string', t => {
  t.deepEqual(parser(`${google}?q=ava&foo=bar`), { q: 'ava', foo: 'bar' })
})

test('parse multiple query string with same key and return array', t => {
  t.deepEqual(parser(`${google}?q=ava&q=mocha`), { q: ['ava', 'mocha'] })
})

test('parse query string with number value', t => {
  t.deepEqual(parser(`${google}?q=1e4`), {q: 10000})
})

test('parse query string with boolean value', t=>{
  t.deepEqual(parser(`${google}?q=false`), {q: false})
})

test('parse query string with space splited value', t=>{
  t.deepEqual(parser(`${google}?q=1+2+3`), {q: '1 2 3'})
})
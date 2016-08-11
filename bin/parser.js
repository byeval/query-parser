#! /usr/bin/env node

'use strict'
const program = require('commander')
const parser = require('../dist/parser').default

program
  .version('0.0.1')
  .option('-v, --version', '0.0.1')
  .arguments('<link>')
  .action((link) => {
    if (typeof link === 'undefined') {
      // eslint-disable-next-line no-console
      console.error('no link given!')
      process.exit(1)
    }
    // eslint-disable-next-line no-console
    console.log(parser(link))
  })
  
program.parse(process.argv)

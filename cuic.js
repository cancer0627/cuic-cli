#!/usr/bin/env node
const program = require('commander')

program
  .version(require('./package.json').version)
  .usage('<command> [options]')
program
  .command('init')
  .description('生成一个新项目')
  .alias('i')
  .action(() => {
    require('./lib/init')()
  })
program
  .parse(process.argv)

if(!program.args.length){
  program.help()
}

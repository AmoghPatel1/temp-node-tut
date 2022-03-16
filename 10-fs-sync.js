const {readFileSync, writeFileSync} = require('fs')
// same as above
// const fs = require('fs')
console.log('start');

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

// console.log(first,"\n"+second)

writeFileSync(
    './content/result-sync.txt',
    `Here is the result ${first}, ${second}`,
    {flag: 'a'}  // flag to append.
)
console.log('done with this task')
console.log('starting the next one')
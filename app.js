// npm - global command, come with node
// npm --version 

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// Some dependencies have more than one packages e.g. bootstrap

const _ = require('lodash')
const items = [1,[2,[3,[4]]]] // array of arrays
const newItems = _.flattenDeep(items)
console.log(newItems);
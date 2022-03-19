
const _ = require('lodash')
const items = [1,[2,[3,[4]]]] // array of arrays
const newItems = _.flattenDeep(items)
console.log(newItems);
// // const importAll = require('./14-export')

// // importAll.sayHello()

// require('./14-export')
// console.log(ROLE)

// ES6
// import object, {username, ROLE} from "./14-export.js"
// console.log(object, ROLE, username )

import object, * as importAll from './14-export.js'
console.log(importAll.ROLE)
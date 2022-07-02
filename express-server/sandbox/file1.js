// use the name variable
// console.log(name)

// const n = require('./file2')
// console.log(n)

console.log(require('./file2'))

const greet = require('./file3')

// const user = require('./file4')

const { firstName, lastName } = require('./file4')
console.log(greet())
// console.log(user)
console.log(firstName,lastName)
// use the greet function
//greet()





/**
 * Primitive
 */

// String/Text

let a = ""
let b = ''
let c = ``
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)


// numbers
let num1 = 1
let num2 = 3.2
let num3 = 12e3

console.log(typeof num1)
console.log(typeof num2)
console.log(typeof num3)

// null
let empty = null
console.log(typeof empty)

// boolean
let bool = false
console.log(typeof bool)


// undefined
let undefined
console.log(typeof undefined)

console.log(typeof console)



/** 
 * Non primitive 
*/

// Array
// index and value

// single dimensional array

let arr = Array(2, "hello", NaN, console)
arr = [2, "hello", NaN, console]
console.log(`arr[0] = ${arr[0]}\narr = ${arr}`)

// multidimensional array

// all users
let users = [
    [],
    arr,
    console
]
// console.log(users);


// object
const userInfo = {
    name: "Sandesh Bhattarai",
    email: "sandesh@broadwayinfosys.com",
    phone: 985011215
}

console.log(userInfo.name);
console.log(userInfo.email);
console.log(userInfo['phone']);

// why json is called universal datatype


/** 
 * function
*/
const greet = () => {
    console.log("hello world")
}
greet()

// Date
// set
// symbols 

console.log(typeof greet == "function")
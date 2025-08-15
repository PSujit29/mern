// types of function in js

// 1. function with no argument and no return
// 2. function with no argument and  return
// 3. function with  argument and no return
// 4. function with  argument and  return

// defn types
// declaration and arrow functions

// iife
// (()=>{
//     console.log("hello, iife")
// })();

const userObject = {
    name: "sujit pandey",
    getName() { console.log(this.name) },
    getAddress: function () { console.log(this.name) },
    getEmail: () => { console.log(this.name) }, //do not use in object. scope of this variable is withinn the arrow block. 
}
userObject.getName()
userObject.getAddress()
userObject.getEmail()



const getValue = () => {
    return 1
}

const showValue = (x) => {
    console.log(`the value of x = ${x}`)
}

let val = getValue()
showValue(val)



// closure function

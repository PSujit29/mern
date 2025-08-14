// function
console.log(`This is before function`)
sayHello()
sayHello("Sujit")
function sayHello(user= "User"){
    console.log(`Hello, ${user}`)
}
console.log(`This is after function`)
sayHello()
sayHello("Sujit")

// arrow function

// sayBye() //throw error
// sayBye("Sujit") //throw error
const sayBye = (user = "User")=>{
    console.log(`Bye, ${user}`)
}
sayBye()
sayBye("Sujit")



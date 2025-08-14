// function call before initialization
console.log(`This is before function`)
sayHello()
sayHello("Sujit")

// =====================
// function declaration
// =====================

function sayHello(user= "User"){
    console.log(`Hello, ${user}`)
}
console.log(`This is after function`)
// function call aafter defination
sayHello()
sayHello("Sujit")


// =====================
// Arrow function
// =====================

// sayBye() //throw error
// sayBye("Sujit") //throw error
const sayBye = (user = "User")=>{
    console.log(`Bye, ${user}`)
}
sayBye()
sayBye("Sujit")



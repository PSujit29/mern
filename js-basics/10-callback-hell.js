// callback hell 

// ... todo


// promises

// 3 STAGEs:
// a. pending
// b. resolve/reject
// c. settlement

// then catch 
// async await in try catch block 

// create promise 

const promise = new Promise((resolve, reject) => {
    
    if (Math.random() > 0.5) {
        resolve("ok test 1")
    }
    else if (Math.random() < 0.5) {
        resolve("ok test 2")
    }
    else {
        reject("failure")
    }
})

// console.log("i am before promise")

promise
    .then((data) => {
        console.log(data)
    })
    .then(data2 => {
        console.log(data2)
    })
    .catch(err => {
        console.log(err)
    })

// console.log("i am after promise")



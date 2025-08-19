const func1 = async (x) => {
    if (x) return "I pass in func1"
    else throw "I am reject from func 1"
}

const func2 = async (x) => {
    if (x) return "I pass in func2"
    else throw "I am reject from func 2"
}

const func3 = async (x) => {
    if (x) return "I pass in func3"
    else throw "I am reject from func 3"
}

const func4 = async (x) => {
    if (x) return "I pass in func4"
    else throw "I am reject from func 4"
}

// not the way. oh hell no 
// func1(true)
//     .then(res1 => {
//         console.log(res1)

//         func2(false)
//             .then(res2 => {
//                 console.log(res2)

//                 func3(true)
//                     .then(res3 => {
//                         console.log(res3)

//                         func4(false)
//                             .then(res4 => {
//                                 console.log(res4)
//                             })
//                             .catch(exception => {
//                                 console.log(exception)
//                             })
//                     })
//                     .catch(exception => {
//                         console.log(exception)
//                     })
//             })
//             .catch(exception => {
//                 console.log(exception)
//             })
//     })
//     .catch(exception => {
//         console.log((exception))
//     })


// promise chaining
// func1(true)
//     .then(res1 => {
//         console.log(res1)
//         return func2(true)
//     })
//     .then(res2 => {
//         console.log(res2)
//         return func3(false)
//     })
//     .then(res3 => {
//         console.log(res3)
//         return func4(true)
//     })
//     .then(res4 => {
//         console.log(res4)
//     })
//     .catch(exception => {
//         console.log(exception)
//     })



// TODO: look at home
// example uplloading 5 files by user. accept only if successfully uploaded files else not upload file if even 1 is not uploaded
let listPromises = [func1(true), func2(true), func3(true), func4(true)]
Promise.all(listPromises)
    .then((result) => {
        console.log(result)
    })
    .catch(exception => {
        console.log(exception)
    })

Promise.allSettled()
Promise.race()
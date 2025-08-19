// const promFunc = () => {
//     return new Promise((resolve, reject) => {
//         //success
//         resolve("yay")
//         //failure
//         reject("oh, no")
//     })
// }

// // handle promise 
// promFunc()
//     .then((resData) => {
//         console.log(resData)
//     })
//     .catch((exception) => {
//         console.log(exception)
//     });

// console.log("i am the last line")


console.log("i am before")
const login = async (user, pass) => {
    let success = false;
    if (user === "admin" && pass === "admin") success = true;
    if (success) {
        return { id: 1, message: "logged in successfully" } //async - > return is always resolve
    }
    else {
        throw { cause: "LoginError", message: "error credentials" } // async - throw == rejection
    }
}

login("admin", "admin")
    .then(data => {
        console.log(`${data.id}: ${data.message}`)
    })
    .catch(err => {
        console.log(`${err.cause}: ${err.message}`)
    })

console.log("i am last")
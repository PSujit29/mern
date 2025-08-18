// callback, foreach, filter, map, reduce

const productList = [
    {
        id: 1234,
        name: "muffin",
        price: 1000,
        discount: 10
    },
    {
        id: 124,
        name: "chocolate",
        price: 2300,
        discount: 4.5
    },
    {
        id: 4234,
        name: "glazed doughnut",
        price: 9900,
        discount: 7.5
    },
    {
        id: 333,
        name: "hotdog",
        price: 3300,
        discount: 13
    },
]

// product[0].discountAmount = product[0].price * product[0].discount * 0.01
// product[0].afterDiscount = product[0].price - product[0].discountAmount

// foreach loop

productList.forEach((prod, index) => {
    prod.discountAmount = prod.price * prod.discount * 0.01
    prod.afterDiscount = prod.price - prod.discountAmount
})

let result = []
result = productList.map((prod) => {
    prod.discountAmount = prod.price * prod.discount * 0.01
    prod.afterDiscount = prod.price - prod.discountAmount
    return prod.afterDiscount
})
console.log(result)



const numArr = [1, 22, 3, 4, 15, -6, 17, 8, -9, 10]
let divByThree = numArr.filter(num => num % 3 === 0)
console.log(divByThree)

// reduce
let max = numArr.reduce((acc, curr) => (acc > curr) ? acc : curr, -Infinity)
console.log(max)

let sum = numArr.reduce((acc, curr) => acc + curr, 0)
console.log(sum)


let min = 10
let resVal = numArr.every((val) => min >= val)
console.log(resVal)
resVal = numArr.some((val) => min >= val)
console.log(resVal)

let vals = [1,2,2,1,3,4,4,3,2,2,4,2,3,3,1,1,2]
let uniqueVals = [... new Set(vals)]
console.log(uniqueVals)
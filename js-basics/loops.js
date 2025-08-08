let count = 0;

console.log("Do-While..................")
do {
    console.log(`count = ${count}`);
    count++
} while (count < 5)

console.log("While.....................")
while (count < 10) {
    console.log(`count = ${count}`)
    count++
}

console.log("for.......................")
for (; count < 15; count++) {
    console.log(`count = ${count}`)
}


console.log("for-of....................")
const arr = [10, 22, 43, 4, 35]
let sum = 0
for (const val of arr) {
    sum += val
}
console.log(`summation of array = ${sum}`)
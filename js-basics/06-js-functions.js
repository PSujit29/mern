// SOLID prnciple
// single responsibility principle
// must do single Worker. task only
// open close principle
//no change to the working code
// liskov substitution principle
//new changeas must not break your code
// interface segregation prinnciple
// module. function breakdown
// dependency inversion principle
// required files to nyour code becomes your dependency


// =====================
// returning day by passing number
// =====================

// const returnDayByNumber = (dayNum) => {
//     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
//     if (dayNum >= 0 && dayNum <= 6) {
//         return days[dayNum]
//     }
//     else if (dayNum > 6) {
//         return days[dayNum % 7]
//     }
//     else {
//         console.log("Try learn counting before programming !")
//         return "Unknown Negative Day"
//     }
// }

// console.log(returnDayByNumber(-1))
// console.log(returnDayByNumber(0))
// console.log(returnDayByNumber(5))
// console.log(returnDayByNumber(7))
// console.log(returnDayByNumber(8))


// // function call before initialization
// console.log(`This is before function`)
// sayHello()
// sayHello("Sujit")

// // =====================
// // function declaration
// // =====================

// function sayHello(user = "User") {
//     console.log(`Hello, ${user}`)
// }
// console.log(`This is after function`)
// // function call aafter defination
// sayHello()
// sayHello("Sujit")


// // =====================
// // Arrow function
// // =====================

// // sayBye() //throw error
// // sayBye("Sujit") //throw error
// const sayBye = (user = "User") => {
//     console.log(`Bye, ${user}`)
// }
// sayBye()
// sayBye("Sujit")


// =====================
// Logical & Difficult Question for Practice
// =====================

// Write a function that takes an array of student objects, where each object contains a student's name and an array of their scores.
// The function should return the name(s) of the student(s) with the highest average score.
// If multiple students have the same highest average, return all their names in an array.
//
// Example Input:
// const students = [
//     { name: "Alice", scores: [90, 85, 88] },
//     { name: "Bob", scores: [92, 81, 85] },
//     { name: "Charlie", scores: [90, 85, 88] }
// ];
//
// Expected Output:
// ["Alice", "Charlie"]


// solution: 
const students = [
    { name: "Alice", scores: [90, 85, 88] },
    { name: "Bob", scores: [92, 81, 85] },
    { name: "Charlie", scores: [90, 85, 88] }
];
const calculateAverage = (marks) => {
    return marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / marks.length;
}
const returnTopper = (students) => {

    const newStudents = Array.from(students)
    let toppers = []
    let max = -Infinity

    for (const student of newStudents) {
        let average = calculateAverage(student.scores)
        max = (max < average) ? average : max
        student.average = average
    }

    for (const student of newStudents) {
        if (student.average == max) toppers.push(student.name)
    }
    return toppers
}

console.log((returnTopper(students)))

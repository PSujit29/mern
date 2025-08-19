//
//==========================
//Industry Standard Practice: forEach, map, filter, reduce
//==========================
//
//
//
// Stage 1: Mini Practical Problems
// 🔹 forEach ()
//
// 1. Given an array of user IDs, print "Sending email to <userId>" for each user.
// solution to 1.:
// console.log("solution to forEach q1:")
// const userID = [1, 3, 2, 5, 7, 8]
// userID.forEach((id) => {
//     console.log(`Sending email to ${id}`)
// })
//
// // 2. Log each order in an e-commerce system with the format: "Order #<id> placed by <customerName>".
// // solution to 2:
// console.log("solution to forEach q2.")
// const orderDetails = [
//     {
//         id: 104,
//         customerName: "chatgpt",
//         orderName:"batteries"
//     },
//     {
//         id: 132,
//         customerName: "github copilot",
//         orderName: "queries",
//     },
//     {
//         id: 182,
//         customerName: "gemini",
//         orderName: "data",
//     },
// ]
// orderDetails.forEach((order)=>{
//     console.log(`Order #${order.id} placed by ${order.customerName}`)
// })
//
//
//
// 🔹 map (transforming data)
// 3. Convert an array of product prices in USD to EUR using a fixed conversion rate.
// solution:
// console.log("solution to map q1:")
// const pricesInUSD = [12.3, 10, 9.99, 500, 33.80]
// const conversionRate = 0.86 //1 usd == 0.86 eur
// const pricesInEUR = pricesInUSD.map(price => Number((price * conversionRate).toFixed(2)))
// console.log("Price in USD: ", pricesInUSD)
// console.log("Price in EUR: ", pricesInEUR)
//
// 4. Given an array of file names like ["report.docx", "photo.png"], map them to their extensions ["docx", "png"].
// solution
// console.log("solution to map q4:")
// const fileNames = ["report.docx", "photo.png", "file"]
// const fileExtensions = fileNames.map((file) => {
//     const parts = file.split('.');
//     if (parts.length > 1) {
//         return parts.pop();
//     }
//     return '';
// })
// console.log("Filenames: ", fileNames, "\ncorresponding extensions: ", fileExtensions)
//
// 🔹 filter()
// 5. From a list of employees, filter only those who are in the "Engineering" department.
// solution:
// console.log("solution to filter q5:")
// const employees = [
//     { name: 'Alice', department: 'Engineering' },
//     { name: 'Bob', department: 'Marketing' },
//     { name: 'Charlie', department: 'Engineering' },
//     { name: 'David', department: 'Sales' },
//     { name: 'Eva', department: 'Engineering' }
// ];
// let engineeringEmployees = employees.filter(emp=>emp.department === 'Engineering')
// console.log(engineeringEmployees)
//
// 6. From a transaction list, filter only failed transactions (status = "FAILED").
// solution
// console.log("solution to the filter q6:")
// const transactions = [
//     { id: '1', status: 'COMPLETED', amount: 150 },
//     { id: '2', status: 'FAILED', amount: 50 },
//     { id: '3', status: 'COMPLETED', amount: 200 },
//     { id: '4', status: 'PENDING', amount: 75 },
//     { id: '5', status: 'FAILED', amount: 120 }
// ];
// let failedTransactions = transactions.filter(transaction => transaction.status === 'FAILED')
// console.log(failedTransactions)
//
// 🔹 reduce ()
// 7. From an array of expenses [200, 500, 100], calculate the total expense.
// solution:
// console.log("solution to reduce q7:")
// const expenses = [200, 500, 100]
// let totalExpense = expenses.reduce((acc, curr) => acc + curr)
// console.log("total expenses is: ", totalExpense)
//
// 8. From a sales array [{region:"APAC", amount:100}, {region:"EU", amount:200}], get the total sales amount.
// solution
// console.log("solution to reduce q8:")
// const sales = [{ region: "APAC", amount: 100 }, { region: "EU", amount: 200 }]
// let totalSalesAmount = sales.reduce((acc, curr) => acc.amount + curr.amount)
// console.log(totalSalesAmount)\
//
// Stage 2: Integrated Problems (combine methods)
// 9. Employee Salary Analysis
// Given an array of employee objects:
// [
//   { name: "Alice", dept: "Engineering", salary: 80000 },
//   { name: "Bob", dept: "HR", salary: 50000 },
//   { name: "Charlie", dept: "Engineering", salary: 95000 }
// ]
// - filter employees in Engineering.
// - map to their salaries.
// - reduce to get average salary.
// - forEach print a report: "Engineering employee: <name>, salary: <salary>".
//
// solution:
// consoole.log("Solution to stage 2, q9: ")
// const employees = [
//     { name: "Alice", dept: "Engineering", salary: 80000 },
//     { name: "Bob", dept: "HR", salary: 50000 },
//     { name: "Charlie", dept: "Engineering", salary: 95000 }
// ]
// let engineeringEmployees = employees.filter(emp => emp.dept === "Engineering") //filtering engineering employees
// console.log(engineeringEmployees)
//
// let engineeringEmployeesSalary = engineeringEmployees.map(emp => emp.salary) //mapping their salaries
// console.log(engineeringEmployeesSalary)
//
// let averageEngineeringEmployeesSalary = engineeringEmployeesSalary.reduce((acc, curr) => acc + curr) / engineeringEmployeesSalary.length //getting average salaries
// console.log(averageEngineeringEmployeesSalary) //task 4
//
// engineeringEmployees.forEach(emp => {
//     console.log(`Engineering employee: ${emp.name}, salary: ${emp.salary}`)
// })

// 10. Shopping Cart Checkout
// You have a cart:
// [
//     { product: "Laptop", price: 1000, quantity: 2 },
//     { product: "Mouse", price: 50, quantity: 4 },
//     { product: "Keyboard", price: 80, quantity: 1 }
// ]
// - map to calculate each item’s subtotal (price * quantity).
// - reduce to get the total cart value.
// - filter items costing more than $100.
// - forEach print a bill-style receipt.
// 
// solution
// console.log("solution to stage 2, q10: ")
const cart = [
    { product: "Laptop", price: 1000, quantity: 2 },
    { product: "Mouse", price: 50, quantity: 4 },
    { product: "Keyboard", price: 80, quantity: 1 }
]
console.log(cart)
let subtotal = cart.map(item => item.price * item.quantity)
cart.forEach((item, indx) => {
    item.subtotal = subtotal[indx]
})
console.log(cart)

const totalcartValue = cart.reduce((acc, curr) => acc + curr.subtotal, 0)
console.log("total cart value = ", totalcartValue)

const aboveHundredItem = cart.filter(item => item.price >= 100)
console.log(aboveHundredItem)

/*
--------------------------
Stage 3: Stretch Challenge (realistic project)

11. Analytics Dashboard Data Processing
You are given website analytics logs:
[
  { userId: 1, page: "home", duration: 5 },
  { userId: 2, page: "about", duration: 3 },
  { userId: 1, page: "products", duration: 10 },
  { userId: 3, page: "home", duration: 2 }
]
Tasks:
- filter out sessions shorter than 3 seconds (to remove bots).
- map to extract just the page field.
- reduce to build a frequency object showing how many times each page was visited:
  { home: 2, about: 1, products: 1 }
- forEach print a report like:
  Page: home → 2 visits
  Page: about → 1 visit
  Page: products → 1 visit

--------------------------
*/
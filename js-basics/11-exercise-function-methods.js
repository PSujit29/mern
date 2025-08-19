/*
==========================
Industry Standard Practice: forEach, map, filter, reduce
==========================
*/


// Stage 1: Mini Practical Problems
// 🔹 forEach ()

// 1. Given an array of user IDs, print "Sending email to <userId>" for each user.
// solution to 1.:
// console.log("solution to forEach q1:")
// const userID = [1, 3, 2, 5, 7, 8]
// userID.forEach((id) => {
//     console.log(`Sending email to ${id}`)
// })

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



// 🔹 map (transforming data)
// 3. Convert an array of product prices in USD to EUR using a fixed conversion rate.
// solution:
console.log("solution to map q1:")
const pricesInUSD = [12.3, 10, 9.99, 500, 33.80]
const conversionRate = 0.86 //1 usd == 0.86 eur
const pricesInEUR = pricesInUSD.map(price => Number((price * conversionRate).toFixed(2)))
console.log("Price in USD: ", pricesInUSD)
console.log("Price in EUR: ", pricesInEUR)

// 4. Given an array of file names like ["report.docx", "photo.png"], map them to their extensions ["docx", "png"].
// solution


/*
🔹 filter (selecting data)
5. From a list of employees, filter only those who are in the "Engineering" department.
6. From a transaction list, filter only failed transactions (status = "FAILED").

🔹 reduce (aggregation & summarizing)
7. From an array of expenses [200, 500, 100], calculate the total expense.
8. From a sales array [{region:"APAC", amount:100}, {region:"EU", amount:200}], get the total sales amount.

--------------------------

Stage 2: Integrated Problems (combine methods)

9. Employee Salary Analysis
Given an array of employee objects:
[
  { name: "Alice", dept: "Engineering", salary: 80000 },
  { name: "Bob", dept: "HR", salary: 50000 },
  { name: "Charlie", dept: "Engineering", salary: 95000 }
]
- filter employees in Engineering.
- map to their salaries.
- reduce to get average salary.
- forEach print a report: "Engineering employee: <name>, salary: <salary>".

10. Shopping Cart Checkout
You have a cart:
[
  { product: "Laptop", price: 1000, quantity: 2 },
  { product: "Mouse", price: 50, quantity: 4 },
  { product: "Keyboard", price: 80, quantity: 1 }
]
- map to calculate each item’s subtotal (price * quantity).
- reduce to get the total cart value.
- filter items costing more than $100.
- forEach print a bill-style receipt.

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
const day = "saturday"


// if-else
if (day === "sunday" || day === "saturday") {
    console.log("holiday");
} else {
    if (day === "friday") {
        console.log("weekend");
    } else {
        console.log("weekday");
    }
}

//else if statement
if (day === "sunday" || day === "saturday") {
    console.log("holiday");
} else if (day === "friday") {
    console.log("weekend");
} else {
    console.log("weekday");
}



// switch case

switch (day) {
    case "sunday":
    case "saturday":
        console.log("holiday");
        break;
    case "friday":
        console.log("weekend");
        break;
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
        console.log("weekday");
        break;
    default:
        console.log("invalid");
        break;
}


// Task:
// 1. Create a JavaScript variable named unitConsumed and assign it a value greater than 0.
// 2. Calculate the total electricity bill based on the following slab rates:
//
//    - For the first 20 units: fixed charge of 80
//    - For the next 20 units (21-40): 5 per unit
//    - For the next 30 units (41-70): 7.5 per unit
//    - For the next 50 units (71-120): 12 per unit
//    - For the next 100 units (121-220): 20 per unit
//    - For units above 220: 25 per unit
//
// Write code to compute and display the bill amount for the given unitConsumed.

const unitConsumed = 320
let billAmount = 0 // handle the base case
if (unitConsumed <= 20) {
    billAmount = 80
} else if (unitConsumed <= 40) {
    billAmount = 80 + (unitConsumed - 20) * 5
} else if (unitConsumed <= 70) {
    billAmount = 80 + 20 * 5 + (unitConsumed - 40) * 7.5
} else if (unitConsumed <= 120) {
    billAmount = 80 + 20 * 5 + 30 * 7.5 + (unitConsumed - 70) * 12
} else if (unitConsumed <= 220) {
    billAmount = 80 + 20 * 5 + 30 * 7.5 + 50 * 12 + (unitConsumed - 120) * 20
} else {
    billAmount = 80 + 20 * 5 + 30 * 7.5 + 50 * 12 + 100 * 20 + (unitConsumed - 220) * 25
}

console.log(`billAmount =  ${billAmount}`)
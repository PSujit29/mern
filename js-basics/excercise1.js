// =====================
// Logical & Challenging Question for Practice
// =====================

// Write a function that takes an array of employee objects. Each object contains an employee's name, department, and an array of monthly salaries for a year.
// The function should return an object where each key is a department name and the value is an array of names of employees in that department whose average monthly salary is above 50,000.
//
// Example Input:
// const employees = [
//   { name: "John", department: "HR", salaries: [52000, 51000, 53000, 54000, 50000, 52000, 51000, 53000, 54000, 50000, 52000, 51000] },
//   { name: "Jane", department: "Engineering", salaries: [60000, 61000, 62000, 63000, 64000, 65000, 66000, 67000, 68000, 69000, 70000, 71000] },
//   { name: "Doe", department: "HR", salaries: [48000, 47000, 49000, 50000, 48000, 47000, 49000, 50000, 48000, 47000, 49000, 50000] },
//   { name: "Smith", department: "Engineering", salaries: [40000, 41000, 42000, 43000, 44000, 45000, 46000, 47000, 48000, 49000, 50000, 51000] }
// ];
//
// Expected Output:
// {
//   HR: ["John"],
//   Engineering: ["Jane"]
// }

// solution

const employees = [
    { name: "John", department: "HR", salaries: [52000, 51000, 53000, 54000, 50000, 52000, 51000, 53000, 54000, 50000, 52000, 51000] },
    { name: "Jane", department: "Engineering", salaries: [60000, 61000, 62000, 63000, 64000, 65000, 66000, 67000, 68000, 69000, 70000, 71000] },
    { name: "Doe", department: "HR", salaries: [48000, 47000, 49000, 50000, 48000, 47000, 49000, 50000, 48000, 47000, 49000, 50000] },
    { name: "Smith", department: "Engineering", salaries: [40000, 41000, 42000, 43000, 44000, 45000, 46000, 47000, 48000, 49000, 50000, 51000] }
];
const calculateAverage = (salary) => {
    return salary.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / salary.length;
}

const returnTopEarners = (employees) => {
    let topEarners = {}

    for (const employee of employees) {
        const avgSalary = calculateAverage(employee.salaries)
        if(avgSalary > 50000){
            if(!topEarners[employee.department]){
                topEarners[employee.department] = [];
            }
            topEarners[employee.department].push(employee.name)
        }
    }


    return topEarners
}

console.log(returnTopEarners(employees))
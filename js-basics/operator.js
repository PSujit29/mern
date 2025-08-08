
// =====================
// Equality Operators
// =====================
console.log(10 == '10');    // true, loose equality
console.log(10 === '10');   // false, strict equality
console.log(10 != '10');    // false, loose inequality
console.log(10 !== '10');   // true, strict inequality

// =====================
// Reference Types
// =====================
console.log([10] == [10]);  // false, arrays are reference types

// =====================
// Conditional (Ternary) Operator
// =====================
let day = "sunday";
console.log((day === "sunday" || day === "saturday") ? "holiday" : (day === 'friday' ? "weekend" : "weekday"));

// Age Category Example
let person = { age: 19, fullName: "Sujit Pandey" };
console.log(
    person.age <= 5
        ? "infant"
        : person.age > 5 && person.age <= 12
            ? "child"
            : person.age > 12 && person.age <= 18
                ? "adolesence"
                : "adult"
);

// =====================
// Nullish Coalescing
// =====================
let age = person.age ? person.age : null;  //they both do same
age = person.age ?? null; // same task

// =====================
// Template Literals
// =====================
console.log(`${person.fullName} is an object`);

// =====================
// Array Destructuring
// =====================
const user = ["sujit", "pandey"];
function hello() { return user; }
const [fName, lName] = hello();
console.log(fName, lName);

// =====================
// Object Destructuring & Aliasing
// =====================
const userDetailInfo = {
    uName: "sujit Pandey",
    uEmail: "iamsujeet@gmail.com",
    uAddress: "pepsico",
    uPhone: 1234567890,
};
let { uName: nam, uEmail: email, ...rem } = userDetailInfo; // aliasing
console.log(nam, email);
console.log(rem);

// =====================
// Spread Operator & Copy
// =====================
let copyUser = { ...userDetailInfo };
copyUser.uAddress = "broadwayinfosys";
console.log(userDetailInfo); // original
console.log(copyUser); // copy with changed address

console.log(typeof log);
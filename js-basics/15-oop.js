// classes and oop 

class Fruit {


    constructor(color, taste) {
        this.color = color
        this.taste = taste
    }
    getColor = function () { return this.color }
    getTaste = function () { return this.taste }
    setColor(color) { this.color = color }
    setColor(taste) { this.taste = taste }
}

// const apple = new Fruit("red", "neutral")
// console.log(apple.getColor(), apple.getTaste())
// console.log(apple)

// const mango = new Fruit("yellow", "sweet")
// console.log(mango.getColor(), mango.getTaste())
// console.log(mango)


// task class -> Student
// attributes: name. email. class, rollNo

class Student {
    stuName;
    #email;
    stuClass;
    rollNo;

    constructor(stuName, email, stuClass, rollNo) {  // _stuName is better
        this.stuName = stuName
        this.#email = email
        this.stuClass = stuClass
        this.rollNo = rollNo
    }

    setName(stuName) { this.stuName = stuName }
    setEmail(email) { this.#email = email }
    setClass(stuClass) { this.stuClass = stuClass }
    setRollNo(rollNo) { this.rollNo = rollNo }

    getStuName() { return this.stuName }
    getClass() { return this.stuClass }
    getEmail() { return this.#email }
    getStuRollNo() { return this.rollNo }
}


let rohan = new Student("Rohan", "rohan@gmail.com", 12, 33)
console.log(rohan)

let sujit = new Student()
sujit.setName("sujit")
sujit.setClass("bachelors")
sujit.setEmail("iamsujeet29@gmail.com")
sujit.setRollNo(59)

console.log(sujit.getStuName())
console.log(sujit.getEmail())
console.log(sujit.getClass())
console.log(sujit.getStuRollNo())
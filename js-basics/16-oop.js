// class User {
//     #name
//     email
//     address
//     phone

//     constructor(name, email, address, phone) {
//         this.#name = name
//         this.email = email
//         this.address = address
//         this.phone = phone
//     }
//     getName() { return this.#name }
// }

// class Admin extends User {
//     // role = 'ADMIN'
//     constructor(name, email, address, phone, role) {
//         super(name, email, address, phone)
//         this.role = role
//     }
//     getName() { return super.getName() }

// }

// const admin = new Admin("sujit", "abc@xyz.co", "pepsi", 9888, "ADMIN");

// console.log(admin.getName())







// class AuthEmailService extends MailService {

//     sendOTP(){
//         this.emailSend()
//     }
// }


// // dependency injection
// class MailService {
//     constructor() {
//         //connsection over smtp
//     }
//     emailSend() {
//         // email send operation
//     }
// }
// class Database extends MailService{
//     emailSvc;

//     constructor(emailSvcObj){
//         this.emailSvc = emailSvcObj
//     }
//     //
//     connect(){
//         //email SV
//         // this.emailSvc
//     }
// }

// const db = new Database(new MailService())
// db.connect()


// Dependency Injection
class MailService {
    constructor() {
        // connection over smtp
    }
    emailSend() {
        // email send operation
    }
}

class Database {
    emailSvc;

    constructor(emailSvcObj) {
        this.emailSvc = emailSvcObj;
    }

    connect() {
        // use this.emailSvc
    }
}

const db = new Database(new MailService());
db.connect();
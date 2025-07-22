class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    createId(){
        return '123'
    }
}

const chai = new User("Nonu")
// console.log(chai.createId);
chai.logMe();

class Teacher extends User {
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("vishii","i@guddee.com");
iphone.logMe();
console.log(iphone.createId());
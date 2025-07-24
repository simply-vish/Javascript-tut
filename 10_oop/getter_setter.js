class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }
    get password(){
        return `${this._password}bby`;
    }

    set password(value){
        this._password = value.toUpperCase();
    }
}

const nonu = new User("nonu@vishii.ai","ily");
console.log(nonu.email);
console.log(nonu.password);

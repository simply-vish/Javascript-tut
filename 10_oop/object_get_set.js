const User = {
    _email: 'v@k.com',
    _password: "143",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value;
    }
}

const tea = Object.create(User)
console.log(tea.email);

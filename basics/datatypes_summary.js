// Primitive or 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3        //number

const isLoggedIn = false      //boolean
const outsideTemp = null     //object
let userEmail;              //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId);

const bigNumber = 2728192776256271n

// Reference Type or Non Primitive

// Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"];  //object
let myObj = {                    //object
    name: "hitesh",
    age:22,
}

const myFunction = function(){          //function
    console.log("Hello World");
    
}

console.log(typeof heros);
console.log(typeof bigNumber);



// +++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "vishii.com"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(anothername);
console.log(myYoutubename);


let user = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = user

userTwo.email = "vishii@gmail.com"

console.log(user.email);
console.log(userTwo.email);



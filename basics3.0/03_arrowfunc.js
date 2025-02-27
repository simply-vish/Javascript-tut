const user = {
    username: "hitesh",
    price: 999,

    welcomrMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);      
    }
}

// user.welcomrMessage();
// user.username = "sam"
// user.welcomrMessage();

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this);
// }
// chai();

// const chai = function (){
//     let username = "hitesh"
//     console.log(this.username);   
// }

const chai = () => {
    let username = "hitesh"
    console.log(this);    
}

// chai();

// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) => (num1 + num2)  //implicit return

const addTwo = (num1,num2) => ({username: "hitesh"})
console.log(addTwo(4,2));

const myArray = [2,5,3,7,8]

myArray.forEach(() => ())
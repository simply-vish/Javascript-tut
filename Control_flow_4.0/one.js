// if
const isUserLoggedIn = true
const temp = 41

if(2==="2"){
    console.log("executed");
    
}

// if(temp<50){
//     console.log("less than 50"); 
// }
// else{
//     console.log("temp is greater than 50");
// }
// <,>,<=,>=,==,!=,===

// const score = 200

// if(score>100){
//     const power = 'fly'
//     console.log(`User power: ${power}`);   //``=>tactics   
// }
// console.log(`User power: ${power}`);
// var is global, const is not let as well not 

// const balance = 1000
// if(balance > 500) console.log("test"), console.log("test2");

// if(balance < 500) {
//     console.log("less than 500");  
// }else if(balance < 750){
//     console.log("less than 750");  
// }else if(balance < 900){
//     console.log("less than 900");  
// }else{
//     console.log("less than 1200");   
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");  
}

function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");  
}

// sayMyName();

// function addTwoNumbers(num1,num2){  //parameters
//     console.log(num1+num2);
// }

function addTwoNumbers(num1,num2){  //parameters
    return (num1+num2);
}

const result = addTwoNumbers(7,3);   //arguments
//console.log("Result:",result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Vishii"));
// console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1){  //rest operator
    return num1;
}
// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username: "hitesh",
    price: 199
}
 
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user);
handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100]));


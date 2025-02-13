const accountId = 144553
let accountEmail = "v1709660@gmail.com"
var accountPassword = "123456"        //scope problem
accountCity = "Jaipur"                //not preferred
let accountState;                     //undefined

//accountId = 2          // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengalore"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/* 
do not use var
because of issue in block scope and funciotnal scope
*/
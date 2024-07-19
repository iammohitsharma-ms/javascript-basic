const accountId = 1234
let accountEmail = "mohit@.com"
var accountPassword = "345434"
accountState = "Uttar"
let accountCity;

// accountId = 34        //  change in const is not allowed
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountState,accountCity])

/*
prefer not use var
because of issue in block scope and functional scope
*/
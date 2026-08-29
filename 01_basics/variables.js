const accountId = 133234;
let accountEmail = "Rohit@demo.com"
var accountPassword = "12345"
accountCity = "Thane"
let accountState

// accountId = 2 not allowed

accountEmail = "rm@rm.com"
accountPassword = "212234"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var
because issue in block scope and functional scope
*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);
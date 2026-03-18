const account_ID = 123456
let account_Password = "12345678"
var account_Balance = 1000000
account_Balance = 2000000
// const account_ID = 654321 // error: Assignment to constant variable. 
// we will never use var in modern JavaScript, but we can use it to understand the concept of variable hoisting.
console.table([account_ID, account_Password, account_Balance])

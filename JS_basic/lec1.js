const account_ID = 123456
let account_Password = "12345678"
var account_Balance = 1000000
account_Balance = 2000000
// const account_ID = 654321 // error: Assignment to constant variable. 
// we will never use var in modern JavaScript, but we can use it to understand the concept of variable hoisting.
// what is the difference between Var and let then?? In var it unable to understand the block scope this is the major issue with var that's why let is introduce and now a days only let is used
console.table([account_ID, account_Password, account_Balance])

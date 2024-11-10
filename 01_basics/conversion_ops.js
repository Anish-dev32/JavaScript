let score = "33"
console.log(typeof score) //String
let value = Number(score)
console.log(typeof(value)) // Number

let value1 = "233abc"
let value2 = Number(value1)  
console.log(value2)     // NaN(Not in Number) -> case to be checked
console.log(typeof(value2)) // Number

let value3 = null
let value4 = Number(value3)  
console.log(value4)     // 0 -> case to be checked
console.log(typeof(value4)) // Number

//same in case of undefined, value will be converted as NaN
//true -> 1
//String -> NaN

let isLoggedIn = 1;
let booleanVal = Boolean(isLoggedIn)
console.log(booleanVal) // true

isLoggedIn = "";
booleanVal = Boolean(isLoggedIn)
console.log(booleanVal) // false

isLoggedIn = "Anish";
booleanVal = Boolean(isLoggedIn)
console.log(booleanVal) // true

isLoggedIn = 0;
booleanVal = Boolean(isLoggedIn)
console.log(booleanVal) // false
// Different javascript data types
// Let's declare different data types

let firstName = "Asabeneh"; // string
let lastName = "Yetayeh"; // string
let country = "Finland"; // string
let city = "Helsinki"; // string
let age = 250; // number, it is not my real age, do not worry about it
let job; // undefined, because a value was not assigned

console.log(typeof "Asabeneh"); // string
console.log(typeof firstName); // string
console.log(typeof 10); // number
console.log(typeof 3.14); // number
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof NaN); // number
console.log(typeof job); // undefined
console.log(typeof undefined); // undefined
console.log(typeof null); // object

//Typecasting is converting one data type to another data type, parseInt() and parseFloat() are used to convert string to number
//String to integer
let num = "10";
console.log(parseInt(num));

//String to Float
let float = "9.81";
console.log(parseFloat(float));

//Float to Int

let float_2 = 9.81;
console.log(parseInt(float_2));

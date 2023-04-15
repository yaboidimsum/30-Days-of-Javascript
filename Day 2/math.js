//in Javascript we use Math

const PI = Math.PI;
console.log(PI);

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding
//In Math there are many methods such as round, floor,ceil,min,max,random

console.log(Math.round(PI));
console.log(Math.round(9.81));
console.log(Math.floor(PI));
console.log(Math.ceil(PI));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(Math.min(...numbers)); //Kalau mau dipanggil arraynya, pakai ... di awal namanya spread operator
console.log(Math.max(...numbers));

//Random number

const randNum = Math.random(); // random number between 0 to 0.99999;
console.log(randNum);

const num = Math.floor(Math.random() * 11); // random number between 0 to 10
console.log(num);

//Ther are also abs, sqrt, pow, E, log, LN2, LN10, sin, cos, tan and more

console.log(Math.abs(-10));
console.log(Math.sqrt(100));
console.log(Math.sqrt(2));
console.log(Math.pow(3, 2));
console.log(Math.E);

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2));
console.log(Math.log(10));

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2);
console.log(Math.LN10);

//Trigonometry

console.log(Math.sin(45));
console.log(Math.cos(45));
console.log(Math.tan(45));

//Random Button Generator

let RandomNum = Math.random();
let numBtnZeroandTen = RandomNum * 11;

//Number between 0 - 10.99
console.log(numBtnZeroandTen);
//Numbe rbetween 0-10
console.log(Math.floor(numBtnZeroandTen));

//Scope in JavaScript
// Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.
// anything declared without let, var, or const is scoped globally

a = "JavaScript"; // global scope
b = 10; // global scope variable and found in window object

letsLearnScope = () => {
  console.log(a, b);
  if (true) {
    console.log(a, b);
  }
};

letsLearnScope();
console.log(a, b);

//Global scope can be accessed and modified from anywhere in your code.

let a = "JavaScript"; // global scope
let b = 10; // global scope variable and found in window object

const letsLearnScope = () => {
  console.log(a, b);
  if (true) {
    let a = "Python"; // local scope
    let b = 100; // local scope
    console.log(a, b);
  }
  console.log(a, b);
};

letsLearnScope();
console.log(a, b);

//Local scope
//scope.js
let a = "JavaScript"; // is a global scope it will be found anywhere in this file
let b = 10; // is a global scope it will be found anywhere in this file
// Function scope
function letsLearnScope() {
  console.log(a, b); // JavaScript 10, accessible
  let value = false;
  // block scope
  if (true) {
    // we can access from the function and outside the function but
    // variables declared inside the if will not be accessed outside the if block
    let a = "Python";
    let b = 20;
    let c = 30;
    let d = 40;
    value = !value;
    console.log(a, b, c, value); // Python 20 30 true
  }
  // we can not access c because c's scope is only the if block
  console.log(a, b, value); // JavaScript 10 true
}
letsLearnScope();
console.log(a, b); // JavaScript 10, accessible

//ES6 introduced two important new JavaScript keywords: let and const. These two keywords provide Block Scope variables (and constants) in JavaScript.
//scope.js
function letsLearnScope() {
  // you can use let or const, but gravity is constant I prefer to use const
  const gravity = 9.81;
  console.log(gravity);
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {
  const gravity = 9.81;
  console.log(gravity); // 9.81
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
// console.log(i), Uncaught ReferenceError: i is not defined

//Object in JavaScript. properties and methods of an object in JavaScript are variables and functions inside the curly brackets.
//To create an empty object, we can use one of two options:
// const user = new Object(); // "object constructor" syntax
// const user = {};  // "object literal" syntax

//Object literal
const person = {
  firstName: "Awan",
  lastName: "Biru",
  age: 19,
  country: "Indonesia",
  city: "Jakarta",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: false,
};

console.log(person);

//Getting values from an object
//Dot notation, such as person.firstName
//Bracket notation, such as person["firstName"]

console.log(person.firstName); // Awan
console.log(person["lastName"]); // Biru

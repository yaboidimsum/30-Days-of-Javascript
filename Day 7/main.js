//Syntax of a function
function functionName() {
  console.log("Hello World");
}

functionName();

//Function without parameters
function addTwoNumbers() {
  let num1 = 2;
  let num2 = 3;
  let sum = num1 + num2;

  console.log(sum);
}

addTwoNumbers();

function fullName() {
  let first_name = "Asabeneh";
  let last_name = "Yetayeh";
  let full_name = first_name + " " + last_name;

  console.log(full_name);
}

fullName();

//Function returning value

function printFullName() {
  let first_name = "Asabeneh";
  let last_name = "Yetayeh";
  let space = " ";
  let full_name = first_name + space + last_name;
  return full_name;
}

console.log(printFullName());

//Function with parameters
//Syntax
function functionName(parameter1, parameter2, parameter3) {
  // code goes here
}

function sumTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
}

sumTwoNumbers(9, 3);

//Function with many parameters such as array
function sumArrayValues(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

const numbers = [2, 4, 6, 8, 10];
console.log(sumArrayValues(numbers));

//Function with unlimited number of parameters
function sumArrayValuesNum() {
  let sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}

console.log(sumArrayValuesNum(1, 2, 3, 4, 5, 6));

//Unlimited number of parameters using arrow function

const sumArray = (...args) => {
  //...args is an array of arguments passed to the function sumArray as parameters
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
};

console.log(sumArray(1, 2, 3, 4, 5, 6));

//Anonymous function
const anonymousFun = function () {
  console.log(
    "I am an anonymous function and my value is stored in anonymousFun"
  );
};

anonymousFun();

//Expression function
const square_2 = function (n) {
  //If we use arrow function we don't need to use the function keyword and otherwise it is the same
  return n * n;
};

console.log(square_2(2));

//self invoking function
let squaredNum = (function (n) {
  return n * n;
})(10);

console.log(squaredNum);

//arrow function

const changeToUppercase = (arr) => {
  const updateArr = [];
  for (element of arr) {
    updateArr.push(element.toUpperCase());
  }
  return updateArr;
};

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
console.log(changeToUppercase(countries));

//Function with default parameter
//We need to give value to the mass parameter otherwise it will return NaN
function weightOfObject(mass, gravity = 9.81) {
  let weight = mass * gravity + " N"; // the value has to be changed to string first
  return weight;
}

console.log("Weight of an object in Newton: ", weightOfObject(100)); // 9.81 gravity at the surface of Earth
console.log("Weight of an object in Newton: ", weightOfObject(100, 1.62)); // gravity at surface of Moon
//Default parameters can be overwritten by passing different values

//try with arrow function

const greetings = (name = "Nana") => {
  let message = `Hello ${name} welcome to 30 Days Of JavaScript`;
  return message;
};

console.log(greetings());

const age_with_curly = (birthYear, currentYear = 2023) => {
  let age_now = currentYear - birthYear;
  return age_now;
};

console.log(age_with_curly(1991));

const age_without_curly = (birthYear, currentYear = 2023) =>
  currentYear - birthYear;

console.log(age_without_curly(1991));

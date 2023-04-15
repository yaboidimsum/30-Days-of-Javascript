/*Primitive Data Types means it cannot be modified*/

let number = 1;
let string = "Awan";
let booleans = true;
let nulls = null;
let undefined;
let symbol = Symbol("😭");

// console.log(typeof symbol);

/*Non-Primitive Data Types means it can be modifiedd*/
//-Object - Array;

//It cannot be modified
let word = "Javascript";
word[0] = "P";

let numOne = 3;
let numTwo = 6 / 2;

console.log(numOne == numTwo);

let js = "Javascript";
let py = "Python";

console.log(js == py);

let lightOn = true;
let lightOff = false;

console.log(lightOn == lightOff);

//Now, non primitive data types, object and array

//let nums = [1, 2, 3, 4, 5];
//nums[0] = 0;

//console.log(nums); //0,2,3,4,5

//Non-primitive data types cannot be compared by value even if two data types have same properties and values, they aren't strictly equal

let nums = [1, 2, 3, 4, 5];
let numbers = [1, 2, 3, 4, 5];

console.log(nums == numbers);

//Non-primitive values are referred to as reference types, because they are being compared by reference instead of value. Two objects are only strictly equal if they refer to the same underlying object.

let userOne = {
  name: "Awan",
  address: "Jakarta",
  age: "20",
  country: "Indonesia",
};

let userTwo = userOne;

console.log(userOne == userTwo);

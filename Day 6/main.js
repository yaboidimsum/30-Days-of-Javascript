//For loop is used to iterate through the array
//for loop structure
//for (initialization; condition; increment / decrement) {
//code to be executed
//}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("Loop is done");

for (let i = 5; i > 0; i--) {
  console.log(i);
}

console.log("Loop is done");

for (let i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i ** 2}`);
}

console.log("Loop is done");

//Adding elements to another array

const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);
console.log("Loop is done");

const numbers_1 = [1, 2, 3, 4, 5];
const new_numbers_1 = [];

for (i = 0; i < numbers_1.length; i++) {
  new_numbers_1.push(numbers_1[i] ** 2);
}

console.log(new_numbers_1);
console.log("Loop is done");

const countries = ["India", "USA", "Japan", "Russia", "China"];
const caps_countries = [];

for (i = 0; i < countries.length; i++) {
  caps_countries.push(countries[i].toUpperCase());
}

console.log(caps_countries);
console.log("Loop is done");

//While loop in JavaScript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

//do while loop in JavaScript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

//for of loop in JavaScript is very useful when we want to iterate through an array. It acts like python for loop

for (const element of arr) {
  // code goes here
}

const countries = ["India", "USA", "Japan", "Russia", "China"];
for (country of countries) {
  console.log(country);
}

const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (num of numbers) {
  sum += num;
}
console.log(sum);

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

for (tech of webTechs) {
  console.log(tech.toUpperCase());
}

//for of loop in JavaScript is very useful when we want to iterate through an array. It acts like python for loop

for (tech of webTechs) {
  console.log(tech[0]);
}
//get the first letter of each element in the array

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const newArr = [];

for (country of countries) {
  newArr.push(country.toUpperCase());
}

console.log(newArr);

//BREAK AND CONTINUE
//Break statement in JavaScript. It is used to terminate the loop

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

// 0 1 2

//Continue statement in JavaScript. It is used to skip the current iteration of the loop
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

// 0 1 2 4 5

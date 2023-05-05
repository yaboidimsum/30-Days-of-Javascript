//Higher order functions
//Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

// Callback
//A callback is a function which can be passed as parameter to other function

const callback = (n) => {
  return n ** 2;
};

function cube(callback, n) {
  return callback(n) * n;
}

console.log(cube(callback, 3));

//Returning function
//Higher order functions return function as a value

const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};

console.log(higherOrder(2)(3)(10));

//Example

// const numbers = [1, 2, 3, 4, 5];
// const sumArray = (arr) => {
//   let sum = 0;
//   const callback = function (element) {
//     sum += element;
//   };
//   arr.forEach(callback);
//   return sum;
// };
// console.log(sumArray(numbers));

//Can be written in a shorter way

const numbers = [1, 2, 3, 4];

const sumArray = (arr) => {
  let sum = 0;
  arr.forEach(function (element) {
    sum += element;
  });
  return sum;
};

console.log(sumArray(numbers));

//Setting Time
//JavaScript has setTimeout() and setInterval() methods to do something after a time or repeat it after a time.

//Set Interval method takes a callback and time. The callback runs after the given time and repeats itself after given time.
//Syntax

// const func_name = () => {
//   // code goes here
// };

// setInterval(func_name, time);

//Example
// const hello_print = () => {
//   console.log("Hello, World!");
// };

setInterval(hello_print, 2000); // prints hello world in every 2 seconds

//setTimeout() method takes a callback and time. The callback runs after the given time.

//Syntax

// const func_name = () => {
//   // code goes here
// };

// setTimeout(func_name, time);

//Example
const hello_js = () => {
  console.log("Hello, JavaScript!");
};

setTimeout(hello_js, 2000); // prints hello world in 2 seconds

//Functional Programming
//Functional programming is a programming paradigm in which we try to bind everything in pure mathematical functions style. It is a declarative type of programming style. Its main focus is on 'what to solve' in contrast to an imperative style where the main focus is 'how to solve'.
//Instead of using loops, functional programming uses recursive functions. It also uses high order functions extensively.
//Instead of writing regular loop, latest version of JavaScript introduced lots of built in methods which can help us to solve complicated problems. All builtin methods take callback function. In this section, we will see forEach, map, filter, reduce, find, every, some, and sort.

//forEach
//forEach method executes a provided function once for each element in an array in ascending order. It is not executed for array elements without values.
//forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional.

let arr = [1, 2, 3, 4, 5];

arr.forEach((element, index, arr) => {
  console.log(element, index, arr);
});

arr.forEach((element, index, arr) => console.log(element, index, arr));

//Example
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num));
console.log(sum);

//Example
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => (sum += num));
console.log(sum);

//Example
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
countries.forEach((country) => console.log(country.toUpperCase()));

//Map: iterate an array elements and modify the array elements It takes a callback function with elements, index , array parameter and return a new array.
// so map makes an array that is modified

const nato = ["USA", "Great Britain", "French", "German"];
const new_nato = nato.map((country) => country.toUpperCase());
const sliced_new_nato = nato.map((country) =>
  country.toUpperCase().slice(0, 3)
);

console.log(sliced_new_nato);

//Filter: Filter out items which full fill filtering conditions and return a new array.

const countries_test = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const countriesContainingLand = countries_test.filter((country) =>
  country.includes("land")
);

console.log(countriesContainingLand);

const countriesLengthFive = countries_test.filter(
  (country) => country.length === 5
);

console.log(countriesLengthFive);

const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const scoresGreaterEighty = scores.filter((score) => score.score > 80);
console.log(scoresGreaterEighty);

//Reduce : Reduce takes a callback function. The call back function takes accumulator and current value as a parameter and returns a single value
// arr.reduce((acc, cur) => {
//   // some operations goes here before returning a value
//   return;
// }, initialValue);

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum);

//every: Check if all the elements are similar in one aspect. It returns boolean
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const areAllStr = names.every((name) => typeof name === "string");

console.log(areAllStr);

//find: Return the first element which satisfies the condition

const ages = [24, 22, 25, 32, 35, 18];
const belowTwenty = ages.find((age) => age < 20);

console.log(belowTwenty);

const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const score = scores.find((user) => user.score > 80);
console.log(score);

//FindIndex: Return the position of the first element which satisfies the condition

const ages = [24, 22, 25, 32, 35, 18];
const below20 = ages.findIndex((age) => age < 20);

console.log(below20);

//Some : Check if some of the elements are similar in one aspect. It returns boolean

const names = ["Asabeneh", "Mathias", "Elias", "Brook", "KyleCranes"];
const bools = [true, true, false, true];

const areSomeNames = names.some((name) => name.length > 9);
const areSomeBools = bools.some((b) => b === false);

console.log(areSomeNames);
console.log(areSomeBools);

//Sort: To sort array elements. By default, the sort() method sorts values as strings. If it is numbers, it sorts numbers. If it is alphabets, it sorts alphabets. If it is mixed, it sorts numbers first then alphabets.

const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
console.log(products.sort());

const numbers = [9.81, 3.14, 100, 37];
numbers.sort((a, b) => a - b); //The swap happen when a-b is negative, so its ascending order. The descending order is b-a

console.log(numbers);

//Sorting objects array

const users = [
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyo", age: 100 },
  { name: "Elias", age: 22 },
];

console.log(users.sort());
users.sort((a, b) => {
  if (a.age > b.age) return 1;
  if (a.age < b.age) return -1;
});
console.log(users);

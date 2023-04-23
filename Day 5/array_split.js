//We can split any string use split() function

let js = "JavaScript";
const split_js = js.split("");

console.log(split_js);

let language = "C++, C, Python, Golang, Java, Typescript";
const split_language = language.split(",");

console.log(split_language);

let companiesString = "Google, IBM, Amazon";
const companies = companiesString.split(",");

let string = "Hello my name is Dimas, i work in Amazon";
const word = string.split(" ");

console.log(word);

//Accessing array items using Index

const fruits = ["Banana", "Orange", "Mango", "Lemon"];
let firstFruit = fruits[0];
let secondFruit = fruits[1];
let thirdFruit = fruits[2];
let lastFruit = fruits[fruits.length - 1];

console.log(fruits);
console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);
console.log(lastFruit);

//Modifying Array Elemet -> Array is Mutable and modified, the content can be changed

const number = [1, 2, 3, 4, 5];
number.push(6);
number[0] = -1;
number[3] = -3;

console.log(number);

const countries = [
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

countries[0] = "Afghanistan";
let lastIndex = countries.length - 1;
countries[lastIndex] = "South Korea";

console.log(countries);

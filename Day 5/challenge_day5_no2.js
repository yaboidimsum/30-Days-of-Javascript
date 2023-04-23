// Exercise: Level 2
// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

const countries = require("./countries.js");
const webTechs = require("./web_techs.js");

//Print countries array
console.log(countries);
console.log(webTechs);

// 2. First remove all the punctuations and change the string to array and count the number of words in the array

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let words = text.split(/[ ,.]+/);
//console.log(words);

// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

// 13
// 3. In the following shopping cart add, remove, edit items

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// add 'Meat' in the beginning of your shopping cart if it has not been already added

shoppingCart.unshift("Meat");
console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added

shoppingCart.push("Sugar");
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey

shoppingCart.splice(4, 1);
console.log(shoppingCart);

// modify Tea to 'Green Tea'

shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log(shoppingCart);

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

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
let country = "Ethiopia";

countries.includes(country)
  ? console.log(country.toUpperCase())
  : countries.push(country);

console.log(countries);

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let tech = "Sass";

if (webTechs.includes(tech)) {
  console.log(`${tech} is a CSS preprocess`);
} else {
  webTechs.push(tech);
  console.log(webTechs);
}
// 6. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

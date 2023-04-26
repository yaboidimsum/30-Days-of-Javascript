// 1. Develop a small script which generate any number of characters random id:

let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
let id = "";
let random = Math.random() * 10;

for (i = 0; i <= random; i++) {
  id += chars.charAt(Math.floor(Math.random() * chars.length));
}

console.log(id);
//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba

// 2. Write a script which generates a random hexadecimal number.

let chars = "0123456789abcdef";
let hexa = "#";

for (i = 0; i < 6; i++) {
  hexa += chars.charAt(Math.floor(Math.random() * chars.length));
}
console.log(hexa);

// '#ee33df'

// 3. Write a script which generates a random rgb color number.

let random_text = "rgb(";
let value = Math.floor(Math.random() * 255);

for (i = 0; i < 3; i++) {
  random_text += value + ",";
  value = Math.floor(Math.random() * 255);
}

random_text = random_text.slice(0, -1);
random_text += ")";
console.log(random_text);

// rgb(240,180,80)

// 4. Using the above countries array, create the following new array.

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

let countries_uppercase = [];

for (country of countries) {
  countries_uppercase.push(country.toUpperCase());
}

console.log(countries_uppercase);

// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// 5. Using the above countries array, create an array for countries length'.

// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

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

let countries_length = [];

for (country of countries) {
  countries_length.push(country.length);
}

console.log(countries_length);

// 6. Use the countries array to create the following array of arrays:

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

let countries_data = [];

for (i = 0; i < countries.length; i++) {
  countries_data.push([
    countries[i],
    countries[i].slice(0, 3).toUpperCase(),
    countries[i].length,
  ]);
}

console.log(countries_data);

//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]

// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

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
  "Iceland",
];

let countries_land = [];

for (i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) {
    countries_land.push(countries[i]);
  }
}

if (countries_land.length === 0) {
  console.log("No country with land");
} else {
  console.log(countries_land);
}
// ['Finland','Ireland', 'Iceland']

// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

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
  "Iceland",
];

let countries_ia = [];

for (i = 0; i < countries.length; i++) {
  if (countries[i].includes("ia")) {
    countries_ia.push(countries[i]);
  }
}

if (countries_ia.length === 0) {
  console.log("No country with ia");
} else {
  console.log(countries_ia);
}
// ['Albania', 'Bolivia','Ethiopia']

// 9. Using the above countries array, find the country containing the biggest number of characters.

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
  "Iceland",
];

let maxIndex = 0;

for (i = 0; i < countries.length; i++) {
  if (countries[i].length > countries[maxIndex].length) {
    maxIndex = i;
  }
}

console.log(countries[maxIndex]);
// Ethiopia

// 10. Using the above countries array, find the country containing only 5 characters.

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
  "Iceland",
];

let country_5_char = [];

for (country of countries) {
  if (country.length === 5) country_5_char.push(country);
}

console.log(country_5_char);

// ['Japan', 'Kenya']

// 11. Find the longest word in the webTechs array

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let maxIndex = 0;

for (tech of webTechs) {
  if (tech.length > webTechs[maxIndex].length) {
    maxIndex = webTechs.indexOf(tech);
  }
}

console.log(webTechs[maxIndex]);

// 12. Use the webTechs array to create the following array of arrays:

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let webTechs_array = [];

for (i = 0; i < webTechs.length; i++) {
  webTechs_array.push(`[${webTechs[i]}, ${webTechs[i].length}]`);
}

console.log(webTechs_array);
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

const webTechs = [
  "HTML",
  "CSS",
  "Express",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let mernStack = [];

for (tech of webTechs) {
  if (
    tech === "MongoDB" ||
    tech === "Express" ||
    tech === "React" ||
    tech === "Node"
  ) {
    mernStack.push(tech);
  }
}

console.log(mernStack);
// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

const webTechs = [
  "HTML",
  "CSS",
  "Express",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

for (tech of webTechs) {
  console.log(tech);
}

// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

let fruits = ["banana", "orange", "mango", "lemon"];
let fruits_reverse = [];

for (i = 0; i < fruits.length; i++) {
  fruits_reverse.push(fruits[fruits.length - 1 - i]);
}

console.log(fruits_reverse);

// 16.  Print all the elements of array as shown below.

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
for (tech_array of fullStack) {
  for (tech of tech_array) {
    console.log(tech.toUpperCase());
  }
}
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB

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

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// 1. Declare an empty array;

let array_empty = [];

// 2. Declare an array with more than 5 number of elements

let array_1 = [1, 2, 3, 4, 5, 6];

// 3. Find the length of your array

console.log(array_1.length);

// 4. Get the first item, the middle item and the last item of the array

let array = [1, 2, 3, 4, 5, 6];
let first_item = array[0];
let middle_item = array[array.length / 2];
let last_item = array[array.length - 1];

console.log(first_item);
console.log(middle_item);
console.log(last_item);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

let mixedDataTypes = [
  "String",
  2,
  true,
  null,
  undefined,
  { genre: "action", year: 2019 },
  [1, 2, 3, 4, 5],
];

console.log(mixedDataTypes.length);
console.log(mixedDataTypes);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7. Print the array using console.log()

console.log(itCompanies);
console.log(...itCompanies);
console.log(`${itCompanies}`);

// 8. Print the number of companies in the array

console.log(itCompanies.length);

// 9. Print the first company, middle and last company

let first_company = itCompanies[0];
let middle_company = itCompanies[Math.floor(itCompanies.length / 2)];
let last_company = itCompanies[itCompanies.length - 1];

console.log(first_company);
console.log(middle_company);
console.log(last_company);

// 10. Print out each company

console.log(itCompanies);
console.log(...itCompanies);
console.log(`${itCompanies}`);

// 11. Change each company name to uppercase one by one and print them out

console.log(itCompanies);

console.log(itCompanies.toString().toUpperCase().split(","));
console.log(...itCompanies.toString().toUpperCase().split(","));
console.log(`${itCompanies.toString().toUpperCase().split(",")}`);

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

let sentence = `${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`;

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

x = "Google";
let guess = itCompanies.includes(x);

itCompanies === -1
  ? console.log("Company is not found")
  : console.log(`${x} is found `);

// 14. Filter out companies which have more than one 'o' without the filter method

// 15. Sort the array using sort() method

console.log(itCompanies.sort());

// 16. Reverse the array using reverse() method

console.log(itCompanies.reverse());

// 17. Slice out the first 3 companies from the array

console.log(itCompanies.slice(0, 3));

// 18. Slice out the last 3 companies from the array

console.log(itCompanies.slice(-3));

// 19. Slice out the middle IT company or companies from the array

console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), 4));

// 20. Remove the first IT company from the array
//itCompanies.splice(0, 1);
console.log(itCompanies);
// 21. Remove the middle IT company or companies from the array
//itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
console.log(itCompanies);
// 22. Remove the last IT company from the array
//itCompanies.splice(itCompanies.length - 1, 1);
console.log(itCompanies);
// 23. Remove all IT companies
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);

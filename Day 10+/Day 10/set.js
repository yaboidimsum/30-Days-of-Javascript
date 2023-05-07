//Set in JavaScript. Set is a collection of unique values. Set can be iterated, and its values can be accessed. A value in the Set may only occur once; it is unique in the Set's collection.

//Creating an empty Set
const companies = new Set();
console.log(companies);

//Creating set from an array
const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
];

const setOfLanguages = new Set(languages);
console.log(setOfLanguages);

//adding an element to a set
const companies2 = new Set();

companies2.add("Google");
companies2.add("Facebook");
companies2.add("Amazon");
companies2.add("Oracle");
companies2.add("Microsoft");

console.log(companies2);

//Size of a Set

console.log(companies2.size);

//Loop to add each company from the array to a Set

const language = ["English", "Finnish", "English", "French", "Spanish"];
const setOfLanguage = new Set(language);

for (lang of language) {
  setOfLanguage.add(lang);
}

console.log(setOfLanguage);

//Deleting an element from a Set
setOfLanguage.delete("English");
console.log(setOfLanguage);

//Checking an element in the Set
console.log(setOfLanguage.has("French"));
console.log(setOfLanguage.has("English"));

//Clearing the Set
setOfLanguage.clear();
console.log(setOfLanguage);

const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];
const langSet = new Set(languages);
console.log(langSet); // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size); // 4

const counts = [];
const count = {};

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l);
  console.log(filteredLang); // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length });
}
console.log(counts);

//Unique item in an array
const numbers = [5, 3, 2, 5, 5, 7, 3, 3];
const setOfnumbers = new Set(numbers);

console.log(setOfnumbers);

//Union set and using spread operator and array
let a = [1, 2, 3, 4];
let b = [3, 4, 5, 6];

//to union it, we need to create a new set called unionSet and add all the elements from a and b to it. use ... spread operator to add all the elements from a and b to the unionSet.
let unionSet = [...a, ...b];

//declare them as a set, its better to filter out the duplicates
unionSet = new Set(unionSet);

console.log(unionSet);

//Intersection of sets
let a = [1, 2, 3, 4, 4, 5, 6, 7];
let b = [3, 4, 5, 2, 1, 6];

let A = new Set(a);
let B = new Set(b);

let intersection = a.filter((num) => B.has(num));
console.log(intersection);

//Difference of sets
let a = [1, 2, 3, 4, 4, 5, 6, 7];
let b = [3, 4, 5, 2, 1, 6];

let A = new Set(a);
let B = new Set(b);

let difference = a.filter((num) => !B.has(num));
console.log(difference);

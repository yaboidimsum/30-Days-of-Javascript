// 1. Copy countries array(Avoid mutation)

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

// 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

countries[0] = "America";
countries[1] = "Belgium";
countries.sort();
console.log(countries);

// 3. Sort the webTechs array and mernStack array

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

webTechs.sort();
mernStack.sort();
console.log(webTechs);
console.log(mernStack);

// 4. Extract all the countries contain the word 'land' from the countries array and print it as array

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

let countriesWithLand = [];

for (country of countries) {
  if (country.includes("land")) countriesWithLand.push(country);
}

console.log(countriesWithLand);

// 5. Find the country containing the hightest number of characters in the countries array

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

let maxIndex = 0;

for (i = 0; i < countries.length; i++) {
  if (countries[i].length > countries[maxIndex].length) {
    maxIndex = i;
  }
}
console.log(countries[maxIndex]);

// 6. Extract all the countries contain the word 'land' from the countries array and print it as array (number 4)

// 7. Extract all the countries containing only four characters from the countries array and print it as array

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Great Britain",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

let countriesWith4Char = [];

for (country of countries) {
  countriesWith4Char.push(country.slice(0, 4));
}

console.log(countriesWith4Char);

// 8. Extract all the countries containing two or more words from the countries array and print it as array

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Great Britain",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

let countriesWith2Words = [];

for (country of countries) {
  if (country.includes(" ")) {
    countriesWith2Words.push(country);
  }
}

if (countriesWith2Words.length === 0) {
  console.log("No countries with 2 words found");
} else {
  console.log(countriesWith2Words);
}

// 9. Reverse the countries array and capitalize each country and stored it as an array

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Great Britain",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

let countries_reversed = [];

for (i = 0; i < countries.length; i++) {
  countries[i] = countries[i].toUpperCase();
  countries_reversed.unshift(countries[i]);
}

console.log(countries_reversed);

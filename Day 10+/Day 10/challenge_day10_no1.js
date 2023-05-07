const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];

// 1. create an empty set

const set = new Set();

// 2. Create a set containing 0 to 10 using loop

for (i = 0; i <= 10; i++) {
  set.add(i);
}

console.log(set);

// 3. Remove an element from a set

set.delete(5);
console.log(set);

// 4. Clear a set

set.clear();
console.log(set);
// 5. Create a set of 5 string elements from array

const array = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const string_set = new Set(array);

console.log(string_set);

// 6. Create a map of countries and number of characters of a country

const country_map = new Map();

for (const country of countries) {
  country_map.set(country, country.length);
}

console.log(country_map);

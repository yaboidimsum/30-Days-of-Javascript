//Map in JavaScript
//Map is a collection of elements where each element is stored as a Key, value pair. Map holds the data in the form of pairs and does not contain any duplicate elements.

//Creating an empty Map

// const map = new Map();
// console.log(map);

const countries_cities = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
];

const countries_map = new Map(countries_cities);
console.log(countries_map);

//Adding values to the Map
//Use set() method to add values to the Map

countries_map.set("Norway", "Oslo");
countries_map.set("Germany", "Berlin");
countries_map.set("France", "Paris");

//check the size
console.log(countries_map.size);
console.log(countries_map);

//Getting a value from the Map
//Use get() method to get a value from the Map

console.log(countries_map.get("Finland"));
console.log(countries_map.get("Sweden"));

//Checking key in the Map
//Use has() method to check if a key exists in the Map

console.log(countries_map.has("Finland"));

//Getting all values from the Map using loop

for (const country of countries_map) {
  console.log(country);
}

for (const [country, city] of countries_map) {
  console.log(country, city);
}

//Deleting a key from the Map
//Use delete() method to delete a key from the Map

countries_map.delete("Finland");
console.log(countries_map);

//Clearing the Map
//Use clear() method to delete all the keys from the Map

countries_map.clear();
console.log(countries_map);

const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 1. Explain the difference between forEach, map, filter, and reduce.

// forEach: iterates the array and does something with each element
// map: iterates the array and return it as an array
// filter: iterates through the array and filter depends on the condition
// reduce: iterates through the array and returns a single value

// 2. Define a callback function before you use it in forEach, map, filter or reduce.
let num = 3;

const back = (num) => {
  return num * 2;
};

function callback(back, num) {
  return back(num) * num * 2;
}

console.log(callback(back, num));
// 3. Use forEach to console.log each country in the countries array.

countries.forEach((country) => console.log(country));

// 4. Use forEach to console.log each name in the names array.

names.forEach((name) => console.log(name));

// 5. Use forEach to console.log each number in the numbers array.

numbers.forEach((number) => console.log(number));

// 6. Use map to create a new array by changing each country to uppercase in the countries array.

const countries_uppercase = countries.map((country) => country.toUpperCase());

console.log(countries_uppercase);

// 7. Use map to create an array of countries length from countries array.

const countries_length = countries.map((country) => country.length);

console.log(countries_length);

// 8. Use map to create a new array by changing each number to square in the numbers array

const squared_numbers = numbers.map((number) => number ** 2);

console.log(squared_numbers);

// 9. Use map to change to each name to uppercase in the names array

const uppercase_names = names.map((name) => name.toUpperCase());

console.log(uppercase_names);

// 10. Use map to map the products array to its corresponding prices.

const products_prices = products.map((product) => product.price);

console.log(products_prices);

// 11. Use filter to filter out countries containing land.

console.log(countries.filter((country) => country.includes("land")));

// 12. Use filter to filter out countries having six character.

console.log(countries.filter((country) => country.length !== 6));

// 13. Use filter to filter out countries containing six letters and more in the country array.

console.log(countries.filter((country) => country.length >= 6));

// 14. Use filter to filter out country start with 'E';

console.log(countries.filter((country) => country[0] === "E"));

// 15. Use filter to filter out only prices with values.

console.log(products.filter((product) => typeof product.price !== "string"));

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

const array = ["hello", 1, 2, "world", 3, 4, "hello", "world"];

const getStringLists = (array) => {
  return array.filter((element) => typeof element === "string");
};

console.log(getStringLists(array));

// 17. Use reduce to sum all the numbers in the numbers array.

console.log(numbers.reduce((acc, cur) => acc + cur, 0));

// 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

console.log(
  countries.reduce((acc, cur) => {
    if (cur === countries[countries.length - 1]) {
      return acc + "and " + cur + " are north European countries";
    } else {
      return acc + cur + ", ";
    }
  }, "")
);

// 19. Explain the difference between some and every

//some: returns true if at least one element in the array satisfies the condition
//every: returns true if all elements in the array satisfy the condition

// 20. Use some to check if some names' length greater than seven in names array

console.log(names.some((name) => name.length > 7));

// 21. Use every to check if all the countries contain the word land

console.log(countries.every((country) => country.includes("land")));

// 22. Explain the difference between find and findIndex.

//find returns the first element that satisfies the condition
//findIndex returns the index of the first element that satisfies the condition

// 23. Use find to find the first country containing only six letters in the countries array

console.log(countries.find((country) => country.length === 6));

// 24. Use findIndex to find the position of the first country containing only six letters in the countries array

console.log(countries.findIndex((country) => country.length === 6));

// 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

console.log(countries.findIndex((country) => country === "Norway"));

// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

console.log(countries.findIndex((country) => country === "Russia"));

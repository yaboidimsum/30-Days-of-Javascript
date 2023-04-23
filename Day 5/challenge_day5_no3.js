// 1. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sort the array and find the min and max age

//console.log(ages.sort());
// Find the median age(one middle item or two middle items divided by two)
console.log(ages.length);

if (ages.length % 2 === 0) {
  console.log((ages[ages.length / 2] + ages[ages.length / 2 - 1]) / 2);
} else {
  console.log(ages[ages.length / 2]);
}
// Find the average age(all items divided by number of items)
// I can use for loop but soemhow im not there yet
let total =
  ages[0] +
  ages[1] +
  ages[2] +
  ages[3] +
  ages[4] +
  ages[5] +
  ages[6] +
  ages[7] +
  ages[8] +
  ages[9];

let avg = total / ages.length;
console.log(avg + " is the average age");
// Find the range of the ages(max minus min)

let max_Age = Math.max(...ages);
let min_Age = Math.min(...ages);

let range = max_Age - min_Age;
console.log(max_Age);
console.log(min_Age);
console.log(range);
// Compare the value of (min - average) and (max - average), use abs() method

let min_avg = Math.abs(min_Age - avg);
let max_avg = Math.abs(max_Age - avg);

console.log(min_avg);
console.log(max_avg);

if (min_avg === max_avg) {
  console.log("min and max are the same");
} else {
  console.log("min and max are not the same");
}

//1.Slice the first ten countries from the countries array

let countries = [
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

console.log(countries.slice(0, 10));

// 2. Find the middle country(ies) in the countries array

console.log(countries[Math.floor(countries.length / 2)]);
console.log(countries[Math.ceil(countries.length / 2)]);

// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

let first_half = countries.slice(0, countries.length / 2);
let second_half = countries.slice(countries.length / 2, countries.length);

console.log(first_half);
console.log(second_half);

if (first_half.length === second_half.length) {
  console.log("Both arrays are equal");
} else {
  console.log("Both arrays are not equal");
  first_half.push(countries[Math.floor(countries.length / 2)]);
  console.log(first_half);
  console.log(second_half);
}

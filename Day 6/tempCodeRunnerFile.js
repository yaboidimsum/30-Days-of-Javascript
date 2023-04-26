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
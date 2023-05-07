import countries from "./countries.js";

// 1. How many languages are there in the countries object file.

const languages = new Set();

for (const country of countries) {
  for (const language of country.languages) {
    languages.add(language);
  }
}

console.log(languages.size);

// 2. *** Use the countries data to find the 10 most spoken languages:

const languages2 = [];

for (const country of countries) {
  for (const language of country.languages) {
    languages2.push(language);
  }
}

const language_set = new Set(languages2);

const language_array = [];

for (const language of language_set) {
  const filtered_languages = languages2.filter((lang) => lang === language);
  language_array.push({ language: language, count: filtered_languages.length });
}

language_array.sort((a, b) => b.count - a.count);

//Top 10 most spoken languages
console.log(language_array.slice(0, 10));

//Top 10 least spoken languages
console.log(language_array.slice(-10));

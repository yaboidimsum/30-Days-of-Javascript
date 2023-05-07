const languages = new Set();

for (const country of countries) {
  for (const language of country.languages) {
    languages.add(language);
  }
}

console.log(languages.size);
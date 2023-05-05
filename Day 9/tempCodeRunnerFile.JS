function mostSpokenLanguages(countries, n) {
  let languages = [];
  countries.forEach((country) => {
    languages.push(...country.languages);
  });
  let uniqueLanguages = new Set(languages);
  let uniqueLanguagesArray = [...uniqueLanguages];
  let languagesCount = [];
  uniqueLanguagesArray.forEach((language) => {
    let count = 0;
    countries.forEach((country) => {
      if (country.languages.includes(language)) {
        count++;
      }
    });

    languagesCount.push({ language: language, count: count });
  });
  languagesCount.sort((a, b) => b.count - a.count);
  return languagesCount.slice(0, n);
}

console.log(mostSpokenLanguages(countries, 10));
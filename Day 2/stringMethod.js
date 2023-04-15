// 1. Length: The string length method returns the number of characters in a string included empty space.

let js = "Javascript";
//console.log(js.length);
let firstname = "Awan";
//console.log(firstname.length);

// 2. Accessing characters in a string: We can access each character in a string using its index. In programming, counting starts from 0. The first index of the string is zero, and the last index is the length of the string minus one.

let lastIndex = firstname.length - 1;
let js_index1 = js[0];
let js_index2 = js[1];
let js_index3 = js[2];
let js_index4 = js[3];

console.log(firstname[lastIndex]);
console.log(js_index1);

//3. toUpperCase(): this method changes the string to uppercase letters.

let word = "I always come back";

console.log(word.toUpperCase());

// 4. toLowerCase(): this method changes the string to lowercase letters.

let word_2 = "I ALWAYS COME BACK";

console.log(word_2.toLowerCase());

// 5. substr(): It takes two arguments, the starting index and number of characters to slice.

let string = "Javascript";
console.log(string.substr(4, 6));

// 6. substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.

let string_2 = "Javascript";
console.log(string_2.substring(0, 4)); //Java
console.log(string_2.substring(4, 10)); //script
console.log(string_2.substring(4)); //script

// 7. split(): The split method splits a string at a specified place. It takes one argument, the separator, and returns an array of strings.

let string_3 = "30 Days of Javascript";
console.log(string_3.split()); // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string_3.split(" ")); // Changes to an array -> ["30", "Days", "Of", "JavaScript"]

let nickName = "Awan";
console.log(nickName.split("")); // Changes to an array -> ["A", "w", "a", "n"]

let countries = "Finland, Sweden, Norway, Denmark, and Iceland";
console.log(countries.split(",")); // Changes to an array -> ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]"));

// 8. trim(): Removes trailing space in the beginning or the end of a string.

let string_4 = "   30 Days Of JavaScript   ";
console.log(string_4.trim());

// 9. includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.

let string_5 = "30 Days Of JavaScript";

console.log(string.includes("Days")); // true
console.log(string.includes("days")); // false - it is case sensitive!
console.log(string.includes("Script")); // true
console.log(string.includes("script")); // false
console.log(string.includes("java")); // false
console.log(string.includes("Java")); // true

// 10. replace(): takes as a parameter the old substring and a new substring. It replaces the old substring with the new substring. string.replace(oldsubstring, newsubstring)

console.log(string_5.replace("JavaScript", "C++"));

// 11. charAt(): It takes an index as an argument and returns the character at that index. string.charAt(index)
console.log(string_5.charAt(0)); // 3

console.log(string_5.charAt(string_5.length - 1));

// 12. charCodeAt(): It takes an index as an argument and returns the Unicode of the character at that index. string.charCodeAt(index)

console.log(string_5.charCodeAt(0)); // 51

console.log(string_5.charCodeAt(string_5.length - 1)); // 116

// 13. indexOf(): It takes a substring as an argument and returns the index of the first occurrence of the substring. string.indexOf(substring). If the substring doesn't exist, it returns -1.
console.log(string_5.indexOf("D"));
console.log(string_5.indexOf("a"));
console.log(string_5.indexOf("script"));
console.log(string_5.indexOf("Script"));

// 14. lastIndexOf(): It takes a substring as an argument and returns the index of the last occurrence of the substring. string.lastIndexOf(substring). If the substring doesn't exist, it returns -1.

let string_6 =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(string_6.lastIndexOf("love")); // 67
console.log(string_6.lastIndexOf("you")); // 63
console.log(string_6.lastIndexOf("JavaScript")); // 38

// 15. concat(): it takes many substrings and joins them. string.concat(substring1, substring2, substring3, ...)

let string_7 = "30 ";
console.log(string_7.concat("Days ", "of ", "JavaScript"));

// 16. startsWith(): It takes a substring as an argument and checks if the string starts with that substring. string.startsWith(substring). It returns a boolean.

let string_8 = "Love is the best to in this world";

console.log(string_8.startsWith("Love")); // true
console.log(string_8.startsWith("love")); // false
console.log(string_8.startsWith("world")); // false

let country = "Finland";

console.log(country.startsWith("Fin")); // true
console.log(country.startsWith("fin")); // false
console.log(country.startsWith("land")); //  false

// 17. endsWith(): it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).

console.log(country.endsWith("land")); // true
console.log(string_8.endsWith("orld")); // true

// 18. search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.

console.group(string_8.search("this")); //23

// 19. match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.

let string_9 =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
let patternOne = /love/; // with out any flag
let patternTwo = /love/gi; // g-means to search in the whole text, i - case insensitive

console.log(string_9.match("love"));

let pattern = /love/gi;
console.log(string_9.match(pattern));

// 20. repeat(): it takes a number as an argument and it repeats the string that many times. string.repeat(number)
console.log(string_9.repeat(10));

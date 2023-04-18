// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Awan";
let lastName = "Setyawan";
let country = "Indonesia";
let city = "Jakarta";
let age = 22;
let isMarried = false;
let year = 2023;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);
// 2. Check if type of '10' is equal to 10

console.log(typeof "10" == typeof 10);

// 3. Check if parseInt('9.8') is equal to 10

console.log(parseInt(9.8) == 10);

// 4. Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.

let number = 1;
let string = "strong";
let boolean = true;
// Write three JavaScript statement which provide falsy value.

let null_val = null;
let NaN;
let undefined_val;

console.log(null_val);

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3 true
console.log(4 > 3);
// 4 >= 3 true
console.log(4 >= 3);
// 4 < 3 false
console.log(4 < 3);
// 4 <= 3 false
console.log(4 <= 3);
// 4 == 4 true
console.log(4 == 4);
// 4 === 4 true
console.log(4 === 4);
// 4 != 4 false
console.log(4 != 4);
// 4 !== 4 false
console.log(4 !== 4);
// 4 != '4' false
console.log(4 != "4");
// 4 == '4' true
console.log(4 == "4");
// 4 === '4' false
console.log(4 === "4");
// Find the length of python and jargon and make a falsy comparison statement.
let python = "python";
let jargon = "jargon";
console.log(python.length == jargon.length);

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12 true
console.log(4 > 3 && 10 < 12);
// 4 > 3 && 10 > 12 false
console.log(4 > 3 && 10 > 12);
// 4 > 3 || 10 < 12 true
console.log(4 > 3 || 10 < 12);
// 4 > 3 || 10 > 12 true
console.log(4 > 3 || 10 > 12);
// !(4 > 3) false
console.log(!(4 > 3));
// !(4 < 3) true
console.log(!(4 < 3));
// !(false) false
console.log(!false);
// !(4 > 3 && 10 < 12) false
console.log(!(4 > 3 && 10 < 12));
// !(4 > 3 && 10 > 12) true
console.log(!(4 > 3 && 10 > 12));
// !(4 === '4') true
console.log(!(4 === "4"));
// There is no 'on' in both dragon and python
let dragon = "dragon";
let python_1 = "python";
console.log(!(dragon.includes("on") == python_1.includes("on")));

// 7. Use the Date object to do the following activities

let date = new Date();

// What is the year today?
console.log(date.getFullYear());
// What is the month today as a number?
console.log(date.getMonth() + 1);
// What is the date today?
console.log(date.getDate());
// What is the day today as a number?
console.log(date.getDay());
// What is the hours now?
console.log(date.getHours());
// What is the minutes now?
console.log(date.getMinutes());
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(date.getTime());

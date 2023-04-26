const countries = [
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

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 10);
// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop

let i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

let j = 10;
do {
  console.log(j);
  j--;
} while (j >= 0);

// 3. Iterate 0 to n using for loop

let n = 100;
let i = 0;

while (i <= n) {
  console.log(i);
  i++;
}
// 4. Write a loop that makes the following pattern using console.log():

let symbol = "#";
let row = "";
let i = 1;

while (i <= 7) {
  row += symbol;
  console.log(row);
  i++;
}

// #
// ##
// ###
// ####
// #####
// ######
// #######

// 5. Use loop to print the following pattern:

let n = 10;

for (i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

// 6. Using loop print the following pattern

let n = 10;
console.log("i    i^2    i^3");
for (i = 0; i <= 10; i++) {
  console.log(`${i}    ${i * i}      ${i * i * i}`);
}

// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000

// 7. Use for loop to iterate from 0 to 100 and print only even numbers

let n = 100;
for (i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  } else {
    continue;
  }
}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers

let n = 100;
for (i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  } else {
    continue;
  }
}

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers

let n = 100;
for (i = 2; i <= 100; i++) {
  if (i === 2 || i === 3 || i === 5 || i === 7) {
    console.log(i);
  } else if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
    console.log(i);
  } else {
    continue;
  }
}

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let n = 100;
let sum = 0;
for (i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// The sum of all numbers from 0 to 100 is 5050.

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
//The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

let n = 100;
let sum_odd = 0;
let sum_even = 0;
let arr = [];
for (i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sum_even += i;
  } else {
    sum_odd += i;
  }
}
console.log(sum_odd);
console.log(sum_even);
arr.push(sum_odd);
arr.push(sum_even);
console.log(arr);
// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

let n = 100;
let sum_odd = 0;
let sum_even = 0;
let arr = [];
for (i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sum_even += i;
  } else {
    sum_odd += i;
  }
}
console.log(sum_odd);
console.log(sum_even);
arr.push(sum_odd);
arr.push(sum_even);
console.log(arr);
// [2550, 2500]

// 13. Develop a small script which generate array of 5 random numbers

let arr = [];
for (i = 0; i < 5; i++) {
  arr.push(Math.floor(Math.random() * 100));
}
console.log(arr);

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
let arr = [];
for (i = 0; i < 5; i++) {
  let num = Math.floor(Math.random() * 100);
  if (arr.includes(num)) {
    i--;
  } else {
    arr.push(num);
  }
}
console.log(arr);
// 15. Develop a small script which generate a six characters random id:
let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
let id = "";

for (i = 0; i <= 6; i++) {
  id += chars.charAt(Math.floor(Math.random() * chars.length));
}
console.log(id);
// 5j2khz

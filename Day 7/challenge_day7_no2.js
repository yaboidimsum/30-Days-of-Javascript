// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

const solveLinEquation = (a, b, c, z) => {
  let y = (c - a * z) / b;
  return y;
};

console.log(solveLinEquation(1, 2, 3, 4));

// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}

const solveQuadratic = (a, b, c) => {
  let x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
  let x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
  return [x1, x2];
};

console.log(solveQuadratic()); // {0}
console.log(solveQuadratic(1, 4, 4)); // {-2}
console.log(solveQuadratic(1, -1, -2)); // {2, -1}
console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
console.log(solveQuadratic(1, 0, -4)); //{2, -2}
console.log(solveQuadratic(1, -1, 0)); //{1, 0}

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

const printArray = (arr) => {
  for (elements of arr) {
    console.log(elements);
  }
};

printArray([1, 2, 3, 4, 5]);

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// showDateTime()
// 08/01/2020 04:08

const showDateTime = () => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minute = date.getMinutes();
  return `${day}/${month}/${year} ${hour}:${minute}`;
};

console.log(showDateTime());

// 5. Declare a function name swapValues. This function swaps value of x to y.
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

const swapValues = (x, y) => {
  let temp = x;
  let value_1 = y;
  let value_2 = temp;

  return `x = ${value_1}, y = ${value_2}`;
};

console.log(swapValues(3, 4));

// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']

const reverseArray = (arr) => {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};

console.log(reverseArray([1, 2, 3, 4, 5]));

// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

const capitalizeArray = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toUpperCase());
  }
  return newArr;
};

console.log(capitalizeArray(["a", "b", "c"]));
// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

const addItem = (item) => {
  let arr = ["a", "b", "c"];
  arr.push(item);
  return arr;
};

console.log(addItem("d"));

// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

const removeItem = (index) => {
  let arr = ["a", "b", "c"];
  arr.splice(index, 1);
  return arr;
};

console.log(removeItem(1));

// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

const sumOfNumbers = (...args) => {
  let sum = 0;
  for (elements of args) {
    sum = sum + elements;
  }
  return sum;
};

console.log(sumOfNumbers(1, 2, 3, 4, 5));

// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

const sumOfOdds = (...args) => {
  let sum = 0;
  for (elements of args) {
    if (elements % 2 !== 0) sum = sum + elements;
  }
  return sum;
};

console.log(sumOfOdds(1, 2, 3, 4, 5));

// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

const sumOfEvens = (...args) => {
  let sum = 0;
  for (elements of args) {
    if (elements % 2 === 0) sum = sum + elements;
  }
  return sum;
};

console.log(sumOfEvens(1, 2, 3, 4, 5));

// 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.

const evensAndOdds = (n) => {
  let evens = 0;
  let odds = 0;
  for (i = 0; i <= n; i++) {
    if (i % 2 === 0) evens++;
    else odds++;
  }
  return `The number of odds are ${odds}. The number of evens are ${evens}.`;
};

console.log(evensAndOdds(100));
// 14. Write a function which takes any number of arguments and return the sum of the arguments
// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10

const sumOfArgs = (...args) => {
  let sum = 0;
  for (elements of args) {
    sum = sum + elements;
  }
  return sum;
};

console.log(sumOfArgs(1, 2, 3, 4));

// 15. Write a function which generates a randomUserIp.

const randomUserIp = () => {
  let ip = "";
  for (let i = 0; i < 4; i++) {
    ip += Math.floor(Math.random() * 256) + ".";
  }
  return ip.slice(0, -1);
};

console.log(randomUserIp());

// 16. Write a function which generates a randomMacAddress

const randomMacAddress = () => {
  let mac = "";
  for (let i = 0; i < 6; i++) {
    mac += Math.floor(Math.random() * 256).toString(16) + ":"; // toString(16) converts the number to hexadecimal
  }
  return mac.slice(0, -1);
};

console.log(randomMacAddress());

// 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
// console.log(randomHexaNumberGenerator());
// '#ee33df'

const randomHexaNumberGenerator = () => {
  let hexa = "#";
  for (let i = 0; i < 6; i++) {
    hexa += Math.floor(Math.random() * 16).toString(16); // toString(16) converts the number to hexadecimal
  }
  return hexa;
};

console.log(randomHexaNumberGenerator());

// 18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
// console.log(userIdGenerator());
// 41XTDbE

const userIdGenerator = (...args) => {
  let id = "";
  for (let i = 0; i < 7; i++) {
    id += Math.floor(Math.random() * 16).toString(16); // toString(16) converts the number to hexadecimal
  }
  return id;
};

console.log(userIdGenerator());

// 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '

const userIdGenerator = () => {
  let userId = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < 15; i++) {
    userId += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return userId;
};

console.log(userIdGenerator());

// 2. Write a function name rgbColorGenerator and it generates rgb colors.
// rgbColorGenerator()
// rgb(125,244,255)

const rgbColorGenerator = () => {
  let rgb = [];
  for (let i = 0; i < 3; i++) {
    rgb.push(Math.floor(Math.random() * 255));
  }
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
};

console.log(rgbColorGenerator());

// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

const arrayOfHexaColors = () => {
  let hexa = [];
  for (let i = 0; i < 3; i++) {
    hexa.push(Math.floor(Math.random() * 255));
  }
  return `#${hexa[0].toString(16)}${hexa[1].toString(16)}${hexa[2].toString(
    16
  )}`;
};

console.log(arrayOfHexaColors());

// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.

const arrayOfRgbColors = () => {
  let rgb = [];
  for (i = 0; i < 3; i++) {
    rgb.push(Math.floor(Math.random() * 255));
  }
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
};

console.log(arrayOfRgbColors());

// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

const convertHexaToRgb = (hexa) => {
  let rgb = [];
  for (i = 0; i < 3; i++) {
    let hexValue = hexa.substring(i * 2, i * 2 + 2);
    rgb.push(parseInt(hexValue, 16));
  }
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
};

console.log(convertHexaToRgb("a3e12f"));

// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

const convertRgbToHexa = (rgb) => {
  let hexa = [];
  for (i = 0; i < 3; i++) {
    hexa.push(rgb[i].toString(16));
  }
  return `#${hexa[0]}${hexa[1]}${hexa[2]}`;
};

console.log(convertRgbToHexa([10, 20, 30]));

// 7. Write a function generateColors which can generate any number of hexa or rgb colors.
// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

const generateColors = (type, num) => {
  let colors = [];
  if (type === "hexa") {
    for (i = 0; i < num; i++) {
      colors.push(arrayOfHexaColors());
    }
  } else if (type === "rgb") {
    for (j = 0; j < num; j++) {
      for (i = 0; i < num; i++) {
        colors.push(arrayOfRgbColors());
      }
    }
  }
  return colors;
};

console.log(generateColors("hexa", 3));
console.log(generateColors("rgb", 3));

// 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

const shuffleArray = (arr) => {
  let shuffleArray = [];
  while (arr.length > 0) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    shuffleArray.push(arr[randomIndex]);
    arr.splice(randomIndex, 1);
  }
  return shuffleArray;
};

console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 2]));

// 9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

const factorial = (num) => {
  let factorial = 1;
  for (i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};

console.log(factorial(5));
// 10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not

const isEmpty = (...args) => {
  if (args.length === 0 || args === undefined || args === null) {
    return true;
  } else {
    return false;
  }
};

console.log(isEmpty("String"));

// 11. Call your function sum, it takes any number of arguments and it returns the sum.

const sum = (...args) => {
  let sum = 0;
  for (elements of args) {
    if (typeof elements === "number") {
      sum += elements;
    }
  }
  return sum;
};

console.log(sum(1, 2, 3, 4, 5, "golok"));

// 12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

const sumOfArrayItems = (arr) => {
  let sum = 0;
  for (elements of arr) {
    if (typeof elements === "number") {
      sum += elements;
    } else {
      return "All the array items are not number types";
    }
  }
  return sum;
};

console.log(sumOfArrayItems([1, 2, 3, 4, 5, "golok"]));

// 13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

const average = (arr) => {
  let sum = 0;
  // let number = [];
  for (elements of arr) {
    if (typeof elements === "number") {
      // number.push(elements);
      sum += elements;
    } else {
      return "All the array items are not number types";
    }
  }
  return sum / sum.length;
};

console.log(average([1, 2, 3, 4, 5, "golok"]));

// 14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'

const modifyArray = (arr) => {
  if (arr.length < 5) {
    return "item not found";
  } else {
    return arr;
  }
};

console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(
  modifyArray(["Google", "Facebook", "Apple", "Amazon", "Microsoft", "IBM"])
);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(["Google", "Facebook", "Apple", "Amazon"]));
// 'Not Found'

// 15. Write a function called isPrime, which checks if a number is prime number.

const isPrime = (num) => {
  if (num === 1) {
    return "1 is neither prime nor composite number.";
  } else if (num > 1) {
    for (i = 2; i < num; i++) {
      if (num % i === 0) {
        return `${num} is not a prime number`;
      }
    }
    return `${num} is a prime number`;
  } else {
    return `${num} is not a prime number`;
  }
};

console.log(isPrime(9));
// 16. Write a functions which checks if all items are unique in the array.

const isUnique = (arr) => {
  let unique = [];
  for (elements of arr) {
    if (unique.indexOf(elements) === -1) {
      unique.push(elements);
    } else {
      return false;
    }
  }
  return true;
};

console.log(isUnique([1, 2, 3, 4, 5, 6, 7, 8, 9, 2]));

// 17. Write a function which checks if all the items of the array are the same data type.

const isSameDataType = (arr) => {
  let dataType = typeof arr[0];
  for (elements of arr) {
    if (typeof elements !== dataType) {
      return false;
    }
  }
  return true;
};

console.log(isSameDataType([1, 2, 3, 4, 5, 6, 7, 8, 9, 2]));

// 18. JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

const isValidVariable = (variable) => {
  let valid = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
  if (valid.test(variable)) {
    return true;
  } else {
    return false;
  }
};

console.log(isValidVariable("%$&@!"));

// 19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]

const sevenRandomNumbers = () => {
  let random = [];
  while (random.length < 7) {
    let randomValue = Math.floor(Math.random() * 10);
    if (random.indexOf(randomValue) === -1) {
      random.push(randomValue);
    }
  }
  return random;
};

console.log(sevenRandomNumbers());
// 20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

const reverseCountries = (arr) => {
  let reverse = [];
  for (i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  return reverse;
};

countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
console.log(reverseCountries(countries));

// const array = [];
// console.log(array);

// const numbers = [1, 2, 3, 4, 5];
// const fruits = ["Banana", "Orange", "Lemon", "Mango"];
// const vegetables = ["Tomato", "Potato", "Carrot"];
// const animalProducts = ["Milk", "Meat", "Butter", "Yoghurt"];
// const webTechs = ["HTML", "CSS", "Typescript"];
// const countries = ["Finland", "Denmark", "Norway", "Indonesia"];

// //Print the array and its length
// //numbers
// console.log(`Numbers: ${numbers}`);
// console.log("Numbers:", ...numbers);
// console.log("Numbers:", numbers);
// console.log("Amount of Array:", numbers.length);

// //fruits
// console.log(`Fruits: ${fruits}`);
// console.log("Fruits:", ...fruits);
// console.log("Fruits:", fruits);
// console.log("Amount of Array:", fruits.length);

// //vegetables
// console.log(`Vegetables: ${vegetables}`);
// console.log("Vegetables:", ...vegetables);
// console.log("Vegetables:", vegetables);
// console.log("Amount of Array:", vegetables.length);

// //animalProducts
// console.log(`Products: ${animalProducts}`);
// console.log("Products:", ...animalProducts);
// console.log("Products:", animalProducts);
// console.log("Amount of Array:", animalProducts.length);

// //webTechs
// console.log(`Web Techs: ${webTechs}`);
// console.log("Web Techs:", ...webTechs);
// console.log("Web Techs:", webTechs);
// console.log("Amount of Array:", webTechs.length);

// //Countries
// console.log(`Countries: ${countries}`);
// console.log("Countres:", ...countries);
// console.log("Countries:", countries);
// console.log("Amount of Array:", countries.length);

// //Array can contains any data types
// const arr_1 = [
//   "Henlsinki",
//   200,
//   { city: "Jakarta", country: "Indonesia" },
//   { skills: ["HTML", "CSS", "JavaScript", "Python"] },
// ];

// console.log(`Value of arr_1: ${arr_1}`);
// console.log("Value of arr_1:", ...arr_1);
// console.log("Value of arr_1:", arr_1);

// //Array Concatenation
// const firstList = [1, 2, 3];
// const secondList = [4, 5, 6];
// const thirdList = firstList.concat(secondList);

// console.log(`Value of thirdList: ${thirdList}`); //[1, 2, 3, 4, 5, 6]

// const fruits = ["banana", "orange", "mango", "lemon"]; // array of fruits
// const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of vegetables
// const fruitsAndVegetables = fruits.concat(vegetables); // concatenate the two arrays

// console.log(fruitsAndVegetables);

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.indexOf(9));
// console.log(numbers.indexOf(4));
// console.log(numbers.indexOf(1));

// //Checking if an item exists in an array

// const fruits = ["banana", "orange", "mango", "lemon"];
// let index = fruits.indexOf("apple");

// index === -1
//   ? console.log("Fruit is not in the list")
//   : console.log("Fruit is in the list");

// if (index === -1) {
//   console.log("Fruit is not in the list");
// } else {
//   console.log("Fruit is in the list");
// }

// //Last Index Of Array ->lastIndexOf()
// const numbers = [1, 2, 3, 4, 5, 3, 1, 2];

// console.log(numbers.lastIndexOf(2)); // 7
// console.log(numbers.lastIndexOf(0)); // -1
// console.log(numbers.lastIndexOf(1)); //  6
// console.log(numbers.lastIndexOf(4)); //  3
// console.log(numbers.lastIndexOf(6)); // -1

// //Checking if an item exists in an array -> includes()

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.includes(9));
// console.log(numbers.includes(5));
// console.log(numbers.includes(0));

// //Convert an array to string -> toString()

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.toString()); // 1,2,3,4,5

// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
// console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.join()); // 1,2,3,4,5

// //Joining an array of strings -> join()

// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];

// console.log(names.join()); // Asabeneh,Mathias,Elias,Brook
// console.log(names.join("")); //AsabenehMathiasEliasBrook
// console.log(names.join(" ")); //Asabeneh Mathias Elias Brook
// console.log(names.join(", ")); //Asabeneh, Mathias, Elias, Brook
// console.log(names.join(" # ")); //Asabeneh # Mathias # Elias # Brook

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ]; // List of web technologies

// console.log(webTechs.join()); // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
// console.log(webTechs.join(" # ")); // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

// //Slice takes two parameters:starting and ending position. It doesn't include the ending position.
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.slice()); // -> it copies all  item
// console.log(numbers.slice(0)); // -> it copies all  item
// console.log(numbers.slice(0, numbers.length)); // it copies all  item
// console.log(numbers.slice(1, 4)); // -> [2,3,4] // it doesn't include the ending position

// //Splice takes three parameters: starting position, number of items to be removed, and items to be added.

// const numbers = [1, 2, 3, 4, 5];
// numbers.splice();
// console.log(numbers); // -> remove all items

// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(0, 1);
// console.log(numbers); // remove the first item

// const numbers = [1, 2, 3, 4, 5, 6];
// numbers.splice(3, 3, 7, 8, 9);
// console.log(numbers.splice(3, 3, 7, 8, 9)); // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items
// console.log(numbers); // -> [1, 2, 3, 7, 8, 9]

// //Removing an item from the beginning of an array -> shift()
// const numbers = [1, 2, 3, 4, 5];
// numbers.shift(); // -> remove one item from the beginning
// console.log(numbers); // -> [2,3,4,5]
// //adding an item to the beginning of an array -> unshift()'
// const numbers = [1, 2, 3, 4, 5];
// numbers.unshift(0); // -> add one item from the beginning
// console.log(numbers); // -> [0,1,2,3,4,5]

// //Reverse an array -> reverse()
// const numbers = [1, 2, 3, 4, 5];
// numbers.reverse(); // -> reverse array order
// console.log(numbers); // [5, 4, 3, 2, 1]

// numbers.reverse();
// console.log(numbers); // [1, 2, 3, 4, 5]

// //Sorting an array -> sort()
// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];

// webTechs.sort();
// console.log(webTechs); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

// webTechs.reverse(); // after sorting we can reverse it
// console.log(webTechs); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

// //array of arrays
// const firstNums = [1, 2, 3];
// const secondNums = [1, 4, 9];

// const arrayOfArray = [
//   [1, 2, 3],
//   [1, 2, 3],
// ];
// console.log(arrayOfArray[0]); // [1, 2, 3]

// const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
// const backEnd = ["Node", "Express", "MongoDB"];
// const fullStack = [frontEnd, backEnd];
// console.log(fullStack); // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
// console.log(fullStack.length); // 2
// console.log(fullStack[0]); // ["HTML", "CSS", "JS", "React", "Redux"]
// console.log(fullStack[1]); // ["Node", "Express", "MongoDB"]

//Call countries.js file
const countries = require("./countries.js");
const webTechs = require("./web_techs.js");

//Print countries array
console.log(countries);
console.log(webTechs);

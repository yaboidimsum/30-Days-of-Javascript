//if statement in JavaScript

let number = 3;
if (number > 0) {
  console.log("Number is positive");
}
//output: Number is positive
let isRaining = true;
if (isRaining) {
  console.log("You need a rain coat");
} else {
  console.log("You don't need a rain coat");
}
//output: You need a rain coat

let num = 69;
if (num > 0) {
  console.log("Number is positive");
} else {
  console.log("Number is negative");
}
//output: Number is positive
let num_1 = -1;
if (num_1 > 0) {
  console.log("Number is positive");
} else {
  console.log("Number is negative");
}
//output: Number is negative

let num_2 = -1;
if (num_2 > 0) {
  console.log(`Number ${num_2} is positive`);
} else if (num_2 == 0) {
  console.log(`Number ${num_2} is zero`);
} else {
  console.log(`Number ${num_2} is negative`);
}

//output: Number -1 is negative

//switch statement in JavaScript

// let dayCondition = prompt("Enter the day");
// switch (dayCondition) {
//   case "Hot":
//     console.log("It's hot outside");
//     break;
//   case "Rainy":
//     console.log("It's rainy outside");
//     break;
//   case "Cold":
//     console.log("It's cold outside");
//     break;
//   default:
//     console.log("It's a nice day");
//     break;
// }
// //output: It's a nice day

//Terinary Operator in JavaScript
let weather = "sunny";
weather ? console.log("It's a nice day") : console.log("It's a bad day");
